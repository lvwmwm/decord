// Module ID: 9926
// Function ID: 9927
// Name: en
// Dependencies: [9927, 9928, 9935, 9937, 9975, 9987, 10000, 10011, 10020, 10038, 10059, 10074, 10084, 10099, 10118]
// Exports: parse, parseDate

// Module 9926 (en)
import _mod9927 from "module_9927" /* 9927 */;
import _mod9975 from "module_9975" /* 9975 */;
import _mod9987 from "module_9987" /* 9987 */;
import _mod10000 from "module_10000" /* 10000 */;
import _mod10011 from "module_10011" /* 10011 */;
import _mod10020 from "module_10020" /* 10020 */;
import hant from "hant" /* 10038 */;
import _mod10059 from "module_10059" /* 10059 */;
import _mod10074 from "module_10074" /* 10074 */;
import _mod10084 from "module_10084" /* 10084 */;
import casual2 from "casual" /* 10099 */;
import _mod10118 from "module_10118" /* 10118 */;

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
const Chrono = fn(_mod9927);
({ strict: exports.strict, casual: exports.casual } = Chrono);
const Chrono_export = require("module_9928").Chrono;

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
export const ParsingContext = require("module_9928").ParsingContext;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const de = fn(_mod9975);
export const fr = fn(_mod9987);
export const ja = fn(_mod10000);
export const pt = fn(_mod10011);
export const nl = fn(_mod10020);
export const zh = fn(hant);
export const ru = fn(_mod10059);
export const es = fn(_mod10074);
export const uk = fn(_mod10084);
export const it = fn(casual2);
export const sv = fn(_mod10118);
