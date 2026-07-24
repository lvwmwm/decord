// Module ID: 1687
// Function ID: 18675
// Name: WorkletEventHandlerNative
// Dependencies: [6, 7, 99, 100, 1585, 1626]

// Module 1687 (WorkletEventHandlerNative)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";
import isJest from "isJest";

const require = arg1;
isJest = isJest.shouldBeUseWeb();
let closure_5 = importDefaultResult("viewTags");
let closure_6 = importDefaultResult("registrations");
let tmp4 = (() => {
  class WorkletEventHandlerNative {
    constructor(arg0, arg1) {
      tmp = outer1_2(this, WorkletEventHandlerNative);
      definePropertyResult = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_6, { writable: true, value: undefined });
      this.worklet = arg0;
      this.eventNames = arg1;
      tmp4 = outer1_4(this, outer1_5);
      set = new Set();
      tmp4[outer1_5] = set;
      tmp6 = outer1_4(this, outer1_6);
      map = new Map();
      tmp6[outer1_6] = map;
      return;
    }
  }
  let obj = {
    key: "updateEventHandler",
    value: function updateEventHandler(worklet, eventNames) {
      const self = this;
      this.worklet = worklet;
      this.eventNames = eventNames;
      let arr = outer1_4(this, outer1_6)[outer1_6];
      let item = arr.forEach((arr) => {
        const item = arr.forEach((arg0) => WorkletEventHandlerNative(outer3_1[5]).unregisterEventHandler(arg0));
      });
      arr = Array.from(outer1_4(this, outer1_5)[outer1_5]);
      const item1 = arr.forEach((arg0) => {
        const _self = arg0;
        const eventNames = _self.eventNames;
        const mapped = eventNames.map((arg0) => WorkletEventHandlerNative(outer3_1[5]).registerEventHandler(worklet.worklet, arg0, worklet));
        const result = outer2_4(_self, outer2_6)[outer2_6].set(arg0, mapped);
      });
    }
  };
  let items = [obj, , ];
  obj = {
    key: "registerForEvents",
    value: function registerForEvents(arg0, arg1) {
      let self = this;
      let closure_0 = arg0;
      self = this;
      outer1_4(this, outer1_5)[outer1_5].add(arg0);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((arg0) => WorkletEventHandlerNative(outer2_1[5]).registerEventHandler(self.worklet, arg0, closure_0));
      const obj = outer1_4(this, outer1_5)[outer1_5];
      const result = outer1_4(this, outer1_6)[outer1_6].set(arg0, mapped);
      if (0 === this.eventNames.length) {
        if (arg1) {
          const obj3 = WorkletEventHandlerNative(outer1_1[5]);
          const registerEventHandlerResult = WorkletEventHandlerNative(outer1_1[5]).registerEventHandler(self.worklet, arg1, arg0);
          const items = [registerEventHandlerResult];
          const result1 = outer1_4(self, outer1_6)[outer1_6].set(arg0, items);
          const obj4 = outer1_4(self, outer1_6)[outer1_6];
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(arg0) {
      outer1_4(this, outer1_5)[outer1_5].delete(arg0);
      const obj = outer1_4(this, outer1_5)[outer1_5];
      const value = outer1_4(this, outer1_6)[outer1_6].get(arg0);
      if (null != value) {
        const item = value.forEach((arg0) => {
          const result = WorkletEventHandlerNative(outer2_1[5]).unregisterEventHandler(arg0);
        });
      }
      const obj2 = outer1_4(this, outer1_6)[outer1_6];
      outer1_4(this, outer1_6)[outer1_6].delete(arg0);
    }
  };
  items[2] = obj;
  return callback(WorkletEventHandlerNative, items);
})();
if (isJest) {
  tmp4 = (() => {
    class WorkletEventHandlerWeb {
      constructor(arg0) {
        self = this;
        if (arguments.length > 1) {
          if (undefined !== arguments[1]) {
            tmp = arguments[1];
          }
          tmp2 = outer1_2;
          tmp3 = WorkletEventHandlerWeb;
          tmp4 = outer1_2(self, WorkletEventHandlerWeb);
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
    let obj = {
      key: "setupWebListeners",
      value: function setupWebListeners() {
        const self = this;
        this.listeners = {};
        const eventNames = this.eventNames;
        const item = eventNames.forEach((arg0) => {
          self.listeners[arg0] = (function jsListener(arg0, worklet) {
            let closure_0 = arg0;
            let closure_1 = worklet;
            return (nativeEvent) => {
              worklet(Object.assign({}, nativeEvent.nativeEvent, { eventName: closure_0 }));
            };
          })(arg0, self.worklet);
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
  })();
}

export const WorkletEventHandler = tmp4;
