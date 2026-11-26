// Module ID: 12162
// Function ID: 12163
// Name: $ZodError
// Dependencies: [12160, 12159]
// Exports: flattenError, formatError, prettifyError, treeifyError

// Module 12162 ($ZodError)
import NEVER from "NEVER" /* 12159 */;
import captureStackTrace2 from "captureStackTrace" /* 12160 */;

let _errors, errors, hasOwnProperty, key;

let self = this;
function node(arg0, arg1, fn) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  if (!hasOwnProperty.call(arg0, arg1)) {
    if ("__proto__" === arg1) {
      const _Object = Object;
      const obj = { value: fn(), writable: true, enumerable: true, configurable: true };
      defineProperty(arg0, arg1, obj);
    } else {
      arg0[arg1] = fn();
    }
  }
  return arg0[arg1];
}
function toDotPath(path) {
  const items = [];
  const mapped = path.map((key) => {
    if (typeof key === "object") {
      key = key.key;
    }
    return key;
  });
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (typeof nextResult === "number") {
      let _HermesInternal3 = HermesInternal;
      let arr = items.push("[" + tmp3 + "]");
    } else if (typeof tmp3 === "symbol") {
      let _JSON2 = JSON;
      let _String = String;
      let _HermesInternal2 = HermesInternal;
      let arr6 = items.push("[" + JSON.stringify(String(tmp3)) + "]");
    } else {
      let obj = /[^\w$]/;
      if (obj.test(tmp3)) {
        let _JSON = JSON;
        let _HermesInternal = HermesInternal;
        let arr7 = items.push("[" + JSON.stringify(tmp3) + "]");
      } else {
        if (items.length) {
          let arr8 = items.push(".");
        }
        let arr9 = items.push(tmp3);
      }
    }
    continue;
  }
  return items.join("");
}
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_1 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  let _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_2 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_1(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_2(obj, __esModule);
  return obj;
});
const captureStackTrace = tmp5(captureStackTrace2);
let closure_4 = {
  get: function _getMessage() {
    const _zod = this._zod;
    if (_zod.message == null) {
      const _JSON = JSON;
      _zod.message = JSON.stringify(_zod.def, captureStackTrace.jsonStringifyReplacer, 2);
    }
    return _zod.message;
  },
  set: function _setMessage(message) {
    this._zod.message = message;
  },
  enumerable: true,
  configurable: true
};
let closure_5 = { value: "Path", enumerable: true };
let items = [Object.prototype, Error.prototype];
const weakSet = new WeakSet(items);
function initializer(arg0, value) {
  arg0.name = "$ZodError";
  closure_5.value = value;
  Object.defineProperty(arg0, "issues", closure_5);
  closure_5.value = undefined;
  Object.defineProperty(arg0, "message", closure_4);
  const prototypeOf = Object.getPrototypeOf(arg0);
  let obj = weakSet;
  if (!weakSet.has(prototypeOf)) {
    obj.add(prototypeOf);
    const _Object = Object;
    const obj2 = {
      configurable: true,
      enumerable: false,
      get() {
          const self = this;
          function value() {
            return self.message;
          }
          Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
          return value;
        },
      set(value) {
          const obj = { value, configurable: true, writable: true };
          Object.defineProperty(this, "toString", obj);
        }
    };
    Object.defineProperty(prototypeOf, "toString", obj2);
  }
}
let obj = { Parent: Error };
let tmp8 = (() => {
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

export function flattenError(arg0, arg1) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function t(message) {
      return message.message;
    };
  }
  const fieldErrors = {};
  const formErrors = [];
  const iter = arg0.issues[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.path.length > 0) {
      let arr2 = node(fieldErrors, tmp2.path[0], () => []);
      let arr = arr2.push(fn(tmp2));
    } else {
      let arr4 = formErrors.push(fn(tmp2));
    }
    continue;
  }
  return { formErrors, fieldErrors };
}
export function formatError(arg0, arg1) {
  if (arg1 === undefined) {
    const fn = function t(message) {
      return message.message;
    };
  }
  let obj = { _errors: [] };
  function processError(arg0) {
    let items = arg1;
    if (arg1 === undefined) {
      items = [];
    }
    function _loop(iter) {
      let obj4;
      let sum;
      if ("invalid_union" === iter.code) {
        if (iter.errors.length) {
          errors = iter.errors;
          const mapped = errors.map((issues) => {
            items = [...closure_0.path];
            obj = { issues };
            processError(obj, items);
          });
        }
      }
      if ("invalid_key" === iter.code) {
        items = [];
        const obj2 = { issues: iter.issues };
        HermesBuiltin.arraySpread(items, iter.path, HermesBuiltin.arraySpread(items, iter, 0));
        processError(obj2, items);
      } else if ("invalid_element" === iter.code) {
        const items1 = [];
        const obj3 = { issues: iter.issues };
        HermesBuiltin.arraySpread(items1, iter.path, HermesBuiltin.arraySpread(items1, iter, 0));
        processError(obj3, items1);
      } else {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, iter.path, HermesBuiltin.arraySpread(items2, iter, 0));
        if (0 === items2.length) {
          _errors = _errors._errors;
          _errors.push(items(iter));
        } else {
          let tmp14 = _errors;
          let num = 0;
          if (0 < items2.length) {
            do {
              let tmp9;
              let tmp2 = items2[num];
              let diff = items2.length - 1;
              if ("_errors" !== tmp2) {
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                if (!hasOwnProperty.call(tmp14, tmp2)) {
                  let _Object2 = Object;
                  obj = { value: obj4, enumerable: true, writable: true, configurable: true };
                  obj4 = { _errors: [] };
                  let definePropertyResult = Object.defineProperty(tmp14, tmp2, obj);
                }
                let tmp11 = tmp14[tmp2];
                if (num === diff) {
                  let _errors1 = tmp11._errors;
                  let arr2 = _errors1.push(items(iter));
                }
                sum = num + 1;
                tmp9 = tmp11;
              } else {
                if (num === diff) {
                  let _errors2 = tmp14._errors;
                  let arr3 = _errors2.push(items(iter));
                }
                sum = num + 1;
                tmp9 = tmp14;
              }
              num = sum;
              tmp14 = tmp9;
            } while (sum < items2.length);
          }
        }
      }
    }
    const iter = arg0.issues[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
  processError(arg0);
  return obj;
}
export function treeifyError(arg0) {
  if (arg1 === undefined) {
    const fn = function t(message) {
      return message.message;
    };
  }
  let obj = { errors: [] };
  function processError(arg0) {
    let items = arg1;
    if (arg1 === undefined) {
      items = [];
    }
    let c1;
    function _loop2(iter) {
      let obj5;
      if ("invalid_union" === iter.code) {
        if (iter.errors.length) {
          errors = iter.errors;
          const mapped = errors.map((issues) => {
            items = [...closure_0.path];
            obj = { issues };
            processError(obj, items);
          });
        }
      }
      if ("invalid_key" === iter.code) {
        const items1 = [];
        const obj2 = { issues: iter.issues };
        HermesBuiltin.arraySpread(items1, iter.path, HermesBuiltin.arraySpread(items1, iter, 0));
        processError(obj2, items1);
      } else if ("invalid_element" === iter.code) {
        const items2 = [];
        const obj3 = { issues: iter.issues };
        HermesBuiltin.arraySpread(items2, iter.path, HermesBuiltin.arraySpread(items2, iter, 0));
        processError(obj3, items2);
      } else {
        const items3 = [];
        HermesBuiltin.arraySpread(items3, iter.path, HermesBuiltin.arraySpread(items3, iter, 0));
        if (0 === items3.length) {
          const errors1 = errors.errors;
          errors1.push(items(iter));
          return 1;
        } else {
          let tmp11 = errors;
          let num = 0;
          if (0 < items3.length) {
            do {
              let tmp7;
              let tmp2 = items3[num];
              let diff = items3.length - 1;
              if (typeof tmp2 === "string") {
                if (tmp11.properties == null) {
                  tmp11.properties = {};
                }
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                if (!hasOwnProperty.call(tmp11.properties, tmp2)) {
                  let _Object2 = Object;
                  let obj4 = { value: obj5, enumerable: true, writable: true, configurable: true };
                  obj5 = { errors: [] };
                  let definePropertyResult = Object.defineProperty(tmp11.properties, tmp2, obj4);
                }
                tmp7 = tmp11.properties[tmp2];
              } else {
                if (tmp11.items == null) {
                  tmp11.items = [];
                }
                items = tmp11.items;
                if (items[tmp2] == null) {
                  obj = { errors: [] };
                  items[tmp2] = obj;
                }
                tmp7 = tmp11.items[tmp2];
              }
              if (num === diff) {
                let errors2 = tmp7.errors;
                let arr2 = errors2.push(items(iter));
              }
              num = num + 1;
              tmp11 = tmp7;
            } while (num < items3.length);
          }
        }
      }
    }
    const iter = arg0.issues[Symbol.iterator]();
    while (iter !== undefined) {
      let _loop2Result = _loop2(iter.next());
      continue;
    }
  }
  processError(arg0);
  return obj;
}
export { toDotPath };
export function prettifyError(issues) {
  const items = [];
  const items1 = [...issues.issues];
  const sorted = items1.sort((path, path2) => {
    path = path.path;
    if (path == null) {
      path = [];
    }
    let path1 = path2.path;
    const length = path.length;
    if (path1 == null) {
      path1 = [];
    }
    return length - path1.length;
  });
  const iter = sorted[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let _HermesInternal = HermesInternal;
    let tmp3 = nextResult;
    let arr = items.push("\u2716 " + nextResult.message);
    let path = nextResult.path;
    let length;
    if (path != null) {
      length = path.length;
    }
    if (length) {
      let _HermesInternal2 = HermesInternal;
      let arr2 = items.push("  \u2192 at " + toDotPath(tmp3.path));
    }
    continue;
  }
  return items.join("\n");
}
export const $ZodError = NEVER.$constructor("$ZodError", initializer);
export const $ZodRealError = NEVER.$constructor("$ZodError", initializer, undefined, obj);
