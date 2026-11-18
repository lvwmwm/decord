// Module ID: 11481
// Function ID: 11482
// Name: hant
// Dependencies: [11371, 11378, 11380, 11413, 11482, 11484, 11485, 11486, 11487, 11488, 11489, 11491, 11492, 11493, 11494, 11495, 11496, 11497, 11498, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11481 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11482 from "module_11482" /* 11482 */;
import _mod11484 from "module_11484" /* 11484 */;
import _mod11485 from "module_11485" /* 11485 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
import _mod11488 from "module_11488" /* 11488 */;
import _mod11489 from "module_11489" /* 11489 */;
import _mod11491 from "module_11491" /* 11491 */;
import _mod11492 from "module_11492" /* 11492 */;
import _mod11493 from "module_11493" /* 11493 */;
import _mod11494 from "module_11494" /* 11494 */;
import _mod11495 from "module_11495" /* 11495 */;
import _mod11496 from "module_11496" /* 11496 */;
import _mod11497 from "module_11497" /* 11497 */;
import _mod11498 from "module_11498" /* 11498 */;
import { Chrono } from "module_11371" /* 11371 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11489.default(), , , , , , , , , ];
  new module_11489.default();
  items[1] = new module_11482.default();
  new module_11482.default();
  items[2] = new module_11492.default();
  new module_11492.default();
  items[3] = new module_11485.default();
  new module_11485.default();
  items[4] = new module_11494.default();
  new module_11494.default();
  items[5] = new module_11487.default();
  new module_11487.default();
  items[6] = new module_11493.default();
  new module_11493.default();
  items[7] = new module_11486.default();
  new module_11486.default();
  items[8] = new module_11491.default();
  new module_11491.default();
  items[9] = new module_11484.default();
  new module_11484.default();
  items1 = [new module_11495.default(), ];
  new module_11495.default();
  items1[1] = new module_11496.default();
  new module_11496.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11413.default));
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
  const _default = new module_11488.default();
  unshift(_default);
  return tmp;
}
const module_11413 = fn2(_mod11413);
const module_11482 = fn2(_mod11482);
const module_11484 = fn2(_mod11484);
const module_11485 = fn2(_mod11485);
const module_11486 = fn2(_mod11486);
const module_11487 = fn2(_mod11487);
const module_11488 = fn2(_mod11488);
const module_11489 = fn2(_mod11489);
const module_11491 = fn2(_mod11491);
const module_11492 = fn2(_mod11492);
const module_11493 = fn2(_mod11493);
const module_11494 = fn2(_mod11494);
const module_11495 = fn2(_mod11495);
const module_11496 = fn2(_mod11496);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11488.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11371").Chrono(createConfiguration());
const Chrono_export = require("module_11371").Chrono;

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
export const hant = fn(_mod11497);
export const hans = fn(_mod11498);
export const casual = chrono;
export const strict = chrono1;
