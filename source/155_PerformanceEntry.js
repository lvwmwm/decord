// Module ID: 155
// Function ID: 2423
// Name: PerformanceEntry
// Dependencies: [6, 7, 99, 100, 129]

// Module 155 (PerformanceEntry)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";
import setPlatformObject from "setPlatformObject";

let closure_3 = importDefaultResult("name");
let closure_4 = importDefaultResult("entryType");
let closure_5 = importDefaultResult("startTime");
let closure_6 = importDefaultResult("duration");
const tmp3 = (() => {
  class PerformanceEntry {
    constructor(arg0) {
      tmp = PerformanceEntry(this, PerformanceEntry);
      definePropertyResult = Object.defineProperty(this, outer1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, outer1_6, { writable: true, value: undefined });
      ({ name: outer1_2(undefined, this, outer1_3)[outer1_3], entryType: outer1_2(undefined, this, outer1_4)[outer1_4], startTime: outer1_2(undefined, this, outer1_5)[outer1_5], duration: outer1_2(undefined, this, outer1_6)[outer1_6] } = arg0);
      return;
    }
  }
  let obj = {
    key: "name",
    get() {
      return outer1_2(this, outer1_3)[outer1_3];
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "entryType",
    get() {
      return outer1_2(this, outer1_4)[outer1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "startTime",
    get() {
      return outer1_2(this, outer1_5)[outer1_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "duration",
    get() {
      return outer1_2(this, outer1_6)[outer1_6];
    }
  };
  items[4] = {
    key: "toJSON",
    value: function toJSON() {
      return { name: outer1_2(this, outer1_3)[outer1_3], entryType: outer1_2(this, outer1_4)[outer1_4], startTime: outer1_2(this, outer1_5)[outer1_5], duration: outer1_2(this, outer1_6)[outer1_6] };
    }
  };
  return callback(PerformanceEntry, items);
})();
setPlatformObject.setPlatformObject(tmp3);

export const PerformanceEntry = tmp3;
