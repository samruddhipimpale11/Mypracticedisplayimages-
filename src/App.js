import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Headersearch from './Headersearch'
import searchimage from './API'
import Displayimage from './Dispalyimage'

function App() {

const [image,setimage]=useState([])

const handlesubmit=async(term)=>{
 const result=await searchimage(term)
 setimage(result)
console.log('term',image.data)
}

  return (
    <div className="App">
      <Headersearch submithandler={handlesubmit}/>
      <Displayimage image={image}/>
    </div>
  );
}

export default App;
