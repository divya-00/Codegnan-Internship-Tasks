import React from "react";
class Demo extends React.Component{
    state={
        name:"ReactJS",
        value:12345,
        dummy:false
    }
    display=()=>{
        var s="Hii Booji sugar"
        alert(s)
    }
    // show=()=>{
    //     this.setState({
    //         name:"Angular",
    //         value:67890
    //     })
    // }
    show=()=>{
    if(this.state.dummy===false){
        this.setState({
            name:"Angular",
            value:67890,
            dummy:true
        })
    }
    else{
        this.setState({
            name:"ReactJs",
            value:12345,
            dummy:false
        })
    }
    }
    render(){
        console.log(this.props)
        return(
        <div>
            <h1>Name is {this.state.name} value is {this.state.value}</h1>
            <h1>Hiii {this.props.name}</h1>
            <button onClick={this.display}>Click</button><br></br>
            <button onClick={this.show}>Change</button>
        </div>
        )
    }
}
export default Demo