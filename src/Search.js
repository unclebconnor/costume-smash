import React, { Component } from 'react';
import './App.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state={
			selectedCharacter: "",
			searchTemp:"",
		}
	}

	handleSearchInput(e){
		this.setState({
			searchTemp: e.target.value
		})
	}

	updateSelectedCharacter(e){
		e.preventDefault();
		this.props.updateSelectedCharacter(e,this.state.searchTemp)
		this.setState({
			searchTemp:""
			
		})
	}

  	render() {
  		console.log("SEARCH STATE", this.state)
  	  	return (
  	  	  	<form className="col-xs-3 pull-right">
  	  	  		<div className="input-group">
  	  	  			<input
  	  	  				className="form-control"
  	  	  				placeholder="Enter Character"
  	  	  				type="text"
  	  	  				onChange={(e) => this.handleSearchInput(e)}
  	  	  			/>
  	  	  			<span className="input-group-btn">
  	  	  				<button
  	  	  					className="btn btn-secondary"
  	  	  					type="button"
  	  	  					onClick={(e) => this.updateSelectedCharacter(e)}
  	  	  				>Submit</button>
  	  	  				</span>
  	  	  		</div>
  	  	  	</form>
  	  	);
  	}
}

export default Search;
