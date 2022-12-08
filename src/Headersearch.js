
import React, { useState } from "react";

const Headersearch = ({submithandler})=>{
const[inputvalue,setinput]=useState('')

const submitinput=(event)=>{
    event.preventDefault()
    submithandler(inputvalue)
}


const handleinput=(event)=>{
  setinput(event.target.value)
}

    return(
        <div>searchbar
            confirm your search:{inputvalue}
            <input  name="searchbar"  onChange={handleinput} value={inputvalue}/>
        <button onClick={submitinput}> oncliclick me</button>
        </div>
    )
}

export default Headersearch
