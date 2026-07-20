// Module ID: 284
// Function ID: 4457
// Name: PressabilityPerformanceEventEmitter
// Dependencies: []

// Module 284 (PressabilityPerformanceEventEmitter)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let tmp2 = () => {
  class PressabilityPerformanceEventEmitter {
    constructor() {
      tmp = PressabilityPerformanceEventEmitter(this, PressabilityPerformanceEventEmitter);
      this._listeners = [];
      return;
    }
  }
  let closure_0 = PressabilityPerformanceEventEmitter;
  let obj = {
    key: "addListener",
    value: function addListener(arg0) {
      const _listeners = this._listeners;
      _listeners.push(arg0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "removeListener",
    value: function removeListener(arg0) {
      const _listeners = this._listeners;
      const index = _listeners.indexOf(arg0);
      if (index > -1) {
        const _listeners1 = this._listeners;
        _listeners1.splice(index, 1);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "emitEvent",
    value: function emitEvent(arg0) {
      if (0 !== this._listeners.length) {
        let closure_0 = arg0();
        const _listeners = tmp._listeners;
        const item = _listeners.forEach((arg0) => arg0(closure_0));
      }
    }
  };
  items[2] = obj;
  return callback(PressabilityPerformanceEventEmitter, items);
}();
tmp2 = new tmp2();

export default tmp2;
