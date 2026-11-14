// Module ID: 12243
// Function ID: 12244
// Name: ZodError
// Dependencies: [12158, 12160]

// Module 12243 (ZodError)
import util2 from "util" /* 12158 */;
import captureStackTrace2 from "captureStackTrace" /* 12160 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  const tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
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
let closure_3 = tmp;
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
let closure_4 = tmp3;
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
        let tmp6 = closure_3(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_4(obj, __esModule);
  return obj;
});
const util = tmp5(util2);
const captureStackTrace = tmp5(captureStackTrace2);
let items = [Object.prototype, Error.prototype];
const weakSet = new WeakSet(items);
function initializer(arg0, arg1) {
  function get() {
    const tmp = f104618(this);
    Object.defineProperty(this, addIssues_str, { value: tmp, configurable: true, writable: true });
    return tmp;
  }
  function set(value) {
    const obj = { value, configurable: true, writable: true };
    Object.defineProperty(this, addIssues_str, obj);
  }
  const $ZodError = util2.$ZodError;
  $ZodError.init(arg0, arg1);
  arg0.name = "ZodError";
  const prototypeOf = Object.getPrototypeOf(arg0);
  let obj = weakSet;
  if (!weakSet.has(prototypeOf)) {
    obj.add(prototypeOf);
    const format_str = "format";
    const f104615 = (arg0) => {
      let closure_0 = arg0;
      return (arg0) => closure_2_5.formatError(closure_0, arg0);
    };
    let _Object = Object;
    const obj2 = { configurable: true, enumerable: false, get, set };
    Object.defineProperty(prototypeOf, "format", obj2);
    const flatten_str = "flatten";
    const f104616 = (arg0) => {
      let closure_0 = arg0;
      return (arg0) => closure_2_5.flattenError(closure_0, arg0);
    };
    const _Object2 = Object;
    const obj3 = { configurable: true, enumerable: false, get, set };
    Object.defineProperty(prototypeOf, "flatten", obj3);
    const addIssue_str = "addIssue";
    const f104617 = (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        const issues = closure_0.issues;
        issues.push(arg0);
        closure_0.message = JSON.stringify(closure_0.issues, closure_2_6.jsonStringifyReplacer, 2);
      };
    };
    const _Object3 = Object;
    const obj4 = { configurable: true, enumerable: false, get, set };
    Object.defineProperty(prototypeOf, "addIssue", obj4);
    const addIssues_str = "addIssues";
    const f104618 = (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        const issues = closure_0.issues;
        const items = [...arg0];
        issues.push.apply(items);
        closure_0.message = JSON.stringify(closure_0.issues, closure_2_6.jsonStringifyReplacer, 2);
      };
    };
    const _Object4 = Object;
    const obj5 = { configurable: true, enumerable: false, get, set };
    Object.defineProperty(prototypeOf, "addIssues", obj5);
    const _Object5 = Object;
    const obj6 = {
      configurable: true,
      enumerable: false,
      get() {
          return 0 === this.issues.length;
        }
    };
    Object.defineProperty(prototypeOf, "isEmpty", obj6);
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

export const ZodError = util.$constructor("ZodError", initializer);
export const ZodRealError = util.$constructor("ZodError", initializer, undefined, obj);
