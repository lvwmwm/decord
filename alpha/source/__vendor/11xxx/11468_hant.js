// Module ID: 11468
// Function ID: 11469
// Name: hant
// Dependencies: [11358, 11365, 11367, 11400, 11469, 11471, 11472, 11473, 11474, 11475, 11476, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11468 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11469 from "module_11469" /* 11469 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11472 from "module_11472" /* 11472 */;
import _mod11473 from "module_11473" /* 11473 */;
import _mod11474 from "module_11474" /* 11474 */;
import _mod11475 from "module_11475" /* 11475 */;
import _mod11476 from "module_11476" /* 11476 */;
import _mod11478 from "module_11478" /* 11478 */;
import _mod11479 from "module_11479" /* 11479 */;
import _mod11480 from "module_11480" /* 11480 */;
import _mod11481 from "module_11481" /* 11481 */;
import _mod11482 from "module_11482" /* 11482 */;
import _mod11483 from "module_11483" /* 11483 */;
import _mod11484 from "module_11484" /* 11484 */;
import _mod11485 from "module_11485" /* 11485 */;
import { Chrono } from "module_11358" /* 11358 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11476.default(), , , , , , , , , ];
  new module_11476.default();
  items[1] = new module_11469.default();
  new module_11469.default();
  items[2] = new module_11479.default();
  new module_11479.default();
  items[3] = new module_11472.default();
  new module_11472.default();
  items[4] = new module_11481.default();
  new module_11481.default();
  items[5] = new module_11474.default();
  new module_11474.default();
  items[6] = new module_11480.default();
  new module_11480.default();
  items[7] = new module_11473.default();
  new module_11473.default();
  items[8] = new module_11478.default();
  new module_11478.default();
  items[9] = new module_11471.default();
  new module_11471.default();
  items1 = [new module_11482.default(), ];
  new module_11482.default();
  items1[1] = new module_11483.default();
  new module_11483.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11400.default));
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
  const _default = new module_11475.default();
  unshift(_default);
  return tmp;
}
const module_11400 = fn2(_mod11400);
const module_11469 = fn2(_mod11469);
const module_11471 = fn2(_mod11471);
const module_11472 = fn2(_mod11472);
const module_11473 = fn2(_mod11473);
const module_11474 = fn2(_mod11474);
const module_11475 = fn2(_mod11475);
const module_11476 = fn2(_mod11476);
const module_11478 = fn2(_mod11478);
const module_11479 = fn2(_mod11479);
const module_11480 = fn2(_mod11480);
const module_11481 = fn2(_mod11481);
const module_11482 = fn2(_mod11482);
const module_11483 = fn2(_mod11483);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11475.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11358").Chrono(createConfiguration());
const Chrono_export = require("module_11358").Chrono;

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
export const hant = fn(_mod11484);
export const hans = fn(_mod11485);
export const casual = chrono;
export const strict = chrono1;
