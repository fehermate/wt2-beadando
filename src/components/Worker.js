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

class Worker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRecentID: "0",
      jobDetails: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  selectJob(user) {
    var newID = this.generateJobID();
    if (newID - 1 === this.state.mostRecentID) {
      this.generateJobID();
      return;
    }
    var requiredP = this.listRequiredParts(newID);

    var newJob = {
      jobID: newID,
      assembled: "",
      details: {
        customer: user,
        shutters: orderDetails.shutters,
        allDetails: orderDetails,
        requiredParts: requiredP
      }
    };
    this.state.jobDetails.push(newJob);
    console.log(newJob);
    console.log(this.state);
  }

  generateJobID() {
    var recentlyUsedID = this.state.mostRecentID;

    var newID = recentlyUsedID;

    newID++;
    this.setState({ mostRecentID: newID });
    return newID;
  }

  listRequiredParts(jobID) {
    var requiredParts = [];
    if (this.state.material === "steel") {
      requiredParts.push("Super Steel");
    } else {
      requiredParts.push("Pretty Plastic Parts");
    }
    if (this.state.automatedShutter === "yes") {
      requiredParts.push("Motors");
    }

    if (requiredParts.length === 0) {
      return;
    } else if (requiredParts.length === 2) {
      return (
        <div>
          <p>
            {requiredParts[0]} with {requiredParts[1]} are needed.
          </p>
        </div>
      );
    } else
      return (
        <div>
          <p>{requiredParts[0]} are needed.</p>
        </div>
      );
  }

  render() {
    var lightBG = { background: "#FBEEC1", border: "solid black" };

    return (
      <div style={lightBG}>
        <h1>Worker</h1>
        <h1>All Orders</h1>
        <div className="orders">
          Customer: {orderDetails.username}
          {orderDetails.shutters.map(shutter => (
            <div>
              <p>
                {shutter.color} colored ,{shutter.material}{" "}
                {shutter.windowHeight} cm X {shutter.windowWidth} cm sized
                shutter.
                {shutter.automatedShutter === "yes" ? (
                  <p>Automation needed</p>
                ) : (
                  <p>Automation not needed</p>
                )}
              </p>
              SubTotal: {shutter.subTotal}
              <button
                onClick={this.selectJob.bind(this, orderDetails.username)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <h1>Required Parts</h1>
        {this.state.jobDetails.map(job => (
          <div>
            <p>
              For the Job with ID #{job.jobID},{job.details.requiredParts},and
              is now assembled.
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Worker;
