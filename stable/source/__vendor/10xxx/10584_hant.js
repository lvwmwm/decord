// Module ID: 10584
// Function ID: 10585
// Name: hant
// Dependencies: [10474, 10481, 10483, 10516, 10585, 10587, 10588, 10589, 10590, 10591, 10592, 10594, 10595, 10596, 10597, 10598, 10599, 10600, 10601, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10584 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10585 from "module_10585" /* 10585 */;
import _mod10587 from "module_10587" /* 10587 */;
import _mod10588 from "module_10588" /* 10588 */;
import _mod10589 from "module_10589" /* 10589 */;
import _mod10590 from "module_10590" /* 10590 */;
import _mod10591 from "module_10591" /* 10591 */;
import _mod10592 from "module_10592" /* 10592 */;
import _mod10594 from "module_10594" /* 10594 */;
import _mod10595 from "module_10595" /* 10595 */;
import _mod10596 from "module_10596" /* 10596 */;
import _mod10597 from "module_10597" /* 10597 */;
import _mod10598 from "module_10598" /* 10598 */;
import _mod10599 from "module_10599" /* 10599 */;
import _mod10600 from "module_10600" /* 10600 */;
import _mod10601 from "module_10601" /* 10601 */;
import { Chrono } from "module_10474" /* 10474 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10592.default(), , , , , , , , , ];
  new module_10592.default();
  items[1] = new module_10585.default();
  new module_10585.default();
  items[2] = new module_10595.default();
  new module_10595.default();
  items[3] = new module_10588.default();
  new module_10588.default();
  items[4] = new module_10597.default();
  new module_10597.default();
  items[5] = new module_10590.default();
  new module_10590.default();
  items[6] = new module_10596.default();
  new module_10596.default();
  items[7] = new module_10589.default();
  new module_10589.default();
  items[8] = new module_10594.default();
  new module_10594.default();
  items[9] = new module_10587.default();
  new module_10587.default();
  items1 = [new module_10598.default(), ];
  new module_10598.default();
  items1[1] = new module_10599.default();
  new module_10599.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10516.default));
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
  const _default = new module_10591.default();
  unshift(_default);
  return tmp;
}
const module_10516 = fn2(_mod10516);
const module_10585 = fn2(_mod10585);
const module_10587 = fn2(_mod10587);
const module_10588 = fn2(_mod10588);
const module_10589 = fn2(_mod10589);
const module_10590 = fn2(_mod10590);
const module_10591 = fn2(_mod10591);
const module_10592 = fn2(_mod10592);
const module_10594 = fn2(_mod10594);
const module_10595 = fn2(_mod10595);
const module_10596 = fn2(_mod10596);
const module_10597 = fn2(_mod10597);
const module_10598 = fn2(_mod10598);
const module_10599 = fn2(_mod10599);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10591.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10474").Chrono(createConfiguration());
const Chrono_export = require("module_10474").Chrono;

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
export const hant = fn(_mod10600);
export const hans = fn(_mod10601);
export const casual = chrono;
export const strict = chrono1;
