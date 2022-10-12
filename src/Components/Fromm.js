import React from 'react'
// import MemeImage from './MemeImage';
import MemesData from '../MemesData'

export default function Fromm() {

  
  
  
  // function handelClick(){
  //   const Memearray=allMemesImages.data.memes;
  //   const ransNum=Math.floor(Math.random()* Memearray.length)
  //   setMeme((prevMeMe)=>{
  //    return {...prevMeMe, 
  //            url:Memearray[ransNum].url}
  //   })
  // }







  const[meme,setMeme]= React.useState({
    toptext:"",
    bottomText:"",
    url:"",
  }
  
  );
  // react.use stae returns an array..which first is undefines and second is a function
  // the undefined value is like the initial state which we are defining and then we can use the function to modify it later
  // hence we can use arrray destructuring to get the values out of use state
  
  // const [Yes,setYes]=React.useState(0)
  // console.log(Yes)
  
  //  setYes((value)=>{
  //    return value+1})
  // //   if(Yes==="Yes"){
  // //   setYes("No");}
  // //   else{setYes("Yes")}
  
  
  

  // in the below lines of code though it works properly but w ecan see it violates DRY principl and hence
  // as the input size increases we may face problems
  // hence we willl pass all input parameters as objects to our variable form data
// 

// const[firstName,setFirstName]=React.useState("")
  // const[lastName,setLastName]=React.useState("")
// function handleChange(event){
//   // console.log(event)
//   // event.target gives the html element that is responsible for targetting the event
//   // event.target.value will give actually what we are giving ads input to the form
//   setFirstName(()=>{
//  return event.target.value})
//   console.log("change")
// }
// function handelLastName(event){
// setLastName(event.target.value)
// }

const [formData,setFormData]=React.useState({
  toptext:"Toptext",
  bottomtext:"bottomtext",
  email:"",
  comments:"",
  ok:true,
  mood:"",
  favmood:""
});



function handleChange(event){
  setFormData((prevData)=>{
  const {name,value,type,checked} =event.target
    return {...prevData,
              [name]:type==="checkbox"?checked:value}
  })
  console.log(formData)
}

// function handelsubmit(event){
//   event.preventDefault();
//   console.log(formData)
  
// }
const [allMemesImages,setAllMemesImages]=React.useState(MemesData)
const[memeText,setMemeText]=React.useState({
  toptext:"texttop",
  bottomtext:" bottomtext",

})



  

  // const[url,setUrl]=React.useState("")

  function handelClick(){
    const Memearray=allMemesImages.data.memes;
    const ransNum=Math.floor(Math.random()* Memearray.length)
    setMeme((prevMeMe)=>{
     return {...prevMeMe, 
             url:Memearray[ransNum].url}

    })
    setMemeText((prevText)=>{
      return({
        ...prevText,
        toptext:formData.toptext,
        bottomtext:formData.bottomtext
      })


    })
    // setAllMemesImages(()=>{


    // })
  
  
  }






// controlled components in react
// react state must  derive the state that is visisble inside input box
// hence we add value poperty to each of our inputs





console.log(formData)
   

  return (
     
    <div>
 

  <div className="row my-5">
    <div className="col">
  

      <input type="text" className="form-control mx-3" placeholder="Enter Meme text" name="toptext"  value={formData.toptext}     onChange={handleChange}/>
    </div>
    <div className="col">
      <input type="text" className="form-control mx-1" placeholder="Enter Final text"   name='bottomtext'  value={formData.bottomtext}    onChange={handleChange}/>
    </div>
    {/* <div style={{display:"block"}}><input type="email" className="form-control" placeholder='email' name="email" value={formData.email} onChange={handleChange} />
    <textarea placeholder="comments" name="comments" value={formData.comments} onChange={handleChange} />
    


      rendering the check box ===> checking the checked property 
    <input type="checkbox" name="ok" checked={formData.ok} onChange={handleChange}   id="ok"/>
    <label htmlFor='ok'>Are u ok?</label>
    <h3>current happiness state</h3>
    <input type="radio" id="happy" name="mood" value="happy" onChange={handleChange}  checked={formData.mood==="happy"}/>



    <label htmlFor='happy'>Happy</label>
    <input type="radio" id="sad" name="mood" value="sad" onChange={handleChange}  checked={formData.mood==="sad"}/>
    <label htmlFor='sad'>Sad</label>
    <input type="radio" id="neutral" name="mood" value="neutral" onChange={handleChange} checked={formData.mood==="neutral"}/>
    <label htmlFor='neutral'>Neutralss</label> */}

    {/* renderion select box */}
    {/* <label htmlFor='favMood '>Whats is your favourite mood</label>
    <select id='favMood' name="favmood" onChange={handleChange}>
    <option value="happy" >Happy</option>
    <option value="sad" >Sad</option>
    <option value="neutral" >Neutral</option>
   
   
     
    </select>

    <button type='submit' onSubmit={handelsubmit}>submit</button>


    </div> */}
  


    </div>
    {/* //{newThings} */}
    <button className='btn_sm'onClick={handelClick} >Generate meme </button>
    
    <div className='Meme'>
        <img src={meme.url} alt='' className='MemeImage' >
</img>
        <div className='Toptext'>{formData.toptext}</div>
        <div className='Bottomtext'>{formData.bottomtext}</div>
    </div>



  {/* <MemeImage/> */}

    </div>
  )
}
