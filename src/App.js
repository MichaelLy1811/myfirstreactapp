import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: true
    };
  }

  deleteCar = () => {
    this.setState({ show: false });
  }

  render() {
    let myCar;

    if (this.state.show) {
      myCar = <Car />;
    };

    return(
    <div>
      <h1>My Garage</h1>
      {myCar}
      <button type="button" onClick={this.deleteCar}>Delete Car</button>
    </div>
    )
  }
}

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      brand: " Lamborghini ",
      model: " LP 560-4 ",
      color: " yellow ",
      year: " 2018 "
    };
  }

  render() {
    return(
    <p>
      This is a {this.state.year}
      {this.state.color}
      {this.state.brand}
      {this.state.model}
    </p>
    );
  }
}

export default App;
