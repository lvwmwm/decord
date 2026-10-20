// Module ID: 10250
// Function ID: 10251
// Name: hant
// Dependencies: [10140, 10147, 10149, 10182, 10251, 10253, 10254, 10255, 10256, 10257, 10258, 10260, 10261, 10262, 10263, 10264, 10265, 10266, 10267, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10250 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10251 from "module_10251" /* 10251 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10254 from "module_10254" /* 10254 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10260 from "module_10260" /* 10260 */;
import _mod10261 from "module_10261" /* 10261 */;
import _mod10262 from "module_10262" /* 10262 */;
import _mod10263 from "module_10263" /* 10263 */;
import _mod10264 from "module_10264" /* 10264 */;
import _mod10265 from "module_10265" /* 10265 */;
import _mod10266 from "module_10266" /* 10266 */;
import _mod10267 from "module_10267" /* 10267 */;
import { Chrono } from "module_10140" /* 10140 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10258.default(), , , , , , , , , ];
  new module_10258.default();
  items[1] = new module_10251.default();
  new module_10251.default();
  items[2] = new module_10261.default();
  new module_10261.default();
  items[3] = new module_10254.default();
  new module_10254.default();
  items[4] = new module_10263.default();
  new module_10263.default();
  items[5] = new module_10256.default();
  new module_10256.default();
  items[6] = new module_10262.default();
  new module_10262.default();
  items[7] = new module_10255.default();
  new module_10255.default();
  items[8] = new module_10260.default();
  new module_10260.default();
  items[9] = new module_10253.default();
  new module_10253.default();
  items1 = [new module_10264.default(), ];
  new module_10264.default();
  items1[1] = new module_10265.default();
  new module_10265.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10182.default));
  return result;
}
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
const fn2 = self && self.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
function createCasualConfiguration() {
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10257.default();
  unshift(_default);
  return tmp;
}
const module_10182 = fn2(_mod10182);
const module_10251 = fn2(_mod10251);
const module_10253 = fn2(_mod10253);
const module_10254 = fn2(_mod10254);
const module_10255 = fn2(_mod10255);
const module_10256 = fn2(_mod10256);
const module_10257 = fn2(_mod10257);
const module_10258 = fn2(_mod10258);
const module_10260 = fn2(_mod10260);
const module_10261 = fn2(_mod10261);
const module_10262 = fn2(_mod10262);
const module_10263 = fn2(_mod10263);
const module_10264 = fn2(_mod10264);
const module_10265 = fn2(_mod10265);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10257.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10140").Chrono(createConfiguration());
const Chrono_export = require("module_10140").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hant = fn(_mod10266);
export const hans = fn(_mod10267);
export const casual = chrono;
export const strict = chrono1;
