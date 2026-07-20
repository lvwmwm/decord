// Module ID: 1687
// Function ID: 18668
// Name: WorkletEventHandlerNative
// Dependencies: []

// Module 1687 (WorkletEventHandlerNative)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
const obj = arg1(dependencyMap[4]);
let closure_5 = importDefaultResult("viewTags");
let closure_6 = importDefaultResult("registrations");
let tmp4 = () => {
  class WorkletEventHandlerNative {
    constructor(arg0, arg1) {
      tmp = closure_2(this, WorkletEventHandlerNative);
      definePropertyResult = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_6, { writable: true, value: undefined });
      this.worklet = arg0;
      this.eventNames = arg1;
      tmp4 = closure_4(this, closure_5);
      set = new Set();
      tmp4[closure_5] = set;
      tmp6 = closure_4(this, closure_6);
      map = new Map();
      tmp6[closure_6] = map;
      return;
    }
  }
  const arg1 = WorkletEventHandlerNative;
  let obj = {
    key: "updateEventHandler",
    value: function updateEventHandler(worklet, eventNames) {
      this.worklet = worklet;
      this.eventNames = eventNames;
      let arr = callback2(this, closure_6)[closure_6];
      const item = arr.forEach((arr) => {
        const item = arr.forEach((arg0) => callback(closure_1[5]).unregisterEventHandler(arg0));
      });
      arr = Array.from(callback2(this, closure_5)[closure_5]);
      const item1 = arr.forEach((arg0) => {
        const self = arg0;
        const eventNames = self.eventNames;
        const mapped = eventNames.map((arg0) => arg0(closure_1[5]).registerEventHandler(arg0.worklet, arg0, arg0));
        const result = callback(self, closure_6)[closure_6].set(arg0, mapped);
      });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "registerForEvents",
    value: function registerForEvents(arg0, arg1) {
      let self = this;
      self = this;
      callback2(this, closure_5)[closure_5].add(arg0);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((arg0) => arg0(self[5]).registerEventHandler(self.worklet, arg0, arg0));
      const obj = callback2(this, closure_5)[closure_5];
      const result = callback2(this, closure_6)[closure_6].set(arg0, mapped);
      if (0 === this.eventNames.length) {
        if (arg1) {
          const obj3 = WorkletEventHandlerNative(self[5]);
          const registerEventHandlerResult = WorkletEventHandlerNative(self[5]).registerEventHandler(self.worklet, arg1, arg0);
          const items = [registerEventHandlerResult];
          const result1 = callback2(self, closure_6)[closure_6].set(arg0, items);
          const obj4 = callback2(self, closure_6)[closure_6];
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(arg0) {
      callback2(this, closure_5)[closure_5].delete(arg0);
      const obj = callback2(this, closure_5)[closure_5];
      const value = callback2(this, closure_6)[closure_6].get(arg0);
      if (null != value) {
        const item = value.forEach((arg0) => {
          const result = callback(closure_1[5]).unregisterEventHandler(arg0);
        });
      }
      const obj2 = callback2(this, closure_6)[closure_6];
      callback2(this, closure_6)[closure_6].delete(arg0);
    }
  };
  items[2] = obj;
  return callback(WorkletEventHandlerNative, items);
}();
if (shouldBeUseWebResult) {
  tmp4 = () => {
    class WorkletEventHandlerWeb {
      constructor(arg0) {
        self = this;
        if (arguments.length > 1) {
          if (undefined !== arguments[1]) {
            tmp = arguments[1];
          }
          tmp2 = closure_2;
          tmp3 = WorkletEventHandlerWeb;
          tmp4 = closure_2(self, WorkletEventHandlerWeb);
          tmp5 = arg0;
          self.worklet = arg0;
          self.eventNames = [];
          self.listeners = {};
          setupWebListenersResult = self.setupWebListeners();
          return;
        }
        return;
      }
    }
    const arg1 = WorkletEventHandlerWeb;
    let obj = {
      key: "setupWebListeners",
      value: function setupWebListeners() {
        this.listeners = {};
        const eventNames = this.eventNames;
        const item = eventNames.forEach((arg0) => {
          self.listeners[arg0] = function jsListener(arg0, worklet) {
            return (nativeEvent) => {
              arg1(Object.assign({}, nativeEvent.nativeEvent, { eventName: nativeEvent }));
            };
          }(arg0, self.worklet);
        });
      }
    };
    const items = [obj, , , ];
    obj = {
      key: "updateEventHandler",
      value: function updateEventHandler(worklet, eventNames) {
        this.worklet = worklet;
        this.eventNames = eventNames;
        this.setupWebListeners();
      }
    };
    items[1] = obj;
    obj = {
      key: "registerForEvents",
      value: function registerForEvents(arg0, arg1) {

      }
    };
    items[2] = obj;
    items[3] = {
      key: "unregisterFromEvents",
      value: function unregisterFromEvents(arg0) {

      }
    };
    return callback(WorkletEventHandlerWeb, items);
  }();
}

export const WorkletEventHandler = tmp4;
