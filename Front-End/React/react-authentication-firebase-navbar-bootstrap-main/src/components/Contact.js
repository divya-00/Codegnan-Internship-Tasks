import React, { Component } from 'react'
import axios from 'axios'

class Contact extends Component {
  state={
    users:[]
  }
  componentDidMount(){
    axios.get("https://backendformern-ex71.onrender.com/retrieve")
    .then((res)=>{
      console.log(res.data)
      this.setState({
        users:res.data
      })
    })
  }
  render() {
    return (
      <div>
        Contact
        <h4>
          {this.state.users.map((product)=>(
            <div key={product._id}>
              <p>{product.name}</p>
              <p>{product.passcode}</p>
            </div>
        ))
        }
        </h4>
      </div>
    )
  }
}

export default Contact