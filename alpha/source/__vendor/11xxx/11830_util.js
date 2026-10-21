// Module ID: 11830
// Function ID: 11831
// Name: util
// Dependencies: [11831, 11832, 11833, 11835, 11836, 11838, 11834, 11837, 11840, 11890, 11839, 11891, 11892, 11893, 11894, 11895]

// Module 11830 (util)
import NEVER from "NEVER" /* 11831 */;
import _parse from "_parse" /* 11832 */;
import $ZodError from "$ZodError" /* 11833 */;
import captureStackTrace from "captureStackTrace" /* 11834 */;
import $ZodType from "$ZodType" /* 11835 */;
import $ZodCheck from "$ZodCheck" /* 11836 */;
import cuid from "cuid" /* 11837 */;
import _mod11838 from "module_11838" /* 11838 */;
import Doc from "Doc" /* 11839 */;
import ar from "ar" /* 11840 */;
import $output from "$output" /* 11890 */;
import TimePrecision from "TimePrecision" /* 11891 */;
import _mod11892 from "module_11892" /* 11892 */;
import _mod11895 from "module_11895" /* 11895 */;

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
let closure_2 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_3 = tmp3;
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
      let tmp3 = closure_2(arg1, obj, key10007);
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
        let tmp6 = closure_2(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_3(obj, __esModule);
  return obj;
});
tmp5(NEVER, exports);
tmp5(_parse, exports);
tmp5($ZodError, exports);
tmp5($ZodType, exports);
tmp5($ZodCheck, exports);
tmp5(_mod11838, exports);
tmp5($output, exports);
tmp5(Doc, exports);
tmp5(TimePrecision, exports);
tmp5(_mod11892, exports);

export const util = tmp6(captureStackTrace);
export const regexes = tmp6(cuid);
export const locales = tmp6(ar);
export const toJSONSchema = require("stringProcessor").toJSONSchema;
export const JSONSchemaGenerator = require("JSONSchemaGenerator").JSONSchemaGenerator;
export const JSONSchema = tmp6(_mod11895);
