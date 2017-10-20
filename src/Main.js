import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state={
      charSelection: {

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
                  <img src="{require({item.imageUrl})}" onClick={(e) => this.props.updateUserSelection(e,{item},"head")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme bodyWear" loop margin={10}>
            {this.state.charSelection.head.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src="{require({item.imageUrl})}" onClick={(e) => this.props.updateUserSelection(e,{item},"head")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme legWear" loop margin={10}>
            {this.state.charSelection.head.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src="{require({item.imageUrl})}" onClick={(e) => this.props.updateUserSelection(e,{item},"head")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme footWear" loop margin={10}>
            {this.state.charSelection.head.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src="{require({item.imageUrl})}" onClick={(e) => this.props.updateUserSelection(e,{item},"head")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>
          <div className="carouselRow">
          <OwlCarousel className="owl-theme accessories" loop margin={10}>
            {this.state.charSelection.head.map((item,index) => {
              return (
                <div className="item img-responsive carouselImg" key={index}>
                  <img src="{require({item.imageUrl})}" onClick={(e) => this.props.updateUserSelection(e,{item},"head")}/>
                </div>
              )
            })}
          </OwlCarousel>
          </div>


              {/* <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
          </OwlCarousel>
        </div>
          <OwlCarousel className="owl-theme bodyWear" loop margin={10}>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
          </OwlCarousel>
          <OwlCarousel className="owl-theme legWear" loop margin={10}>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
          </OwlCarousel>
          <OwlCarousel className="owl-theme footWear" loop margin={10}>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
          </OwlCarousel>
          <OwlCarousel className="owl-theme accessories" loop margin={10}>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
              <div className="item img-responsive carouselImg"><img src={require('./img/thorHelmet.png')} alt="" /> </div>
          </OwlCarousel> */}
      </div>
    );
  }
}

export default Main;
