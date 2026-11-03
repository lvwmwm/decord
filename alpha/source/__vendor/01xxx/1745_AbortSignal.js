// Module ID: 1745
// Function ID: 1746
// Name: AbortSignal
// Dependencies: [41, 42, 93, 95, 98, 1737]

// Module 1745 (AbortSignal)
import EventTargetLite from "EventTargetLite" /* 1737 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
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
class AbortSignal {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, AbortSignal);
    const items1 = [...items];
    const obj = _getPrototypeOf(AbortSignal);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.aborted = false;
    tmp3Result.reason = undefined;
    tmp3Result.onabort = null;
    return tmp3Result;
  }
}
_inherits(AbortSignal, EventTargetLite.EventTargetLite);
const entry = {
  key: "throwIfAborted",
  value: function throwIfAborted() {
    if (this.aborted) {
      throw this.reason;
    }
  }
};
let items = [
  entry,
  {
    key: "__abort",
    value: function __abort(error) {
      const self = this;
      if (!this.aborted) {
        let tmp = error;
        self.aborted = true;
        if (undefined === error) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          error = new Error("[Worklets] The operation was aborted.");
          error.name = "AbortError";
          tmp = error;
        }
        self.reason = tmp;
        self.__dispatch("abort");
      }
    }
  }
];
const entry1 = {
  key: "abort",
  value: function abort(error) {
    const obj = AbortSignal();
    obj.__abort(error);
    return obj;
  }
};
let items1 = [
  entry1,
  {
    key: "timeout",
    value: function timeout(promise) {
      const tmp = AbortSignal();
      let closure_0 = tmp;
      const timerId = setTimeout(() => {
        __abort = __abort.__abort;
        const error = new Error("[Worklets] The operation timed out.");
        error.name = "TimeoutError";
        return __abort(error);
      }, promise);
      return tmp;
    }
  }
];
const importDefaultResultResult = _createClass(AbortSignal, items, items1);
class AbortController {
  constructor() {
    _classCallCheck(this, AbortController);
    this.signal = new importDefaultResultResult();
    new importDefaultResultResult();
  }
}
const entry2 = {
  key: "abort",
  value: function abort(error) {
    const signal = this.signal;
    signal.__abort(error);
  }
};
const items2 = [entry2];
const AbortSignal_export = importDefaultResultResult;
const AbortController_export = _createClass(AbortController, items2);

export { AbortSignal_export as AbortSignal };
export { AbortController_export as AbortController };
