import React, { Component } from "react";

const orderDetails = {
  username: "asd",
  name: "yes",
  telNumber: "123",
  postalCode: "1223",
  city: "Eger",
  street: "Str 123",
  windowHeight: "100",
  windowWidth: "100",
  material: "plastic",
  automatedShutter: "no",
  color: "White",
  shutters: [
    {
      windowHeight: "100",
      windowWidth: "100",
      material: "plastic",
      automatedShutter: "no",
      color: "White",
      subTotal: "12000"
    }
  ],
  numberOfShutters: "1",
  subTotal: "12000",
  subTotalArray: ["12000"],
  finalPrice: "12000"
};

/*const jobs = [
  {
    jobID: "0",
    assembled: "true",
    details: {
      customer: orderDetails.username,
      shutters: orderDetails.shutters,
      allDetails: orderDetails,
      requiredParts: ["Pretty Plastic Parts"]
    }
  }
];*/

const jobs = [
  {
    jobID: "0",
    assembled: "true",
    details: {
      customer: orderDetails.username,
      shutters: orderDetails.shutters,
      allDetails: orderDetails,
      requiredParts: ["Pretty Plastic Parts"]
    }
  }
];

const jobID = "0";
const assembled = "true";

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paidFor: "false",
      assembled: "false",
      data: ""
    };
  }

  listOrders() {
    return (
      <div className="orders">
        <h1>Orders in system.</h1>
        Customer: {orderDetails.username}
        {orderDetails.shutters.map(shutter => (
          <div>
            <p>
              {shutter.color} colored ,{shutter.material} {shutter.windowHeight}{" "}
              cm X {shutter.windowWidth} cm sized shutter.
              {shutter.automatedShutter === "yes" ? (
                <p>Automation needed</p>
              ) : (
                <p>Automation not needed</p>
              )}
            </p>
            SubTotal: {shutter.subTotal}
          </div>
        ))}
      </div>
    );
  }

  listJobs() {
    //console.log(jobs.allJobs[0]);
    return (
      <div>
        <h1>Jobs in system</h1>
        <div>
          <p>JobID: {jobID}</p>
          <p>Assembled: {assembled}</p>
          <p>All Details: {}</p>
        </div>
      </div>
    );
  }

  organizeInstallation() {}

  createInvoice() {
    var date = new Date();
    var year = date.getFullYear();
    var month = parseInt(date.getMonth());
    month += 2;
    var day = parseInt(date.getDate());
    if (day <= 3) {
      day = 1;
    } else {
      day -= 3;
    }
    var installationDate = " " + year + ". " + month + ". " + day + ".";

    var name = orderDetails.name;
    var telNumber = orderDetails.telNumber;
    var postalCode = orderDetails.postalCode;
    var city = orderDetails.city;
    var street = orderDetails.street;
    var price = orderDetails.finalPrice;
    var noOfShutters = orderDetails.numberOfShutters;
    /*return (
      <div>
        <h2>Invoice</h2>
        <p>Name:{name}</p>
        <p>Telephone Number:{telNumber}</p>
        <p>
          Address: {postalCode} {city},{street}
        </p>
        <p>
          {noOfShutters} shutter(s) ordered, installation expected on
          {installationDate}
        </p>
        <h3>Total Cost: {price}HUF</h3>
      </div>
    );*/

    this.setState({
      data: (
        <div>
          <h2>Invoice</h2>
          <p>Name:{name}</p>
          <p>Telephone Number:{telNumber}</p>
          <p>
            Address: {postalCode} {city},{street}
          </p>
          <p>
            {noOfShutters} shutter(s) ordered, installation expected on
            {installationDate}
          </p>
          <h3>Total Cost: {price}HUF</h3>
        </div>
      )
    });
  }

  checkPayment() {
    if (this.state.paidFor === "true") {
      this.setState({ data: <div>Order paid for.</div> });
    } else {
      this.setState({ data: <div>Awaiting payment.</div> });
    }
  }

  render() {
    var darkBG = { background: "#ADADAD", border: "solid black" };
    return (
      <div style={darkBG}>
        <h1>Manager</h1>
        {this.listOrders()}
        {this.listJobs()}
        CustomerData
        {this.createInvoice}
        <button onClick={this.createInvoice}>Check Payment</button>
        {this.state.data}
      </div>
    );
  }
}

export default Manager;
