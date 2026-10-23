// Module ID: 10208
// Function ID: 10209
// Name: en
// Dependencies: [10209, 10210, 10217, 10219, 10257, 10269, 10282, 10293, 10302, 10320, 10341, 10356, 10366, 10381, 10400]
// Exports: parse, parseDate

// Module 10208 (en)
import _mod10209 from "module_10209" /* 10209 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10269 from "module_10269" /* 10269 */;
import _mod10282 from "module_10282" /* 10282 */;
import _mod10293 from "module_10293" /* 10293 */;
import _mod10302 from "module_10302" /* 10302 */;
import hant from "hant" /* 10320 */;
import _mod10341 from "module_10341" /* 10341 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10366 from "module_10366" /* 10366 */;
import casual2 from "casual" /* 10381 */;
import _mod10400 from "module_10400" /* 10400 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
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
let closure_4 = tmp;
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
let closure_5 = tmp3;
let fn = self && self.__importStar;
if (!fn) {
  fn = function t(arg0) {
    fn = Object.getOwnPropertyNames || ((obj) => {
      const items = [];
      for (const key10005 in obj) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(obj, key10005)) {
          continue;
        } else {
          items[items.length] = key10005;
          continue;
        }
        continue;
      }
      return items;
    });
    return fn(arg0);
  };
  fn = (__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      let num;
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp5 = closure_4(obj, __esModule, arr[num]);
        }
      }
    }
    closure_5(obj, __esModule);
    return obj;
  };
}
const Chrono = fn(_mod10209);
({ strict: exports.strict, casual: exports.casual } = Chrono);
const Chrono_export = require("module_10210").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export const en = Chrono;
export { Chrono_export as Chrono };
export const ParsingContext = require("module_10210").ParsingContext;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const de = fn(_mod10257);
export const fr = fn(_mod10269);
export const ja = fn(_mod10282);
export const pt = fn(_mod10293);
export const nl = fn(_mod10302);
export const zh = fn(hant);
export const ru = fn(_mod10341);
export const es = fn(_mod10356);
export const uk = fn(_mod10366);
export const it = fn(casual2);
export const sv = fn(_mod10400);
