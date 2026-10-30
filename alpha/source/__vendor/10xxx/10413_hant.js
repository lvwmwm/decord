// Module ID: 10413
// Function ID: 10414
// Name: hant
// Dependencies: [10303, 10310, 10312, 10345, 10414, 10416, 10417, 10418, 10419, 10420, 10421, 10423, 10424, 10425, 10426, 10427, 10428, 10429, 10430, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10413 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10414 from "module_10414" /* 10414 */;
import _mod10416 from "module_10416" /* 10416 */;
import _mod10417 from "module_10417" /* 10417 */;
import _mod10418 from "module_10418" /* 10418 */;
import _mod10419 from "module_10419" /* 10419 */;
import _mod10420 from "module_10420" /* 10420 */;
import _mod10421 from "module_10421" /* 10421 */;
import _mod10423 from "module_10423" /* 10423 */;
import _mod10424 from "module_10424" /* 10424 */;
import _mod10425 from "module_10425" /* 10425 */;
import _mod10426 from "module_10426" /* 10426 */;
import _mod10427 from "module_10427" /* 10427 */;
import _mod10428 from "module_10428" /* 10428 */;
import _mod10429 from "module_10429" /* 10429 */;
import _mod10430 from "module_10430" /* 10430 */;
import { Chrono } from "module_10303" /* 10303 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10421.default(), , , , , , , , , ];
  new module_10421.default();
  items[1] = new module_10414.default();
  new module_10414.default();
  items[2] = new module_10424.default();
  new module_10424.default();
  items[3] = new module_10417.default();
  new module_10417.default();
  items[4] = new module_10426.default();
  new module_10426.default();
  items[5] = new module_10419.default();
  new module_10419.default();
  items[6] = new module_10425.default();
  new module_10425.default();
  items[7] = new module_10418.default();
  new module_10418.default();
  items[8] = new module_10423.default();
  new module_10423.default();
  items[9] = new module_10416.default();
  new module_10416.default();
  items1 = [new module_10427.default(), ];
  new module_10427.default();
  items1[1] = new module_10428.default();
  new module_10428.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10345.default));
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
  const _default = new module_10420.default();
  unshift(_default);
  return tmp;
}
const module_10345 = fn2(_mod10345);
const module_10414 = fn2(_mod10414);
const module_10416 = fn2(_mod10416);
const module_10417 = fn2(_mod10417);
const module_10418 = fn2(_mod10418);
const module_10419 = fn2(_mod10419);
const module_10420 = fn2(_mod10420);
const module_10421 = fn2(_mod10421);
const module_10423 = fn2(_mod10423);
const module_10424 = fn2(_mod10424);
const module_10425 = fn2(_mod10425);
const module_10426 = fn2(_mod10426);
const module_10427 = fn2(_mod10427);
const module_10428 = fn2(_mod10428);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10420.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10303").Chrono(createConfiguration());
const Chrono_export = require("module_10303").Chrono;

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
export const hant = fn(_mod10429);
export const hans = fn(_mod10430);
export const casual = chrono;
export const strict = chrono1;
