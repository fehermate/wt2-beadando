import * as React from "react";
import CounterStore from "../counter/CounterStore";

class CounterDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: CounterStore._counter
    };
    this.onChangeRefresh = this.onChangeRefresh.bind(this);
  }
  onChangeRefresh() {
    this.setState({ counter: CounterStore._counter });
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChangeRefresh);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChangeRefresh);
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}

export default CounterDisplay;
