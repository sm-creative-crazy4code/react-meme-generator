import React from 'react'
import MemesData from '../MemesData'
export default function MemeImage() {
  
  // const [Yes,setYes]=React.useState("Yes")
  // console.log(Yes)
  

  // //   if(Yes==="Yes"z){
  // //   setYes("No");}
  // //   else{setYes("Yes")}

// const[things,setThings]=React.useState(["thing1","thing2"])

// const newThings=things.map((thing)=>{
//   return <p>{thing}</p>
// })

const[meme,setMeme]= React.useState({
  toptext:"",
  bottomText:"",
  url:"",
}

);

const [allMemesImages,setAllMemesImages]=React.useState(MemesData)



  

  // const[url,setUrl]=React.useState("")

  function handelClick(){
    const Memearray=allMemesImages.data.memes;
    const ransNum=Math.floor(Math.random()* Memearray.length)
    setMeme((prevMeMe)=>{
     return {...prevMeMe, 
             url:Memearray[ransNum].url}
    })

    // setYes((value)=>{
    //  const newValue= value==="Yes"? "No":"Yes";
    //   return newValue;a     
    // })
    // setThings((prevThingArray)=>{
    // return [ ...prevThingArray,"newTHING"];
    // })


  }
return(
    <div>
    {/* //{newThings} */}
    <button className='btn_sm'onClick={handelClick} >Generate meme </button>
        <img src={meme.url} alt='' className='MemeImage'>

        </img>
    </div>
  )
}



// setContact((prevContact)=>{
//    return {...prevContact
//        isFavourite:!prevContact.isFavourite}})

// 
// const [count,setCount]=React.useState(props.number)
// 
// 
// 