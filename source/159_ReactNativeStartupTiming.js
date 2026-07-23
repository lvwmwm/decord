// Module ID: 159
// Function ID: 2441
// Name: ReactNativeStartupTiming
// Dependencies: [6, 7, 99, 100, 129]

// Module 159 (ReactNativeStartupTiming)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";
import setPlatformObject from "setPlatformObject";

let closure_3 = importDefaultResult("startTime");
let closure_4 = importDefaultResult("endTime");
let closure_5 = importDefaultResult("initializeRuntimeStart");
let closure_6 = importDefaultResult("initializeRuntimeEnd");
let closure_7 = importDefaultResult("executeJavaScriptBundleEntryPointStart");
let closure_8 = importDefaultResult("executeJavaScriptBundleEntryPointEnd");
const tmp3 = (() => {
  class ReactNativeStartupTiming {
    constructor(arg0) {
      self = this;
      tmp = ReactNativeStartupTiming(this, ReactNativeStartupTiming);
      definePropertyResult = Object.defineProperty(this, outer1_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, outer1_6, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(this, outer1_7, { writable: true, value: undefined });
      definePropertyResult5 = Object.defineProperty(this, outer1_8, { writable: true, value: undefined });
      if (null != arg0) {
        tmp8 = outer1_2;
        tmp9 = outer1_3;
        outer1_2(self, outer1_3)[outer1_3] = arg0.startTime;
        tmp10 = outer1_4;
        outer1_2(self, outer1_4)[outer1_4] = arg0.endTime;
        tmp11 = outer1_5;
        outer1_2(self, outer1_5)[outer1_5] = arg0.initializeRuntimeStart;
        tmp12 = outer1_6;
        outer1_2(self, outer1_6)[outer1_6] = arg0.initializeRuntimeEnd;
        tmp13 = outer1_7;
        outer1_2(self, outer1_7)[outer1_7] = arg0.executeJavaScriptBundleEntryPointStart;
        tmp14 = outer1_8;
        outer1_2(self, outer1_8)[outer1_8] = arg0.executeJavaScriptBundleEntryPointEnd;
      }
      return;
    }
  }
  let obj = {
    key: "startTime",
    get() {
      return outer1_2(this, outer1_3)[outer1_3];
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "endTime",
    get() {
      return outer1_2(this, outer1_4)[outer1_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "initializeRuntimeStart",
    get() {
      return outer1_2(this, outer1_5)[outer1_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "initializeRuntimeEnd",
    get() {
      return outer1_2(this, outer1_6)[outer1_6];
    }
  };
  items[4] = {
    key: "executeJavaScriptBundleEntryPointStart",
    get() {
      return outer1_2(this, outer1_7)[outer1_7];
    }
  };
  items[5] = {
    key: "executeJavaScriptBundleEntryPointEnd",
    get() {
      return outer1_2(this, outer1_8)[outer1_8];
    }
  };
  return callback(ReactNativeStartupTiming, items);
})();
setPlatformObject.setPlatformObject(tmp3);

export default tmp3;
