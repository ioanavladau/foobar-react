import React, { Component } from "react";

import "./App.css";
import QueueCounter from "./QueueCounter";
const FooBar = window.FooBar;
class App extends Component {
  /**/
  state = {
    bar: JSON.parse(FooBar.getData())
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        bar: JSON.parse(FooBar.getData())
      });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <QueueCounter queue={this.state.bar.queue} />
      </div>
    );
  }
}

export default App;
