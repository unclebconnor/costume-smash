import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			items:[],
			selectedCharacter: "",
			searchTemp:"",
			charSelection: {
				head: [{}],
				bodyWear: [{}],
				legWear: [{}],
				footWear: [{}],
				accessories: [{}],
			}, 
			userSelection: { //made default images dummy manequin
				head: {},
				bodyWear: {},
				legWear: {},
				footWear: {},
				accessories: {},
			}
		}
		//bind functions being passed as props
	}

	//function list
	//####DONE#### get props from index and set state 
	//####DONE#### handle character selection -> on change from search
	//####DONE#### update character selection -> on submit from search
	//update user selection -> pass to main as prop.  takes object from main w/updated keys.  
	//clear user selection -> pass to sidebar as props

	componentDidMount() {
		this.setState({
			items: this.props.items
		})
	}

	handleSearchInput(e){
		this.setState({
			searchTemp: e.target.value
		})
	}

	updateSelectedCharacter(e){
		e.preventDefault();
		this.setState({
			selectedCharacter: this.state.searchTemp,
			searchTemp:""
		})
	}

	

  	render() {
  		console.log("App.js State", this.state)
  	  	return (
  	  	  	<div className="fullWindow">
  	  	  		<header>HEADER</header>
  	  	  		<div className="row navWrapper">
  	  	  			<nav className="col-xs-9">
  	  	  				<div>NAV BAR</div>
  	  	  			</nav>
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
  	  	  		</div>
  	  	  		<div className="row">
  	  	  			<div className="col-xs-3 sidebarSection"><Sidebar /></div>
  	  	  			<div className="col-xs-9 mainSection"><Main /></div>
  	  	  		</div>
  	  	  	</div>
  	  	);
  	}
}

export default App;
