import EventEmitter from "events"

class CounterStore extends EventEmitter{
    _counter = 0;

    emitChange(){
        this.emit("change");
    }

    addChangeListener(callback){
        this.addListener("change", callback);
    }

    removeChangeListener(callback){
        this.removeListener("change", callback);
    }

}

export default new CounterStore();