// Module ID: 12105
// Function ID: 94853
// Dependencies: [65, 12035, 12039]

// Module 12105
import _toConsumableArray from "_toConsumableArray";

const self = this;
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
    exports.ZodError = undefined;
    exports.ZodRealError = undefined;
    const fnResult = fn(require("module_12035"));
    let closure_6 = fn(require("cached"));
    function initializer(arg0, arg1) {
      const _require = arg0;
      const $ZodError = _require(12035).$ZodError;
      $ZodError.init(arg0, arg1);
      arg0.name = "ZodError";
      let obj = {
        value(arg0) {
          return outer1_5.formatError(closure_0, arg0);
        }
      };
      obj = {
        value(arg0) {
          return outer1_5.flattenError(closure_0, arg0);
        }
      };
      obj = {
        value(arg0) {
          const issues = closure_0.issues;
          issues.push(arg0);
          closure_0.message = JSON.stringify(closure_0.issues, outer1_6.jsonStringifyReplacer, 2);
        }
      };
      Object.defineProperties(arg0, {
        format: obj,
        flatten: obj,
        addIssue: obj,
        addIssues: {
          value(arg0) {
            const issues = closure_0.issues;
            const push = issues.push;
            push.apply(issues, outer1_2(arg0));
            closure_0.message = JSON.stringify(closure_0.issues, outer1_6.jsonStringifyReplacer, 2);
          }
        },
        isEmpty: {
          get() {
            return 0 === closure_0.issues.length;
          }
        }
      });
    }
    exports.ZodError = fnResult.$constructor("ZodError", initializer);
    obj = {};
    const _Error = Error;
    obj.Parent = Error;
    exports.ZodRealError = fnResult.$constructor("ZodError", initializer, obj);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
