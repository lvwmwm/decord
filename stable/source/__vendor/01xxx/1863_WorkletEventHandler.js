// Module ID: 1863
// Function ID: 1864
// Name: WorkletEventHandler
// Dependencies: [41, 42, 90, 91, 1827]

// Module 1863 (WorkletEventHandler)
import startMapper from "startMapper" /* 1827 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

const require = globalThis.__r;
let _require;

let closure_4 = _classPrivateFieldKey("viewTags");
let closure_5 = _classPrivateFieldKey("registrations");
class WorkletEventHandler {
  constructor(worklet, items) {
    _classCallCheck(this, WorkletEventHandler);
    Object.defineProperty(this, closure_4, { writable: true, value: "Array" });
    Object.defineProperty(this, closure_5, { writable: true, value: "Array" });
    this.worklet = worklet;
    this.eventNames = items;
    const tmp4 = _classPrivateFieldBase(this, closure_4);
    tmp4[closure_4] = new Set();
    new Set();
    const tmp6 = _classPrivateFieldBase(this, closure_5);
    tmp6[closure_5] = new Map();
    new Map();
  }
}
const entry = {
  key: "updateEventHandler",
  value: function updateEventHandler(worklet, items) {
    const self = this;
    this.worklet = worklet;
    this.eventNames = items;
    const arr = _classPrivateFieldBase(this, closure_5)[closure_5];
    let item = arr.forEach((arr) => {
      const item = arr.forEach((item) => {
        const obj = eventNames(closure_1_1[4]);
        return obj.unregisterEventHandler(item);
      });
    });
    const arr2 = Array.from(_classPrivateFieldBase(this, closure_4)[closure_4]);
    const item1 = arr2.forEach((item) => {
      eventNames = item;
      eventNames = eventNames.eventNames;
      const mapped = eventNames.map((item) => {
        const obj = startMapper;
        return obj.registerEventHandler(self.worklet, item, item);
      });
      let obj = _classPrivateFieldBase(eventNames, closure_1_5)[closure_1_5];
      const result = obj.set(item, mapped);
    });
  }
};
let items = [
  entry,
  {
    key: "registerForEvents",
    value: function registerForEvents(findNodeHandleResult, key10010) {
      const self = this;
      _require = findNodeHandleResult;
      let obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      obj.add(findNodeHandleResult);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((item) => {
        const obj = startMapper;
        return obj.registerEventHandler(self.worklet, item, _require);
      });
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj2.set(findNodeHandleResult, mapped);
      const tmp = _classPrivateFieldBase;
      if (0 === this.eventNames.length) {
        const tmp6 = key10010;
        if (tmp6) {
          const obj3 = require("startMapper");
          const items = [obj3.registerEventHandler(self.worklet, key10010, findNodeHandleResult)];
          const registerEventHandlerResult = obj3.registerEventHandler(self.worklet, key10010, findNodeHandleResult);
          const obj4 = tmp(self, closure_5)[closure_5];
          const result1 = obj4.set(findNodeHandleResult, items);
        }
      }
    }
  },
  {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(findNodeHandleResult) {
      let obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      obj.delete(findNodeHandleResult);
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
      const value = obj2.get(findNodeHandleResult);
      const tmp = _classPrivateFieldBase;
      if (value != null) {
        const item = value.forEach((item) => {
          const obj = require("startMapper");
          const result = obj.unregisterEventHandler(item);
        });
      }
      const obj3 = tmp(this, closure_5)[closure_5];
      obj3.delete(findNodeHandleResult);
    }
  }
];
const WorkletEventHandler_export = _createClass(WorkletEventHandler, items);

export { WorkletEventHandler_export as WorkletEventHandler };
