// Module ID: 160
// Function ID: 2450
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 99, 100, 155]

// Module 160 (_callSuper)
import _classPrivateFieldKey from "_classPrivateFieldKey";
import PerformanceEntry from "PerformanceEntry";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let _classPrivateFieldKey = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classPrivateFieldKey;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = importDefaultResult("detail");
let closure_7 = importDefaultResult("detail");

export const PerformanceMark = ((PerformanceEntry) => {
  class PerformanceMark {
    constructor(arg0, arg1) {
      tmp = PerformanceMark;
      tmp2 = PerformanceMark(this, PerformanceMark);
      obj = { name: PerformanceEntry, entryType: "mark" };
      startTime = undefined;
      tmp3 = outer1_8;
      if (null != arg1) {
        startTime = arg1.startTime;
      }
      if (null == startTime) {
        tmp5 = globalThis;
        _performance = performance;
        startTime = performance.now();
      }
      obj.startTime = startTime;
      obj.duration = 0;
      items = [];
      items[0] = obj;
      tmp3Result = tmp3(this, tmp, items);
      definePropertyResult = Object.defineProperty(tmp3Result, outer1_6, { writable: true, value: undefined });
      if (arg1) {
        tmp8 = outer1_5;
        tmp9 = outer1_6;
        outer1_5(tmp3Result, outer1_6)[outer1_6] = arg1.detail;
      }
      return tmp3Result;
    }
  }
  callback3(PerformanceMark, PerformanceEntry);
  let items = [
    {
      key: "detail",
      get() {
        return outer1_5(this, outer1_6)[outer1_6];
      }
    }
  ];
  return callback(PerformanceMark, items);
})(require("PerformanceEntry").PerformanceEntry);
export const PerformanceMeasure = ((PerformanceEntry) => {
  class PerformanceMeasure {
    constructor(arg0, arg1) {
      tmp = PerformanceMeasure(this, PerformanceMeasure);
      obj = { name: PerformanceEntry, entryType: "measure", startTime: arg1.startTime, duration: arg1.duration };
      items = [];
      items[0] = obj;
      tmp2 = outer1_8(this, PerformanceMeasure, items);
      definePropertyResult = Object.defineProperty(tmp2, outer1_7, { writable: true, value: undefined });
      if (arg1) {
        tmp4 = outer1_5;
        tmp5 = outer1_7;
        outer1_5(tmp2, outer1_7)[outer1_7] = arg1.detail;
      }
      return tmp2;
    }
  }
  callback3(PerformanceMeasure, PerformanceEntry);
  let items = [
    {
      key: "detail",
      get() {
        return outer1_5(this, outer1_7)[outer1_7];
      }
    }
  ];
  return callback(PerformanceMeasure, items);
})(require("PerformanceEntry").PerformanceEntry);
