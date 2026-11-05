// Module ID: 10617
// Function ID: 10618
// Name: hant
// Dependencies: [10507, 10514, 10516, 10549, 10618, 10620, 10621, 10622, 10623, 10624, 10625, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10617 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10618 from "module_10618" /* 10618 */;
import _mod10620 from "module_10620" /* 10620 */;
import _mod10621 from "module_10621" /* 10621 */;
import _mod10622 from "module_10622" /* 10622 */;
import _mod10623 from "module_10623" /* 10623 */;
import _mod10624 from "module_10624" /* 10624 */;
import _mod10625 from "module_10625" /* 10625 */;
import _mod10627 from "module_10627" /* 10627 */;
import _mod10628 from "module_10628" /* 10628 */;
import _mod10629 from "module_10629" /* 10629 */;
import _mod10630 from "module_10630" /* 10630 */;
import _mod10631 from "module_10631" /* 10631 */;
import _mod10632 from "module_10632" /* 10632 */;
import _mod10633 from "module_10633" /* 10633 */;
import _mod10634 from "module_10634" /* 10634 */;
import { Chrono } from "module_10507" /* 10507 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10625.default(), , , , , , , , , ];
  new module_10625.default();
  items[1] = new module_10618.default();
  new module_10618.default();
  items[2] = new module_10628.default();
  new module_10628.default();
  items[3] = new module_10621.default();
  new module_10621.default();
  items[4] = new module_10630.default();
  new module_10630.default();
  items[5] = new module_10623.default();
  new module_10623.default();
  items[6] = new module_10629.default();
  new module_10629.default();
  items[7] = new module_10622.default();
  new module_10622.default();
  items[8] = new module_10627.default();
  new module_10627.default();
  items[9] = new module_10620.default();
  new module_10620.default();
  items1 = [new module_10631.default(), ];
  new module_10631.default();
  items1[1] = new module_10632.default();
  new module_10632.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10549.default));
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
  const _default = new module_10624.default();
  unshift(_default);
  return tmp;
}
const module_10549 = fn2(_mod10549);
const module_10618 = fn2(_mod10618);
const module_10620 = fn2(_mod10620);
const module_10621 = fn2(_mod10621);
const module_10622 = fn2(_mod10622);
const module_10623 = fn2(_mod10623);
const module_10624 = fn2(_mod10624);
const module_10625 = fn2(_mod10625);
const module_10627 = fn2(_mod10627);
const module_10628 = fn2(_mod10628);
const module_10629 = fn2(_mod10629);
const module_10630 = fn2(_mod10630);
const module_10631 = fn2(_mod10631);
const module_10632 = fn2(_mod10632);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10624.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10507").Chrono(createConfiguration());
const Chrono_export = require("module_10507").Chrono;

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
export const hant = fn(_mod10633);
export const hans = fn(_mod10634);
export const casual = chrono;
export const strict = chrono1;
