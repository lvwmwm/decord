// Module ID: 12168
// Function ID: 12169
// Name: $ZodCyclicError
// Dependencies: [42, 41, 93, 95, 98, 158, 12160]
// Exports: isBackEdge, isRecursiveSchema, memoizer

// Module 12168 ($ZodCyclicError)
import captureStackTrace2 from "captureStackTrace" /* 12160 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

let c1, c11, closure_2_2, hasOwnProperty;

let self = this;
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
function isRecursive(_cachedInner, set, arg2) {
  let tmp;
  function settle(_cachedInner, c13) {
    if (c13 !== closure_1_14) {
      const result = weakMap.set(_cachedInner, c13 === closure_1_15);
    }
    return c13;
  }
  let closure_0 = set;
  let closure_1 = arg2;
  const value2 = weakMap.get(_cachedInner);
  if (undefined !== value2) {
    return value2 ? c15 : c13;
  } else if (set.has(_cachedInner)) {
    return c15;
  } else {
    set.add(_cachedInner);
    const tmp4 = c13;
    let closure_2 = c13;
    function check(innerType) {
      if (closure_2 !== c15) {
        let _zod;
        if (innerType != null) {
          _zod = innerType._zod;
        }
        if (_zod) {
          const tmp7 = isRecursive(innerType, set, closure_1);
          if (tmp7 > closure_2) {
            closure_2 = tmp7;
          }
        }
      }
    }
    function merge(arg0) {
      if (arg0 > closure_2) {
        closure_2 = arg0;
      }
    }
    const def = _cachedInner._zod.def;
    switch (def.type) {
      case "object":
      {
        let tmp32;
        const rawShapeResult = captureStackTrace.rawShape(def);
        if (rawShapeResult) {
          tmp32 = ((rawShapeResult, arg1) => {
            let tmp = c13;
            const ownKeysResult = Reflect.ownKeys(rawShapeResult);
            const tmp3 = ownKeysResult[Symbol.iterator]();
            while (tmp3 !== undefined) {
              let _Object = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(rawShapeResult, tmp4);
              let iter = ownPropertyDescriptor;
              if (ownPropertyDescriptor.enumerable) {
                let tmp9;
                if (iter.get) {
                  tmp9 = c14;
                } else {
                  let value = iter.value;
                  let _zod;
                  if (value != null) {
                    _zod = value._zod;
                  }
                  if (_zod) {
                    tmp9 = isRecursive(iter.value, set, closure_1);
                  } else {
                    tmp9 = c13;
                  }
                }
                if (tmp9 > tmp) {
                  tmp = tmp9;
                }
              }
              continue;
            }
            return tmp;
          })(rawShapeResult, true);
        } else {
          tmp32 = c14;
        }
        merge(tmp32);
        check(def.catchall);
        set.delete(_cachedInner);
        settle(_cachedInner, closure_2);
        return closure_2;
      }
      case "array":
      {
        check(def.element);
        break;
      }
      case "tuple":
      {
        const items = def.items;
        const iter2 = items[Symbol.iterator]();
        while (iter2 !== undefined) {
          let checkResult2 = check(iter2.next());
          continue;
        }
        check(def.rest);
        break;
      }
      case "record":
      {
        check(def.keyType);
        check(def.valueType);
        break;
      }
      case "map":
      {
        check(def.keyType);
        check(def.valueType);
        break;
      }
      case "set":
      {
        check(def.valueType);
        break;
      }
      case "union":
      {
        const options = def.options;
        let iter = options[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult7 = check(iter.next());
          continue;
        }
        break;
      }
      case "intersection":
      {
        check(def.left);
        check(def.right);
        break;
      }
      case "optional":
      {
        check(def.innerType);
        break;
      }
      case "nullable":
      {
        check(def.innerType);
        break;
      }
      case "default":
      {
        check(def.innerType);
        break;
      }
      case "prefault":
      {
        check(def.innerType);
        break;
      }
      case "catch":
      {
        check(def.innerType);
        break;
      }
      case "readonly":
      {
        check(def.innerType);
        break;
      }
      case "nonoptional":
      {
        check(def.innerType);
        break;
      }
      case "promise":
      {
        check(def.innerType);
        break;
      }
      case "success":
      {
        check(def.innerType);
        break;
      }
      case "pipe":
      {
        check(def.in);
        check(def.out);
        break;
      }
      case "function":
      {
        check(def.input);
        check(def.output);
        break;
      }
      case "lazy":
      {
        let tmp7;
        _cachedInner = def._cachedInner;
        if (_cachedInner == null) {
          let innerType;
          if (arg2) {
            innerType = _cachedInner._zod.innerType;
          }
          _cachedInner = innerType;
        }
        if (_cachedInner) {
          tmp7 = isRecursive(_cachedInner, set, false);
        } else {
          tmp7 = c14;
        }
        merge(tmp7);
        break;
      }
      case "template_literal":
      {
        break;
      }
      case "string":
      {
        break;
      }
      case "number":
      {
        break;
      }
      case "int":
      {
        break;
      }
      case "boolean":
      {
        break;
      }
      case "bigint":
      {
        break;
      }
      case "symbol":
      {
        break;
      }
      case "undefined":
      {
        break;
      }
      case "null":
      {
        break;
      }
      case "void":
      {
        break;
      }
      case "never":
      {
        break;
      }
      case "any":
      {
        break;
      }
      case "unknown":
      {
        break;
      }
      case "date":
      {
        break;
      }
      case "nan":
      {
        break;
      }
      case "enum":
      {
        break;
      }
      case "literal":
      {
        break;
      }
      case "file":
      {
        break;
      }
      case "transform":
      {
        break;
      }
      case "custom":
      {
        break;
      }
      default:
      {
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let _Object = Object;
            let iter4 = Object.getOwnPropertyDescriptor(def, tmp38);
            if (!iter4) {
              continue;
            } else {
              if (iter4.get) {
                continue;
              } else {
                let value = iter4.value;
                if (!value) {
                  continue;
                } else {
                  if (typeof value !== "object") {
                    continue;
                  } else {
                    if (value._zod) {
                      let checkResult15 = check(value);
                      continue;
                    } else {
                      let _Array = Array;
                      if (!Array.isArray(value)) {
                        continue;
                      } else {
                        let iter3 = value[Symbol.iterator]();
                        while (iter3 !== undefined) {
                          let checkResult16 = check(iter3.next());
                          continue;
                        }
                      }
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
        }
        break;
      }
    }
  }
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (!self2) {
  let tmp4 = globalThis;
  let _Object = Object;
  self2 = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
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
let tmp5 = self && self.__setModuleDefault;
if (!tmp5) {
  let tmp6 = globalThis;
  let _Object2 = Object;
  tmp5 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_6 = tmp5;
let tmp7 = self && self.__importStar || ((__esModule) => {
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
        let tmp6 = self2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_6(obj, __esModule);
  return obj;
});
function isBackEdge(arg0, value) {
  let backEdges;
  if (arg0[c9] != null) {
    backEdges = tmp.backEdges;
  }
  let hasItem = undefined !== backEdges;
  if (hasItem) {
    hasItem = null !== value && typeof value === "object";
  }
  if (hasItem) {
    hasItem = backEdges.has(value);
  }
  return hasItem;
}
const captureStackTrace = tmp7(captureStackTrace2);
export function $ZodCyclicError() {
  let constructResult;
  const self = this;
  _classCallCheck(this, $ZodCyclicError);
  const items = ["Cannot parse a reference cycle that closes through a transform"];
  const obj = _getPrototypeOf($ZodCyclicError);
  const tmp2 = _getPrototypeOf;
  const tmp3 = c2;
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
  } else {
    constructResult = obj.apply(self, items);
  }
  const tmp3Result = tmp3(self, constructResult);
  tmp3Result.name = "ZodCyclicError";
  return tmp3Result;
}
_inherits($ZodCyclicError, _wrapNativeSuper(Error));
const _moduleResult = _createClass($ZodCyclicError);
const metroImportAll = _moduleResult;
let c9 = "~memo";
let closure_10 = [];
let weakMap = new WeakMap();
let c13 = 0;
let c14 = 1;
let c15 = 2;
let closure_17 = [];
let closure_18 = {
  alloc(bound, nextPromise, items) {
    if (c11) {
      c11 = undefined;
      const obj2 = { value: items, issues: null };
      const result = obj.set(nextPromise.value, obj2);
      closure_17.push(obj2);
      return items;
    } else {
      return items;
    }
  },
  guard(_zod) {
    _zod = _zod._zod;
    if (_zod.deferred == null) {
      _zod.deferred = [];
    }
    const deferred = _zod._zod.deferred;
    deferred.push(() => {
      const parse = _zod._zod.parse;
      function wrapped(value, direction) {
        if ("backward" !== direction.direction) {
          value = value.value;
          let backEdges;
          if (direction[closure_2_9] != null) {
            backEdges = tmp2.backEdges;
          }
          let hasItem = undefined !== backEdges;
          if (hasItem) {
            hasItem = null !== value && typeof value === "object";
          }
          if (hasItem) {
            hasItem = backEdges.has(value);
          }
          if (hasItem) {
            const self = this;
            self2 = this;
            const tmp8 = new closure_2_8();
            throw tmp8;
          }
        }
        return parse(value, direction);
      }
      _zod._zod.parse = wrapped;
      if (_zod._zod.run === parse) {
        _zod._zod.run = wrapped;
      }
    });
  },
  attach(_zod) {
    let closure_0 = _zod;
    let c4 = false;
    _zod = _zod._zod;
    if (_zod.deferred == null) {
      _zod.deferred = [];
    }
    const deferred = _zod._zod.deferred;
    let arr = deferred.push(() => {
      let parse;
      parse = parse._zod.parse;
      function wrapped(value, arg1) {
        const f104303 = (path) => {
          let tmp2;
          const obj = {};
          path = path.path;
          const merged = Object.assign(path);
          if (path) {
            const path1 = path.path;
            obj.path = path1.slice();
            tmp2 = obj;
          } else {
            tmp2 = obj;
          }
          return tmp2;
        };
        if (undefined === c1) {
          const tmp = isRecursive;
          let tmp2 = _zod;
          const _Set = Set;
          const self = this;
          self2 = this;
          set = new Set();
          const tmp6 = isRecursive(_zod, set, false);
          if (tmp6 === c13) {
            tmp2._zod.parse = parse;
            if (tmp2._zod.run === wrapped) {
              tmp2._zod.run = parse;
            }
            return parse(value, arg1);
          } else {
            if (tmp6 !== c15) {
              const tmp8 = c4;
              if (!tmp8) {
                c4 = true;
              }
            }
            c1 = true;
          }
        }
        value = value.value;
        const tmp9 = null !== value && typeof value === "object";
        if (tmp9) {
          let tmp12 = arg1[c9];
          if (!tmp12) {
            let obj = { buckets: weakMap, backEdges: "y" };
            const _WeakMap = WeakMap;
            const self3 = this;
            self2 = this;
            weakMap = new WeakMap();
            arg1[tmp11] = obj;
            tmp12 = obj;
          }
          if (closure_2_2 !== arg1) {
            const buckets = tmp12.buckets;
            value2 = buckets.get(_zod);
            const tmp17 = _zod;
            if (!value2) {
              const _WeakMap2 = WeakMap;
              const self4 = this;
              self2 = this;
              const weakMap1 = new WeakMap();
              const buckets2 = tmp12.buckets;
              const result = buckets2.set(tmp17, weakMap1);
              value2 = weakMap1;
            }
            closure_2_2 = arg1;
          }
          const iter = value2.get(value);
          if (iter) {
            value.value = iter.value;
            if (iter.issues) {
              if (iter.issues.length) {
                let issues = value.issues;
                const push = issues.push;
                const issues1 = iter.issues;
                const items = [];
                HermesBuiltin.arraySpread(items, issues1.map(f104303), 0);
                HermesBuiltin.apply(push, items, issues);
              }
            } else {
              value.memo = true;
              if (tmp12.backEdges == null) {
                const _WeakSet = WeakSet;
                const self5 = this;
                const self6 = this;
                const weakSet = new WeakSet();
                tmp12.backEdges = weakSet;
              }
              const backEdges = tmp12.backEdges;
              backEdges.add(iter.value);
            }
            return value;
          } else {
            let nextPromise;
            const length = closure_17.length;
            const promise = parse(value, arg1);
            c11 = undefined;
            let arr2;
            const arr = closure_17;
            if (closure_17.length > length) {
              arr2 = arr.pop();
            }
            if (promise instanceof Promise) {
              nextPromise = promise.then((issues) => {
                if (arr2) {
                  let mapped;
                  if (issues.issues.length) {
                    issues = issues.issues;
                    mapped = issues.map(f104303);
                  } else {
                    mapped = closure_2_10;
                  }
                  tmp.issues = mapped;
                }
                return issues;
              });
            } else {
              nextPromise = promise;
              if (arr2) {
                let mapped;
                if (promise.issues.length) {
                  const issues2 = promise.issues;
                  mapped = issues2.map(f104303);
                } else {
                  mapped = closure_10;
                }
                arr2.issues = mapped;
                nextPromise = promise;
              }
            }
            return nextPromise;
          }
        } else {
          return parse(value, arg1);
        }
      }
      parse._zod.parse = wrapped;
      if (parse._zod.run === parse) {
        parse._zod.run = wrapped;
      }
    });
  }
};
let tmp12 = (() => {
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

export function isRecursiveSchema(_zod) {
  set = new Set();
  return isRecursive(_zod, set, true) !== c13;
}
export function memoizer() {
  return closure_18;
}
export { isBackEdge };
