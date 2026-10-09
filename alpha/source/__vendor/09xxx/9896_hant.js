// Module ID: 9896
// Function ID: 9897
// Name: hant
// Dependencies: [9786, 9793, 9795, 9828, 9897, 9899, 9900, 9901, 9902, 9903, 9904, 9906, 9907, 9908, 9909, 9910, 9911, 9912, 9913, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9896 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9897 from "module_9897" /* 9897 */;
import _mod9899 from "module_9899" /* 9899 */;
import _mod9900 from "module_9900" /* 9900 */;
import _mod9901 from "module_9901" /* 9901 */;
import _mod9902 from "module_9902" /* 9902 */;
import _mod9903 from "module_9903" /* 9903 */;
import _mod9904 from "module_9904" /* 9904 */;
import _mod9906 from "module_9906" /* 9906 */;
import _mod9907 from "module_9907" /* 9907 */;
import _mod9908 from "module_9908" /* 9908 */;
import _mod9909 from "module_9909" /* 9909 */;
import _mod9910 from "module_9910" /* 9910 */;
import _mod9911 from "module_9911" /* 9911 */;
import _mod9912 from "module_9912" /* 9912 */;
import _mod9913 from "module_9913" /* 9913 */;
import { Chrono } from "module_9786" /* 9786 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9904.default(), , , , , , , , , ];
  new module_9904.default();
  items[1] = new module_9897.default();
  new module_9897.default();
  items[2] = new module_9907.default();
  new module_9907.default();
  items[3] = new module_9900.default();
  new module_9900.default();
  items[4] = new module_9909.default();
  new module_9909.default();
  items[5] = new module_9902.default();
  new module_9902.default();
  items[6] = new module_9908.default();
  new module_9908.default();
  items[7] = new module_9901.default();
  new module_9901.default();
  items[8] = new module_9906.default();
  new module_9906.default();
  items[9] = new module_9899.default();
  new module_9899.default();
  items1 = [new module_9910.default(), ];
  new module_9910.default();
  items1[1] = new module_9911.default();
  new module_9911.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9828.default));
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
  const _default = new module_9903.default();
  unshift(_default);
  return tmp;
}
const module_9828 = fn2(_mod9828);
const module_9897 = fn2(_mod9897);
const module_9899 = fn2(_mod9899);
const module_9900 = fn2(_mod9900);
const module_9901 = fn2(_mod9901);
const module_9902 = fn2(_mod9902);
const module_9903 = fn2(_mod9903);
const module_9904 = fn2(_mod9904);
const module_9906 = fn2(_mod9906);
const module_9907 = fn2(_mod9907);
const module_9908 = fn2(_mod9908);
const module_9909 = fn2(_mod9909);
const module_9910 = fn2(_mod9910);
const module_9911 = fn2(_mod9911);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9903.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration());
const Chrono_export = require("module_9786").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hant = fn(_mod9912);
export const hans = fn(_mod9913);
export const casual = chrono;
export const strict = chrono1;
