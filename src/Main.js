import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state={
      charSelection: {
				head: [{
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
				bodyWear: [{
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
				legWear: [{
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
				footWear: [{
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
				accessories: [{
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
  			}]
      }
    }
  }

  //props and state are character selections (temp variables too)
  // 5x handleClicks...one for each row (change temp variable)
  // componentDidMount to load props and update state
  // componentWillReceiveProps to load props and update state
  // return

  render() {
    console.log("This MAIN state is", this.state);
    return (
      <div className="mainWindow">
        <div>MAIN WINDOW</div>
          <div className="sliderAll">
            <div className="head">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
            	  <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
            </OwlCarousel>
            </div>
            <div className="bodyWear">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
            	  <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
            </OwlCarousel>
            </div>
            <div className="legWear">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
            	  <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
            </OwlCarousel>
            </div>
            <div className="footWear">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
            	  <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
            </OwlCarousel>
            </div>
            <div className="accessories">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
            	  <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
                <div className="item"><img src={require('./img/thor.jpg')} /></div>
            </OwlCarousel>
            </div>
          </div>
      </div>
    );
  }
}

export default Main;
