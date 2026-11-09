// Module ID: 15868
// Function ID: 15869
// Dependencies: [41, 42, 93, 95, 98, 158, 15869]
// Exports: quotelessJson

// Module 15868
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import { util } from "module_15869" /* 15869 */;

const require = globalThis.__r;

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
class ZodError {
  constructor(issues) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZodError);
    const obj = _getPrototypeOf(ZodError);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.issues = [];
    tmp3Result.addIssue = (arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(items, issues.issues, 0)] = arg0;
      issues.issues = items;
    };
    tmp3Result.addIssues = () => {
      let items = arg0;
      if (arg0 === undefined) {
        items = [];
      }
      const items1 = [...items];
      issues.issues = items1;
    };
    const prototype = new.target.prototype;
    if (Object.setPrototypeOf) {
      const _Object = Object;
      Object.setPrototypeOf(tmp3Result, prototype);
    } else {
      tmp3Result.__proto__ = prototype;
    }
    tmp3Result.name = "ZodError";
    tmp3Result.issues = issues;
    return tmp3Result;
  }
}
_inherits(ZodError, _wrapNativeSuper(Error));
let obj = {
  key: "errors",
  get() {
    return this.issues;
  }
};
let items = [
  obj,
  {
    key: "format",
    value: function format(arg0) {
      const fn = arg0 || ((message) => message.message);
      let obj = { _errors: [] };
      function processError(arg0) {
        let sum;
        const iter = arg0.issues[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("invalid_union" === nextResult.code) {
            let unionErrors = tmp2.unionErrors;
            let mapped = unionErrors.map(processError);
          } else if ("invalid_return_type" === tmp2.code) {
            let tmp32 = processError(tmp2.returnTypeError);
          } else if ("invalid_arguments" === tmp2.code) {
            let tmp29 = processError(tmp2.argumentsError);
          } else if (0 === tmp2.path.length) {
            let _errors = obj._errors;
            let arr = _errors.push(fn(tmp2));
          } else {
            let tmp19 = obj;
            let num = 0;
            if (0 < tmp2.path.length) {
              do {
                let tmp5 = tmp2.path[num];
                if (num === tmp2.path.length - 1) {
                  let tmp11 = tmp19[tmp5];
                  if (!tmp11) {
                    let obj2 = { _errors: [] };
                    tmp11 = obj2;
                  }
                  tmp19[tmp5] = tmp11;
                  let _errors1 = tmp19[tmp5]._errors;
                  let arr2 = _errors1.push(fn(tmp2));
                } else {
                  let tmp8 = tmp19[tmp5];
                  if (!tmp8) {
                    obj = { _errors: [] };
                    tmp8 = obj;
                  }
                  tmp19[tmp5] = tmp8;
                }
                tmp19 = tmp19[tmp5];
                sum = num + 1;
                num = sum;
              } while (sum < tmp2.path.length);
            }
          }
          continue;
        }
      }
      processError(this);
      return obj;
    }
  },
  {
    key: "toString",
    value: function toString() {
      return this.message;
    }
  },
  {
    key: "message",
    get() {
      return JSON.stringify(this.issues, require("module_15869").util.jsonStringifyReplacer, 2);
    }
  },
  {
    key: "isEmpty",
    get() {
      return 0 === this.issues.length;
    }
  },
  {
    key: "flatten",
    value: function flatten() {
      let fn = arg0;
      if (arg0 === undefined) {
        fn = function e(message) {
          return message.message;
        };
      }
      const fieldErrors = {};
      const formErrors = [];
      const iter = this.issues[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (nextResult.path.length > 0) {
          let items1 = fieldErrors[tmp2.path[0]];
          let first = tmp2.path[0];
          if (!items1) {
            items1 = [];
          }
          fieldErrors[first] = items1;
          let arr3 = fieldErrors[tmp2.path[0]];
          let arr = arr3.push(fn(tmp2));
        } else {
          let arr2 = formErrors.push(fn(tmp2));
        }
        continue;
      }
      return { formErrors, fieldErrors };
    }
  },
  {
    key: "formErrors",
    get() {
      return this.flatten();
    }
  }
];
const entry = {
  key: "assert",
  value: function assert(arg0) {
    if (!(arg0 instanceof ZodError)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Not a ZodError: " + arg0);
      throw error;
    }
  }
};
let items1 = [entry];
const _moduleResult = _createClass(ZodError, items, items1);
const metroRequire = _moduleResult;
_moduleResult.create = (arg0) => {
  const tmp = new metroRequire(arg0);
  return tmp;
};
const ZodError_export = _moduleResult;

export const ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
export const quotelessJson = (arg0) => {
  const str = JSON.stringify(arg0, null, 2);
  return str.replace(/"([^"]+)":/g, "$1:");
};
export { ZodError_export as ZodError };
