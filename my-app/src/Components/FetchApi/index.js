// useeffect to get meme data
import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";

 export default function Meme() {
    const [meme, setMeme] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setallMemes] = useState([]) 
   
    useEffect(() => {
        async function fetchMyAPI(){
            let response = await fetch("https://api.imgflip.com/get_memes")
            let data = await response.json()
            let array = data.data.memes
            setallMemes(array)
            return array;
        }

        fetchMyAPI()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme({randomImage: url})
        
    }

    // create a function to get the value inside the input boxes (e.target.value)
    //create a useState and set the state to the information inputted
    //display text inside a p tag
    //position inputs and p tag 
    
    const [text, setText] = useState("")
    const[text2, setText2] = useState("")
    const [memeText, setMemeText] = useState([])

    function getFirstInput(e) {
        setText(e.target.value)
    }
    function getSecondInput(e) {
        setText2(e.target.value)
    }

    function handleClick(){
        setMemeText([...memeText, text])
    }

    return (
        <>
        <Button onClick={getMemeImage}/>
        <p>{text}</p>
        <p>{text2}</p>
        <button onClick={handleClick}>add text</button>
        <input onInput={getFirstInput} className="top-line" placeholder="Top Line"></input>
        <input onInput={getSecondInput} className="bottom-line" placeholder="Bottom Line"></input>
        <img className="image" src={meme.randomImage} alt={meme.name}/>
        </>
    )
 }