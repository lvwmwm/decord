// Module ID: 10167
// Function ID: 10168
// Name: en
// Dependencies: [10168, 10169, 10176, 10178, 10216, 10228, 10241, 10252, 10261, 10279, 10300, 10315, 10325, 10340, 10359]
// Exports: parse, parseDate

// Module 10167 (en)
import _mod10168 from "module_10168" /* 10168 */;
import _mod10216 from "module_10216" /* 10216 */;
import _mod10228 from "module_10228" /* 10228 */;
import _mod10241 from "module_10241" /* 10241 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10261 from "module_10261" /* 10261 */;
import hant from "hant" /* 10279 */;
import _mod10300 from "module_10300" /* 10300 */;
import _mod10315 from "module_10315" /* 10315 */;
import _mod10325 from "module_10325" /* 10325 */;
import casual2 from "casual" /* 10340 */;
import _mod10359 from "module_10359" /* 10359 */;

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
const Chrono = fn(_mod10168);
({ strict: exports.strict, casual: exports.casual } = Chrono);
const Chrono_export = require("module_10169").Chrono;

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
export const ParsingContext = require("module_10169").ParsingContext;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const de = fn(_mod10216);
export const fr = fn(_mod10228);
export const ja = fn(_mod10241);
export const pt = fn(_mod10252);
export const nl = fn(_mod10261);
export const zh = fn(hant);
export const ru = fn(_mod10300);
export const es = fn(_mod10315);
export const uk = fn(_mod10325);
export const it = fn(casual2);
export const sv = fn(_mod10359);
