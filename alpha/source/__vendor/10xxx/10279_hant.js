// Module ID: 10279
// Function ID: 10280
// Name: hant
// Dependencies: [10169, 10176, 10178, 10211, 10280, 10282, 10283, 10284, 10285, 10286, 10287, 10289, 10290, 10291, 10292, 10293, 10294, 10295, 10296, 10209]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10279 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10209 */;
import _mod10211 from "module_10211" /* 10211 */;
import _mod10280 from "module_10280" /* 10280 */;
import _mod10282 from "module_10282" /* 10282 */;
import _mod10283 from "module_10283" /* 10283 */;
import _mod10284 from "module_10284" /* 10284 */;
import _mod10285 from "module_10285" /* 10285 */;
import _mod10286 from "module_10286" /* 10286 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10293 from "module_10293" /* 10293 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import _mod10296 from "module_10296" /* 10296 */;
import { Chrono } from "module_10169" /* 10169 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10287.default(), , , , , , , , , ];
  new module_10287.default();
  items[1] = new module_10280.default();
  new module_10280.default();
  items[2] = new module_10290.default();
  new module_10290.default();
  items[3] = new module_10283.default();
  new module_10283.default();
  items[4] = new module_10292.default();
  new module_10292.default();
  items[5] = new module_10285.default();
  new module_10285.default();
  items[6] = new module_10291.default();
  new module_10291.default();
  items[7] = new module_10284.default();
  new module_10284.default();
  items[8] = new module_10289.default();
  new module_10289.default();
  items[9] = new module_10282.default();
  new module_10282.default();
  items1 = [new module_10293.default(), ];
  new module_10293.default();
  items1[1] = new module_10294.default();
  new module_10294.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10211.default));
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
  const _default = new module_10286.default();
  unshift(_default);
  return tmp;
}
const module_10211 = fn2(_mod10211);
const module_10280 = fn2(_mod10280);
const module_10282 = fn2(_mod10282);
const module_10283 = fn2(_mod10283);
const module_10284 = fn2(_mod10284);
const module_10285 = fn2(_mod10285);
const module_10286 = fn2(_mod10286);
const module_10287 = fn2(_mod10287);
const module_10289 = fn2(_mod10289);
const module_10290 = fn2(_mod10290);
const module_10291 = fn2(_mod10291);
const module_10292 = fn2(_mod10292);
const module_10293 = fn2(_mod10293);
const module_10294 = fn2(_mod10294);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10286.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10169").Chrono(createConfiguration());
const Chrono_export = require("module_10169").Chrono;

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
export const hant = fn(_mod10295);
export const hans = fn(_mod10296);
export const casual = chrono;
export const strict = chrono1;
