import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: true
    };
  }

  render() {
    let myCar;
    if (this.state.show) {
      myCar = <Car />;
    };

    return(
    <div>
      <h1>THIS IS NOT MY GARAGE</h1>
      {myCar}
    </div>
    )
  }
}

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      brand: " Ferrari ",
      model: " F430 ",
      color: " red ",
      year: " 2020 "
    };
  }

  changeColor = () => {
    this.setState({ color: "blue" })
  }

  render() {
    return(
      <div>
        <p>
          This is a {this.state.year}
          {this.state.color}
          {this.state.brand}
          {this.state.model}
        </p>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    
    );
  }
}

export default App;
