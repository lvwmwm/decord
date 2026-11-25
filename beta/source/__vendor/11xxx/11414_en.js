// Module ID: 11414
// Function ID: 11415
// Name: en
// Dependencies: [11415, 11416, 11423, 11425, 11463, 11475, 11488, 11499, 11508, 11526, 11547, 11562, 11572, 11587, 11606]
// Exports: parse, parseDate

// Module 11414 (en)
import _mod11415 from "module_11415" /* 11415 */;
import _mod11463 from "module_11463" /* 11463 */;
import _mod11475 from "module_11475" /* 11475 */;
import _mod11488 from "module_11488" /* 11488 */;
import _mod11499 from "module_11499" /* 11499 */;
import _mod11508 from "module_11508" /* 11508 */;
import hant from "hant" /* 11526 */;
import _mod11547 from "module_11547" /* 11547 */;
import _mod11562 from "module_11562" /* 11562 */;
import _mod11572 from "module_11572" /* 11572 */;
import casual2 from "casual" /* 11587 */;
import _mod11606 from "module_11606" /* 11606 */;

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
const Chrono = fn(_mod11415);
({ strict: exports.strict, casual: exports.casual } = Chrono);
const Chrono_export = require("module_11416").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export const en = Chrono;
export { Chrono_export as Chrono };
export const ParsingContext = require("module_11416").ParsingContext;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const de = fn(_mod11463);
export const fr = fn(_mod11475);
export const ja = fn(_mod11488);
export const pt = fn(_mod11499);
export const nl = fn(_mod11508);
export const zh = fn(hant);
export const ru = fn(_mod11547);
export const es = fn(_mod11562);
export const uk = fn(_mod11572);
export const it = fn(casual2);
export const sv = fn(_mod11606);
