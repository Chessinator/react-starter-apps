import React, { Component } from "react";


export default class Element extends Component {

    state = {}

    /*componentDidMount() {
        console.log("im here")
    }*/

   clickHander = (e) =>{
    e.preventDefault();
    this.props.incrementCount(this.props.language)
   }

    render() {
        console.log(this.props)      
        return (
            
            <div className="language">
                <div className="">{this.props.language.voteCount}</div>
                <div className="">{this.props.language.name}</div>
                <div className=""><button onClick={this.clickHander}>vote</button></div>
            </div>              
        )
    }


}