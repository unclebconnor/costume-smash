import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Search from './Search';
import './App.css';

import manEllipse from './img/manEllipse.png';
import manPants from './img/manPants.png';
import manFeet from './img/manFeet.png';
import manTorso from './img/manTorso.png';
import manLogo from './img/Logo.png';

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
				head: {size:manEllipse},
				bodyWear: {size:manTorso},
				legWear: {size:manPants},
				footWear: {size:manFeet},
				accessories: {size:manLogo},
			}
		}
		this.updateSelectedCharacter=this.updateSelectedCharacter.bind(this);
		this.updateUserSelection=this.updateUserSelection.bind(this);
	}

	//function list
	//####DONE#### get props from index and set state 
	//####DONE#### handle character selection -> on change from search
	//####DONE#### update character selection -> on submit from search
	//update user selection -> pass to sidebar as prop.  takes object from main w/updated keys.  
	//####DONE#### clear user selection -> pass to sidebar as props

	componentDidMount() {
		this.setState({
			items: this.props.items
		})
	}

	sortUpdateCharSelection(selectedCharacter){
		let filteredItems = [];
		let tempItems = this.state.items;
		let tempHead=[];
		let tempBody=[];
		let tempLegs=[];
		let tempFeet=[];
		let tempAccessories=[];

		for(let i = 0; i<tempItems.length; i++){
			if(tempItems[i].characterName===selectedCharacter){
				filteredItems.push(tempItems[i]);
			}
		}
		for(let i = 0; i<filteredItems.length; i++){
			if(filteredItems[i].bodySection==="head"){
				tempHead.push(filteredItems[i]);
			} else if(filteredItems[i].bodySection==="bodyWear"){
				tempBody.push(filteredItems[i]);
			} else if(filteredItems[i].bodySection==="legWear"){
				tempLegs.push(filteredItems[i]);
			} else if(filteredItems[i].bodySection==="footWear"){
				tempFeet.push(filteredItems[i]);
			} else if(filteredItems[i].bodySection==="accessories"){
				tempAccessories.push(filteredItems[i]);
			}
		}
		this.setState({
			charSelection: {
				head: tempHead,
				bodyWear: tempBody,
				legWear: tempLegs,
				footWear: tempFeet,
				accessories: tempAccessories,
			}
		});
	}

	updateUserSelection(e,item,bodySection){
		console.log(e,item,bodySection)
		var tempUserSelection = this.state.userSelection;
		if(bodySection==="head"){
			tempUserSelection.head=item;
		} else if(bodySection==="bodyWear"){
			tempUserSelection.bodyWear=item;
		} else if(bodySection==="legWear"){
			tempUserSelection.legWear=item;
		} else if(bodySection==="footWear"){
			tempUserSelection.footWear=item;
		} else if(bodySection==="accessories"){
			tempUserSelection.accessories=item;
		}
		this.setState({
			userSelection: {
				head: tempUserSelection.head,
				bodyWear: tempUserSelection.bodyWear,
				legWear: tempUserSelection.legWear,
				footWear: tempUserSelection.footWear,
				accessories: tempUserSelection.accessories,
			}
		})
		
	}

	updateSelectedCharacter(e, selectedCharacter){
		e.preventDefault();
		this.setState({
			selectedCharacter: selectedCharacter
		})
		this.sortUpdateCharSelection(selectedCharacter);
	}

	clearUserSelection(e){
		e.preventDefault();
		this.setState({
			userSelection: { //make default images dummy manequin
				head: {},
				bodyWear: {},
				legWear: {},
				footWear: {},
				accessories: {}
			}
		})
	}	

  	render() {
  		console.log("APP STATE", this.state)
  	  	return (
  	  	  	<div className="fullWindow">
  	  	  		<header>HEADER</header>
  	  	  		<div className="row navWrapper">
  	  	  			<nav className="col-xs-9">
  	  	  				<div>NAV BAR</div>
  	  	  			</nav>
  	  	  		<Search updateSelectedCharacter={this.updateSelectedCharacter}/>	
  	  	  		</div>
  	  	  		<div className="row">
  	  	  			<div className="col-xs-3 sidebarSection">
  	  	  				<div>
  	  	  					<button 
  	  	  						type="button"
  	  	  						className="btn btn-secondary"
  	  	  						onClick={(e) => this.clearUserSelection(e)}
  	  	  						>Clear Selection</button>
  	  	  				</div>
  	  	  				<Sidebar userSelection={this.state.userSelection}/>
  	  	  			</div>
  	  	  			<div className="col-xs-9 mainSection">
  	  	  				<Main 
  	  	  					charSelection={this.state.charSelection}
  	  	  					updateUserSelection={this.updateUserSelection}
  	  	  				/>
  	  	  			</div>
  	  	  		</div>
  	  	  	</div>
  	  	);
  	}
}

export default App;
