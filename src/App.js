import React, { Component } from "react";

import "./App.css";
import QueueCounter from "./QueueCounter";
import Beers from "./Beers";
import Bartenders from "./Bartenders";
import Taps from "./Taps";

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
    }, 8000);
  }
  render() {
    return (
      <div className="App">
        <QueueCounter queue={this.state.bar.queue} />
        <Bartenders bartenders={this.state.bar.bartenders}/>
        <Beers beers={this.state.bar.beertypes}/>
        <Taps taps={this.state.bar.taps}/>
      </div>
    );
  }
}

export default App;
