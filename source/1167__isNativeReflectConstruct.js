// Module ID: 1167
// Function ID: 13274
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1167 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const obj = {
  appStartReported: false,
  onRunApplicationHook() {
    obj.appStartReported = false;
  }
};

export const ReactNativeProfiler = (Profiler) => {
  class ReactNativeProfiler {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, ReactNativeProfiler);
      obj = ReactNativeProfiler(closure_1[6]);
      obj2 = ReactNativeProfiler(closure_1[7]);
      result = obj._setRootComponentCreationTimestampMs(1000 * obj2.timestampInSeconds());
      items = [];
      items[0] = Profiler;
      obj3 = closure_5(ReactNativeProfiler);
      tmp3 = closure_4;
      if (closure_9()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_5;
        constructResult = Reflect.construct(obj3, items, closure_5(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result.name = "ReactNativeProfiler";
      return tmp3Result;
    }
  }
  const arg1 = ReactNativeProfiler;
  callback2(ReactNativeProfiler, Profiler);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      !function _superPropGet(ReactNativeProfiler, componentDidMount, arg2, arg3) {
        let prototype = ReactNativeProfiler;
        if (1) {
          prototype = ReactNativeProfiler.prototype;
        }
        const tmpResult = closure_6(closure_5(prototype), "componentDidMount", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(ReactNativeProfiler, "componentDidMount", this, 3)([]);
      if (!closure_8.appStartReported) {
        self._reportAppStart();
        closure_8.appStartReported = true;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "_reportAppStart",
    value: function _reportAppStart() {
      let obj = ReactNativeProfiler(closure_1[8]);
      const client = obj.getClient();
      if (client) {
        const addIntegration = client.addIntegration;
        if (!tmp3) {
          const self = this;
          addIntegration.call(client, ReactNativeProfiler(closure_1[9]).createIntegration(this.name));
          const obj2 = ReactNativeProfiler(closure_1[9]);
        }
        let flag = ReactNativeProfiler(closure_1[10]).getAppRegistryIntegration(client);
        if (!flag) {
          const debug = ReactNativeProfiler(closure_1[7]).debug;
          debug.warn("AppRegistryIntegration.onRunApplication not found or invalid.");
          obj = {};
          flag = false;
          obj.isManual = false;
          ReactNativeProfiler(closure_1[6])._captureAppStart(obj);
          const obj4 = ReactNativeProfiler(closure_1[6]);
        }
        flag.onRunApplication(closure_8.onRunApplicationHook);
        const obj3 = ReactNativeProfiler(closure_1[10]);
        const tmp3 = null === addIntegration || undefined === addIntegration;
      }
    }
  };
  items[1] = obj;
  return callback(ReactNativeProfiler, items);
}(arg1(dependencyMap[8]).Profiler);
