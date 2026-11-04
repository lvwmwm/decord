// Module ID: 10353
// Function ID: 10354
// Name: hant
// Dependencies: [10243, 10250, 10252, 10285, 10354, 10356, 10357, 10358, 10359, 10360, 10361, 10363, 10364, 10365, 10366, 10367, 10368, 10369, 10370, 10283]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10353 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10285 from "module_10285" /* 10285 */;
import _mod10354 from "module_10354" /* 10354 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10357 from "module_10357" /* 10357 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10361 from "module_10361" /* 10361 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import _mod10367 from "module_10367" /* 10367 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10369 from "module_10369" /* 10369 */;
import _mod10370 from "module_10370" /* 10370 */;
import { Chrono } from "module_10243" /* 10243 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10361.default(), , , , , , , , , ];
  new module_10361.default();
  items[1] = new module_10354.default();
  new module_10354.default();
  items[2] = new module_10364.default();
  new module_10364.default();
  items[3] = new module_10357.default();
  new module_10357.default();
  items[4] = new module_10366.default();
  new module_10366.default();
  items[5] = new module_10359.default();
  new module_10359.default();
  items[6] = new module_10365.default();
  new module_10365.default();
  items[7] = new module_10358.default();
  new module_10358.default();
  items[8] = new module_10363.default();
  new module_10363.default();
  items[9] = new module_10356.default();
  new module_10356.default();
  items1 = [new module_10367.default(), ];
  new module_10367.default();
  items1[1] = new module_10368.default();
  new module_10368.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10285.default));
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
  const _default = new module_10360.default();
  unshift(_default);
  return tmp;
}
const module_10285 = fn2(_mod10285);
const module_10354 = fn2(_mod10354);
const module_10356 = fn2(_mod10356);
const module_10357 = fn2(_mod10357);
const module_10358 = fn2(_mod10358);
const module_10359 = fn2(_mod10359);
const module_10360 = fn2(_mod10360);
const module_10361 = fn2(_mod10361);
const module_10363 = fn2(_mod10363);
const module_10364 = fn2(_mod10364);
const module_10365 = fn2(_mod10365);
const module_10366 = fn2(_mod10366);
const module_10367 = fn2(_mod10367);
const module_10368 = fn2(_mod10368);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10360.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10243").Chrono(createConfiguration());
const Chrono_export = require("module_10243").Chrono;

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
export const hant = fn(_mod10369);
export const hans = fn(_mod10370);
export const casual = chrono;
export const strict = chrono1;
