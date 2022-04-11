import React, { useEffect, useState } from 'react'



const MainComponent = () => {


  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json())
    .then(data=>setAllMemesImage(data.data.memes))
  },[])
  
  const [meme, setMeme] = useState({
    topText:'',
    bottomText:'',
    randomImage:"https://i.imgflip.com/1bij.jpg"})
  

 const [allMemesImage,setAllMemesImage]= useState()



 function handleChange(event){
   event.preventDefault()
   const {name,value}=event.target
   setMeme(prevMeme=>(
     {...prevMeme,
      [name]:value
    
    }
   ))

 }
  function handleClick(){
    let randomNumber = Math.floor(Math.random() * allMemesImage.length)
    let url = allMemesImage[randomNumber].url
    setMeme(prevMeme=>({
      ...prevMeme,
      randomImage:url
    }))

    
  }

   

  return (
    <div className='mainComponent'>
        <div className='input'>
            <input onChange={handleChange} value={meme.topText} name='topText' placeholder='Top text' type="text" />
            <input onChange={handleChange} value={meme.bottomText} name='bottomText' placeholder='Bottom text' type="text" />
        </div>
        <button onClick={handleClick}>Get a new meme image</button>
        <div className='meme'>
        <img src={meme.randomImage} alt="" srcSet="" />
        <h2 className='topText'>{meme.topText}</h2>
        <h2 className='bottomText'>{meme.bottomText}</h2>
        </div>
        
        
        

    </div>
  )
}

export default MainComponent