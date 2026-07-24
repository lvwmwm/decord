// Module ID: 12040
// Function ID: 93202
// Name: isValidBase64
// Dependencies: [57, 5, 65, 12041, 12036, 12042, 12039, 12043, 12037, 12044]

// Module 12040 (isValidBase64)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "timeSource";
import _toConsumableArray from "_toConsumableArray";

const self = this;
function isValidBase64(replaced) {
  if ("" === replaced) {
    return true;
  } else if (arr.length % 4 !== 0) {
    return false;
  } else {
    const _atob = atob;
    atob(arr);
    return true;
  }
}
function isValidBase64URL(str) {
  const base64url = closure_10.base64url;
  if (base64url.test(str)) {
    const replaced = str.replace(/[-_]/g, (arg0) => {
      let str = "/";
      if ("-" === arg0) {
        str = "+";
      }
      return str;
    });
    const _Math = Math;
    return isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
  } else {
    return false;
  }
}
function isValidJWT(str) {
  let tmp = null;
  if (arguments.length > 1) {
    tmp = null;
    if (undefined !== arguments[1]) {
      tmp = arguments[1];
    }
  }
  const parts = str.split(".");
  if (3 !== parts.length) {
    return false;
  } else {
    const first = _slicedToArray(parts, 1)[0];
    if (first) {
      const _JSON = JSON;
      const _atob = atob;
      const parsed = JSON.parse(atob(first));
      let tmp7 = !tmp6;
      if ("typ" in parsed) {
        let typ;
        if (null != tmp5) {
          typ = tmp5.typ;
        }
        tmp7 = "JWT" === typ;
      }
      let tmp11 = tmp7;
      if (tmp7) {
        let tmp14 = !tmp13;
        if (!!tmp5.alg) {
          let tmp17 = tmp16;
          if (!!tmp2) {
            let tmp20 = tmp19;
            if ("alg" in tmp5) {
              tmp20 = parsed.alg === tmp;
            }
            tmp17 = tmp20;
          }
          tmp14 = tmp17;
        }
        tmp11 = tmp14;
      }
      return tmp11;
    } else {
      return false;
    }
  }
  tmp2 = tmp;
}
function handleArrayResult(issues, issues2, closure_0) {
  if (issues.issues.length) {
    issues = issues2.issues;
    const push = issues.push;
    push.apply(issues, _toConsumableArray(closure_11.prefixIssues(closure_0, issues.issues)));
  }
  issues2.value[closure_0] = issues.value;
}
function handlePropertyResult(issues, issues2, closure_0) {
  if (issues.issues.length) {
    issues = issues2.issues;
    const push = issues.push;
    push.apply(issues, _toConsumableArray(closure_11.prefixIssues(closure_0, issues.issues)));
  }
  if (undefined === issues.value) {
    if (closure_0 in arg3) {
      issues2.value[closure_0] = undefined;
    }
  } else {
    issues2.value[closure_0] = issues.value;
  }
}
function normalizeDef(shape) {
  const keys = Object.keys(shape.shape);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp19 = nextResult;
    let tmp20 = shape;
    shape = tmp.shape;
    if (null != shape) {
      let tmp3 = shape;
      let tmp4 = nextResult;
      let tmp5 = tmp21[tmp19];
      if (null != tmp5) {
        let tmp7 = tmp5;
        let _zod = tmp6._zod;
        if (null != _zod) {
          let tmp9 = _zod;
          let traits = tmp8.traits;
          let obj = traits;
          if (null != traits) {
            let tmp10 = traits;
          }
        }
      }
    }
    let _Error = Error;
    let tmp11 = nextResult;
    let _HermesInternal = HermesInternal;
    let str = "Invalid element at key \"";
    let str2 = "\": expected a Zod schema";
    let tmp12 = new.target;
    let tmp13 = new.target;
    let error = new Error("Invalid element at key \"" + tmp19 + "\": expected a Zod schema");
    let tmp15 = error;
    throw error;
  }
  obj = { keys };
  const optionalKeysResult = closure_11.optionalKeys(shape.shape);
  obj.keySet = new Set(keys);
  obj.numKeys = keys.length;
  const set = new Set(keys);
  obj.optionalKeys = new Set(optionalKeysResult);
  return Object.assign({}, shape, obj);
}
function handleCatchall(arg0, obj, arg2, arg3, keySet, inst) {
  let nextPromise = arg2;
  let closure_0 = arg0;
  let closure_1 = obj;
  let closure_2 = arg2;
  let closure_3 = arg3;
  const items = [];
  keySet = keySet.keySet;
  const _zod = keySet.catchall._zod;
  const type = _zod.def.type;
  let closure_8 = "optional" === _zod.optout;
  for (const key10018 in arg1) {
    let tmp6 = key10018;
    let tmp2Result = tmp2(key10018);
    continue;
  }
  if (items.length) {
    const issues = nextPromise.issues;
    obj = { code: "unrecognized_keys", keys: items, input: obj, inst };
    issues.push(obj);
  }
  if (arg0.length) {
    nextPromise = Promise.all(arg0).then(() => closure_2);
    const allPromises = Promise.all(arg0);
  }
  return nextPromise;
}
function handleUnionResults(arr, issues, inst) {
  let closure_0 = arg3;
  const iter = arr[Symbol.iterator]();
  const iter2 = iter.next();
  while (iter !== undefined) {
    let tmp = iter2;
    if (0 === iter2.issues.length) {
      let tmp2 = issues;
      issues.value = iter2.value;
      iter.return();
      return issues;
    }
  }
  const found = arr.filter((length) => !outer1_11.aborted(length));
  if (1 === found.length) {
    issues.value = found[0].value;
    let first = found[0];
  } else {
    first = issues;
    issues = issues.issues;
    const obj = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
          issues = issues.issues;
          return issues.map((path) => outer2_11.finalizeIssue(path, outer1_0, outer2_9.config()));
        })
    };
    issues.push(obj);
  }
  return first;
}
function handleExclusiveUnionResults(arr, issues, inst) {
  let closure_0 = arg3;
  const found = arr.filter((issues) => 0 === issues.issues.length);
  if (1 === found.length) {
    issues.value = found[0].value;
  } else if (0 === found.length) {
    issues = issues.issues;
    let obj = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
          issues = issues.issues;
          return issues.map((path) => outer2_11.finalizeIssue(path, outer1_0, outer2_9.config()));
        })
    };
    issues.push(obj);
  } else {
    const issues1 = issues.issues;
    obj = { code: "invalid_union", input: issues.value, inst, errors: [], inclusive: false };
    issues1.push(obj);
  }
  return issues;
}
function mergeValues(value, value2) {
  let arr = value;
  if (value === value2) {
    let obj = { valid: true, data: value };
    return obj;
  } else {
    const _Date2 = Date;
    if (arr instanceof Date) {
      const _Date = Date;
      if (arr2 instanceof Date) {
        if (+arr === +arr2) {
          obj = { valid: true, data: arr };
          return obj;
        }
      }
    }
    if (closure_11.isPlainObject(arr)) {
      if (closure_11.isPlainObject(arr2)) {
        const _Object = Object;
        let closure_0 = Object.keys(arr2);
        const _Object2 = Object;
        const keys = Object.keys(arr);
        const found = keys.filter((arg0) => -1 !== closure_0.indexOf(arg0));
        const _Object3 = Object;
        const merged = Object.assign({}, arr, arr2);
        for (const item10081 of found) {
          let tmp34 = item10081;
          let tmp35 = mergeValues;
          let tmp36 = arg0;
          let tmp37 = arg1;
          let tmp38 = mergeValues(arr[item10081], arr2[item10081]);
          let tmp39 = tmp38;
          if (tmp38.valid) {
            let tmp27 = merged;
            let tmp28 = item10081;
            let tmp29 = tmp38;
            merged[tmp34] = tmp39.data;
            continue;
          } else {
            let obj1 = {};
            let flag5 = false;
            obj1.valid = false;
            let tmp24 = item10081;
            let items = [tmp34];
            let tmp25 = _toConsumableArray;
            let tmp26 = tmp38;
            obj1.mergeErrorPath = items.concat(_toConsumableArray(tmp39.mergeErrorPath));
            obj4.return();
            return obj1;
          }
        }
        const obj2 = { valid: true, data: merged };
        return obj2;
      }
    }
    const _Array = Array;
    if (Array.isArray(arr)) {
      const _Array2 = Array;
      if (Array.isArray(arr2)) {
        if (arr.length !== arr2.length) {
          const obj3 = { valid: false, mergeErrorPath: [] };
          return obj3;
        } else {
          const items1 = [];
          let num = 0;
          if (0 < arr.length) {
            const tmp15 = mergeValues(arr[num], arr2[num]);
            while (tmp15.valid) {
              arr = items1.push(tmp15.data);
              num = num + 1;
              let tmp18 = value;
            }
            const obj4 = { valid: false };
            const items2 = [num];
            obj4.mergeErrorPath = items2.concat(_toConsumableArray(tmp15.mergeErrorPath));
            return obj4;
          }
          const obj5 = { valid: true, data: items1 };
          return obj5;
        }
      }
    }
    obj = { valid: false, mergeErrorPath: [] };
    return obj;
  }
}
function handleIntersectionResults(issues, value, value2) {
  let tmp;
  const map = new Map();
  let obj = map;
  const iter = value.issues[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp41 = nextResult;
    if ("unrecognized_keys" === nextResult.code) {
      let tmp7 = tmp;
      if (null == tmp) {
        tmp = nextResult;
      }
      let tmp8 = nextResult;
      let keys = tmp41.keys;
      let tmp9 = keys;
      for (const item10035 of keys) {
        let tmp10 = item10035;
        let tmp11 = map;
        if (!obj.has(item10035)) {
          let tmp12 = map;
          let tmp13 = item10035;
          let result = obj.set(tmp10, {});
        }
        let tmp15 = map;
        let tmp16 = item10035;
        obj.get(tmp10).l = true;
        continue;
      }
    } else {
      let tmp4 = issues;
      issues = issues.issues;
      let tmp5 = nextResult;
      let arr = issues.push(tmp41);
    }
    continue;
  }
  for (const item10055 of tmp17) {
    let tmp42 = item10055;
    if ("unrecognized_keys" === item10055.code) {
      let tmp21 = item10055;
      let keys2 = tmp42.keys;
      let tmp22 = keys2;
      for (const item10066 of keys2) {
        let tmp23 = item10066;
        let tmp24 = map;
        if (!obj.has(item10066)) {
          let tmp25 = map;
          let tmp26 = item10066;
          let result1 = obj.set(tmp23, {});
        }
        let tmp28 = map;
        let tmp29 = item10066;
        obj.get(tmp23).r = true;
        continue;
      }
    } else {
      let tmp18 = arg0;
      let issues1 = arg0.issues;
      let tmp19 = item10055;
      arr = issues1.push(tmp42);
    }
    continue;
  }
  const found = _toConsumableArray(map).filter((arg0) => {
    const tmp = outer1_3(arg0, 2)[1];
    return tmp.l && tmp.r;
  });
  const mapped = found.map((arg0) => outer1_3(arg0, 1)[0]);
  if (tmp30) {
    const issues2 = issues.issues;
    const _Object = Object;
    obj = { keys: mapped };
    issues2.push(Object.assign({}, tmp, obj));
  }
  if (closure_11.aborted(issues)) {
    return issues;
  } else {
    const tmp35 = mergeValues(value.value, value2.value);
    if (tmp35.valid) {
      issues.value = tmp35.data;
      return issues;
    } else {
      const _Error = Error;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unmergable intersection. Error path: " + JSON.stringify(tmp35.mergeErrorPath));
      throw error;
    }
  }
  const arr3 = _toConsumableArray(map);
  tmp30 = mapped.length && tmp;
}
function handleTupleResult(issues, issues2, closure_0) {
  if (issues.issues.length) {
    issues = issues2.issues;
    const push = issues.push;
    push.apply(issues, _toConsumableArray(closure_11.prefixIssues(closure_0, issues.issues)));
  }
  issues2.value[closure_0] = issues.value;
}
function handleMapResult(issues, issues2, issues3, key, input, inst) {
  let closure_0 = arg6;
  if (issues.issues.length) {
    const propertyKeyTypes = closure_11.propertyKeyTypes;
    issues = issues3.issues;
    const push = issues.push;
    if (propertyKeyTypes.has(typeof key)) {
      push.apply(issues, _toConsumableArray(closure_11.prefixIssues(key, issues.issues)));
    } else {
      let obj = { code: "invalid_key", origin: "map", input, inst };
      const issues1 = issues.issues;
      obj.issues = issues1.map((path) => outer1_11.finalizeIssue(path, closure_0, outer1_9.config()));
      push(obj);
    }
  }
  if (issues2.issues.length) {
    const propertyKeyTypes2 = closure_11.propertyKeyTypes;
    issues2 = issues3.issues;
    const push2 = issues2.push;
    if (propertyKeyTypes2.has(typeof key)) {
      push2.apply(issues2, _toConsumableArray(closure_11.prefixIssues(key, issues2.issues)));
    } else {
      obj = { origin: "map", code: "invalid_element", input, inst, key };
      issues3 = issues2.issues;
      obj.issues = issues3.map((path) => outer1_11.finalizeIssue(path, closure_0, outer1_9.config()));
      push2(obj);
    }
  }
  const value = issues3.value;
  const result = value.set(issues.value, issues2.value);
}
function handleSetResult(issues, issues2) {
  if (issues.issues.length) {
    issues = issues2.issues;
    const push = issues.push;
    push.apply(issues, _toConsumableArray(issues.issues));
  }
  const value = issues2.value;
  value.add(issues.value);
}
function handleOptionalResult(issues) {
  let tmp = issues;
  if (issues.issues.length) {
    tmp = issues;
    if (undefined === arg1) {
      const obj = { issues: [], value: undefined };
      tmp = obj;
    }
  }
  return tmp;
}
function handleDefaultResult(value, defaultValue) {
  if (undefined === value.value) {
    value.value = defaultValue.defaultValue;
  }
  return value;
}
function handleNonOptionalResult(issues, inst) {
  let length = issues.issues.length;
  if (!length) {
    length = undefined !== issues.value;
  }
  if (!length) {
    issues = issues.issues;
    const obj = { code: "invalid_type", expected: "nonoptional", input: issues.value, inst };
    issues.push(obj);
  }
  return issues;
}
function handlePipeResult(issues, _zod) {
  if (issues.issues.length) {
    issues.aborted = true;
    let runResult = issues;
  } else {
    _zod = _zod._zod;
    const obj = {};
    ({ value: obj.value, issues: obj.issues } = issues);
    runResult = _zod.run(obj, arg2);
  }
  return runResult;
}
function handleCodecAResult(issues, transform, direction) {
  let closure_0 = issues;
  let closure_1 = transform;
  let closure_2 = direction;
  if (issues.issues.length) {
    issues.aborted = true;
    return issues;
  } else {
    if ("forward" === tmp) {
      const transformResult = transform.transform(issues.value, issues);
      if (transformResult instanceof Promise) {
        let nextPromise = transformResult.then((arg0) => outer1_31(closure_0, arg0, transform.out, closure_2));
      } else {
        nextPromise = handleCodecTxResult(issues, transformResult, transform.out, direction);
      }
      return nextPromise;
    } else {
      const reverseTransformResult = transform.reverseTransform(issues.value, issues);
      if (reverseTransformResult instanceof Promise) {
        let nextPromise1 = reverseTransformResult.then((arg0) => outer1_31(closure_0, arg0, transform.in, closure_2));
      } else {
        nextPromise1 = handleCodecTxResult(issues, reverseTransformResult, transform.in, direction);
      }
      return nextPromise1;
    }
    tmp = direction.direction || "forward";
  }
}
function handleCodecTxResult(issues, reverseTransformResult, out, direction) {
  if (issues.issues.length) {
    issues.aborted = true;
    let runResult = issues;
  } else {
    const _zod = out._zod;
    const obj = { value: reverseTransformResult, issues: issues.issues };
    runResult = _zod.run(obj, direction);
  }
  return runResult;
}
function handleReadonlyResult(value) {
  value.value = Object.freeze(value.value);
  return value;
}
function handleRefineResult(arg0, issues, input, inst) {
  if (!arg0) {
    const obj = { code: "custom", input, inst };
    let path = inst._zod.def.path;
    if (null == path) {
      path = [];
    }
    obj.path = _toConsumableArray(path);
    obj.continue = !inst._zod.def.abort;
    if (inst._zod.def.params) {
      obj.params = inst._zod.def.params;
    }
    issues = issues.issues;
    issues.push(closure_11.issue(obj));
    const tmp2 = _toConsumableArray;
  }
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp7 = key10009;
            let callResult = "default" !== key10009;
            if (callResult) {
              let _Object = Object;
              callResult = hasOwnProperty.call(arg0, key10009);
            }
            if (!callResult) {
              continue;
            } else {
              let tmp4 = self2;
              let tmp5 = self2(obj, arg0, key10009);
              continue;
            }
            continue;
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    let _Object3 = Object;
    let obj = { value: true };
    exports.$ZodType = undefined;
    exports.clone = undefined;
    exports.$ZodString = undefined;
    exports.$ZodStringFormat = undefined;
    exports.$ZodGUID = undefined;
    exports.$ZodUUID = undefined;
    exports.$ZodEmail = undefined;
    exports.$ZodURL = undefined;
    exports.$ZodEmoji = undefined;
    exports.$ZodNanoID = undefined;
    exports.$ZodCUID = undefined;
    exports.$ZodCUID2 = undefined;
    exports.$ZodULID = undefined;
    exports.$ZodXID = undefined;
    exports.$ZodKSUID = undefined;
    exports.$ZodISODateTime = undefined;
    exports.$ZodISODate = undefined;
    exports.$ZodISOTime = undefined;
    exports.$ZodISODuration = undefined;
    exports.$ZodIPv4 = undefined;
    exports.$ZodIPv6 = undefined;
    exports.$ZodMAC = undefined;
    exports.$ZodCIDRv4 = undefined;
    exports.$ZodCIDRv6 = undefined;
    exports.$ZodBase64 = undefined;
    exports.$ZodBase64URL = undefined;
    exports.$ZodE164 = undefined;
    exports.$ZodJWT = undefined;
    exports.$ZodCustomStringFormat = undefined;
    exports.$ZodNumber = undefined;
    exports.$ZodNumberFormat = undefined;
    exports.$ZodBoolean = undefined;
    exports.$ZodBigInt = undefined;
    exports.$ZodBigIntFormat = undefined;
    exports.$ZodSymbol = undefined;
    exports.$ZodUndefined = undefined;
    exports.$ZodNull = undefined;
    exports.$ZodAny = undefined;
    exports.$ZodUnknown = undefined;
    exports.$ZodNever = undefined;
    exports.$ZodVoid = undefined;
    exports.$ZodDate = undefined;
    exports.$ZodArray = undefined;
    exports.$ZodObject = undefined;
    exports.$ZodObjectJIT = undefined;
    exports.$ZodUnion = undefined;
    exports.$ZodXor = undefined;
    exports.$ZodDiscriminatedUnion = undefined;
    exports.$ZodIntersection = undefined;
    exports.$ZodTuple = undefined;
    exports.$ZodRecord = undefined;
    exports.$ZodMap = undefined;
    exports.$ZodSet = undefined;
    exports.$ZodEnum = undefined;
    exports.$ZodLiteral = undefined;
    exports.$ZodFile = undefined;
    exports.$ZodTransform = undefined;
    exports.$ZodOptional = undefined;
    exports.$ZodExactOptional = undefined;
    exports.$ZodNullable = undefined;
    exports.$ZodDefault = undefined;
    exports.$ZodPrefault = undefined;
    exports.$ZodNonOptional = undefined;
    exports.$ZodSuccess = undefined;
    exports.$ZodCatch = undefined;
    exports.$ZodNaN = undefined;
    exports.$ZodPipe = undefined;
    exports.$ZodCodec = undefined;
    exports.$ZodReadonly = undefined;
    exports.$ZodTemplateLiteral = undefined;
    exports.$ZodFunction = undefined;
    exports.$ZodPromise = undefined;
    exports.$ZodLazy = undefined;
    exports.$ZodCustom = undefined;
    exports.isValidBase64 = isValidBase64;
    exports.isValidBase64URL = isValidBase64URL;
    exports.isValidJWT = isValidJWT;
    let closure_8 = fn(require("module_12041"));
    let fnResult = fn(require("_callSuper"));
    let closure_10 = fn(require("timeSource"));
    let closure_11 = fn(require("cached"));
    exports.$ZodType = fnResult.$constructor("$ZodType", (_zod, def) => {
      let tmp = _zod;
      let obj = _zod;
      if (null == _zod) {
        obj = {};
        tmp = obj;
      }
      tmp._zod.def = def;
      let bag = tmp._zod.bag;
      if (!bag) {
        bag = {};
      }
      tmp._zod.bag = bag;
      tmp._zod.version = obj(runChecks[7]).version;
      let checks = tmp._zod.def.checks;
      if (null == checks) {
        checks = [];
      }
      const tmp2Result = _toConsumableArray(checks);
      const exports = tmp2Result;
      const traits = tmp._zod.traits;
      if (traits.has("$ZodCheck")) {
        tmp2Result.unshift(tmp);
      }
      for (const item10035 of tmp2Result) {
        let onattach = item10035._zod.onattach;
        let tmp5 = onattach;
        for (const item10041 of onattach) {
          let tmp6 = tmp;
          let item10041Result = item10041(tmp);
          continue;
        }
        continue;
      }
      if (0 === tmp2Result.length) {
        _zod = tmp._zod;
        if (null == _zod.deferred) {
          _zod.deferred = [];
        }
        const deferred = tmp._zod.deferred;
        if (null != deferred) {
          deferred.push(() => {
            obj._zod.run = obj._zod.parse;
          });
        }
      } else {
        runChecks = function runChecks(parsed1, closure_1, skipChecks) {
          let nextPromise = parsed1;
          let closure_0 = parsed1;
          closure_1 = skipChecks;
          let closure_3 = outer1_11.aborted(parsed1);
          function _loop() {
            if (closure_4._zod.def.when) {
              const def = closure_4._zod.def;
              if (!def.when(length)) {
                return 0;
              }
            } else if (closure_3) {
              return 0;
            }
            length = length.issues.length;
            const _zod = closure_4._zod;
            const checkResult = _zod.check(length);
            const skipChecks = checkResult;
            if (checkResult instanceof Promise) {
              let async;
              if (null != skipChecks) {
                async = skipChecks.async;
              }
              if (false === async) {
                const $ZodAsyncError = outer2_9.$ZodAsyncError;
                const prototype = $ZodAsyncError.prototype;
                const ZodAsyncError = new $ZodAsyncError();
                throw ZodAsyncError;
              }
            }
            if (!nextPromise) {
              if (!(checkResult instanceof Promise)) {
                if (length.issues.length === length) {
                  return 0;
                } else if (!closure_3) {
                  closure_3 = outer2_11.aborted(length, length);
                }
              }
            }
            if (null != nextPromise) {
              let resolved = nextPromise;
            } else {
              resolved = Promise.resolve();
            }
            // CreateGeneratorClosureLongIndex (0x67)
            nextPromise = resolved.then(outer2_4(nextPromise));
          }
          for (const item10010 of arg1) {
            let closure_4 = item10010;
            let tmp2 = _loop;
            let _loopResult = _loop();
            continue;
          }
          if (runChecks) {
            nextPromise = runChecks.then(() => closure_0);
          }
          return nextPromise;
        };
        function handleCanaryResult(parsed, value, skipChecks) {
          if (outer1_11.aborted(parsed)) {
            parsed.aborted = true;
            return parsed;
          } else {
            const promise = runChecks(value, closure_1, skipChecks);
            if (promise instanceof Promise) {
              if (false === skipChecks.async) {
                const $ZodAsyncError = outer1_9.$ZodAsyncError;
                const prototype = $ZodAsyncError.prototype;
                const ZodAsyncError = new $ZodAsyncError();
                throw ZodAsyncError;
              } else {
                return promise.then((arg0) => {
                  const _zod = skipChecks._zod;
                  return _zod.parse(arg0, skipChecks);
                });
              }
            } else {
              let _zod = obj._zod;
              return _zod.parse(promise, skipChecks);
            }
          }
        }
        tmp._zod.run = (value, skipChecks) => {
          let obj = value;
          let closure_1 = skipChecks;
          if (skipChecks.skipChecks) {
            const _zod2 = obj._zod;
            return _zod2.parse(value, skipChecks);
          } else if ("backward" === skipChecks.direction) {
            const _zod = obj._zod;
            obj = { value: value.value, issues: [] };
            const _Object = Object;
            obj = { skipChecks: true };
            const parsed = _zod.parse(obj, Object.assign({}, skipChecks, obj));
            if (parsed instanceof Promise) {
              let nextPromise = parsed.then((arg0) => outer1_3(arg0, closure_0, closure_1));
            } else {
              nextPromise = handleCanaryResult(parsed, value, skipChecks);
            }
            return nextPromise;
          } else {
            const _zod3 = obj._zod;
            const parsed1 = _zod3.parse(value, skipChecks);
            if (parsed1 instanceof Promise) {
              if (false === skipChecks.async) {
                const $ZodAsyncError = outer1_9.$ZodAsyncError;
                const prototype = $ZodAsyncError.prototype;
                const ZodAsyncError = new $ZodAsyncError();
                throw ZodAsyncError;
              } else {
                return parsed1.then((arg0) => outer1_2(arg0, closure_1, closure_1));
              }
            } else {
              return runChecks(parsed1, closure_1, skipChecks);
            }
          }
        };
      }
      closure_11.defineLazy(tmp, "~standard", () => {
        let obj = {
          validate(arg0) {
            const safeParseResult = obj(runChecks[8]).safeParse(outer1_0, arg0);
            obj = {};
            if (safeParseResult.success) {
              obj.value = safeParseResult.data;
              let tmp5 = obj;
            } else {
              const error = safeParseResult.error;
              let issues;
              if (null != error) {
                issues = error.issues;
              }
              obj.issues = issues;
              tmp5 = obj;
            }
            return tmp5;
          },
          vendor: "zod",
          version: 1
        };
        return obj;
      });
    });
    const _Object4 = Object;
    obj = {
      enumerable: true,
      get() {
            return require(12039) /* cached */.clone;
          }
    };
    Object.defineProperty(exports, "clone", obj);
    exports.$ZodString = fnResult.$constructor("$ZodString", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      let patterns;
      if (null != _zod) {
        const bag = _zod._zod.bag;
        if (null != bag) {
          patterns = bag.patterns;
        }
      }
      if (null == patterns) {
        patterns = [];
      }
      let stringResult = _toConsumableArray(patterns).pop();
      if (null == stringResult) {
        stringResult = closure_10.string(_zod._zod.bag);
      }
      _zod._zod.pattern = stringResult;
      _zod._zod.parse = (value) => {
        if (coerce.coerce) {
          const _String = String;
          value.value = String(value.value);
        }
        while (true) {
          let tmp3 = value;
          let str = "string";
          if ("string" === typeof value.value) {
            break;
          } else {
            let tmp4 = value;
            let issues = value.issues;
            let obj = { expected: "string", code: "invalid_type", input: value.value };
            let tmp5 = closure_0;
            obj.inst = closure_0;
            let arr = issues.push(obj);
            break;
          }
          return value;
        }
      };
    });
    exports.$ZodStringFormat = fnResult.$constructor("$ZodStringFormat", (arg0, arg1) => {
      const $ZodCheckStringFormat = closure_8.$ZodCheckStringFormat;
      $ZodCheckStringFormat.init(arg0, arg1);
      const $ZodString = exports.$ZodString;
      $ZodString.init(arg0, arg1);
    });
    exports.$ZodGUID = fnResult.$constructor("$ZodGUID", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.guid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodUUID = fnResult.$constructor("$ZodUUID", (arg0, version) => {
      if (version.version) {
        const tmp3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[version.version];
        if (undefined === tmp3) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid UUID version: \"" + version.version + "\"");
          throw error;
        } else if (null == version.pattern) {
          version.pattern = closure_10.uuid(tmp3);
        }
      } else if (null == version.pattern) {
        version.pattern = closure_10.uuid();
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, version);
    });
    exports.$ZodEmail = fnResult.$constructor("$ZodEmail", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.email;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodURL = fnResult.$constructor("$ZodURL", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        const trimmed = value.value.trim();
        const uRL = new URL(trimmed);
        const url = uRL;
        if (closure_1.hostname) {
          closure_1.hostname.lastIndex = 0;
          const hostname = closure_1.hostname;
          if (!hostname.test(url.hostname)) {
            const issues = value.issues;
            let obj = { code: "invalid_format", format: "url", note: "Invalid hostname", pattern: closure_1.hostname.source, input: value.value, inst: closure_0, continue: !closure_1.abort };
            issues.push(obj);
          }
        }
        if (closure_1.protocol) {
          closure_1.protocol.lastIndex = 0;
          let protocol = closure_1.protocol;
          const protocol2 = url.protocol;
          protocol = url.protocol;
          if (protocol2.endsWith(":")) {
            let substr = protocol.slice(0, -1);
          } else {
            substr = protocol;
          }
          if (!protocol.test(substr)) {
            const issues1 = value.issues;
            obj = { code: "invalid_format", format: "url", note: "Invalid protocol", pattern: closure_1.protocol.source, input: value.value, inst: closure_0, continue: !closure_1.abort };
            issues1.push(obj);
          }
        }
        if (closure_1.normalize) {
          const href = uRL.href;
          value.value = href;
        } else {
          value.value = trimmed;
        }
      };
    });
    exports.$ZodEmoji = fnResult.$constructor("$ZodEmoji", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.emoji();
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodNanoID = fnResult.$constructor("$ZodNanoID", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.nanoid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCUID = fnResult.$constructor("$ZodCUID", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.cuid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCUID2 = fnResult.$constructor("$ZodCUID2", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.cuid2;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodULID = fnResult.$constructor("$ZodULID", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.ulid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodXID = fnResult.$constructor("$ZodXID", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.xid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodKSUID = fnResult.$constructor("$ZodKSUID", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.ksuid;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODateTime = fnResult.$constructor("$ZodISODateTime", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.datetime(pattern);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODate = fnResult.$constructor("$ZodISODate", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.date;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISOTime = fnResult.$constructor("$ZodISOTime", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.time(pattern);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodISODuration = fnResult.$constructor("$ZodISODuration", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.duration;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodIPv4 = fnResult.$constructor("$ZodIPv4", (_zod, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.ipv4;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.format = "ipv4";
    });
    exports.$ZodIPv6 = fnResult.$constructor("$ZodIPv6", (_zod, pattern) => {
      let closure_0 = _zod;
      const _exports = pattern;
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.ipv6;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.format = "ipv6";
      _zod._zod.check = (value) => {
        const uRL = new URL("http://[" + value.value + "]");
      };
    });
    exports.$ZodMAC = fnResult.$constructor("$ZodMAC", (_zod, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.mac(pattern.delimiter);
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.format = "mac";
    });
    exports.$ZodCIDRv4 = fnResult.$constructor("$ZodCIDRv4", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.cidrv4;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodCIDRv6 = fnResult.$constructor("$ZodCIDRv6", (_zod, pattern) => {
      let closure_0 = _zod;
      const _exports = pattern;
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.cidrv6;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.check = (value) => {
        const parts = value.value.split("/");
        if (2 !== parts.length) {
          const _Error4 = Error;
          const error = new Error();
          throw error;
        } else {
          const tmp26 = outer1_3(parts, 2);
          const first = tmp26[0];
          if (tmp26[1]) {
            const _Number = Number;
            const NumberResult = Number(tmp28);
            const _HermesInternal = HermesInternal;
            if ("" + NumberResult !== tmp28) {
              const _Error3 = Error;
              const error1 = new Error();
              throw error1;
            } else {
              if (tmp6 >= 0) {
                if (tmp6 <= 128) {
                  const _URL = URL;
                  const _HermesInternal2 = HermesInternal;
                  const uRL = new URL("http://[" + first + "]");
                }
              }
              const _Error2 = Error;
              const error2 = new Error();
              throw error2;
            }
          } else {
            const _Error = Error;
            const error3 = new Error();
            throw error3;
          }
        }
        const str = value.value;
      };
    });
    exports.$ZodBase64 = fnResult.$constructor("$ZodBase64", (_zod, pattern) => {
      let closure_0 = _zod;
      const _exports = pattern;
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.base64;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.contentEncoding = "base64";
      _zod._zod.check = (value) => {
        if (!outer1_12(value.value)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "base64", input: value.value, inst: closure_0, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodBase64URL = fnResult.$constructor("$ZodBase64URL", (_zod, pattern) => {
      let closure_0 = _zod;
      const _exports = pattern;
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.base64url;
      }
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, pattern);
      _zod._zod.bag.contentEncoding = "base64url";
      _zod._zod.check = (value) => {
        if (!outer1_13(value.value)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "base64url", input: value.value, inst: closure_0, continue: !pattern.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodE164 = fnResult.$constructor("$ZodE164", (arg0, pattern) => {
      if (null == pattern.pattern) {
        pattern.pattern = closure_10.e164;
      }
      const $ZodStringFormat = exports.$ZodStringFormat;
      $ZodStringFormat.init(arg0, pattern);
    });
    exports.$ZodJWT = fnResult.$constructor("$ZodJWT", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        if (!outer1_14(value.value, closure_1.alg)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: "jwt", input: value.value, inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodCustomStringFormat = fnResult.$constructor("$ZodCustomStringFormat", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodStringFormat = _exports.$ZodStringFormat;
      $ZodStringFormat.init(_zod, arg1);
      _zod._zod.check = (value) => {
        if (!closure_1.fn(value.value)) {
          const issues = value.issues;
          const obj = { code: "invalid_format", format: closure_1.format, input: value.value, inst: closure_0, continue: !closure_1.abort };
          issues.push(obj);
        }
      };
    });
    exports.$ZodNumber = fnResult.$constructor("$ZodNumber", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      let number = _zod._zod.bag.pattern;
      if (null == number) {
        number = closure_10.number;
      }
      _zod._zod.pattern = number;
      _zod._zod.parse = (value) => {
        if (coerce.coerce) {
          const _Number = Number;
          value.value = Number(value.value);
        }
        while (true) {
          let tmp3 = value;
          value = value.value;
          let str = "number";
          let tmp4 = "number" === typeof value;
          if (!tmp4) {
            break;
          } else {
            let tmp5 = globalThis;
            let _Number2 = Number;
            if (Number.isNaN(value)) {
              break;
            } else {
              let _Number3 = Number;
              if (!Number.isFinite(value)) {
                break;
              } else {
                let tmp6 = value;
                return value;
              }
            }
          }
          let tmp7;
          if (tmp4) {
            let tmp8 = globalThis;
            let _Number4 = Number;
            let str2 = "NaN";
            if (!Number.isNaN(value)) {
              let _Number5 = Number;
              let str3 = "Infinity";
              str2 = str3;
            }
            tmp7 = str2;
          }
          let tmp9 = value;
          let issues = value.issues;
          let tmp10 = globalThis;
          let obj = { expected: "number", code: "invalid_type", input: value };
          let tmp11 = closure_0;
          obj.inst = closure_0;
          if (tmp7) {
            obj = { received: tmp7 };
          } else {
            obj = {};
          }
          let arr = issues.push(Object.assign(obj, obj));
          return value;
        }
      };
    });
    exports.$ZodNumberFormat = fnResult.$constructor("$ZodNumberFormat", (arg0, arg1) => {
      const $ZodCheckNumberFormat = closure_8.$ZodCheckNumberFormat;
      $ZodCheckNumberFormat.init(arg0, arg1);
      const $ZodNumber = exports.$ZodNumber;
      $ZodNumber.init(arg0, arg1);
    });
    exports.$ZodBoolean = fnResult.$constructor("$ZodBoolean", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_10.boolean;
      _zod._zod.parse = (value) => {
        if (coerce.coerce) {
          const _Boolean = Boolean;
          value.value = Boolean(value.value);
        }
        while (true) {
          let tmp3 = value;
          value = value.value;
          let str = "boolean";
          if ("boolean" === typeof value) {
            break;
          } else {
            let tmp4 = value;
            let issues = value.issues;
            let obj = { expected: "boolean", code: "invalid_type", input: value };
            let tmp5 = closure_0;
            obj.inst = closure_0;
            let arr = issues.push(obj);
            break;
          }
          return value;
        }
      };
    });
    exports.$ZodBigInt = fnResult.$constructor("$ZodBigInt", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_10.bigint;
      _zod._zod.parse = (value) => {
        if (coerce.coerce) {
          const _BigInt = BigInt;
          value.value = BigInt(value.value);
        }
        while (true) {
          let tmp3 = value;
          let str = "bigint";
          if ("bigint" === typeof value.value) {
            break;
          } else {
            let tmp4 = value;
            let issues = value.issues;
            let obj = { expected: "bigint", code: "invalid_type", input: value.value };
            let tmp5 = closure_0;
            obj.inst = closure_0;
            let arr = issues.push(obj);
            break;
          }
          return value;
        }
      };
    });
    exports.$ZodBigIntFormat = fnResult.$constructor("$ZodBigIntFormat", (arg0, arg1) => {
      const $ZodCheckBigIntFormat = closure_8.$ZodCheckBigIntFormat;
      $ZodCheckBigIntFormat.init(arg0, arg1);
      const $ZodBigInt = exports.$ZodBigInt;
      $ZodBigInt.init(arg0, arg1);
    });
    exports.$ZodSymbol = fnResult.$constructor("$ZodSymbol", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        value = value.value;
        if ("symbol" !== typeof value) {
          const issues = value.issues;
          const obj = { expected: "symbol", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodUndefined = fnResult.$constructor("$ZodUndefined", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_10.undefined;
      const items = [undefined];
      _zod._zod.values = new Set(items);
      _zod._zod.optin = "optional";
      _zod._zod.optout = "optional";
      _zod._zod.parse = (value) => {
        value = value.value;
        if (undefined !== value) {
          const issues = value.issues;
          const obj = { expected: "undefined", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodNull = fnResult.$constructor("$ZodNull", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.pattern = closure_10.null;
      _zod._zod.values = new Set([null]);
      _zod._zod.parse = (value) => {
        value = value.value;
        if (null !== value) {
          const issues = value.issues;
          const obj = { expected: "null", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodAny = fnResult.$constructor("$ZodAny", (_zod) => {
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0) => arg0;
    });
    exports.$ZodUnknown = fnResult.$constructor("$ZodUnknown", (_zod) => {
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0) => arg0;
    });
    exports.$ZodNever = fnResult.$constructor("$ZodNever", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (issues) => {
        issues = issues.issues;
        const obj = { expected: "never", code: "invalid_type", input: issues.value, inst: closure_0 };
        issues.push(obj);
        return issues;
      };
    });
    exports.$ZodVoid = fnResult.$constructor("$ZodVoid", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        value = value.value;
        if (undefined !== value) {
          const issues = value.issues;
          const obj = { expected: "void", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodDate = fnResult.$constructor("$ZodDate", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        if (coerce.coerce) {
          const _Date = Date;
          const date = new Date(value.value);
          value.value = date;
        }
        while (true) {
          let tmp7 = value;
          value = value.value;
          let tmp8 = globalThis;
          let _Date2 = Date;
          let tmp9 = value instanceof Date;
          let tmp10 = tmp9;
          if (!tmp9) {
            break;
          } else {
            let _Number = Number;
            tmp10 = !Number.isNaN(value.getTime());
            break;
          }
          if (tmp10) {
            return value;
          } else {
            let tmp11 = value;
            let issues = value.issues;
            let obj = { expected: "date", code: "invalid_type", input: value };
            if (tmp9) {
              obj = {};
              let str = "Invalid Date";
              obj.received = "Invalid Date";
            } else {
              obj = {};
            }
            let obj1 = {};
            let tmp12 = closure_0;
            obj1.inst = closure_0;
            let arr = issues.push(Object.assign(obj, obj, obj1));
          }
        }
      };
    });
    exports.$ZodArray = fnResult.$constructor("$ZodArray", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        let length;
        let nextPromise = value;
        let closure_0 = value;
        let closure_1 = arg1;
        value = value.value;
        let closure_2 = value;
        if (Array.isArray(value)) {
          const _Array = Array;
          nextPromise.value = Array(value.length);
          const items = [];
          let num = 0;
          if (0 < value.length) {
            do {
              let tmp4 = (function _loop2(arg0) {
                let closure_0 = arg0;
                const _zod = element.element._zod;
                const runResult = _zod.run({ value: value[arg0], issues: [] }, element);
                if (runResult instanceof Promise) {
                  items.push(runResult.then((arg0) => {
                    outer3_15(arg0, closure_0, closure_0);
                  }));
                } else {
                  outer2_15(runResult, closure_0, arg0);
                }
              })(num);
              num = num + 1;
              length = value.length;
            } while (num < length);
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          const issues = nextPromise.issues;
          const obj = { expected: "array", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodObject = fnResult.$constructor("$ZodObject", (_zod, shape) => {
      let closure_0 = _zod;
      const _exports = shape;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, shape);
      const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(shape, "shape");
      if (null == ownPropertyDescriptor) {
        shape = shape.shape;
        const _Object = Object;
        let obj = {
          get() {
              const merged = Object.assign({}, shape);
              Object.defineProperty(closure_1, "shape", { value: merged });
              return merged;
            }
        };
        Object.defineProperty(shape, "shape", obj);
      }
      let closure_3 = closure_11.cached(() => outer1_17(closure_1));
      closure_11.defineLazy(_zod._zod, "propValues", () => {
        shape = shape.shape;
        const obj = {};
        for (const key10010 in shape) {
          let tmp13 = key10010;
          let tmp14 = key10010;
          let _zod = shape[key10010]._zod;
          if (!_zod.values) {
            continue;
          } else {
            let tmp = obj;
            let tmp2 = tmp13;
            if (null == obj[tmp14]) {
              let tmp3 = obj;
              let tmp4 = tmp13;
              let _Set = Set;
              let tmp5 = new.target;
              let tmp6 = new.target;
              let set = new Set();
              let tmp8 = set;
              obj[tmp14] = set;
            }
            let values = _zod.values;
            let tmp9 = values;
            for (const item10025 of values) {
              let tmp10 = obj;
              let tmp11 = tmp13;
              let obj2 = obj[tmp14];
              let addResult = obj2.add(item10025);
              continue;
            }
          }
          continue;
        }
        return obj;
      });
      const isObject = closure_11.isObject;
      const catchall = shape.catchall;
      _zod._zod.parse = (value) => {
        let closure_0 = value;
        let closure_1 = arg1;
        if (null == shape) {
          shape = items.value;
        }
        value = value.value;
        shape = value;
        if (isObject(value)) {
          value.value = {};
          items = [];
          shape = shape.shape;
          function _loop4(item10025) {
            let closure_0 = item10025;
            let closure_1 = tmp2;
            const _zod = tmp._zod;
            const runResult = _zod.run({ value: value[item10025], issues: [] }, closure_1);
            if (runResult instanceof Promise) {
              items.push(runResult.then((arg0) => {
                outer3_16(arg0, closure_0, closure_0, outer1_2, closure_1);
              }));
            } else {
              outer2_16(runResult, closure_0, item10025, value, tmp2);
            }
          }
          const keys = shape.keys;
          for (const item10025 of keys) {
            let tmp7 = _loop4;
            let _loop4Result = _loop4(item10025);
            continue;
          }
          if (catchall) {
            let nextPromise = outer1_18(items, value, value, arg1, items.value, closure_0);
          } else {
            nextPromise = value;
            if (items.length) {
              nextPromise = Promise.all(items).then(() => closure_0);
              const allPromises = Promise.all(items);
            }
          }
          return nextPromise;
        } else {
          const issues = value.issues;
          const obj = { expected: "object", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
          return value;
        }
      };
    });
    exports.$ZodObjectJIT = fnResult.$constructor("$ZodObjectJIT", (_zod, catchall) => {
      let closure_0 = _zod;
      const _exports = catchall;
      const $ZodObject = _exports.$ZodObject;
      $ZodObject.init(_zod, catchall);
      const parse = _zod._zod.parse;
      let closure_5 = closure_11.cached(() => outer1_17(closure_1));
      const isObject = closure_11.isObject;
      let value = !catchall.globalConfig.jitless;
      const __setModuleDefault = value;
      if (value) {
        value = closure_11.allowsEval.value;
      }
      catchall = catchall.catchall;
      _zod._zod.parse = (arg0, arg1) => {
        let iter = arg0;
        if (null == value2) {
          value2 = value.value;
        }
        value = iter.value;
        if (isObject(value)) {
          if (closure_7) {
            if (closure_8) {
              let async;
              if (null != arg1) {
                async = arg1.async;
              }
              if (!callback) {
                callback = (function generateFastpass(shape) {
                  const callback = shape;
                  const doc = new callback(outer2_2[9]).Doc(["shape", "payload", "ctx"]);
                  const value = outer1_5.value;
                  function parseStr(nextResult) {
                    const escResult = outer3_11.esc(nextResult);
                    return "shape[" + escResult + "]._zod.run({ value: input[" + escResult + "], issues: [] }, ctx)";
                  }
                  doc.write("const input = payload.value;");
                  const obj = Object.create(null);
                  let num = 0;
                  while (tmp5 !== undefined) {
                    let tmp7 = obj;
                    let tmp8 = num;
                    let tmp9 = +num;
                    num = tmp9 + 1;
                    obj[tmp6] = `key_${tmp9}`;
                    continue;
                  }
                  doc.write("const newResult = {};");
                  const iter = value.keys[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp52 = obj;
                    let tmp53 = obj[nextResult];
                    let tmp54 = outer2_11;
                    let tmp51 = nextResult;
                    let escResult = outer2_11.esc(nextResult);
                    let tmp56 = shape;
                    let tmp57 = shape[nextResult];
                    let optout;
                    if (null != tmp57) {
                      let tmp12 = tmp57;
                      let _zod = tmp58._zod;
                      if (null != _zod) {
                        let tmp15 = _zod;
                        optout = tmp13.optout;
                      }
                    }
                    let tmp16 = tmp2;
                    let tmp17 = tmp53;
                    let tmp18 = parseStr;
                    let tmp19 = nextResult;
                    let _HermesInternal = HermesInternal;
                    let str = "const ";
                    let tmp20 = tmp53;
                    let str2 = " = ";
                    let str3 = ";";
                    let writeResult2 = obj2.write("const " + tmp53 + " = " + parseStr(tmp51) + ";");
                    if ("optional" === optout) {
                      let tmp35 = tmp2;
                      let tmp36 = tmp53;
                      let tmp37 = escResult;
                      let _HermesInternal3 = HermesInternal;
                      let str14 = "\n        if (";
                      let tmp38 = tmp53;
                      let str15 = ".issues.length) {\n          if (";
                      let tmp39 = escResult;
                      let str16 = " in input) {\n            payload.issues = payload.issues.concat(";
                      let tmp40 = tmp53;
                      let str17 = ".issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [";
                      let tmp41 = escResult;
                      let str18 = ", ...iss.path] : [";
                      let tmp42 = escResult;
                      let str19 = "]\n            })));\n          }\n        }\n        \n        if (";
                      let tmp43 = tmp53;
                      let str20 = ".value === undefined) {\n          if (";
                      let tmp44 = escResult;
                      let str21 = " in input) {\n            newResult[";
                      let tmp45 = escResult;
                      let str22 = "] = undefined;\n          }\n        } else {\n          newResult[";
                      let tmp46 = escResult;
                      let str23 = "] = ";
                      let tmp47 = tmp53;
                      let str24 = ".value;\n        }\n        \n      ";
                      let writeResult3 = obj2.write("\n        if (" + tmp53 + ".issues.length) {\n          if (" + escResult + " in input) {\n            payload.issues = payload.issues.concat(" + tmp53 + ".issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [" + escResult + ", ...iss.path] : [" + escResult + "]\n            })));\n          }\n        }\n        \n        if (" + tmp53 + ".value === undefined) {\n          if (" + escResult + " in input) {\n            newResult[" + escResult + "] = undefined;\n          }\n        } else {\n          newResult[" + escResult + "] = " + tmp53 + ".value;\n        }\n        \n      ");
                    } else {
                      let tmp22 = tmp2;
                      let tmp23 = tmp53;
                      let tmp24 = escResult;
                      let _HermesInternal2 = HermesInternal;
                      let str4 = "\n        if (";
                      let tmp25 = tmp53;
                      let str5 = ".issues.length) {\n          payload.issues = payload.issues.concat(";
                      let tmp26 = tmp53;
                      let str6 = ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [";
                      let tmp27 = escResult;
                      let str7 = ", ...iss.path] : [";
                      let tmp28 = escResult;
                      let str8 = "]\n          })));\n        }\n        \n        if (";
                      let tmp29 = tmp53;
                      let str9 = ".value === undefined) {\n          if (";
                      let tmp30 = escResult;
                      let str10 = " in input) {\n            newResult[";
                      let tmp31 = escResult;
                      let str11 = "] = undefined;\n          }\n        } else {\n          newResult[";
                      let tmp32 = escResult;
                      let str12 = "] = ";
                      let tmp33 = tmp53;
                      let str13 = ".value;\n        }\n        \n      ";
                      let writeResult4 = obj2.write("\n        if (" + tmp53 + ".issues.length) {\n          payload.issues = payload.issues.concat(" + tmp53 + ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [" + escResult + ", ...iss.path] : [" + escResult + "]\n          })));\n        }\n        \n        if (" + tmp53 + ".value === undefined) {\n          if (" + escResult + " in input) {\n            newResult[" + escResult + "] = undefined;\n          }\n        } else {\n          newResult[" + escResult + "] = " + tmp53 + ".value;\n        }\n        \n      ");
                    }
                    continue;
                  }
                  doc.write("payload.value = newResult;");
                  doc.write("return payload;");
                  let closure_1 = obj2.compile();
                  return (arg0, arg1) => callback(closure_0, arg0, arg1);
                })(shape.shape);
              }
              const tmp13 = callback(iter, arg1);
              iter = catchall;
              let tmp14 = tmp13;
              if (catchall) {
                tmp14 = outer1_18([], value, tmp13, arg1, value2, closure_0);
              }
              let tmp9 = tmp14;
            }
          }
          tmp9 = parse(iter, arg1);
        } else {
          const issues = iter.issues;
          let obj = { expected: "object", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
          return iter;
        }
      };
    });
    exports.$ZodUnion = fnResult.$constructor("$ZodUnion", (_zod, options) => {
      let closure_0 = _zod;
      const _exports = options;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, options);
      closure_11.defineLazy(_zod._zod, "optin", () => {
        options = options.options;
        let str;
        if (options.some((_zod) => "optional" === _zod._zod.optin)) {
          str = "optional";
        }
        return str;
      });
      closure_11.defineLazy(_zod._zod, "optout", () => {
        options = options.options;
        let str;
        if (options.some((_zod) => "optional" === _zod._zod.optout)) {
          str = "optional";
        }
        return str;
      });
      closure_11.defineLazy(_zod._zod, "values", () => {
        options = options.options;
        if (options.every((_zod) => _zod._zod.values)) {
          const _Set = Set;
          const options2 = options.options;
          const set = new Set(options2.flatMap((_zod) => Array.from(_zod._zod.values)));
          return set;
        }
      });
      closure_11.defineLazy(_zod._zod, "pattern", () => {
        options = options.options;
        if (options.every((_zod) => _zod._zod.pattern)) {
          options = options.options;
          const mapped = options.map((_zod) => _zod._zod.pattern);
          const _RegExp = RegExp;
          const mapped1 = mapped.map((source) => outer2_11.cleanRegex(source.source));
          const _HermesInternal = HermesInternal;
          const regExp = new RegExp("^(" + mapped1.join("|") + ")$");
          return regExp;
        }
      });
      let closure_2 = 1 === options.options.length;
      const run = options.options[0]._zod.run;
      _zod._zod.parse = (arg0, arg1) => {
        let closure_0 = arg0;
        let options = arg1;
        if (closure_2) {
          return run(arg0, arg1);
        } else {
          let flag = false;
          const items = [];
          options = options.options;
          const iter2 = options[Symbol.iterator]();
          while (iter2 !== undefined) {
            let _zod = iter2.next()._zod;
            let obj = {};
            let tmp21 = arg0;
            obj.value = iter.value;
            obj.issues = [];
            let tmp22 = arg1;
            let runResult = _zod.run(obj, tmp);
            let tmp24 = runResult;
            let _Promise2 = Promise;
            if (runResult instanceof Promise) {
              let tmp11 = items;
              let tmp12 = runResult;
              let arr = items.push(tmp24);
              flag = true;
            } else {
              let tmp6 = runResult;
              if (0 === tmp24.issues.length) {
                let tmp10 = runResult;
                iter2.return();
                return tmp24;
              } else {
                let tmp7 = items;
                let tmp8 = runResult;
                arr = items.push(tmp24);
              }
            }
            continue;
          }
          if (flag) {
            let nextPromise = Promise.all(items).then((arg0) => outer2_19(arg0, closure_0, closure_0, closure_1));
            const allPromises = Promise.all(items);
          } else {
            nextPromise = outer1_19(items, iter, closure_0, tmp);
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodXor = fnResult.$constructor("$ZodXor", (_zod, options) => {
      let closure_0 = _zod;
      const _exports = options;
      const $ZodUnion = _exports.$ZodUnion;
      $ZodUnion.init(_zod, options);
      options.inclusive = false;
      let closure_2 = 1 === options.options.length;
      const run = options.options[0]._zod.run;
      _zod._zod.parse = (arg0, arg1) => {
        let closure_0 = arg0;
        let options = arg1;
        if (closure_2) {
          return run(arg0, arg1);
        } else {
          let flag = false;
          const items = [];
          options = options.options;
          const iter2 = options[Symbol.iterator]();
          while (iter2 !== undefined) {
            let _zod = iter2.next()._zod;
            let obj = {};
            let tmp6 = arg0;
            obj.value = iter.value;
            obj.issues = [];
            let tmp7 = arg1;
            let runResult = _zod.run(obj, tmp);
            let tmp9 = runResult;
            let _Promise = Promise;
            let tmp11 = items;
            let tmp12 = runResult;
            let tmp10 = runResult instanceof Promise;
            let arr = items.push(runResult);
            if (tmp10) {
              flag = true;
            }
            continue;
          }
          if (flag) {
            let nextPromise = Promise.all(items).then((arg0) => {
              outer2_20(arg0, closure_0, closure_0, closure_1);
              return closure_0;
            });
            const allPromises = Promise.all(items);
          } else {
            nextPromise = arg0;
            outer1_20(items, arg0, closure_0, tmp);
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodDiscriminatedUnion = fnResult.$constructor("$ZodDiscriminatedUnion", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      arg1.inclusive = false;
      const $ZodUnion = _exports.$ZodUnion;
      $ZodUnion.init(_zod, arg1);
      const parse = _zod._zod.parse;
      closure_11.defineLazy(_zod._zod, "propValues", () => {
        const obj = {};
        const iter = closure_1.options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp19 = nextResult;
          let propValues = nextResult._zod.propValues;
          let tmp20 = propValues;
          if (propValues) {
            let _Object = Object;
            let tmp2 = propValues;
            if (0 !== Object.keys(tmp20).length) {
              let _Object2 = Object;
              let tmp21 = propValues;
              let entries = Object.entries(tmp20);
              let tmp23 = entries;
              for (const item10021 of entries) {
                let tmp24 = lib;
                let tmp25 = lib(item10021, 2);
                let first = tmp25[0];
                let tmp27 = first;
                let tmp28 = tmp25[1];
                let tmp29 = obj;
                if (!obj[first]) {
                  let tmp3 = obj;
                  let tmp4 = first;
                  let _Set = Set;
                  let tmp5 = new.target;
                  let tmp6 = new.target;
                  let set = new Set();
                  let tmp8 = set;
                  obj[tmp27] = set;
                }
                let tmp9 = tmp28;
                let tmp10 = tmp28;
                for (const item10034 of tmp28) {
                  let tmp11 = obj;
                  let tmp12 = first;
                  let obj2 = obj[tmp27];
                  let addResult = obj2.add(item10034);
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          let _Error = Error;
          let tmp14 = closure_1;
          let options = closure_1.options;
          let _HermesInternal = HermesInternal;
          let str = "Invalid discriminated union option at index \"";
          let str2 = "\"";
          let tmp15 = new.target;
          let tmp16 = new.target;
          let error = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
          let tmp18 = error;
          throw error;
        }
        return obj;
      });
      let closure_3 = closure_11.cached(() => {
        const map = new Map();
        const iter = closure_1.options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let propValues = nextResult._zod.propValues;
          let tmp5;
          let tmp24 = nextResult;
          if (null != propValues) {
            let tmp3 = propValues;
            let tmp4 = closure_1;
            tmp5 = tmp25[closure_1.discriminator];
          }
          let tmp6 = tmp5;
          if (tmp5) {
            let tmp7 = tmp5;
            if (0 !== tmp6.size) {
              let tmp26 = tmp5;
              let tmp27 = tmp6;
              for (const item10028 of tmp5) {
                let tmp8 = item10028;
                let tmp9 = map;
                if (obj.has(item10028)) {
                  let _Error = Error;
                  let _String = String;
                  let tmp14 = item10028;
                  let _HermesInternal = HermesInternal;
                  let str = "Duplicate discriminator value \"";
                  let str2 = "\"";
                  let tmp15 = new.target;
                  let tmp16 = new.target;
                  let error = new Error("Duplicate discriminator value \"" + String(tmp8) + "\"");
                  let tmp18 = error;
                  throw error;
                } else {
                  let tmp10 = map;
                  let tmp11 = item10028;
                  let tmp12 = nextResult;
                  let result = obj.set(tmp8, tmp24);
                  continue;
                }
              }
              continue;
            }
          }
          let _Error2 = Error;
          let tmp19 = closure_1;
          let options = closure_1.options;
          let _HermesInternal2 = HermesInternal;
          let str3 = "Invalid discriminated union option at index \"";
          let str4 = "\"";
          let tmp20 = new.target;
          let tmp21 = new.target;
          let error1 = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
          let tmp23 = error1;
          throw error1;
        }
        return map;
      });
      _zod._zod.parse = (value) => {
        value = value.value;
        if (outer1_11.isObject(value)) {
          value = lib.value;
          let tmp5;
          if (null != value) {
            tmp5 = value[closure_1.discriminator];
          }
          value = value.get(tmp5);
          if (value) {
            const _zod = value._zod;
            let runResult = _zod.run(value, arg1);
          } else if (closure_1.unionFallback) {
            runResult = parse(value, arg1);
          } else {
            const issues = value.issues;
            let obj = { code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: closure_1.discriminator, input: value };
            const items = [closure_1.discriminator];
            obj.path = items;
            obj.inst = closure_0;
            issues.push(obj);
            runResult = value;
          }
          return runResult;
        } else {
          const issues1 = value.issues;
          obj = { code: "invalid_type", expected: "object", input: value, inst: closure_0 };
          issues1.push(obj);
          return value;
        }
      };
    });
    exports.$ZodIntersection = fnResult.$constructor("$ZodIntersection", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        let closure_0 = value;
        value = value.value;
        const _zod = closure_0.left._zod;
        const runResult = _zod.run({ value, issues: [] }, arg1);
        const _zod2 = closure_0.right._zod;
        const runResult1 = _zod2.run({ value, issues: [] }, arg1);
        if (!(runResult instanceof Promise)) {
          if (!(runResult1 instanceof Promise)) {
            let nextPromise = outer1_22(value, runResult, runResult1);
          }
          return nextPromise;
        }
        const items = [runResult, runResult1];
        nextPromise = Promise.all(items).then((arg0) => {
          const tmp = outer2_3(arg0, 2);
          return outer2_22(closure_0, tmp[0], tmp[1]);
        });
      };
    });
    exports.$ZodTuple = fnResult.$constructor("$ZodTuple", (_zod, items) => {
      let closure_0 = _zod;
      const _exports = items;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, items);
      items = items.items;
      _zod._zod.parse = (value) => {
        let nextPromise = value;
        let closure_0 = value;
        value = value.value;
        let arr = value;
        if (Array.isArray(value)) {
          nextPromise.value = [];
          let items = [];
          let obj1 = outer1_5(items);
          const reversed = obj1.reverse();
          const findIndexResult = reversed.findIndex((_zod) => "optional" !== _zod._zod.optin);
          let num2 = 0;
          if (-1 !== findIndexResult) {
            num2 = items.length - findIndexResult;
          }
          if (!items.rest) {
            const issues = nextPromise.issues;
            if (arr.length > items.length) {
              let obj = { code: "too_big", maximum: items.length, inclusive: true };
            } else {
              obj = { code: "too_small", minimum: items.length };
            }
            obj1 = { input: arr, inst: closure_0, origin: "array" };
            arr = issues.push(Object.assign({}, obj, obj1));
            return nextPromise;
          }
          let num4 = -1;
          items = -1;
          for (const item10077 of items) {
            let tmp54 = num4;
            let sum = num4 + 1;
            num4 = sum;
            items = sum;
            let tmp56 = value;
            if (sum < arr.length) {
              let tmp26 = item10077;
              let _zod = tmp53._zod;
              let obj2 = {};
              let tmp27 = value;
              let tmp28 = num4;
              obj2.value = arr[num4];
              obj2.issues = [];
              let tmp29 = arg1;
              let runResult = _zod.run(obj2, arg1);
              let promise = runResult;
              let _Promise = Promise;
              if (runResult instanceof Promise) {
                let tmp36 = items;
                let tmp37 = runResult;
                arr = items.push(promise.then((arg0) => {
                  outer2_23(arg0, closure_0, c1);
                }));
              } else {
                let tmp31 = outer1_23;
                let tmp32 = runResult;
                let tmp33 = nextPromise;
                let tmp34 = num4;
                let tmp35 = outer1_23(promise, nextPromise, num4);
              }
            } else {
              let tmp24 = num4;
              let tmp25 = num2;
            }
            continue;
          }
          if (items.rest) {
            const substr = arr.slice(items.length);
            for (const item10116 of substr) {
              let tmp57 = num4;
              let sum1 = num4 + 1;
              num4 = sum1;
              items = sum1;
              let tmp59 = items;
              let _zod2 = items.rest._zod;
              let obj3 = { value: item10116, issues: [] };
              let tmp60 = arg1;
              let runResult1 = _zod2.run(obj3, arg1);
              let promise3 = runResult1;
              let _Promise3 = Promise;
              if (runResult1 instanceof Promise) {
                let tmp49 = items;
                let tmp50 = runResult1;
                let arr1 = items.push(promise3.then((arg0) => {
                  outer2_23(arg0, closure_0, c1);
                }));
              } else {
                let tmp44 = outer1_23;
                let tmp45 = runResult1;
                let tmp46 = nextPromise;
                let tmp47 = num4;
                let tmp48 = outer1_23(promise3, nextPromise, num4);
              }
              continue;
            }
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          const issues1 = nextPromise.issues;
          obj = { input: arr, inst: closure_0, expected: "tuple", code: "invalid_type" };
          issues1.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodRecord = fnResult.$constructor("$ZodRecord", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        let tmp17;
        let nextPromise = value;
        let closure_0 = value;
        const keyType = arg1;
        value = value.value;
        let closure_2 = value;
        if (outer1_11.isPlainObject(value)) {
          let items = [];
          const values = keyType.keyType._zod.values;
          nextPromise.value = {};
          if (values) {
            const _Set = Set;
            const set = new Set();
            function _loop5(item10039) {
              const value = item10039;
              if ("string" !== typeof item10039) {
                let str = "number";
              }
              str = item10039;
              if ("number" === typeof item10039) {
                str = item10039.toString();
              }
              set.add(str);
              const _zod = closure_1.valueType._zod;
              const runResult = _zod.run({ value: value2[item10039], issues: [] }, closure_1);
              if (runResult instanceof Promise) {
                items.push(runResult.then((issues) => {
                  if (issues.issues.length) {
                    issues = item10039.issues;
                    const push = issues.push;
                    push.apply(issues, outer3_5(outer3_11.prefixIssues(item10039, issues.issues)));
                  }
                  item10039.value[item10039] = issues.value;
                }));
              } else {
                if (runResult.issues.length) {
                  let issues = value.issues;
                  let push = issues.push;
                  push.apply(issues, outer2_5(outer2_11.prefixIssues(item10039, runResult.issues)));
                }
                value.value[item10039] = runResult.value;
              }
            }
            for (const item10039 of values) {
              let tmp13 = _loop5;
              let _loop5Result = _loop5(item10039);
              continue;
            }
            let tmp18;
            const keys = Object.keys();
            if (keys !== undefined) {
              tmp18 = tmp17;
              while (keys[tmp12] !== undefined) {
                let tmp28 = tmp21;
                if (set.has(tmp21)) {
                  continue;
                } else {
                  let items1 = tmp20;
                  if (null == tmp20) {
                    items1 = [];
                  }
                  let arr = items1.push(tmp21);
                  tmp17 = items1;
                  continue;
                }
                continue;
              }
            }
            let tmp23 = tmp18;
            if (tmp18) {
              tmp23 = tmp18.length > 0;
            }
            if (tmp23) {
              let issues = nextPromise.issues;
              let obj = { code: "unrecognized_keys", input: value, inst: closure_0, keys: tmp18 };
              issues.push(obj);
            }
          } else {
            function _loop6(item10027) {
              const value = item10027;
              if ("__proto__" === item10027) {
                return 0;
              } else {
                const _zod3 = closure_1.keyType._zod;
                let obj = { value: item10027, issues: [] };
                const runResult = _zod3.run(obj, runResult1);
                runResult1 = runResult;
                if (runResult instanceof Promise) {
                  const _Error2 = Error;
                  const error = new Error("Async schemas not supported in object keys currently");
                  throw error;
                } else {
                  let iter = runResult;
                  if ("string" === typeof item10027) {
                    const number = outer2_10.number;
                    iter = runResult;
                    if (number.test(item10027)) {
                      iter = runResult;
                      if (runResult.issues.length) {
                        const _zod = closure_1.keyType._zod;
                        obj = {};
                        const _Number = Number;
                        obj.value = Number(item10027);
                        obj.issues = [];
                        runResult1 = _zod.run(obj, runResult1);
                        if (runResult1 instanceof Promise) {
                          const _Error = Error;
                          const error1 = new Error("Async schemas not supported in object keys currently");
                          throw error1;
                        } else {
                          iter = runResult;
                          if (0 === runResult1.issues.length) {
                            iter = runResult1;
                          }
                        }
                      }
                    }
                  }
                  if (iter.issues.length) {
                    if ("loose" === tmp4.mode) {
                      value.value[item10027] = value2[item10027];
                    } else {
                      let issues = value.issues;
                      obj = { code: "invalid_key", origin: "record" };
                      const issues1 = iter.issues;
                      obj.issues = issues1.map((path) => outer3_11.finalizeIssue(path, runResult1, outer3_9.config()));
                      obj.input = item10027;
                      const items = [item10027];
                      obj.path = items;
                      obj.inst = value;
                      issues.push(obj);
                    }
                    return 0;
                  } else {
                    const _zod2 = tmp4.valueType._zod;
                    const obj1 = { value: value2[item10027], issues: [] };
                    const runResult2 = _zod2.run(obj1, runResult1);
                    if (runResult2 instanceof Promise) {
                      items.push(runResult2.then((issues) => {
                        if (issues.issues.length) {
                          issues = item10027.issues;
                          const push = issues.push;
                          push.apply(issues, outer3_5(outer3_11.prefixIssues(item10027, issues.issues)));
                        }
                        item10027.value[runResult1.value] = issues.value;
                      }));
                    } else {
                      if (runResult2.issues.length) {
                        const issues2 = value.issues;
                        let push = issues2.push;
                        push.apply(issues2, outer2_5(outer2_11.prefixIssues(item10027, runResult2.issues)));
                      }
                      value.value[iter.value] = runResult2.value;
                    }
                  }
                }
              }
            }
            const _Reflect = Reflect;
            const ownKeysResult = Reflect.ownKeys(value);
            for (const item10027 of ownKeysResult) {
              let tmp26 = _loop6;
              let _loop6Result = _loop6(item10027);
              continue;
            }
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          let issues1 = nextPromise.issues;
          obj = { expected: "record", code: "invalid_type", input: value, inst: closure_0 };
          issues1.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodMap = fnResult.$constructor("$ZodMap", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        let nextPromise = value;
        let closure_0 = value;
        let closure_1 = arg1;
        value = value.value;
        let closure_2 = value;
        if (value instanceof Map) {
          let items = [];
          const _Map = Map;
          const map = new Map();
          nextPromise.value = map;
          function _loop7(value) {
            let closure_0 = value;
            const _zod = closure_1.keyType._zod;
            let obj = { value, issues: [] };
            const runResult = _zod.run(obj, closure_1);
            const _zod2 = closure_1.valueType._zod;
            obj = { value: closure_4, issues: [] };
            const runResult1 = _zod2.run(obj, closure_1);
            if (!(runResult instanceof Promise)) {
              if (!(runResult1 instanceof Promise)) {
                outer2_24(runResult, runResult1, closure_0, value, closure_2, closure_0, closure_1);
              }
            }
            const items = [runResult, runResult1];
            items.push(Promise.all(items).then((arg0) => {
              const tmp = outer3_3(arg0, 2);
              outer3_24(tmp[0], tmp[1], closure_0, closure_0, outer1_2, closure_0, outer1_1);
            }));
          }
          const tmp9 = value[Symbol.iterator]();
          while (tmp9 !== undefined) {
            let tmp12 = outer1_3;
            let tmp13 = outer1_3(tmp10, 2);
            let closure_4 = tmp13[1];
            let tmp14 = _loop7;
            let _loop7Result = _loop7(tmp13[0]);
            continue;
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          const issues = nextPromise.issues;
          let obj = { expected: "map", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodSet = fnResult.$constructor("$ZodSet", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        let nextPromise = value;
        let closure_0 = value;
        value = value.value;
        if (value instanceof Set) {
          const items = [];
          const _Set = Set;
          const set = new Set();
          nextPromise.value = set;
          for (const item10028 of value) {
            let tmp19 = valueType;
            let _zod = valueType.valueType._zod;
            let obj = { value: item10028, issues: [] };
            let tmp20 = arg1;
            let runResult = _zod.run(obj, arg1);
            let promise2 = runResult;
            let _Promise2 = Promise;
            if (runResult instanceof Promise) {
              let tmp15 = items;
              let tmp16 = runResult;
              let arr = items.push(promise2.then((arg0) => {
                outer2_25(arg0, closure_0);
              }));
            } else {
              let tmp11 = outer1_25;
              let tmp12 = runResult;
              let tmp13 = nextPromise;
              let tmp14 = outer1_25(promise2, nextPromise);
            }
            continue;
          }
          if (items.length) {
            nextPromise = Promise.all(items).then(() => closure_0);
            const allPromises = Promise.all(items);
          }
          return nextPromise;
        } else {
          const issues = nextPromise.issues;
          obj = { input: value, inst: closure_0, expected: "set", code: "invalid_type" };
          issues.push(obj);
          return nextPromise;
        }
      };
    });
    exports.$ZodEnum = fnResult.$constructor("$ZodEnum", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = enumValues.$ZodType;
      $ZodType.init(_zod, arg1);
      enumValues = closure_11.getEnumValues(arg1.entries);
      const set = new Set(enumValues);
      _zod._zod.values = set;
      const found = enumValues.filter((arg0) => {
        const propertyKeyTypes = outer1_11.propertyKeyTypes;
        return propertyKeyTypes.has(typeof arg0);
      });
      const mapped = found.map((includes) => {
        if ("string" === typeof includes) {
          let escapeRegexResult = outer1_11.escapeRegex(includes);
        } else {
          escapeRegexResult = includes.toString();
        }
        return escapeRegexResult;
      });
      const regExp = new RegExp("^(" + mapped.join("|") + ")$");
      _zod._zod.pattern = regExp;
      _zod._zod.parse = (value) => {
        value = value.value;
        if (!set.has(value)) {
          const issues = value.issues;
          const obj = { code: "invalid_value", values: enumValues, input: value, inst: closure_0 };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodLiteral = fnResult.$constructor("$ZodLiteral", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      if (0 === arg1.values.length) {
        const _Error = Error;
        const error = new Error("Cannot create literal schema with no valid values");
        throw error;
      } else {
        const _Set = Set;
        const set = new Set(arg1.values);
        _zod._zod.values = set;
        const _RegExp = RegExp;
        const values = arg1.values;
        const mapped = values.map((includes) => {
          if ("string" === typeof includes) {
            let escapeRegexResult = outer1_11.escapeRegex(includes);
          } else if (includes) {
            escapeRegexResult = outer1_11.escapeRegex(includes.toString());
          } else {
            const _String = String;
            escapeRegexResult = String(includes);
          }
          return escapeRegexResult;
        });
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^(" + mapped.join("|") + ")$");
        _zod._zod.pattern = regExp;
        _zod._zod.parse = (value) => {
          value = value.value;
          if (!set.has(value)) {
            const issues = value.issues;
            const obj = { code: "invalid_value", values: values.values, input: value, inst: closure_0 };
            issues.push(obj);
          }
          return value;
        };
      }
    });
    exports.$ZodFile = fnResult.$constructor("$ZodFile", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        value = value.value;
        if (!(value instanceof File)) {
          const issues = value.issues;
          const obj = { expected: "file", code: "invalid_type", input: value, inst: closure_0 };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodTransform = fnResult.$constructor("$ZodTransform", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value, direction) => {
        const constructor = value;
        if ("backward" === direction.direction) {
          const $ZodEncodeError = outer1_9.$ZodEncodeError;
          const prototype2 = $ZodEncodeError.prototype;
          const ZodEncodeError = new $ZodEncodeError(constructor.constructor.name);
          throw ZodEncodeError;
        } else {
          const transformResult = closure_1.transform(value.value, value);
          if (direction.async) {
            let resolved = transformResult;
            if (!tmp15) {
              resolved = Promise.resolve(transformResult);
            }
            return resolved.then((value) => {
              closure_0.value = value;
              return closure_0;
            });
          } else if (tmp15) {
            const $ZodAsyncError = outer1_9.$ZodAsyncError;
            const prototype = $ZodAsyncError.prototype;
            const ZodAsyncError = new $ZodAsyncError();
            throw ZodAsyncError;
          } else {
            value.value = transformResult;
            return value;
          }
        }
      };
    });
    exports.$ZodOptional = fnResult.$constructor("$ZodOptional", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "optional";
      _zod._zod.optout = "optional";
      closure_11.defineLazy(_zod._zod, "values", () => {
        let set;
        if (closure_0.innerType._zod.values) {
          const _Set = Set;
          const items = [];
          const items1 = [undefined];
          set = new Set(items.concat(outer1_5(closure_0.innerType._zod.values), items1));
        }
        return set;
      });
      closure_11.defineLazy(_zod._zod, "pattern", () => {
        const pattern = closure_0.innerType._zod.pattern;
        let regExp;
        if (pattern) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          regExp = new RegExp("^(" + outer1_11.cleanRegex(pattern.source) + ")?$");
        }
        return regExp;
      });
      _zod._zod.parse = (value) => {
        let closure_0 = value;
        if ("optional" === closure_0.innerType._zod.optin) {
          const _zod2 = closure_0.innerType._zod;
          const runResult = _zod2.run(value, arg1);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((arg0) => outer2_26(arg0, value.value));
          } else {
            nextPromise = outer1_26(runResult, value.value);
          }
          return nextPromise;
        } else {
          let runResult1 = value;
          if (undefined !== value.value) {
            const _zod = closure_0.innerType._zod;
            runResult1 = _zod.run(value, arg1);
          }
          return runResult1;
        }
      };
    });
    exports.$ZodExactOptional = fnResult.$constructor("$ZodExactOptional", (_zod) => {
      let closure_0 = arg1;
      const $ZodOptional = exports.$ZodOptional;
      $ZodOptional.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      closure_11.defineLazy(_zod._zod, "pattern", () => closure_0.innerType._zod.pattern);
      _zod._zod.parse = (arg0, arg1) => {
        const _zod = closure_0.innerType._zod;
        return _zod.run(arg0, arg1);
      };
    });
    exports.$ZodNullable = fnResult.$constructor("$ZodNullable", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "optin", () => closure_0.innerType._zod.optin);
      closure_11.defineLazy(_zod._zod, "optout", () => closure_0.innerType._zod.optout);
      closure_11.defineLazy(_zod._zod, "pattern", () => {
        const pattern = closure_0.innerType._zod.pattern;
        let regExp;
        if (pattern) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          regExp = new RegExp("^(" + outer1_11.cleanRegex(pattern.source) + "|null)$");
        }
        return regExp;
      });
      closure_11.defineLazy(_zod._zod, "values", () => {
        let set;
        if (closure_0.innerType._zod.values) {
          const _Set = Set;
          const items = [];
          set = new Set(items.concat(outer1_5(closure_0.innerType._zod.values), [null]));
        }
        return set;
      });
      _zod._zod.parse = (value) => {
        let runResult = value;
        if (null !== value.value) {
          const _zod = closure_0.innerType._zod;
          runResult = _zod.run(value, arg1);
        }
        return runResult;
      };
    });
    exports.$ZodDefault = fnResult.$constructor("$ZodDefault", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "optional";
      closure_11.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        if ("backward" === direction.direction) {
          const _zod2 = closure_0.innerType._zod;
          return _zod2.run(value, direction);
        } else if (undefined === value.value) {
          value.value = closure_0.defaultValue;
          return value;
        } else {
          const _zod = closure_0.innerType._zod;
          const runResult = _zod.run(value, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((arg0) => {
              outer2_27(arg0, outer1_0);
              return arg0;
            });
          } else {
            outer1_27(runResult, closure_0);
            nextPromise = runResult;
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodPrefault = fnResult.$constructor("$ZodPrefault", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.optin = "optional";
      closure_11.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        if ("backward" !== direction.direction) {
          if (undefined === value.value) {
            value.value = closure_0.defaultValue;
          }
        }
        const _zod = closure_0.innerType._zod;
        return _zod.run(value, direction);
      };
    });
    exports.$ZodNonOptional = fnResult.$constructor("$ZodNonOptional", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "values", () => {
        const values = closure_1.innerType._zod.values;
        let set;
        if (values) {
          const _Set = Set;
          set = new Set(outer1_5(values).filter((arg0) => undefined !== arg0));
          const arr = outer1_5(values);
        }
        return set;
      });
      _zod._zod.parse = (arg0, arg1) => {
        const _zod = closure_1.innerType._zod;
        const runResult = _zod.run(arg0, arg1);
        if (runResult instanceof Promise) {
          let nextPromise = runResult.then((arg0) => {
            outer2_28(arg0, outer1_0);
            return arg0;
          });
        } else {
          outer1_28(runResult, closure_0);
          nextPromise = runResult;
        }
        return nextPromise;
      };
    });
    exports.$ZodSuccess = fnResult.$constructor("$ZodSuccess", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0, direction) => {
        let nextPromise = arg0;
        const innerType = arg0;
        if ("backward" === direction.direction) {
          const $ZodEncodeError = outer1_9.$ZodEncodeError;
          const prototype = $ZodEncodeError.prototype;
          const ZodEncodeError = new $ZodEncodeError("ZodSuccess");
          throw ZodEncodeError;
        } else {
          const _zod = innerType.innerType._zod;
          const runResult = _zod.run(nextPromise, direction);
          if (runResult instanceof Promise) {
            nextPromise = runResult.then((issues) => {
              closure_0.value = 0 === issues.issues.length;
              return closure_0;
            });
          } else {
            nextPromise.value = 0 === runResult.issues.length;
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodCatch = fnResult.$constructor("$ZodCatch", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "optin", () => closure_0.innerType._zod.optin);
      closure_11.defineLazy(_zod._zod, "optout", () => closure_0.innerType._zod.optout);
      closure_11.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      _zod._zod.parse = (value, direction) => {
        let closure_0 = value;
        let closure_1 = direction;
        if ("backward" === direction.direction) {
          const _zod = closure_0.innerType._zod;
          return _zod.run(value, direction);
        } else {
          const _zod2 = closure_0.innerType._zod;
          const runResult = _zod2.run(value, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((value) => {
              value.value = value.value;
              if (value.issues.length) {
                const _Object = Object;
                let obj = {};
                obj = {};
                const issues = value.issues;
                obj.issues = issues.map((path) => outer3_11.finalizeIssue(path, outer1_1, outer3_9.config()));
                obj.error = obj;
                obj.input = value.value;
                value.value = value.catchValue(Object.assign({}, value, obj));
                value.issues = [];
              }
              return value;
            });
          } else {
            value.value = runResult.value;
            nextPromise = value;
            if (runResult.issues.length) {
              let _Object = Object;
              let obj = {};
              obj = {};
              let issues = runResult.issues;
              obj.issues = issues.map((path) => outer2_11.finalizeIssue(path, closure_1, outer2_9.config()));
              obj.error = obj;
              obj.input = value.value;
              value.value = closure_0.catchValue(Object.assign({}, value, obj));
              value.issues = [];
              nextPromise = value;
            }
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodNaN = fnResult.$constructor("$ZodNaN", (_zod) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        let isNaNResult = "number" === typeof value.value;
        if (isNaNResult) {
          const _Number = Number;
          isNaNResult = Number.isNaN(value.value);
        }
        if (!isNaNResult) {
          const issues = value.issues;
          const obj = { input: value.value, inst: closure_0, expected: "nan", code: "invalid_type" };
          issues.push(obj);
        }
        return value;
      };
    });
    exports.$ZodPipe = fnResult.$constructor("$ZodPipe", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "values", () => closure_0.in._zod.values);
      closure_11.defineLazy(_zod._zod, "optin", () => closure_0.in._zod.optin);
      closure_11.defineLazy(_zod._zod, "optout", () => closure_0.out._zod.optout);
      closure_11.defineLazy(_zod._zod, "propValues", () => closure_0.in._zod.propValues);
      _zod._zod.parse = (arg0, direction) => {
        let closure_0 = direction;
        if ("backward" === direction.direction) {
          const _zod2 = closure_0.out._zod;
          const runResult = _zod2.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((arg0) => outer2_29(arg0, direction.in, direction));
          } else {
            nextPromise = outer1_29(runResult, closure_0.in, direction);
          }
          return nextPromise;
        } else {
          const _zod = closure_0.in._zod;
          const runResult1 = _zod.run(arg0, direction);
          if (runResult1 instanceof Promise) {
            let nextPromise1 = runResult1.then((arg0) => outer2_29(arg0, direction.out, direction));
          } else {
            nextPromise1 = outer1_29(runResult1, closure_0.out, direction);
          }
          return nextPromise1;
        }
      };
    });
    exports.$ZodCodec = fnResult.$constructor("$ZodCodec", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "values", () => closure_0.in._zod.values);
      closure_11.defineLazy(_zod._zod, "optin", () => closure_0.in._zod.optin);
      closure_11.defineLazy(_zod._zod, "optout", () => closure_0.out._zod.optout);
      closure_11.defineLazy(_zod._zod, "propValues", () => closure_0.in._zod.propValues);
      _zod._zod.parse = (arg0, direction) => {
        let closure_0 = direction;
        if ("forward" === tmp) {
          const _zod2 = closure_0.in._zod;
          const runResult = _zod2.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then((arg0) => outer2_30(arg0, closure_0, closure_0));
          } else {
            nextPromise = outer1_30(runResult, closure_0, direction);
          }
          return nextPromise;
        } else {
          const _zod = closure_0.out._zod;
          const runResult1 = _zod.run(arg0, direction);
          if (runResult1 instanceof Promise) {
            let nextPromise1 = runResult1.then((arg0) => outer2_30(arg0, closure_0, closure_0));
          } else {
            nextPromise1 = outer1_30(runResult1, closure_0, direction);
          }
          return nextPromise1;
        }
        tmp = direction.direction || "forward";
      };
    });
    exports.$ZodReadonly = fnResult.$constructor("$ZodReadonly", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "propValues", () => closure_0.innerType._zod.propValues);
      closure_11.defineLazy(_zod._zod, "values", () => closure_0.innerType._zod.values);
      closure_11.defineLazy(_zod._zod, "optin", () => {
        const innerType = closure_0.innerType;
        let optin;
        if (null != innerType) {
          const _zod = innerType._zod;
          if (null != _zod) {
            optin = _zod.optin;
          }
        }
        return optin;
      });
      closure_11.defineLazy(_zod._zod, "optout", () => {
        const innerType = closure_0.innerType;
        let optout;
        if (null != innerType) {
          const _zod = innerType._zod;
          if (null != _zod) {
            optout = _zod.optout;
          }
        }
        return optout;
      });
      _zod._zod.parse = (arg0, direction) => {
        if ("backward" === direction.direction) {
          const _zod2 = closure_0.innerType._zod;
          return _zod2.run(arg0, direction);
        } else {
          const _zod = closure_0.innerType._zod;
          const runResult = _zod.run(arg0, direction);
          if (runResult instanceof Promise) {
            let nextPromise = runResult.then(outer1_32);
          } else {
            outer1_32(runResult);
            nextPromise = runResult;
          }
          return nextPromise;
        }
      };
    });
    exports.$ZodTemplateLiteral = fnResult.$constructor("$ZodTemplateLiteral", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      const items = [];
      const iter = arg1.parts[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp39 = nextResult;
        if ("object" === typeof nextResult) {
          let tmp3 = nextResult;
          if (null !== tmp39) {
            let tmp16 = nextResult;
            if (tmp39._zod.pattern) {
              let tmp23 = nextResult;
              let _RegExp = RegExp;
              let tmp24 = nextResult;
              let pattern = tmp39._zod.pattern;
              let tmp25 = tmp39._zod.pattern instanceof RegExp ? pattern.source : pattern;
              let arr3 = tmp25;
              if (tmp25) {
                let tmp31 = tmp25;
                let num = 0;
                if (arr3.startsWith("^")) {
                  num = 1;
                }
                let tmp33 = tmp25;
                let tmp32 = num;
                let tmp34 = tmp25;
                let length = arr3.length;
                let tmp35 = items;
                let tmp36 = tmp25;
                let tmp37 = num;
                length = items.push(arr3.slice(tmp32, arr3.endsWith("$") ? length - 1 : length));
              } else {
                let _Error3 = Error;
                let tmp26 = nextResult;
                let _HermesInternal4 = HermesInternal;
                let str3 = "Invalid template literal part: ";
                let tmp27 = new.target;
                let tmp28 = new.target;
                let error = new Error("Invalid template literal part: " + tmp39._zod.traits);
                let tmp30 = error;
                throw error;
              }
            } else {
              let _Error2 = Error;
              let tmp17 = _toConsumableArray;
              let tmp18 = nextResult;
              let arr2 = _toConsumableArray(tmp39._zod.traits);
              let _HermesInternal3 = HermesInternal;
              let str2 = "Invalid template literal part, no pattern found: ";
              let tmp19 = new.target;
              let tmp20 = new.target;
              let error1 = new Error("Invalid template literal part, no pattern found: " + arr2.shift());
              let tmp22 = error1;
              throw error1;
            }
          }
        }
        let tmp4 = nextResult;
        if (null !== tmp39) {
          let tmp5 = closure_11;
          let primitiveTypes = closure_11.primitiveTypes;
          let tmp6 = nextResult;
          if (!primitiveTypes.has(typeof tmp39)) {
            let _Error = Error;
            let tmp7 = nextResult;
            let _HermesInternal = HermesInternal;
            let str = "Invalid template literal part: ";
            let tmp8 = new.target;
            let tmp9 = new.target;
            let error2 = new Error("Invalid template literal part: " + tmp39);
            let tmp11 = error2;
            throw error2;
          }
        }
        let tmp12 = items;
        let tmp13 = closure_11;
        let tmp14 = nextResult;
        let _HermesInternal2 = HermesInternal;
        let arr = items.push(closure_11.escapeRegex("" + tmp39));
        continue;
      }
      const regExp = new RegExp("^" + items.join("") + "$");
      _zod._zod.pattern = regExp;
      _zod._zod.parse = (value) => {
        if ("string" !== typeof value.value) {
          const issues = value.issues;
          let obj = { input: value.value, inst: _zod, expected: "string", code: "invalid_type" };
          issues.push(obj);
        } else {
          _zod._zod.pattern.lastIndex = 0;
          const pattern = _zod._zod.pattern;
          if (!pattern.test(value.value)) {
            const issues1 = value.issues;
            obj = { input: value.value, inst: _zod, code: "invalid_format" };
            format = format.format;
            let str2 = "template_literal";
            if (null != format) {
              str2 = format;
            }
            obj.format = str2;
            obj.pattern = _zod._zod.pattern.source;
            issues1.push(obj);
          }
        }
        return value;
      };
    });
    exports.$ZodFunction = fnResult.$constructor("$ZodFunction", (_zod, _def) => {
      let closure_0 = _zod;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, _def);
      _zod._def = _def;
      _zod._zod.def = _def;
      _zod.implement = (arg0) => {
        let closure_0 = arg0;
        if ("function" !== typeof arg0) {
          const _Error = Error;
          const error = new Error("implement() must be called with a function");
          throw error;
        } else {
          return function() {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            let parsed = array;
            if (lib._def.input) {
              parsed = lib(outer2_2[8]).parse(lib._def.input, array);
            }
            const applyResult = Reflect.apply(lib, this, parsed);
            let parsed1 = applyResult;
            if (lib._def.output) {
              parsed1 = lib(outer2_2[8]).parse(lib._def.output, applyResult);
            }
            return parsed1;
          };
        }
      };
      _zod.implementAsync = (arg0) => {
        let closure_0 = arg0;
        if ("function" !== typeof arg0) {
          const _Error = Error;
          const error = new Error("implementAsync() must be called with a function");
          throw error;
        } else {
          // CreateGeneratorClosureLongIndex (0x67)
          return outer1_4(tmp);
        }
      };
      _zod._zod.parse = (value) => {
        if ("function" !== typeof value.value) {
          const issues = value.issues;
          let obj = { code: "invalid_type", expected: "function", input: value.value, inst: _zod };
          issues.push(obj);
          return value;
        } else {
          let output = _zod._def.output;
          if (output) {
            output = "promise" === _zod._def.output._zod.def.type;
          }
          obj = _zod;
          if (output) {
            let implementAsyncResult = obj.implementAsync(value.value);
          } else {
            implementAsyncResult = obj.implement(value.value);
          }
          value.value = implementAsyncResult;
          return value;
        }
      };
      _zod.input = () => {
        let constructor = _zod.constructor;
        let first;
        if (arguments.length > 0) {
          first = arguments[0];
        }
        let obj = { type: "function" };
        if (Array.isArray(first)) {
          const $ZodTuple = outer1_1.$ZodTuple;
          obj = { type: "tuple" };
          let first1;
          if (arguments.length > 0) {
            first1 = arguments[0];
          }
          obj.items = first1;
          let tmp10;
          if (arguments.length > 1) {
            tmp10 = arguments[1];
          }
          obj.rest = tmp10;
          const prototype2 = $ZodTuple.prototype;
          const ZodTuple = new $ZodTuple(obj);
          obj.input = ZodTuple;
          obj.output = _zod._def.output;
          const prototype3 = constructor.prototype;
          constructor = new constructor(obj);
        } else {
          let first2;
          if (arguments.length > 0) {
            first2 = arguments[0];
          }
          obj.input = first2;
          obj.output = _zod._def.output;
          const prototype = constructor.prototype;
          constructor = new constructor(obj);
        }
        return constructor;
      };
      _zod.output = (output) => {
        const constructor = new _zod.constructor({ type: "function", input: _zod._def.input, output });
        return constructor;
      };
      return _zod;
    });
    exports.$ZodPromise = fnResult.$constructor("$ZodPromise", (_zod) => {
      let closure_0 = arg1;
      const $ZodType = exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (value) => {
        let closure_0 = arg1;
        const resolved = Promise.resolve(value.value);
        return resolved.then((value) => {
          const _zod = innerType.innerType._zod;
          return _zod.run({ value, issues: [] }, innerType);
        });
      };
    });
    exports.$ZodLazy = fnResult.$constructor("$ZodLazy", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      closure_11.defineLazy(_zod._zod, "innerType", () => closure_1.getter());
      closure_11.defineLazy(_zod._zod, "pattern", () => {
        const innerType = _zod._zod.innerType;
        let pattern;
        if (null != innerType) {
          _zod = innerType._zod;
          if (null != _zod) {
            pattern = _zod.pattern;
          }
        }
        return pattern;
      });
      closure_11.defineLazy(_zod._zod, "propValues", () => {
        const innerType = _zod._zod.innerType;
        let propValues;
        if (null != innerType) {
          _zod = innerType._zod;
          if (null != _zod) {
            propValues = _zod.propValues;
          }
        }
        return propValues;
      });
      closure_11.defineLazy(_zod._zod, "optin", () => {
        const innerType = _zod._zod.innerType;
        let optin;
        if (null != innerType) {
          _zod = innerType._zod;
          if (null != _zod) {
            optin = _zod.optin;
          }
        }
        let tmp2;
        if (null != optin) {
          tmp2 = optin;
        }
        return tmp2;
      });
      closure_11.defineLazy(_zod._zod, "optout", () => {
        const innerType = _zod._zod.innerType;
        let optout;
        if (null != innerType) {
          _zod = innerType._zod;
          if (null != _zod) {
            optout = _zod.optout;
          }
        }
        let tmp2;
        if (null != optout) {
          tmp2 = optout;
        }
        return tmp2;
      });
      _zod._zod.parse = (arg0, arg1) => {
        _zod = _zod._zod.innerType._zod;
        return _zod.run(arg0, arg1);
      };
    });
    exports.$ZodCustom = fnResult.$constructor("$ZodCustom", (_zod) => {
      let closure_0 = _zod;
      const _exports = arg1;
      const $ZodCheck = closure_8.$ZodCheck;
      $ZodCheck.init(_zod, arg1);
      const $ZodType = _exports.$ZodType;
      $ZodType.init(_zod, arg1);
      _zod._zod.parse = (arg0, arg1) => arg0;
      _zod._zod.check = (value) => {
        let closure_0 = value;
        value = value.value;
        let closure_1 = value;
        const fnResult = closure_1.fn(value);
        if (fnResult instanceof Promise) {
          return fnResult.then((arg0) => {
            outer2_33(arg0, closure_0, closure_1, closure_0);
          });
        } else {
          outer1_33(fnResult, value, value, closure_0);
        }
      };
    });
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}
