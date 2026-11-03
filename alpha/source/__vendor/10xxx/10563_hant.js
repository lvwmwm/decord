// Module ID: 10563
// Function ID: 10564
// Name: hant
// Dependencies: [10453, 10460, 10462, 10495, 10564, 10566, 10567, 10568, 10569, 10570, 10571, 10573, 10574, 10575, 10576, 10577, 10578, 10579, 10580, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10563 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10566 from "module_10566" /* 10566 */;
import _mod10567 from "module_10567" /* 10567 */;
import _mod10568 from "module_10568" /* 10568 */;
import _mod10569 from "module_10569" /* 10569 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10573 from "module_10573" /* 10573 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10575 from "module_10575" /* 10575 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10577 from "module_10577" /* 10577 */;
import _mod10578 from "module_10578" /* 10578 */;
import _mod10579 from "module_10579" /* 10579 */;
import _mod10580 from "module_10580" /* 10580 */;
import { Chrono } from "module_10453" /* 10453 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10571.default(), , , , , , , , , ];
  new module_10571.default();
  items[1] = new module_10564.default();
  new module_10564.default();
  items[2] = new module_10574.default();
  new module_10574.default();
  items[3] = new module_10567.default();
  new module_10567.default();
  items[4] = new module_10576.default();
  new module_10576.default();
  items[5] = new module_10569.default();
  new module_10569.default();
  items[6] = new module_10575.default();
  new module_10575.default();
  items[7] = new module_10568.default();
  new module_10568.default();
  items[8] = new module_10573.default();
  new module_10573.default();
  items[9] = new module_10566.default();
  new module_10566.default();
  items1 = [new module_10577.default(), ];
  new module_10577.default();
  items1[1] = new module_10578.default();
  new module_10578.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10495.default));
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
  const _default = new module_10570.default();
  unshift(_default);
  return tmp;
}
const module_10495 = fn2(_mod10495);
const module_10564 = fn2(_mod10564);
const module_10566 = fn2(_mod10566);
const module_10567 = fn2(_mod10567);
const module_10568 = fn2(_mod10568);
const module_10569 = fn2(_mod10569);
const module_10570 = fn2(_mod10570);
const module_10571 = fn2(_mod10571);
const module_10573 = fn2(_mod10573);
const module_10574 = fn2(_mod10574);
const module_10575 = fn2(_mod10575);
const module_10576 = fn2(_mod10576);
const module_10577 = fn2(_mod10577);
const module_10578 = fn2(_mod10578);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10570.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration());
const Chrono_export = require("module_10453").Chrono;

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
export const hant = fn(_mod10579);
export const hans = fn(_mod10580);
export const casual = chrono;
export const strict = chrono1;
