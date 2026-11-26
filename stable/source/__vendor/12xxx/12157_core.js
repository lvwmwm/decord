// Module ID: 12157
// Function ID: 12158
// Name: core
// Dependencies: [12158, 12240, 12241, 12243, 12242, 12244, 12237, 12245, 12247, 12249, 12169, 12246, 12250]

// Module 12157 (core)
import ar from "ar" /* 12169 */;
import ZodType from "ZodType" /* 12240 */;
import lt from "lt" /* 12241 */;
import _mod12242 from "module_12242" /* 12242 */;
import ZodError from "ZodError" /* 12243 */;
import ZodIssueCode from "ZodIssueCode" /* 12244 */;
import string from "string" /* 12250 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
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
let tmp6 = self && self.__exportStar || ((obj, arg1) => {
  for (const key10007 in obj) {
    let callResult = "default" === key10007;
    if (!callResult) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(arg1, key10007);
    }
    if (callResult) {
      continue;
    } else {
      let tmp3 = closure_3(arg1, obj, key10007);
      continue;
    }
    continue;
  }
});
tmp6(ZodType, exports);
tmp6(lt, exports);
tmp6(ZodError, exports);
tmp6(_mod12242, exports);
tmp6(ZodIssueCode, exports);
(() => {
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

export const core = tmp5(require("util"));
export const globalRegistry = require("util").globalRegistry;
export const registry = require("util").registry;
export const config = require("util").config;
export const memoizer = require("util").memoizer;
export const $output = require("util").$output;
export const $input = require("util").$input;
export const $brand = require("util").$brand;
export const clone = require("util").clone;
export const regexes = require("util").regexes;
export const treeifyError = require("util").treeifyError;
export const prettifyError = require("util").prettifyError;
export const formatError = require("util").formatError;
export const flattenError = require("util").flattenError;
export const TimePrecision = require("util").TimePrecision;
export const util = require("util").util;
export const NEVER = require("util").NEVER;
export const INVALID = require("util").INVALID;
export const toZod = require("util").toZod;
export const compile = require("util").compile;
export const withParser = require("util").withParser;
export const ZodCompileAsyncError = require("util").ZodCompileAsyncError;
export const ZodCompileUnsupportedError = require("util").ZodCompileUnsupportedError;
export const getDiscriminatedOption = require("util").getDiscriminatedOption;
export const toJSONSchema = require("stringProcessor").toJSONSchema;
export const fromJSONSchema = require("module_12245").fromJSONSchema;
export const deepPartial = require("deepPartial").deepPartial;
export const input = require("input").input;
export const output = require("input").output;
export const locales = tmp5(ar);
export const ZodISODateTime = require("ZodISODate").ZodISODateTime;
export const ZodISODate = require("ZodISODate").ZodISODate;
export const ZodISOTime = require("ZodISODate").ZodISOTime;
export const ZodISODuration = require("ZodISODate").ZodISODuration;
export const iso = tmp5(require("ZodISODate"));
export const coerce = tmp5(string);
