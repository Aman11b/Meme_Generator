import { useState } from "react"

export default function Main(){
    const [meme, setMeme] =useState({
        topText:'One does not simply',
        bottomText:'want into Kindslanding',
        imageUrl:'http://i.imgflip.com/1bij.jpg'
    })

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
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label>Bottom Text 
                    <input
                        type="text"
                        placeholder="walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme Image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}