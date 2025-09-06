import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navigation from './components/Navigation'

class App extends React.Component{
  state={
    companyName:"VRSEC",
    studentName:"Divya Sri",
    studentNo:7
  }
  render(){
    return (
      <div>
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      {/* <br></br><br></br><br></br>
      <center><h1>Good Afternoon : )</h1>
      <p><big>The student belongs to {this.state.companyName}</big></p>
      <p><big>Student Name is {this.state.studentName}</big></p>
      <p><big>Number is  {this.state.studentNo}</big></p>
      <Demo name="Chitt  Noodles"/>
       <Demo name="Booji  Sugaru"/> 
      </center> */}
      </div>
    )
  }
}

export default App