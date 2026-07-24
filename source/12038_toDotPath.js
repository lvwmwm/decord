// Module ID: 12038
// Function ID: 93087
// Name: toDotPath
// Dependencies: [65, 12039, 12036]

// Module 12038 (toDotPath)
import _toConsumableArray from "_toConsumableArray";

const self = this;
function toDotPath(path) {
  const items = [];
  const mapped = path.map((key) => {
    if ("object" === typeof key) {
      key = key.key;
    }
    return key;
  });
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp16 = nextResult;
    if ("number" === typeof nextResult) {
      let tmp13 = items;
      let tmp14 = nextResult;
      let _HermesInternal3 = HermesInternal;
      let arr = items.push("[" + tmp16 + "]");
    } else {
      let tmp17 = nextResult;
      if ("symbol" === typeof tmp16) {
        let tmp10 = items;
        let _JSON2 = JSON;
        let _String = String;
        let tmp11 = nextResult;
        let _HermesInternal2 = HermesInternal;
        arr = items.push("[" + JSON.stringify(String(tmp16)) + "]");
      } else {
        let obj = /[^\w$]/;
        let tmp18 = nextResult;
        let tmp19 = items;
        if (obj.test(tmp16)) {
          let _JSON = JSON;
          let tmp8 = nextResult;
          let _HermesInternal = HermesInternal;
          let arr1 = items.push("[" + JSON.stringify(tmp16) + "]");
        } else {
          if (items.length) {
            let tmp3 = items;
            let arr2 = items.push(".");
          }
          let tmp5 = items;
          let tmp6 = nextResult;
          let arr3 = items.push(tmp16);
        }
      }
    }
    continue;
  }
  return items.join("");
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
    const _Object3 = Object;
    let obj = { value: true };
    exports.$ZodError = undefined;
    exports.$ZodRealError = undefined;
    exports.flattenError = function flattenError(closure_0, arg1) {
      let num = 1;
      if (arguments.length <= 1) {
        let fn = (message) => message.message;
        const items = [];
        const issues = closure_0.issues;
        num = issues[Symbol.iterator]();
      }
      fn = arguments[num];
    };
    exports.formatError = function formatError(arg0) {
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let fn = arguments[1];
        }
        let obj = { _errors: [] };
        function processError(arg0) {
          const iter = arg0.issues[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp38 = nextResult;
            if ("invalid_union" === nextResult.code) {
              let tmp2 = nextResult;
              if (tmp38.errors.length) {
                let tmp36 = nextResult;
                let errors = tmp38.errors;
                let mapped = errors.map((issues) => outer1_2({ issues }));
                continue;
              }
            }
            let tmp3 = nextResult;
            if ("invalid_key" === tmp38.code) {
              let tmp33 = processError;
              let obj = {};
              let tmp34 = nextResult;
              obj.issues = tmp38.issues;
              let tmp35 = processError(obj);
            } else {
              let tmp39 = nextResult;
              if ("invalid_element" === tmp38.code) {
                let tmp30 = processError;
                obj = {};
                let tmp31 = nextResult;
                obj.issues = tmp38.issues;
                let tmp32 = processError(obj);
              } else {
                let tmp40 = nextResult;
                if (0 === tmp38.path.length) {
                  let tmp26 = obj;
                  let _errors = obj._errors;
                  let tmp27 = fn;
                  let tmp28 = nextResult;
                  let arr = _errors.push(fn(tmp38));
                } else {
                  let tmp22 = obj;
                  let num = 0;
                  let tmp41 = nextResult;
                  if (0 < tmp38.path.length) {
                    do {
                      let tmp4 = nextResult;
                      let tmp5 = num;
                      let tmp6 = tmp38.path[num];
                      if (num === tmp38.path.length - 1) {
                        let tmp11 = tmp22;
                        let tmp12 = tmp6;
                        let tmp13 = tmp22[tmp6];
                        let tmp14 = tmp13;
                        if (!tmp13) {
                          let obj1 = { _errors: [] };
                          tmp14 = obj1;
                        }
                        tmp22[tmp6] = tmp14;
                        let tmp15 = tmp22;
                        let tmp16 = tmp6;
                        let _errors1 = tmp22[tmp6]._errors;
                        let tmp17 = fn;
                        let tmp18 = nextResult;
                        arr = _errors1.push(fn(tmp38));
                      } else {
                        let tmp7 = tmp22;
                        let tmp8 = tmp6;
                        let tmp9 = tmp22[tmp6];
                        let tmp10 = tmp9;
                        if (!tmp9) {
                          obj = { _errors: [] };
                          tmp10 = obj;
                        }
                        tmp22[tmp6] = tmp10;
                      }
                      let tmp20 = tmp22;
                      let tmp21 = tmp6;
                      tmp22 = tmp22[tmp6];
                      let tmp23 = num;
                      sum = num + 1;
                      num = sum;
                      let tmp25 = nextResult;
                    } while (sum < tmp38.path.length);
                  }
                }
              }
            }
          }
        }
        processError(arg0);
        return obj;
      }
      fn = (message) => message.message;
    };
    exports.treeifyError = function treeifyError(issues) {
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let fn = arguments[1];
        }
        let obj = { errors: [] };
        function processError(issues) {
          let num = 1;
          if (arguments.length <= 1) {
            let closure_2 = [];
            function _loop(code) {
              let closure_0 = code;
              if ("invalid_union" === code.code) {
                if (code.errors.length) {
                  const errors = code.errors;
                  const mapped = errors.map((issues) => callback({ issues }, path.path));
                }
              }
              if ("invalid_key" === code.code) {
                let obj = { issues: code.issues };
                callback(obj, code.path);
              } else if ("invalid_element" === code.code) {
                obj = { issues: code.issues };
                callback(obj, code.path);
              } else {
                let items = [];
                const combined = items.concat(fn(callback), fn(code.path));
                if (0 === combined.length) {
                  const errors1 = outer1_1.errors;
                  errors1.push(outer1_0(code));
                  return 1;
                } else {
                  let tmp8 = outer1_1;
                  let num = 0;
                  if (0 < combined.length) {
                    do {
                      let tmp = combined[num];
                      let diff = combined.length - 1;
                      if ("string" === typeof tmp) {
                        if (null == tmp8.properties) {
                          tmp8.properties = {};
                        }
                        let properties = tmp8.properties;
                        closure_0 = properties;
                        if (null == properties[tmp]) {
                          let tmp5 = closure_0;
                          let obj1 = { errors: [] };
                          closure_0[tmp] = obj1;
                        }
                        let tmp4 = tmp8.properties[tmp];
                      } else {
                        if (null == tmp8.items) {
                          tmp8.items = [];
                        }
                        items = tmp8.items;
                        let closure_1 = items;
                        if (null == items[tmp]) {
                          let tmp3 = closure_1;
                          obj = { errors: [] };
                          closure_1[tmp] = obj;
                        }
                        tmp4 = tmp8.items[tmp];
                      }
                      if (num === diff) {
                        let errors2 = tmp4.errors;
                        let tmp6 = outer1_0;
                        let arr = errors2.push(outer1_0(code));
                      }
                      num = num + 1;
                      tmp8 = tmp4;
                    } while (num < combined.length);
                  }
                }
                const tmp19 = fn(callback);
              }
            }
            num = issues.issues;
            num[Symbol.iterator]();
          }
        }
        processError(issues);
        return obj;
      }
      fn = (message) => message.message;
    };
    exports.toDotPath = toDotPath;
    exports.prettifyError = function prettifyError(issues) {
      const items = [];
      const sorted = _toConsumableArray(issues.issues).sort((path, path2) => {
        path = path.path;
        if (null == path) {
          path = [];
        }
        let path1 = path2.path;
        if (null == path1) {
          path1 = [];
        }
        return path.length - path1.length;
      });
      const iter = sorted[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = items;
        let _HermesInternal2 = HermesInternal;
        let tmp8 = nextResult;
        let arr = items.push("\u2716 " + nextResult.message);
        let path = nextResult.path;
        let tmp11 = null != path;
        let length = tmp11;
        if (tmp11) {
          let tmp3 = path;
          length = arr2.length;
        }
        if (length) {
          let tmp4 = items;
          let tmp5 = toDotPath;
          let tmp6 = nextResult;
          let _HermesInternal = HermesInternal;
          arr = items.push("  \u2192 at " + toDotPath(tmp8.path));
        }
        continue;
      }
      return items.join("\n");
    };
    let closure_3 = fn(require("cached"));
    function initializer(_zod, value) {
      let closure_0 = _zod;
      _zod.name = "$ZodError";
      let obj = { value: _zod._zod, enumerable: false };
      Object.defineProperty(_zod, "_zod", obj);
      obj = { value, enumerable: false };
      Object.defineProperty(_zod, "issues", obj);
      _zod.message = JSON.stringify(value, obj.jsonStringifyReplacer, 2);
      obj = {
        value() {
          return message.message;
        },
        enumerable: false
      };
      Object.defineProperty(_zod, "toString", obj);
    }
    exports.$ZodError = require("_callSuper").$constructor("$ZodError", initializer);
    obj = {};
    const _Error = Error;
    obj.Parent = Error;
    exports.$ZodRealError = require("_callSuper").$constructor("$ZodError", initializer, obj);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
