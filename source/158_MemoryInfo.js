// Module ID: 158
// Function ID: 2435
// Name: MemoryInfo
// Dependencies: [6, 7, 99, 100, 129]

// Module 158 (MemoryInfo)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";
import setPlatformObject from "setPlatformObject";

let closure_3 = importDefaultResult("jsHeapSizeLimit");
let closure_4 = importDefaultResult("totalJSHeapSize");
let closure_5 = importDefaultResult("usedJSHeapSize");
const tmp3 = (() => {
  class MemoryInfo {
    constructor(arg0) {
      self = this;
      tmp = MemoryInfo(this, MemoryInfo);
      definePropertyResult = Object.defineProperty(this, outer1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      if (null != arg0) {
        tmp5 = outer1_2;
        tmp6 = outer1_3;
        outer1_2(self, outer1_3)[outer1_3] = arg0.jsHeapSizeLimit;
        tmp7 = outer1_4;
        outer1_2(self, outer1_4)[outer1_4] = arg0.totalJSHeapSize;
        tmp8 = outer1_5;
        outer1_2(self, outer1_5)[outer1_5] = arg0.usedJSHeapSize;
      }
      return;
    }
  }
  let obj = {
    key: "jsHeapSizeLimit",
    get() {
      return outer1_2(this, outer1_3)[outer1_3];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "totalJSHeapSize",
    get() {
      return outer1_2(this, outer1_4)[outer1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "usedJSHeapSize",
    get() {
      return outer1_2(this, outer1_5)[outer1_5];
    }
  };
  items[2] = obj;
  return callback(MemoryInfo, items);
})();
setPlatformObject.setPlatformObject(tmp3);

export default tmp3;
