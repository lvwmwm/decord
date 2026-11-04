// Module ID: 10611
// Function ID: 10612
// Name: hant
// Dependencies: [10501, 10508, 10510, 10543, 10612, 10614, 10615, 10616, 10617, 10618, 10619, 10621, 10622, 10623, 10624, 10625, 10626, 10627, 10628, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10611 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10614 from "module_10614" /* 10614 */;
import _mod10615 from "module_10615" /* 10615 */;
import _mod10616 from "module_10616" /* 10616 */;
import _mod10617 from "module_10617" /* 10617 */;
import _mod10618 from "module_10618" /* 10618 */;
import _mod10619 from "module_10619" /* 10619 */;
import _mod10621 from "module_10621" /* 10621 */;
import _mod10622 from "module_10622" /* 10622 */;
import _mod10623 from "module_10623" /* 10623 */;
import _mod10624 from "module_10624" /* 10624 */;
import _mod10625 from "module_10625" /* 10625 */;
import _mod10626 from "module_10626" /* 10626 */;
import _mod10627 from "module_10627" /* 10627 */;
import _mod10628 from "module_10628" /* 10628 */;
import { Chrono } from "module_10501" /* 10501 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10619.default(), , , , , , , , , ];
  new module_10619.default();
  items[1] = new module_10612.default();
  new module_10612.default();
  items[2] = new module_10622.default();
  new module_10622.default();
  items[3] = new module_10615.default();
  new module_10615.default();
  items[4] = new module_10624.default();
  new module_10624.default();
  items[5] = new module_10617.default();
  new module_10617.default();
  items[6] = new module_10623.default();
  new module_10623.default();
  items[7] = new module_10616.default();
  new module_10616.default();
  items[8] = new module_10621.default();
  new module_10621.default();
  items[9] = new module_10614.default();
  new module_10614.default();
  items1 = [new module_10625.default(), ];
  new module_10625.default();
  items1[1] = new module_10626.default();
  new module_10626.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10543.default));
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
  const _default = new module_10618.default();
  unshift(_default);
  return tmp;
}
const module_10543 = fn2(_mod10543);
const module_10612 = fn2(_mod10612);
const module_10614 = fn2(_mod10614);
const module_10615 = fn2(_mod10615);
const module_10616 = fn2(_mod10616);
const module_10617 = fn2(_mod10617);
const module_10618 = fn2(_mod10618);
const module_10619 = fn2(_mod10619);
const module_10621 = fn2(_mod10621);
const module_10622 = fn2(_mod10622);
const module_10623 = fn2(_mod10623);
const module_10624 = fn2(_mod10624);
const module_10625 = fn2(_mod10625);
const module_10626 = fn2(_mod10626);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10618.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10501").Chrono(createConfiguration());
const Chrono_export = require("module_10501").Chrono;

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
export const hant = fn(_mod10627);
export const hans = fn(_mod10628);
export const casual = chrono;
export const strict = chrono1;
