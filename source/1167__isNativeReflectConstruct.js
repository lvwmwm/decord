// Module ID: 1167
// Function ID: 13275
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 1128, 794, 1111, 1168, 1129]

// Module 1167 (_isNativeReflectConstruct)
import _captureAppStart from "_captureAppStart";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = {
  appStartReported: false,
  onRunApplicationHook() {
    obj.appStartReported = false;
  }
};

export const ReactNativeProfiler = ((Profiler) => {
  class ReactNativeProfiler {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, ReactNativeProfiler);
      obj = ReactNativeProfiler(outer1_1[6]);
      obj2 = ReactNativeProfiler(outer1_1[7]);
      result = obj._setRootComponentCreationTimestampMs(1000 * obj2.timestampInSeconds());
      items = [];
      items[0] = Profiler;
      obj3 = outer1_5(ReactNativeProfiler);
      tmp3 = outer1_4;
      if (outer1_9()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = outer1_5;
        constructResult = Reflect.construct(obj3, items, outer1_5(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result.name = "ReactNativeProfiler";
      return tmp3Result;
    }
  }
  callback2(ReactNativeProfiler, Profiler);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      !(function _superPropGet(ReactNativeProfiler, componentDidMount, arg2, arg3) {
        let closure_0 = arg2;
        let prototype = ReactNativeProfiler;
        if (1) {
          prototype = ReactNativeProfiler.prototype;
        }
        const tmpResult = outer2_6(outer2_5(prototype), "componentDidMount", arg2);
        let closure_1 = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(closure_0, arg0);
          }
        }
        return fn;
      })(ReactNativeProfiler, "componentDidMount", this, 3)([]);
      if (!outer1_8.appStartReported) {
        self._reportAppStart();
        outer1_8.appStartReported = true;
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "_reportAppStart",
    value: function _reportAppStart() {
      let obj = ReactNativeProfiler(outer1_1[8]);
      const client = obj.getClient();
      if (client) {
        const addIntegration = client.addIntegration;
        if (!tmp3) {
          const self = this;
          addIntegration.call(client, ReactNativeProfiler(outer1_1[9]).createIntegration(this.name));
          const obj2 = ReactNativeProfiler(outer1_1[9]);
        }
        let flag = ReactNativeProfiler(outer1_1[10]).getAppRegistryIntegration(client);
        if (!flag) {
          const debug = ReactNativeProfiler(outer1_1[7]).debug;
          debug.warn("AppRegistryIntegration.onRunApplication not found or invalid.");
          obj = {};
          flag = false;
          obj.isManual = false;
          ReactNativeProfiler(outer1_1[6])._captureAppStart(obj);
          const obj4 = ReactNativeProfiler(outer1_1[6]);
        }
        flag.onRunApplication(outer1_8.onRunApplicationHook);
        const obj3 = ReactNativeProfiler(outer1_1[10]);
        tmp3 = null === addIntegration || undefined === addIntegration;
      }
    }
  };
  items[1] = obj;
  return callback(ReactNativeProfiler, items);
})(require("init").Profiler);
