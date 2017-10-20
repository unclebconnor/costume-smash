import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state={
      charSelection: {
        head: [{}],
				bodyWear: [{}],
				legWear: [{}],
				footWear: [{}],
				accessories: [{}],
      }
    }
  }

  componentDidMount() {
    this.setState({
      charSelection: this.props.charSelection
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      charSelection: newProps.charSelection

    })
  }
  //props and state are character selections (temp variables too)
  // 5x handleClicks...one for each row (change temp variable)
  // componentDidMount to load props and update state
  // componentWillReceiveProps to load props and update state
  // return

  render() {
    console.log("MAIN STATE", this.state);
    return (
      <div className="mainWindow">
        <div>MAIN WINDOW</div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme headWear" loop margin={10}>
            {this.state.charSelection.head.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src={item.size} onClick={(e) => this.props.updateUserSelection(e,item,"head")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme headWear" loop margin={10}>
            {this.state.charSelection.bodyWear.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src={item.size} onClick={(e) => this.props.updateUserSelection(e,item,"bodyWear")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme headWear" loop margin={10}>
            {this.state.charSelection.legWear.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src={item.size} onClick={(e) => this.props.updateUserSelection(e,item,"legWear")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme headWear" loop margin={10}>
            {this.state.charSelection.footWear.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src={item.size} onClick={(e) => this.props.updateUserSelection(e,item,"footWear")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme headWear" loop margin={10}>
            {this.state.charSelection.accessories.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src={item.size} onClick={(e) => this.props.updateUserSelection(e,item,"accessories")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
      </div>

    );
  }
}


export default Main;
