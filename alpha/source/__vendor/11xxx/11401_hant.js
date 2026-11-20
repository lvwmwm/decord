// Module ID: 11401
// Function ID: 11402
// Name: hant
// Dependencies: [11291, 11298, 11300, 11333, 11402, 11404, 11405, 11406, 11407, 11408, 11409, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11401 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11333 from "module_11333" /* 11333 */;
import _mod11402 from "module_11402" /* 11402 */;
import _mod11404 from "module_11404" /* 11404 */;
import _mod11405 from "module_11405" /* 11405 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11407 from "module_11407" /* 11407 */;
import _mod11408 from "module_11408" /* 11408 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11411 from "module_11411" /* 11411 */;
import _mod11412 from "module_11412" /* 11412 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11414 from "module_11414" /* 11414 */;
import _mod11415 from "module_11415" /* 11415 */;
import _mod11416 from "module_11416" /* 11416 */;
import _mod11417 from "module_11417" /* 11417 */;
import _mod11418 from "module_11418" /* 11418 */;
import { Chrono } from "module_11291" /* 11291 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11409.default(), , , , , , , , , ];
  new module_11409.default();
  items[1] = new module_11402.default();
  new module_11402.default();
  items[2] = new module_11412.default();
  new module_11412.default();
  items[3] = new module_11405.default();
  new module_11405.default();
  items[4] = new module_11414.default();
  new module_11414.default();
  items[5] = new module_11407.default();
  new module_11407.default();
  items[6] = new module_11413.default();
  new module_11413.default();
  items[7] = new module_11406.default();
  new module_11406.default();
  items[8] = new module_11411.default();
  new module_11411.default();
  items[9] = new module_11404.default();
  new module_11404.default();
  items1 = [new module_11415.default(), ];
  new module_11415.default();
  items1[1] = new module_11416.default();
  new module_11416.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11333.default));
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
  const _default = new module_11408.default();
  unshift(_default);
  return tmp;
}
const module_11333 = fn2(_mod11333);
const module_11402 = fn2(_mod11402);
const module_11404 = fn2(_mod11404);
const module_11405 = fn2(_mod11405);
const module_11406 = fn2(_mod11406);
const module_11407 = fn2(_mod11407);
const module_11408 = fn2(_mod11408);
const module_11409 = fn2(_mod11409);
const module_11411 = fn2(_mod11411);
const module_11412 = fn2(_mod11412);
const module_11413 = fn2(_mod11413);
const module_11414 = fn2(_mod11414);
const module_11415 = fn2(_mod11415);
const module_11416 = fn2(_mod11416);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11408.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration());
const Chrono_export = require("module_11291").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export { createCasualConfiguration };
export { createConfiguration };
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hant = fn(_mod11417);
export const hans = fn(_mod11418);
export const casual = chrono;
export const strict = chrono1;
