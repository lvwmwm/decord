// Module ID: 10298
// Function ID: 10299
// Name: hant
// Dependencies: [10188, 10195, 10197, 10230, 10299, 10301, 10302, 10303, 10304, 10305, 10306, 10308, 10309, 10310, 10311, 10312, 10313, 10314, 10315, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10298 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10302 from "module_10302" /* 10302 */;
import _mod10303 from "module_10303" /* 10303 */;
import _mod10304 from "module_10304" /* 10304 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10306 from "module_10306" /* 10306 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10309 from "module_10309" /* 10309 */;
import _mod10310 from "module_10310" /* 10310 */;
import _mod10311 from "module_10311" /* 10311 */;
import _mod10312 from "module_10312" /* 10312 */;
import _mod10313 from "module_10313" /* 10313 */;
import _mod10314 from "module_10314" /* 10314 */;
import _mod10315 from "module_10315" /* 10315 */;
import { Chrono } from "module_10188" /* 10188 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10306.default(), , , , , , , , , ];
  new module_10306.default();
  items[1] = new module_10299.default();
  new module_10299.default();
  items[2] = new module_10309.default();
  new module_10309.default();
  items[3] = new module_10302.default();
  new module_10302.default();
  items[4] = new module_10311.default();
  new module_10311.default();
  items[5] = new module_10304.default();
  new module_10304.default();
  items[6] = new module_10310.default();
  new module_10310.default();
  items[7] = new module_10303.default();
  new module_10303.default();
  items[8] = new module_10308.default();
  new module_10308.default();
  items[9] = new module_10301.default();
  new module_10301.default();
  items1 = [new module_10312.default(), ];
  new module_10312.default();
  items1[1] = new module_10313.default();
  new module_10313.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10230.default));
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
  const _default = new module_10305.default();
  unshift(_default);
  return tmp;
}
const module_10230 = fn2(_mod10230);
const module_10299 = fn2(_mod10299);
const module_10301 = fn2(_mod10301);
const module_10302 = fn2(_mod10302);
const module_10303 = fn2(_mod10303);
const module_10304 = fn2(_mod10304);
const module_10305 = fn2(_mod10305);
const module_10306 = fn2(_mod10306);
const module_10308 = fn2(_mod10308);
const module_10309 = fn2(_mod10309);
const module_10310 = fn2(_mod10310);
const module_10311 = fn2(_mod10311);
const module_10312 = fn2(_mod10312);
const module_10313 = fn2(_mod10313);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10305.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10188").Chrono(createConfiguration());
const Chrono_export = require("module_10188").Chrono;

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
export const hant = fn(_mod10314);
export const hans = fn(_mod10315);
export const casual = chrono;
export const strict = chrono1;
