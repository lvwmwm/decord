// Module ID: 12159
// Function ID: 12160
// Name: NEVER
// Dependencies: [158, 42, 41, 93, 95, 98, 12160]
// Exports: $constructor, config

// Module 12159 (NEVER)
import captureStackTrace from "captureStackTrace" /* 12160 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
import hasOwnProperty_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits_mod from "_inherits" /* 98 */;

let c10;

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
let _classCallCheck = _classCallCheck_mod;
let hasOwnProperty = hasOwnProperty_mod;
let _inherits = _inherits_mod;
let closure_9 = { value: "Path", enumerable: true };
let _Error = null;
if ("captureStackTrace" in Error) {
  _Error = Error;
}
export function $ZodAsyncError() {
  let constructResult;
  const self = this;
  _classCallCheck(this, $ZodAsyncError);
  const items = ["Encountered Promise during synchronous parse. Use .parseAsync() instead."];
  const obj = _getPrototypeOf($ZodAsyncError);
  const tmp2 = _getPrototypeOf;
  const tmp3 = hasOwnProperty;
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  return tmp3(self, constructResult);
}
_inherits($ZodAsyncError, _wrapNativeSuper(Error));
export function $ZodEncodeError(name) {
  let constructResult;
  const self = this;
  _classCallCheck(this, $ZodEncodeError);
  const items = ["Encountered unidirectional transform during encode: " + name];
  const obj = _getPrototypeOf($ZodEncodeError);
  const tmp2 = _getPrototypeOf;
  const tmp3 = hasOwnProperty;
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp3Result = tmp3(self, constructResult);
  tmp3Result.name = "ZodEncodeError";
  return tmp3Result;
}
_inherits($ZodEncodeError, _wrapNativeSuper(Error));
if (globalThis.__zod_globalConfig == null) {
  tmp8.__zod_globalConfig = {};
}
const tmp9 = (() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          let value;
          try {
            value = ownPropertyDescriptor.get();
          } catch (err) {
          }
          if (undefined !== value) {
            const _Object2 = Object;
            const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
            Object.defineProperty(exports, ownPropertyNames[num], obj);
          }
        }
      }
    }
    num = num + 1;
    tmp = tmp2;
  }
  const frozen = Object.freeze(tmp);
})();

