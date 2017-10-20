import React, { Component } from 'react';
import './App.css';

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

  componentWillReceiveProps() {
    this.setState({
      userSelection: this.props.userSelection
    })
  }

  render() {
    console.log("SIDEBAR STATE",this.state)
    console.log("SIDEBAR PROPS",this.props)
   	return (
   	  	<div className="sideBarWindow">
   	  		<div>SIDEBAR WINDOW</div>
   	  		<div ><img className="img-responsive" src={require('./img/thorHelmet.png')} alt="" /></div>
   	  	</div>
   	);
  }
}

export default Sidebar;
