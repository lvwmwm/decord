// Module ID: 159
// Function ID: 2441
// Name: ReactNativeStartupTiming
// Dependencies: []

// Module 159 (ReactNativeStartupTiming)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_3 = importDefaultResult("startTime");
let closure_4 = importDefaultResult("endTime");
let closure_5 = importDefaultResult("initializeRuntimeStart");
let closure_6 = importDefaultResult("initializeRuntimeEnd");
let closure_7 = importDefaultResult("executeJavaScriptBundleEntryPointStart");
let closure_8 = importDefaultResult("executeJavaScriptBundleEntryPointEnd");
const tmp3 = () => {
  class ReactNativeStartupTiming {
    constructor(arg0) {
      self = this;
      tmp = ReactNativeStartupTiming(this, ReactNativeStartupTiming);
      definePropertyResult = Object.defineProperty(this, closure_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, closure_6, { writable: true, value: undefined });
      definePropertyResult4 = Object.defineProperty(this, closure_7, { writable: true, value: undefined });
      definePropertyResult5 = Object.defineProperty(this, closure_8, { writable: true, value: undefined });
      if (null != arg0) {
        tmp8 = closure_2;
        tmp9 = closure_3;
        closure_2(self, closure_3)[closure_3] = arg0.startTime;
        tmp10 = closure_4;
        closure_2(self, closure_4)[closure_4] = arg0.endTime;
        tmp11 = closure_5;
        closure_2(self, closure_5)[closure_5] = arg0.initializeRuntimeStart;
        tmp12 = closure_6;
        closure_2(self, closure_6)[closure_6] = arg0.initializeRuntimeEnd;
        tmp13 = closure_7;
        closure_2(self, closure_7)[closure_7] = arg0.executeJavaScriptBundleEntryPointStart;
        tmp14 = closure_8;
        closure_2(self, closure_8)[closure_8] = arg0.executeJavaScriptBundleEntryPointEnd;
      }
      return;
    }
  }
  let closure_0 = ReactNativeStartupTiming;
  let obj = {
    key: "startTime",
    get() {
      return callback(this, closure_3)[closure_3];
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "endTime",
    get() {
      return callback(this, closure_4)[closure_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "initializeRuntimeStart",
    get() {
      return callback(this, closure_5)[closure_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "initializeRuntimeEnd",
    get() {
      return callback(this, closure_6)[closure_6];
    }
  };
  items[4] = {
    key: "executeJavaScriptBundleEntryPointStart",
    get() {
      return callback(this, closure_7)[closure_7];
    }
  };
  items[5] = {
    key: "executeJavaScriptBundleEntryPointEnd",
    get() {
      return callback(this, closure_8)[closure_8];
    }
  };
  return callback(ReactNativeStartupTiming, items);
}();
arg1(dependencyMap[4]).setPlatformObject(tmp3);

export default tmp3;
