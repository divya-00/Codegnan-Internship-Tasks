import React, { useState } from 'react'
import axios from 'axios'

function Home() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function save(e){
        setUsername(e.target.value)
    }
    function show(){
      console.log(username,password)
        axios.post("https://backendformern-ex71.onrender.com/add",{name:username,passcode:password})
        .then((res)=>{
            console.log(res)
        })
        setUsername("")
        setPassword("")
    }
  return (
    <div>
      <p><input value={username} placeholder='Enter Name' onChange={save}/></p>
      <p><input value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/></p>
      <button onClick={show}>Submit</button>
    </div>
  )
}

export default Home