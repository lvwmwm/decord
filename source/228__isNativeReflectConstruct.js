// Module ID: 228
// Function ID: 3167
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 229]

// Module 228 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import pd from "pd";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getSignal(arg0) {
  const value = weakMap1.get(arg0);
  if (null == value) {
    let _TypeError = TypeError;
    let str = "null";
    if (null !== arg0) {
      str = typeof arg0;
    }
    const prototype = _TypeError.prototype;
    _TypeError = new _TypeError("Expected 'this' to be an 'AbortController' object, but got " + str);
    throw _TypeError;
  } else {
    return value;
  }
}
const tmp2 = ((EventTarget) => {
  class AbortSignal {
    constructor() {
      self = this;
      tmp = outer1_2(this, AbortSignal);
      obj = outer1_5(AbortSignal);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, [], outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      typeError = new TypeError("AbortSignal cannot be constructed directly");
      throw typeError;
    }
  }
  _inherits(AbortSignal, EventTarget);
  const items = [
    {
      key: "aborted",
      get() {
        const self = this;
        const value = outer1_8.get(this);
        if ("boolean" !== typeof value) {
          let _TypeError = TypeError;
          let str = "null";
          if (null !== self) {
            str = typeof self;
          }
          const prototype = _TypeError.prototype;
          _TypeError = new _TypeError("Expected 'this' to be an 'AbortSignal' object, but got " + str);
          throw _TypeError;
        } else {
          return value;
        }
      }
    }
  ];
  return _defineProperties(AbortSignal, items);
})(require("pd").EventTarget);
let closure_7 = tmp2;
pd.defineEventAttribute(tmp2.prototype, "abort");
const weakMap = new WeakMap();
Object.defineProperties(tmp2.prototype, { aborted: { enumerable: true } });
let tmp6 = "function" === typeof Symbol;
if (tmp6) {
  const _Symbol = Symbol;
  tmp6 = "symbol" === typeof Symbol.toStringTag;
}
if (tmp6) {
  const _Object = Object;
  const _Symbol2 = Symbol;
  Object.defineProperty(tmp2.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
}
const tmp8 = (() => {
  class AbortController {
    constructor() {
      tmp = outer1_2(this, AbortController);
      obj = Object.create(outer1_7.prototype);
      _EventTarget = AbortController(outer1_1[5]).EventTarget;
      callResult = _EventTarget.call(obj);
      result = outer1_8.set(obj, false);
      result1 = outer1_9.set(this, obj);
      return;
    }
  }
  let obj = {
    key: "signal",
    get() {
      return outer1_11(this);
    }
  };
  const items = [obj, ];
  obj = {
    key: "abort",
    value: function abort() {
      let obj = outer1_11(this);
      if (false === outer1_8.get(obj)) {
        const result = outer1_8.set(obj, true);
        obj = { type: "abort" };
        obj.dispatchEvent(obj);
      }
    }
  };
  items[1] = obj;
  return _defineProperties(AbortController, items);
})();
const weakMap1 = new WeakMap();
Object.defineProperties(tmp8.prototype, { signal: { enumerable: true }, abort: { enumerable: true } });
let tmp11 = "function" === typeof Symbol;
if (tmp11) {
  const _Symbol3 = Symbol;
  tmp11 = "symbol" === typeof Symbol.toStringTag;
}
if (tmp11) {
  const _Object2 = Object;
  const _Symbol4 = Symbol;
  Object.defineProperty(tmp8.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
}
module.exports.default = tmp8;
module.exports.AbortController = tmp8;
module.exports.AbortSignal = tmp2;

export const AbortController = tmp8;
export const AbortSignal = tmp2;
export default tmp8;
