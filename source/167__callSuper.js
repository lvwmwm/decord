// Module ID: 167
// Function ID: 2486
// Name: _callSuper
// Dependencies: [102, 7, 6, 15, 17, 18, 155]

// Module 167 (_callSuper)
import _get from "_get";
import _defineProperties from "_defineProperties";
import PerformanceEntry from "PerformanceEntry";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

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
  let _get = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _get;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = Object.preventExtensions([]);

export const TaskAttributionTiming = ((PerformanceEntry) => {
  class TaskAttributionTiming {
    constructor() {
      tmp = outer1_2(this, TaskAttributionTiming);
      return outer1_7(this, TaskAttributionTiming, arguments);
    }
  }
  callback3(TaskAttributionTiming, PerformanceEntry);
  return callback(TaskAttributionTiming);
})(require("PerformanceEntry").PerformanceEntry);
export const PerformanceLongTaskTiming = ((PerformanceEntry) => {
  class PerformanceLongTaskTiming {
    constructor() {
      tmp = outer1_2(this, PerformanceLongTaskTiming);
      return outer1_7(this, PerformanceLongTaskTiming, arguments);
    }
  }
  callback3(PerformanceLongTaskTiming, PerformanceEntry);
  let obj = {
    key: "attribution",
    get() {
      return outer1_6;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toJSON",
    value: function toJSON() {
      return Object.assign({}, (function _superPropGet(PerformanceLongTaskTiming, toJSON, arg2, arg3) {
        let _get = arg2;
        let prototype = PerformanceLongTaskTiming;
        if (1) {
          prototype = PerformanceLongTaskTiming.prototype;
        }
        const tmpResult = PerformanceLongTaskTiming(outer2_4(prototype), "toJSON", arg2);
        let _defineProperties = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(_get, arg0);
          }
        }
        return fn;
      })(PerformanceLongTaskTiming, "toJSON", this, 3)([]), { attribution: this.attribution });
    }
  };
  items[1] = obj;
  return callback(PerformanceLongTaskTiming, items);
})(require("PerformanceEntry").PerformanceEntry);
