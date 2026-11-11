// Module ID: 11362
// Function ID: 11363
// Name: en
// Dependencies: [11363, 11364, 11371, 11373, 11411, 11423, 11436, 11447, 11456, 11474, 11495, 11510, 11520, 11535, 11554]
// Exports: parse, parseDate

// Module 11362 (en)
import _mod11363 from "module_11363" /* 11363 */;
import _mod11411 from "module_11411" /* 11411 */;
import _mod11423 from "module_11423" /* 11423 */;
import _mod11436 from "module_11436" /* 11436 */;
import _mod11447 from "module_11447" /* 11447 */;
import _mod11456 from "module_11456" /* 11456 */;
import hant from "hant" /* 11474 */;
import _mod11495 from "module_11495" /* 11495 */;
import _mod11510 from "module_11510" /* 11510 */;
import _mod11520 from "module_11520" /* 11520 */;
import casual2 from "casual" /* 11535 */;
import _mod11554 from "module_11554" /* 11554 */;

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
const Chrono = fn(_mod11363);
({ strict: exports.strict, casual: exports.casual } = Chrono);
const Chrono_export = require("module_11364").Chrono;

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
export const ParsingContext = require("module_11364").ParsingContext;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const de = fn(_mod11411);
export const fr = fn(_mod11423);
export const ja = fn(_mod11436);
export const pt = fn(_mod11447);
export const nl = fn(_mod11456);
export const zh = fn(hant);
export const ru = fn(_mod11495);
export const es = fn(_mod11510);
export const uk = fn(_mod11520);
export const it = fn(casual2);
export const sv = fn(_mod11554);
