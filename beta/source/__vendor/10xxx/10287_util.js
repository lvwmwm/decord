// Module ID: 10287
// Function ID: 10288
// Name: util
// Dependencies: [10288, 10290, 10291, 10292, 10297, 10293, 10295, 10289, 10294, 950, 10298, 10296, 10299, 10300, 10301, 10302, 10303, 10304]

// Module 10287 (util)
import _mod950 from "module_950" /* 950 */;
import NEVER from "NEVER" /* 10288 */;
import _parse from "_parse" /* 10290 */;
import $ZodError from "$ZodError" /* 10291 */;
import $ZodType from "$ZodType" /* 10292 */;
import $ZodCheck from "$ZodCheck" /* 10293 */;
import cuid from "cuid" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import Doc from "Doc" /* 10296 */;
import $ZodCyclicError from "$ZodCyclicError" /* 10297 */;
import $output from "$output" /* 10298 */;
import INVALID from "INVALID" /* 10299 */;
import TimePrecision from "TimePrecision" /* 10300 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10304 from "module_10304" /* 10304 */;

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
let tmp5 = self && self.__exportStar || ((obj, arg1) => {
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
let tmp6 = self && self.__importStar || ((__esModule) => {
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
tmp5(NEVER, exports);
tmp5(_parse, exports);
tmp5($ZodError, exports);
tmp5($ZodType, exports);
tmp5($ZodCyclicError, exports);
tmp5($ZodCheck, exports);
tmp5(_mod10295, exports);
tmp5($output, exports);
tmp5(Doc, exports);
tmp5(INVALID, exports);
tmp5(TimePrecision, exports);
tmp5(_mod10301, exports);
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

export const util = tmp6(require("captureStackTrace"));
export const toZod = require("captureStackTrace").toZod;
export const regexes = tmp6(cuid);
export const locales = tmp6(_mod950);
export const toJSONSchema = require("stringProcessor").toJSONSchema;
export const JSONSchemaGenerator = require("JSONSchemaGenerator").JSONSchemaGenerator;
export const JSONSchema = tmp6(_mod10304);
