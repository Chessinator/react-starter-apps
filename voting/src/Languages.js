import React, { Component } from "react";
import Element from "./Element";

export default class Languages extends Component {

    /*componentDidMount(){
        console.log("im here LANGUAGES")
    }*/

    incrementCount = (language) => {
        console.log("ive been clicked", language)
        var tmpState = this.state.languages;
        tmpState.map(lang => {
            if(lang.name === language.name){
                lang.voteCount += 1
            }
            
        });
        console.log(tmpState)
        this.setState({languages: tmpState})
        
        
        
    }

    state = {
        languages:
            [
                { name: "Javascript", voteCount: 0 },
                { name: "Python", voteCount: 0 },
                { name: "Go", voteCount: 0 },
                { name: "Java", voteCount: 0 },
                { name: "Typescript", voteCount: 0 },
                { name: "Ruby", voteCount: 0 },
                { name: "Elixir", voteCount: 0 }

            ]
    }

    render() {

        return (
            <div className="list-group">
                <div className="languages">
                    <div className="languages">

                        {this.state.languages.map(language => <Element language={language} incrementCount={this.incrementCount}/>  )}
                        
                        
                        
                    </div>
                </div>
            </div>
        )







    }




}