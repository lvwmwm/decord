// Module ID: 168
// Function ID: 2499
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 168 (_isNativeReflectConstruct)
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
let closure_6 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[7]);
let closure_7 = importDefaultResult("fetchStart");
let closure_8 = importDefaultResult("requestStart");
let closure_9 = importDefaultResult("connectStart");
let closure_10 = importDefaultResult("connectEnd");
let closure_11 = importDefaultResult("responseStart");
let closure_12 = importDefaultResult("responseEnd");
let closure_13 = importDefaultResult("responseStatus");

export const PerformanceResourceTiming = (PerformanceEntry) => {
  class PerformanceResourceTiming {
    constructor(arg0) {
      self = this;
      tmp = PerformanceResourceTiming(this, PerformanceResourceTiming);
      obj = { name: PerformanceEntry.name, entryType: "resource", startTime: PerformanceEntry.startTime, duration: PerformanceEntry.duration };
      items = [];
      items[0] = obj;
      obj2 = closure_3(PerformanceResourceTiming);
      tmp2 = closure_2;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj2, items, closure_3(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, closure_7, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp2Result, closure_8, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp2Result, closure_9, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(tmp2Result, closure_10, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(tmp2Result, closure_11, { writable: true, value: undefined });
      definePropertyResult5 = Object.defineProperty(tmp2Result, closure_12, { writable: true, value: undefined });
      definePropertyResult6 = Object.defineProperty(tmp2Result, closure_13, { writable: true, value: undefined });
      ({ fetchStart: closure_6(undefined, tmp6, closure_7)[closure_7], requestStart: closure_6(undefined, tmp6, closure_8)[closure_8], connectStart: closure_6(undefined, tmp6, closure_9)[closure_9], connectEnd: closure_6(undefined, tmp6, closure_10)[closure_10], responseStart: closure_6(undefined, tmp6, closure_11)[closure_11], responseEnd: closure_6(undefined, tmp6, closure_12)[closure_12], responseStatus: closure_6(undefined, tmp6, closure_13)[closure_13] } = PerformanceEntry);
      return tmp2Result;
    }
  }
  let closure_0 = PerformanceResourceTiming;
  callback2(PerformanceResourceTiming, PerformanceEntry);
  let obj = {
    key: "fetchStart",
    get() {
      return callback2(this, closure_7)[closure_7];
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "requestStart",
    get() {
      return callback2(this, closure_8)[closure_8];
    }
  };
  items[1] = obj;
  obj = {
    key: "connectStart",
    get() {
      return callback2(this, closure_9)[closure_9];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "connectEnd",
    get() {
      return callback2(this, closure_10)[closure_10];
    }
  };
  items[4] = {
    key: "responseStart",
    get() {
      return callback2(this, closure_11)[closure_11];
    }
  };
  items[5] = {
    key: "responseEnd",
    get() {
      return callback2(this, closure_12)[closure_12];
    }
  };
  items[6] = {
    key: "responseStatus",
    get() {
      return callback2(this, closure_13)[closure_13];
    }
  };
  items[7] = {
    key: "toJSON",
    value: function toJSON() {
      const obj = { fetchStart: callback2(this, closure_7)[closure_7], requestStart: callback2(this, closure_8)[closure_8], connectStart: callback2(this, closure_9)[closure_9], connectEnd: callback2(this, closure_10)[closure_10], responseStart: callback2(this, closure_11)[closure_11], responseEnd: callback2(this, closure_12)[closure_12], responseStatus: callback2(this, closure_13)[closure_13] };
      return Object.assign({}, function _superPropGet(PerformanceResourceTiming, toJSON, arg2, arg3) {
        let prototype = PerformanceResourceTiming;
        if (1) {
          prototype = PerformanceResourceTiming.prototype;
        }
        const tmpResult = closure_4(closure_3(prototype), "toJSON", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(PerformanceResourceTiming, "toJSON", this, 3)([]), obj);
    }
  };
  return callback(PerformanceResourceTiming, items);
}(arg1(dependencyMap[8]).PerformanceEntry);
