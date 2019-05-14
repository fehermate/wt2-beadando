import { Dispatcher } from "flux";
import CounterConstants from "./CounterConstants";
import CounterStore from "./CounterStore";

class CounterDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
}

const dispatcher = new CounterDispatcher();

dispatcher.register(data => {
  if (data.action.actionType !== CounterConstants.INCREASE) {
    return;
  }
  CounterStore._counter += 1;
  CounterStore.emitChange();
});

dispatcher.register(data => {
  if (data.action.actionType !== CounterConstants.DECREASE) {
    return;
  }
  CounterStore._counter -= 1;
  if (CounterStore._counter < 0) CounterStore._counter = 0;
  CounterStore.emitChange();
});

dispatcher.register(data => {
  if (data.action.actionType !== CounterConstants.RESET) {
    return;
  }
  CounterStore._counter = 0;
  CounterStore.emitChange();
});

export default dispatcher;