export function $constructor(ZodError, initializer, range3, Parent) {
  let closure_7;
  let closure_0 = ZodError;
  let weakSet = range3;
  class Internals {
    constructor(Definition) {
      ({ def: Definition, constr, traits: new Set() });
      new Set();
    }
  }
  function init(_zod, Definition) {
    if (_zod._zod) {
      const traits = _zod._zod.traits;
    } else {
      const obj3 = Object.create(Internals.prototype);
      new Internals(Definition);
      closure_9.value = obj3;
      try {
        const _Object = Object;
        Object.defineProperty(_zod, "_zod", closure_9);
        closure_9.value = undefined;
      } catch (tmp9) {
        closure_9.value = undefined;
        throw tmp9;
      }
    }
    let traits2 = _zod._zod.traits;
    traits2.add(ZodError);
    initializer(_zod, Definition);
    const tmp13 = weakSet;
    if (tmp13) {
      const _Object2 = Object;
      const prototypeOf = Object.getPrototypeOf(_zod);
      const prototype = _zod._zod.constr.prototype;
      traits2 = prototypeOf;
      if (traits2) {
        let tmp16 = prototypeOf;
        traits2 = prototypeOf;
        if (prototypeOf !== prototype) {
          const _Object3 = Object;
          const prototypeOf1 = Object.getPrototypeOf(tmp16);
          traits2 = prototypeOf1;
          while (prototypeOf1) {
            tmp16 = prototypeOf1;
            traits2 = prototypeOf1;
            if (prototypeOf1 === prototype) {
              break;
            }
          }
        }
      }
      if (traits2 == null) {
        traits2 = prototypeOf;
      }
      const obj = weakSet;
      if (!weakSet.has(traits2)) {
        obj.add(traits2);
        captureStackTrace.members(traits2, range3);
      }
    }
    const prototype2 = fn.prototype;
    for (const key10061 in prototype2) {
      let _Object4 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(prototype2, key10061)) {
        continue;
      } else {
        if (key10061 in _zod) {
          continue;
        } else {
          let obj2 = prototype2[key10061];
          _zod[key10061] = obj2.bind(_zod);
          continue;
        }
        continue;
      }
      continue;
    }
  }
  const constr = function _(arg0) {
    function newError(arg0) {
      if (c10) {
        const stackTraceLimit = tmp.stackTraceLimit;
        if (typeof stackTraceLimit === "number") {
          try {
            c10.stackTraceLimit = 0;
            try {
              const self = this;
              const self2 = this;
              c10.stackTraceLimit = stackTraceLimit;
              const tmp3 = new arg0();
              return tmp3;
            } catch (tmp5) {
              c10.stackTraceLimit = stackTraceLimit;
              throw tmp5;
            }
          } catch (err) {
            c10 = null;
            const self3 = this;
            const self4 = this;
            const tmp7 = new arg0();
            return tmp7;
          }
        }
      }
      const tmp2 = new arg0();
      return tmp2;
    }
    Parent = undefined;
    if (Parent != null) {
      Parent = Parent.Parent;
    }
    let self = this;
    if (Parent) {
      let tmp2 = closure_7;
      self = newError(closure_7);
    }
    let tmp3 = init(self, arg0);
    const deferred = self._zod.deferred;
    if (deferred) {
      const tmp5 = deferred;
      for (const item10017 of deferred) {
        let item10017Result = item10017();
        continue;
      }
      self._zod.deferred = undefined;
    }
    let postProcessor;
    if (__zod_globalConfig != null) {
      postProcessor = __zod_globalConfig.postProcessor;
    }
    if (postProcessor) {
      postProcessor(self);
    }
    return self;
  };
  _classCallCheck = range3;
  if (_classCallCheck) {
    let tmp2 = globalThis;
    const _WeakSet = WeakSet;
    let self = this;
    let self2 = this;
    weakSet = new WeakSet();
  }
  Parent = undefined;
  if (Parent != null) {
    Parent = Parent.Parent;
  }
  if (Parent == null) {
    const tmp4 = globalThis;
    Parent = Object;
  }
  class Definition {
    constructor() {
      let constructResult;
      const self = this;
      range3(this, Definition);
      const obj = init(Definition);
      const tmp2 = init;
      const tmp3 = weakSet;
      if (fn()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
      } else {
        constructResult = obj(...arguments);
      }
      return tmp3(self, constructResult);
    }
  }
  let tmp5 = _inherits(Definition, Parent);
  const tmp6 = Internals(Definition);
  _inherits = tmp6;
  let obj = { value: ZodError };
  Object.defineProperty(tmp6, "name", obj);
  Object.defineProperty(constr, "init", { value: init });
  let obj2 = {
    value(_zod) {
      Parent = undefined;
      if (closure_2 != null) {
        Parent = tmp.Parent;
      }
      if (Parent) {
        Parent = _zod instanceof tmp.Parent;
      }
      let tmp3 = Parent;
      if (!tmp3) {
        let hasItem;
        if (_zod != null) {
          _zod = _zod._zod;
          if (_zod != null) {
            const traits = _zod.traits;
            if (traits != null) {
              hasItem = traits.has(ZodError);
            }
          }
        }
        tmp3 = hasItem;
      }
      return tmp3;
    }
  };
  Object.defineProperty(constr, Symbol.hasInstance, obj2);
  let obj3 = { value: ZodError };
  Object.defineProperty(constr, "name", obj3);
  return constr;
}
export function config(arg0) {
  const tmp = arg0;
  if (tmp) {
    const _Object = Object;
    const merged = Object.assign(exports.globalConfig, arg0);
  }
  return exports.globalConfig;
}
export const NEVER = Object.freeze({ status: "aborted" });
export const $brand = Symbol("zod_brand");
export const globalConfig = globalThis.__zod_globalConfig;
