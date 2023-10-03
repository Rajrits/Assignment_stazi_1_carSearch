import React,{useState} from 'react'
import Search from './Search';


export default function Header() {
  const [text,setText] = useState("");
  const handleOnChange = (e)=>{
    setText(e.target.value)
  }
  
  
  return (
    <>
    <div className='Head_container'>
      <div className="navbar">
        <div className="searchbar">
        <input type="search" name="search" onChange={handleOnChange} value={text} id="search" placeholder='Search' /><i className="fa-solid fa-magnifying-glass"></i>
    
        </div>
      </div>
    </div>
        <Search text = {text}/>
    </>
  )
}
