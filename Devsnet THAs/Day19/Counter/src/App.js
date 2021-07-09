import React, { Component } from "react";

class App extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.handleIncrement}>{this.state.count}</button>
      </>
    );
  }
}

export default App;