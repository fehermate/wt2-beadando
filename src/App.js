import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Worker from "./components/Worker";
import Manager from "./components/Manager";

class App extends Component {
  render() {
    var width = {
      width: 1337,
      border: "solid black",
      margin: "auto"
    };

    return (
      <div className="App" style={width}>
        <Customer />
        <Worker />
        <Manager />
      </div>
    );
  }
}
//
export default App;
