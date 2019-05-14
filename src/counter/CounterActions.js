import CounterConstants from "./CounterConstants"
import CounterDispatcher from "./CounterDispatcher"

class CounterActions{
    increment(){
        CounterDispatcher.handleViewAction({
            actionType: CounterConstants.INCREASE
        })
    }

    decrement(){
        CounterDispatcher.handleViewAction({
            actionType: CounterConstants.DECREASE
        })
    }

    reset(){
        CounterDispatcher.handleViewAction({
            actionType: CounterConstants.RESET
        })
    }
}

export default new CounterActions()