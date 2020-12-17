import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    displayedSushis: [],
    sushiIndex: 4,
    eatenSushis: [],
    money: 50
  }

  componentDidMount(){
    fetch(API).then(res => res.json())
    .then(menu => this.setState({
      sushis: menu,
      displayedSushis: menu.slice(0, 4)
    }))
  }

  moveConveyer = () => {
    
    let i = this.state.sushiIndex 
    let sushis = this.state.sushis

    i+4 > sushis.length ? this.setState(
            {displayedSushis: sushis.slice(0, 4),
              sushiIndex: 4
            }) 
            :
            this.setState(prevState => {
      return { displayedSushis: sushis.slice(i, (i+4)),
              sushiIndex: prevState.sushiIndex + 4
              }})
      
    }

  addMoney = (amount) => {
    this.setState(prevState => {
      return {
        money: prevState.money + parseInt(amount, 10)
      }
    })
  }

  eaten = (sushi) => {
    if (this.state.money >= sushi.price) {
      this.setState(prevState =>{
        return {eatenSushis: [...prevState.eatenSushis, sushi],
                money: prevState.money - sushi.price}
      })
    }
  }


  render() {
    console.log(this.state.eatenSushis)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.displayedSushis} next={this.moveConveyer} eaten={this.eaten} eatenSushis={this.state.eatenSushis} />
        <Table plates={this.state.eatenSushis} key={true} money={this.state.money}/>
        <Form addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;