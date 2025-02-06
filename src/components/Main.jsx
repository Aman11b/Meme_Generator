import { useState, useEffect} from "react"

export default function Main(){
    const [meme, setMeme] =useState({
        topText:'One does not simply',
        bottomText:'went into Kindslanding',
        imageUrl:'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes,setAllMemes]=useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setAllMemes(data.data.memes))
    },[])

    function getMemeImage(){
        const randomNumber=Math.floor(Math.random()* allMemes.length)
        const newMemeUrl=allMemes[randomNumber].url 
        setMeme(prevMene =>({
            ...prevMene,
            imageUrl: newMemeUrl
        }))
    }

    // in useEffect you cant make it async function
    function handleChange(event){
        const {value,name}=event.currentTarget 
        setMeme(prevMene=>({
            ...prevMene,
            // topText: value,
            // bottomText: value error use name value to specify which value you want to update
            [name]:value
        }))
    }

    return(
        <main>
            <div className="form">
                <label>Top Text 
                    <input
                        type="text"
                        placeholder="Type the Top Text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label>Bottom Text 
                    <input
                        type="text"
                        placeholder="Type the bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme Images</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}