// Module ID: 228
// Function ID: 3167
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 228 (_isNativeReflectConstruct)
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
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
const tmp2 = (EventTarget) => {
  class AbortSignal {
    constructor() {
      self = this;
      tmp = closure_2(this, AbortSignal);
      obj = closure_5(AbortSignal);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      typeError = new TypeError("AbortSignal cannot be constructed directly");
      throw typeError;
    }
  }
  const require = AbortSignal;
  callback2(AbortSignal, EventTarget);
  const items = [
    {
      key: "aborted",
      get() {
        const self = this;
        const value = closure_8.get(this);
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
  return callback(AbortSignal, items);
}(require(dependencyMap[5]).EventTarget);
const _module = require(dependencyMap[5]);
_module.defineEventAttribute(tmp2.prototype, "abort");
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
  Object.defineProperty(tmp2.prototype, Symbol.toStringTag, {});
}
const tmp8 = () => {
  class AbortController {
    constructor() {
      tmp = closure_2(this, AbortController);
      obj = Object.create(closure_7.prototype);
      _EventTarget = AbortController(closure_1[5]).EventTarget;
      callResult = _EventTarget.call(obj);
      result = closure_8.set(obj, false);
      result1 = closure_9.set(this, obj);
      return;
    }
  }
  const require = AbortController;
  let obj = {
    key: "signal",
    get() {
      return callback2(this);
    }
  };
  const items = [obj, ];
  obj = {
    key: "abort",
    value: function abort() {
      let obj = callback2(this);
      if (false === store.get(obj)) {
        const result = store.set(obj, true);
        obj = { type: "abort" };
        obj.dispatchEvent(obj);
      }
    }
  };
  items[1] = obj;
  return callback(AbortController, items);
}();
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
  Object.defineProperty(tmp8.prototype, Symbol.toStringTag, {});
}
module.exports.default = tmp8;
module.exports.AbortController = tmp8;
module.exports.AbortSignal = tmp2;

export const AbortController = tmp8;
export const AbortSignal = tmp2;
export default tmp8;
