import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			items:[{
				itemName:"Thor's Helmet",
				description: "This is a dope helmet",
				size: "XL",
				imageUrl: "img/thorsHelmet.jpg",
				price: 14.99,
				bodySection: "head",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			},{
				itemName:"Thor's Armor",
				description: "This is dope armor",
				size: "XL",
				imageUrl: "img/thorsArmor.jpg",
				price: 19.99,
				bodySection: "bodyWear",
				characterName: "Thor",
				amazonLink: "www.amazon.blah"
			}],
			selectedCharacter: "",
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
	//get props from index and set state
	//handle character selection -> on change from search
	//update character selection -> on submit from search
	//update user selection -> pass to main as prop.  takes object from main w/updated keys.  
	//clear user selection -> pass to sidebar as props


  	render() {
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
  	  	  						
  	  	  					/>
  	  	  					<span className="input-group-btn">
  	  	  						<button
  	  	  							className="btn btn-secondary"
  	  	  							type="button"
  	  	  							
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
