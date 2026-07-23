// Module ID: 168
// Function ID: 2499
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 99, 100, 155]

// Module 168 (_isNativeReflectConstruct)
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _classPrivateFieldKey from "_classPrivateFieldKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";
import closure_6 from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

function _isNativeReflectConstruct() {
  let _classPrivateFieldBase = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classPrivateFieldBase;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = importDefaultResult("fetchStart");
let closure_8 = importDefaultResult("requestStart");
let closure_9 = importDefaultResult("connectStart");
let closure_10 = importDefaultResult("connectEnd");
let closure_11 = importDefaultResult("responseStart");
let closure_12 = importDefaultResult("responseEnd");
let closure_13 = importDefaultResult("responseStatus");

export const PerformanceResourceTiming = ((PerformanceEntry) => {
  class PerformanceResourceTiming {
    constructor(arg0) {
      self = this;
      tmp = PerformanceResourceTiming(this, PerformanceResourceTiming);
      obj = { name: PerformanceEntry.name, entryType: "resource", startTime: PerformanceEntry.startTime, duration: PerformanceEntry.duration };
      items = [];
      items[0] = obj;
      obj2 = outer1_3(PerformanceResourceTiming);
      tmp2 = outer1_2;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj2, items, outer1_3(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, outer1_7, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp2Result, outer1_8, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp2Result, outer1_9, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(tmp2Result, outer1_10, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(tmp2Result, outer1_11, { writable: true, value: undefined });
      definePropertyResult5 = Object.defineProperty(tmp2Result, outer1_12, { writable: true, value: undefined });
      definePropertyResult6 = Object.defineProperty(tmp2Result, outer1_13, { writable: true, value: undefined });
      ({ fetchStart: outer1_6(undefined, tmp6, outer1_7)[outer1_7], requestStart: outer1_6(undefined, tmp6, outer1_8)[outer1_8], connectStart: outer1_6(undefined, tmp6, outer1_9)[outer1_9], connectEnd: outer1_6(undefined, tmp6, outer1_10)[outer1_10], responseStart: outer1_6(undefined, tmp6, outer1_11)[outer1_11], responseEnd: outer1_6(undefined, tmp6, outer1_12)[outer1_12], responseStatus: outer1_6(undefined, tmp6, outer1_13)[outer1_13] } = PerformanceEntry);
      return tmp2Result;
    }
  }
  callback2(PerformanceResourceTiming, PerformanceEntry);
  let obj = {
    key: "fetchStart",
    get() {
      return outer1_6(this, outer1_7)[outer1_7];
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "requestStart",
    get() {
      return outer1_6(this, outer1_8)[outer1_8];
    }
  };
  items[1] = obj;
  obj = {
    key: "connectStart",
    get() {
      return outer1_6(this, outer1_9)[outer1_9];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "connectEnd",
    get() {
      return outer1_6(this, outer1_10)[outer1_10];
    }
  };
  items[4] = {
    key: "responseStart",
    get() {
      return outer1_6(this, outer1_11)[outer1_11];
    }
  };
  items[5] = {
    key: "responseEnd",
    get() {
      return outer1_6(this, outer1_12)[outer1_12];
    }
  };
  items[6] = {
    key: "responseStatus",
    get() {
      return outer1_6(this, outer1_13)[outer1_13];
    }
  };
  items[7] = {
    key: "toJSON",
    value: function toJSON() {
      const obj = { fetchStart: outer1_6(this, outer1_7)[outer1_7], requestStart: outer1_6(this, outer1_8)[outer1_8], connectStart: outer1_6(this, outer1_9)[outer1_9], connectEnd: outer1_6(this, outer1_10)[outer1_10], responseStart: outer1_6(this, outer1_11)[outer1_11], responseEnd: outer1_6(this, outer1_12)[outer1_12], responseStatus: outer1_6(this, outer1_13)[outer1_13] };
      return Object.assign({}, (function _superPropGet(PerformanceResourceTiming, toJSON, arg2, arg3) {
        let _classPrivateFieldBase = arg2;
        let prototype = PerformanceResourceTiming;
        if (1) {
          prototype = PerformanceResourceTiming.prototype;
        }
        const tmpResult = outer2_4(outer2_3(prototype), "toJSON", arg2);
        let _classPrivateFieldKey = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(_classPrivateFieldBase, arg0);
          }
        }
        return fn;
      })(PerformanceResourceTiming, "toJSON", this, 3)([]), obj);
    }
  };
  return callback(PerformanceResourceTiming, items);
})(require("PerformanceEntry").PerformanceEntry);
