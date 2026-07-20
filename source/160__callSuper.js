// Module ID: 160
// Function ID: 2450
// Name: _callSuper
// Dependencies: []

// Module 160 (_callSuper)
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
  return closure_2(arg0, constructResult);
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
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_6 = importDefaultResult("detail");
let closure_7 = importDefaultResult("detail");

export const PerformanceMark = (PerformanceEntry) => {
  class PerformanceMark {
    constructor(arg0, arg1) {
      tmp = PerformanceMark;
      tmp2 = PerformanceMark(this, PerformanceMark);
      obj = { name: PerformanceEntry, entryType: "mark" };
      startTime = undefined;
      tmp3 = closure_8;
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
      definePropertyResult = Object.defineProperty(tmp3Result, closure_6, { writable: true, value: undefined });
      if (arg1) {
        tmp8 = closure_5;
        tmp9 = closure_6;
        closure_5(tmp3Result, closure_6)[closure_6] = arg1.detail;
      }
      return tmp3Result;
    }
  }
  let closure_0 = PerformanceMark;
  callback3(PerformanceMark, PerformanceEntry);
  const items = [
    {
      key: "detail",
      get() {
        return callback(this, closure_6)[closure_6];
      }
    }
  ];
  return callback(PerformanceMark, items);
}(arg1(dependencyMap[7]).PerformanceEntry);
export const PerformanceMeasure = (PerformanceEntry) => {
  class PerformanceMeasure {
    constructor(arg0, arg1) {
      tmp = PerformanceMeasure(this, PerformanceMeasure);
      obj = { name: PerformanceEntry, entryType: "measure", startTime: arg1.startTime, duration: arg1.duration };
      items = [];
      items[0] = obj;
      tmp2 = closure_8(this, PerformanceMeasure, items);
      definePropertyResult = Object.defineProperty(tmp2, closure_7, { writable: true, value: undefined });
      if (arg1) {
        tmp4 = closure_5;
        tmp5 = closure_7;
        closure_5(tmp2, closure_7)[closure_7] = arg1.detail;
      }
      return tmp2;
    }
  }
  let closure_0 = PerformanceMeasure;
  callback3(PerformanceMeasure, PerformanceEntry);
  const items = [
    {
      key: "detail",
      get() {
        return callback(this, closure_7)[closure_7];
      }
    }
  ];
  return callback(PerformanceMeasure, items);
}(arg1(dependencyMap[7]).PerformanceEntry);
