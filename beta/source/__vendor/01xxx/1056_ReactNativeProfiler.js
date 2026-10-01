// Module ID: 1056
// Function ID: 1057
// Name: ReactNativeProfiler
// Dependencies: [41, 42, 93, 95, 96, 98, 1017, 682, 1000, 1057, 1018]

// Module 1056 (ReactNativeProfiler)
import _mod682 from "module_682" /* 682 */;
import init from "init" /* 1000 */;
import captureAppStart from "captureAppStart" /* 1017 */;
import _mod1018 from "module_1018" /* 1018 */;
import _mod1057 from "module_1057" /* 1057 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const onRunApplicationHook = {
  appStartReported: false,
  onRunApplicationHook() {
    onRunApplicationHook.appStartReported = false;
  }
};
class ReactNativeProfiler {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReactNativeProfiler);
    const _setRootComponentCreationTimestampMs = captureAppStart._setRootComponentCreationTimestampMs;
    captureAppStart;
    const obj = _mod682;
    const result = _setRootComponentCreationTimestampMs(1000 * obj.timestampInSeconds());
    const items = [arg0];
    const obj2 = _getPrototypeOf(ReactNativeProfiler);
    const tmp4 = _getPrototypeOf;
    const tmp5 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj2, items, tmp4(self).constructor);
    } else {
      constructResult = obj2.apply(self, items);
    }
    const tmp5Result = tmp5(self, constructResult);
    tmp5Result.name = "ReactNativeProfiler";
    return tmp5Result;
  }
}
_inherits(ReactNativeProfiler, init.Profiler);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    let fn = _get(_getPrototypeOf(ReactNativeProfiler.prototype), "componentDidMount", this);
    if (typeof fn === "function") {
      fn = (arg0) => fn.apply(self, arg0);
    }
    !fn([]);
    if (!appStartReported.appStartReported) {
      self._reportAppStart();
      tmp2.appStartReported = true;
    }
  }
};
let items = [
  entry,
  {
    key: "_reportAppStart",
    value: function _reportAppStart() {
      const obj = init;
      const client = obj.getClient();
      if (client) {
        const addIntegration = client.addIntegration;
        const tmp5 = null === addIntegration || undefined === addIntegration;
        if (!tmp5) {
          const self = this;
          const call = addIntegration.call;
          const tmpResult = _mod1057;
          call(client, tmpResult.createIntegration(this.name));
        }
        const tmpResult3 = _mod1018;
        const appRegistryIntegration = tmpResult3.getAppRegistryIntegration(client);
        if (appRegistryIntegration) {
          if (typeof appRegistryIntegration.onRunApplication === "function") {
            appRegistryIntegration.onRunApplication(onRunApplicationHook.onRunApplicationHook);
          }
          const tmpResult4 = captureAppStart;
          tmpResult4._captureAppStart({ isManual: false });
        }
        const debug = tmp(682).debug;
        debug.warn("AppRegistryIntegration.onRunApplication not found or invalid.");
      }
    }
  }
];
const ReactNativeProfiler_export = _createClass(ReactNativeProfiler, items);

export { ReactNativeProfiler_export as ReactNativeProfiler };
