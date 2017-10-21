import React, { Component } from 'react';
import './App.css';


// import manEllipse from './img/manEllipse.png';
// import manPants from './img/manPants.png';
// import manFeet from './img/manFeet.png';
// import manTorso from './img/manTorso.png';
// import manLogo from './img/Logo.png';


class Sidebar extends Component {
	constructor(props) {
		super(props);
    this.state = {
		  userSelection: { //make default images dummy manequin
        head: {},
        bodyWear: {},
        legWear: {},
        footWear: {},
        accessories: {}
      }
    }
	}

	// props and state are user selection
	// componentDidMount to load props and update state
  	// componentWillReceiveProps to load props and update state
  	// return 5 divs, one for each body section

  componentDidMount() {
    this.setState({
      userSelection: this.props.userSelection
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      userSelection: newProps.userSelection
    })
  }

  render() {
    console.log("SIDEBAR STATE",this.state)

   	return (
   	  	<div className="sideBarWindow">
   	  		<div className="mannequinBackground">
            <div className="carouselRow col-xs-12">
              <img className="img-responsive" src={this.state.userSelection.head.size} alt="" />
            </div>
            <div className="carouselRow col-xs-12">
              <img className="img-responsive" src={this.state.userSelection.bodyWear.size} alt="" />
            </div>
            <div className="carouselRow col-xs-12">
              <img className="img-responsive" src={this.state.userSelection.legWear.size} alt="" />
            </div>
            <div className="carouselRow col-xs-12">
              <img className="img-responsive" src={this.state.userSelection.footWear.size} alt="" />
            </div>
            <div className="carouselRow col-xs-12">
              <img className="img-responsive" src={this.state.userSelection.accessories.size} alt="" />
            </div>
          </div>
   	  	</div>
   	);
  }
}

export default Sidebar;
