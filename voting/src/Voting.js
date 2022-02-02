import React,{Component} from 'react';
import './App.css';
import Languages from './Languages';

class Voting extends Component{
	constructor(props){
		super(props);
		 
	}

	render(){
		return(
			<div> 
				<h1>Welcome to the Voting app</h1>
				<Languages />
			</div>
			
		);
	}
}
export default Voting;