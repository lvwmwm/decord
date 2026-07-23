// Module ID: 12010
// Function ID: 92782
// Name: _callSuper
// Dependencies: [162, 7, 6, 15, 17, 18]
// Exports: $constructor, config

// Module 12010 (_callSuper)
import _wrapNativeSuper from "_wrapNativeSuper";
import _defineProperties from "_defineProperties";
import _classCallCheck from "_classCallCheck";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = _getPrototypeOf(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, _getPrototypeOf(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}

export const $constructor = function $constructor(ZodError, initializer, Parent) {
  let closure_0 = ZodError;
  let closure_1 = initializer;
  let closure_2 = Parent;
  function init(_zod, def) {
    if (!_zod._zod) {
      const _Object = Object;
      let obj = {};
      obj = { def, constr: fn };
      const _Set = Set;
      const set = new Set();
      obj.traits = set;
      obj.value = obj;
      obj.enumerable = false;
      Object.defineProperty(_zod, "_zod", obj);
    }
    const traits = _zod._zod.traits;
    if (!traits.has(closure_0)) {
      const traits2 = _zod._zod.traits;
      traits2.add(closure_0);
      initializer(_zod, def);
      const prototype2 = fn.prototype;
      const _Object2 = Object;
      const keys = Object.keys(prototype2);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp14 = keys[num];
        if (!(tmp14 in _zod)) {
          let obj3 = prototype2[tmp14];
          _zod[tmp14] = obj3.bind(_zod);
        }
      }
    }
  }
  const fn = function _(arg0) {
    let self = this;
    if (null != Parent) {
      self = tmp;
      if (Parent.Parent) {
        const prototype = tmp3.prototype;
        self = new tmp3();
      }
    }
    init(self, arg0);
    const _zod = self._zod;
    if (null == _zod.deferred) {
      _zod.deferred = [];
    }
    for (const item10022 of tmp7) {
      let item10022Result = item10022();
      continue;
    }
    return self;
  };
  Parent = undefined;
  if (null != Parent) {
    Parent = Parent.Parent;
  }
  if (null == Parent) {
    Parent = Object;
  }
  const tmp3 = ((Parent) => {
    class Definition {
      constructor() {
        tmp = closure_2(this, Definition);
        return outer2_6(this, Definition, arguments);
      }
    }
    fn(Definition, Parent);
    return initializer(Definition);
  })(Parent);
  let closure_3 = tmp3;
  let obj = { value: ZodError };
  Object.defineProperty(tmp3, "name", obj);
  Object.defineProperty(fn, "init", { value: init });
  obj = {
    value(_zod) {
      Parent = null != Parent;
      if (Parent) {
        Parent = Parent.Parent;
      }
      if (Parent) {
        Parent = _zod instanceof Parent.Parent;
      }
      let tmp4 = !tmp3;
      if (!Parent) {
        let hasItem;
        if (null != _zod) {
          _zod = _zod._zod;
          if (null != _zod) {
            const traits = _zod.traits;
            if (null != traits) {
              hasItem = traits.has(closure_0);
            }
          }
        }
        tmp4 = hasItem;
      }
      return tmp4;
    }
  };
  Object.defineProperty(fn, Symbol.hasInstance, obj);
  obj = { value: ZodError };
  Object.defineProperty(fn, "name", obj);
  return fn;
};
export const config = function config(arg0) {
  if (arg0) {
    const _Object = Object;
    const merged = Object.assign(exports.globalConfig, arg0);
  }
  return exports.globalConfig;
};
export const NEVER = Object.freeze({ status: "aborted" });
export const $brand = Symbol("zod_brand");
export const $ZodAsyncError = ((arg0) => {
  function $ZodAsyncError() {
    outer1_2(this, $ZodAsyncError);
    return outer1_6(this, $ZodAsyncError, ["Encountered Promise during synchronous parse. Use .parseAsync() instead."]);
  }
  _inherits($ZodAsyncError, arg0);
  return _defineProperties($ZodAsyncError);
})(_wrapNativeSuper(Error));
export const $ZodEncodeError = ((arg0) => {
  function $ZodEncodeError(name) {
    outer1_2(this, $ZodEncodeError);
    const items = ["Encountered unidirectional transform during encode: " + name];
    const tmp2 = outer1_6(this, $ZodEncodeError, items);
    tmp2.name = "ZodEncodeError";
    return tmp2;
  }
  _inherits($ZodEncodeError, arg0);
  return _defineProperties($ZodEncodeError);
})(_wrapNativeSuper(Error));
export const globalConfig = {};
