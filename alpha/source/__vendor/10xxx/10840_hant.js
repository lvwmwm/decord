// Module ID: 10840
// Function ID: 10841
// Name: hant
// Dependencies: [10730, 10737, 10739, 10772, 10841, 10843, 10844, 10845, 10846, 10847, 10848, 10850, 10851, 10852, 10853, 10854, 10855, 10856, 10857, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10840 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10772 from "module_10772" /* 10772 */;
import _mod10841 from "module_10841" /* 10841 */;
import _mod10843 from "module_10843" /* 10843 */;
import _mod10844 from "module_10844" /* 10844 */;
import _mod10845 from "module_10845" /* 10845 */;
import _mod10846 from "module_10846" /* 10846 */;
import _mod10847 from "module_10847" /* 10847 */;
import _mod10848 from "module_10848" /* 10848 */;
import _mod10850 from "module_10850" /* 10850 */;
import _mod10851 from "module_10851" /* 10851 */;
import _mod10852 from "module_10852" /* 10852 */;
import _mod10853 from "module_10853" /* 10853 */;
import _mod10854 from "module_10854" /* 10854 */;
import _mod10855 from "module_10855" /* 10855 */;
import _mod10856 from "module_10856" /* 10856 */;
import _mod10857 from "module_10857" /* 10857 */;
import { Chrono } from "module_10730" /* 10730 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10848.default(), , , , , , , , , ];
  new module_10848.default();
  items[1] = new module_10841.default();
  new module_10841.default();
  items[2] = new module_10851.default();
  new module_10851.default();
  items[3] = new module_10844.default();
  new module_10844.default();
  items[4] = new module_10853.default();
  new module_10853.default();
  items[5] = new module_10846.default();
  new module_10846.default();
  items[6] = new module_10852.default();
  new module_10852.default();
  items[7] = new module_10845.default();
  new module_10845.default();
  items[8] = new module_10850.default();
  new module_10850.default();
  items[9] = new module_10843.default();
  new module_10843.default();
  items1 = [new module_10854.default(), ];
  new module_10854.default();
  items1[1] = new module_10855.default();
  new module_10855.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10772.default));
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
  const _default = new module_10847.default();
  unshift(_default);
  return tmp;
}
const module_10772 = fn2(_mod10772);
const module_10841 = fn2(_mod10841);
const module_10843 = fn2(_mod10843);
const module_10844 = fn2(_mod10844);
const module_10845 = fn2(_mod10845);
const module_10846 = fn2(_mod10846);
const module_10847 = fn2(_mod10847);
const module_10848 = fn2(_mod10848);
const module_10850 = fn2(_mod10850);
const module_10851 = fn2(_mod10851);
const module_10852 = fn2(_mod10852);
const module_10853 = fn2(_mod10853);
const module_10854 = fn2(_mod10854);
const module_10855 = fn2(_mod10855);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10847.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10730").Chrono(createConfiguration());
const Chrono_export = require("module_10730").Chrono;

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
export const hant = fn(_mod10856);
export const hans = fn(_mod10857);
export const casual = chrono;
export const strict = chrono1;
