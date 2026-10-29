// Module ID: 10388
// Function ID: 10389
// Name: hant
// Dependencies: [10278, 10285, 10287, 10320, 10389, 10391, 10392, 10393, 10394, 10395, 10396, 10398, 10399, 10400, 10401, 10402, 10403, 10404, 10405, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10388 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10389 from "module_10389" /* 10389 */;
import _mod10391 from "module_10391" /* 10391 */;
import _mod10392 from "module_10392" /* 10392 */;
import _mod10393 from "module_10393" /* 10393 */;
import _mod10394 from "module_10394" /* 10394 */;
import _mod10395 from "module_10395" /* 10395 */;
import _mod10396 from "module_10396" /* 10396 */;
import _mod10398 from "module_10398" /* 10398 */;
import _mod10399 from "module_10399" /* 10399 */;
import _mod10400 from "module_10400" /* 10400 */;
import _mod10401 from "module_10401" /* 10401 */;
import _mod10402 from "module_10402" /* 10402 */;
import _mod10403 from "module_10403" /* 10403 */;
import _mod10404 from "module_10404" /* 10404 */;
import _mod10405 from "module_10405" /* 10405 */;
import { Chrono } from "module_10278" /* 10278 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10396.default(), , , , , , , , , ];
  new module_10396.default();
  items[1] = new module_10389.default();
  new module_10389.default();
  items[2] = new module_10399.default();
  new module_10399.default();
  items[3] = new module_10392.default();
  new module_10392.default();
  items[4] = new module_10401.default();
  new module_10401.default();
  items[5] = new module_10394.default();
  new module_10394.default();
  items[6] = new module_10400.default();
  new module_10400.default();
  items[7] = new module_10393.default();
  new module_10393.default();
  items[8] = new module_10398.default();
  new module_10398.default();
  items[9] = new module_10391.default();
  new module_10391.default();
  items1 = [new module_10402.default(), ];
  new module_10402.default();
  items1[1] = new module_10403.default();
  new module_10403.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10320.default));
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
  const _default = new module_10395.default();
  unshift(_default);
  return tmp;
}
const module_10320 = fn2(_mod10320);
const module_10389 = fn2(_mod10389);
const module_10391 = fn2(_mod10391);
const module_10392 = fn2(_mod10392);
const module_10393 = fn2(_mod10393);
const module_10394 = fn2(_mod10394);
const module_10395 = fn2(_mod10395);
const module_10396 = fn2(_mod10396);
const module_10398 = fn2(_mod10398);
const module_10399 = fn2(_mod10399);
const module_10400 = fn2(_mod10400);
const module_10401 = fn2(_mod10401);
const module_10402 = fn2(_mod10402);
const module_10403 = fn2(_mod10403);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10395.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10278").Chrono(createConfiguration());
const Chrono_export = require("module_10278").Chrono;

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
export const hant = fn(_mod10404);
export const hans = fn(_mod10405);
export const casual = chrono;
export const strict = chrono1;
