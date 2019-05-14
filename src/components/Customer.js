import React, { Component } from "react";
import CounterActions from "../counter/CounterActions";
import CounterDisplay from "../components/CounterDisplay";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      telNumber: "",
      postalCode: "",
      city: "",
      street: "",
      windowHeight: "",
      windowWidth: "",
      material: "plastic",
      automatedShutter: "no",
      color: "White",
      shutters: [],
      numberOfShutters: "",
      subTotal: "",
      subTotalArray: [],
      finalPrice: ""
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    //this.calculateSubTotal = this.calculateSubTotal.bind(this);
    //this.calculateFinalPrice = this.calculateFinalPrice.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addToOrder() {
    var subT = this.calculateSubTotal();
    var newOrder = {
      windowHeight: this.state.windowHeight,
      windowWidth: this.state.windowWidth,
      material: this.state.material,
      automatedShutter: this.state.automatedShutter,
      color: this.state.color,
      subTotal: subT
    };

    this.state.shutters.push(newOrder);
    alert("Successfully added shutter to cart!");
    console.log(this.state.shutters);
    var noOfShutters = this.state.shutters.length;
    this.setState({ numberOfShutters: noOfShutters });
    //this.calculateSubTotal();
    this.calculateFinalPrice();
  }

  calculateSubTotal() {
    var basePrice = this.state.windowHeight * this.state.windowWidth;
    var materialMultiplier = 1;
    if (this.state.material === "steel") {
      materialMultiplier = 1.5;
    } else if (this.state.material === "titanium") {
      materialMultiplier = 100;
    }
    var automationMultiplier = 1;
    if (this.state.automatedShutter === "yes") {
      automationMultiplier = 2;
    }

    var taxMultiplier = 1.27;
    this.state.subTotalArray.push(
      basePrice * materialMultiplier * automationMultiplier * taxMultiplier
    );
    //console.log(this.state.subTotal);
    return (
      basePrice * materialMultiplier * automationMultiplier * taxMultiplier
    );
  }

  calculateFinalPrice() {
    //console.log(this.state.numberOfShutters);
    //var noOfShutters = this.state.numberOfShutters;
    var sum = 0;
    for (let i = 0; i < this.state.subTotalArray.length; i++) {
      sum += this.state.subTotalArray[i];
    }
    if (this.state.subTotalArray.length !== 0) {
      return <div>Total: {sum}</div>;
    } else return <div>Your shopping cart is empty!</div>;
  }

  render() {
    var lightBG = { background: "#FBEEC1", border: "solid black" };
    var darkBG = { background: "#ADADAD", border: "solid black" };

    return (
      <div sytle={{ width: 1000 }}>
        <div style={lightBG}>
          <h1>Customer</h1>
          <form>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label>Telephone Number:</label>
            <input
              type="number"
              name="telNumber"
              value={this.state.telNumber}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div style={darkBG}>
          <form>
            <label>Postal Code:</label>
            <input
              type="Postal"
              name="postalCode"
              value={this.state.postalCode}
              onChange={this.handleChange}
            />
            <label>City:</label>
            <input
              type="textarea"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />

            <label>Street:</label>
            <input
              type="textarea"
              name="street"
              value={this.state.street}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div style={lightBG}>
          <form>
            <label>Window Height:</label>
            <input
              type="number"
              name="windowHeight"
              value={this.state.windowHeight}
              onChange={this.handleChange}
            />
            <label>Window Width:</label>
            <input
              type="number"
              name="windowWidth"
              value={this.state.windowWidth}
              onChange={this.handleChange}
            />
            <label>Material:</label>
            <select
              name="material"
              value={this.state.material}
              onChange={this.handleChange}
            >
              <option value="plastic">Plastic</option>
              <option value="steel">Steel</option>
              <option value="titanium">Titanium</option>
            </select>
            <label>Automatation Required:</label>
            <select
              name="automatedShutter"
              value={this.state.automatedShutter}
              onChange={this.handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <label>Color:</label>
            <select
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            >
              <option value="Black">Black</option>
              <option value="Gray">Gray</option>
              <option value="White">White</option>
            </select>
          </form>

          <button onClick={this.addToOrder}>Add to Cart</button>
        </div>
        <div className="shoppingCart" style={darkBG}>
          {this.state.shutters.map(shutter => (
            <div>
              <div className="row">
                <button
                  className="btn btn-primary"
                  onClick={() => CounterActions.increment()}
                >
                  +
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => CounterActions.decrement()}
                >
                  -
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => CounterActions.reset()}
                >
                  Reset
                </button>
              </div>
              <CounterDisplay />
              {console.log(CounterDisplay._counter)}
              <p>
                {shutter.color} colored ,{shutter.material}{" "}
                {shutter.windowHeight} cm X {shutter.windowWidth} cm sized
                shutter.
                {shutter.automatedShutter === "yes" ? (
                  <p>Automation needed.</p>
                ) : (
                  <p>Automation not needed.</p>
                )}
              </p>
              SubTotal: {shutter.subTotal}
            </div>
          ))}
          {this.calculateFinalPrice()}
        </div>
      </div>
    );
  }
}

export default Customer;
