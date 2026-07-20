// Module ID: 167
// Function ID: 2486
// Name: _callSuper
// Dependencies: []

// Module 167 (_callSuper)
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
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = Object.preventExtensions([]);

export const TaskAttributionTiming = (PerformanceEntry) => {
  class TaskAttributionTiming {
    constructor() {
      tmp = closure_2(this, TaskAttributionTiming);
      return closure_7(this, TaskAttributionTiming, arguments);
    }
  }
  let closure_0 = TaskAttributionTiming;
  callback3(TaskAttributionTiming, PerformanceEntry);
  return callback(TaskAttributionTiming);
}(arg1(dependencyMap[6]).PerformanceEntry);
export const PerformanceLongTaskTiming = (PerformanceEntry) => {
  class PerformanceLongTaskTiming {
    constructor() {
      tmp = closure_2(this, PerformanceLongTaskTiming);
      return closure_7(this, PerformanceLongTaskTiming, arguments);
    }
  }
  let closure_0 = PerformanceLongTaskTiming;
  callback3(PerformanceLongTaskTiming, PerformanceEntry);
  let obj = {
    key: "attribution",
    get() {
      return closure_6;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toJSON",
    value: function toJSON() {
      return Object.assign({}, function _superPropGet(PerformanceLongTaskTiming, toJSON, arg2, arg3) {
        let prototype = PerformanceLongTaskTiming;
        if (1) {
          prototype = PerformanceLongTaskTiming.prototype;
        }
        const tmpResult = arg2(closure_4(prototype), "toJSON", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(PerformanceLongTaskTiming, "toJSON", this, 3)([]), { attribution: this.attribution });
    }
  };
  items[1] = obj;
  return callback(PerformanceLongTaskTiming, items);
}(arg1(dependencyMap[6]).PerformanceEntry);
