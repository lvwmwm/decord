// Module ID: 11459
// Function ID: 11460
// Name: hant
// Dependencies: [11349, 11356, 11358, 11391, 11460, 11462, 11463, 11464, 11465, 11466, 11467, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11459 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11462 from "module_11462" /* 11462 */;
import _mod11463 from "module_11463" /* 11463 */;
import _mod11464 from "module_11464" /* 11464 */;
import _mod11465 from "module_11465" /* 11465 */;
import _mod11466 from "module_11466" /* 11466 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11469 from "module_11469" /* 11469 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11472 from "module_11472" /* 11472 */;
import _mod11473 from "module_11473" /* 11473 */;
import _mod11474 from "module_11474" /* 11474 */;
import _mod11475 from "module_11475" /* 11475 */;
import _mod11476 from "module_11476" /* 11476 */;
import { Chrono } from "module_11349" /* 11349 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11467.default(), , , , , , , , , ];
  new module_11467.default();
  items[1] = new module_11460.default();
  new module_11460.default();
  items[2] = new module_11470.default();
  new module_11470.default();
  items[3] = new module_11463.default();
  new module_11463.default();
  items[4] = new module_11472.default();
  new module_11472.default();
  items[5] = new module_11465.default();
  new module_11465.default();
  items[6] = new module_11471.default();
  new module_11471.default();
  items[7] = new module_11464.default();
  new module_11464.default();
  items[8] = new module_11469.default();
  new module_11469.default();
  items[9] = new module_11462.default();
  new module_11462.default();
  items1 = [new module_11473.default(), ];
  new module_11473.default();
  items1[1] = new module_11474.default();
  new module_11474.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11391.default));
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
  const _default = new module_11466.default();
  unshift(_default);
  return tmp;
}
const module_11391 = fn2(_mod11391);
const module_11460 = fn2(_mod11460);
const module_11462 = fn2(_mod11462);
const module_11463 = fn2(_mod11463);
const module_11464 = fn2(_mod11464);
const module_11465 = fn2(_mod11465);
const module_11466 = fn2(_mod11466);
const module_11467 = fn2(_mod11467);
const module_11469 = fn2(_mod11469);
const module_11470 = fn2(_mod11470);
const module_11471 = fn2(_mod11471);
const module_11472 = fn2(_mod11472);
const module_11473 = fn2(_mod11473);
const module_11474 = fn2(_mod11474);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11466.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11349").Chrono(createConfiguration());
const Chrono_export = require("module_11349").Chrono;

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
export const hant = fn(_mod11475);
export const hans = fn(_mod11476);
export const casual = chrono;
export const strict = chrono1;
