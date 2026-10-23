// Module ID: 10320
// Function ID: 10321
// Name: hant
// Dependencies: [10210, 10217, 10219, 10252, 10321, 10323, 10324, 10325, 10326, 10327, 10328, 10330, 10331, 10332, 10333, 10334, 10335, 10336, 10337, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10320 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10321 from "module_10321" /* 10321 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10325 from "module_10325" /* 10325 */;
import _mod10326 from "module_10326" /* 10326 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10328 from "module_10328" /* 10328 */;
import _mod10330 from "module_10330" /* 10330 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10332 from "module_10332" /* 10332 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10336 from "module_10336" /* 10336 */;
import _mod10337 from "module_10337" /* 10337 */;
import { Chrono } from "module_10210" /* 10210 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10328.default(), , , , , , , , , ];
  new module_10328.default();
  items[1] = new module_10321.default();
  new module_10321.default();
  items[2] = new module_10331.default();
  new module_10331.default();
  items[3] = new module_10324.default();
  new module_10324.default();
  items[4] = new module_10333.default();
  new module_10333.default();
  items[5] = new module_10326.default();
  new module_10326.default();
  items[6] = new module_10332.default();
  new module_10332.default();
  items[7] = new module_10325.default();
  new module_10325.default();
  items[8] = new module_10330.default();
  new module_10330.default();
  items[9] = new module_10323.default();
  new module_10323.default();
  items1 = [new module_10334.default(), ];
  new module_10334.default();
  items1[1] = new module_10335.default();
  new module_10335.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10252.default));
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
  const _default = new module_10327.default();
  unshift(_default);
  return tmp;
}
const module_10252 = fn2(_mod10252);
const module_10321 = fn2(_mod10321);
const module_10323 = fn2(_mod10323);
const module_10324 = fn2(_mod10324);
const module_10325 = fn2(_mod10325);
const module_10326 = fn2(_mod10326);
const module_10327 = fn2(_mod10327);
const module_10328 = fn2(_mod10328);
const module_10330 = fn2(_mod10330);
const module_10331 = fn2(_mod10331);
const module_10332 = fn2(_mod10332);
const module_10333 = fn2(_mod10333);
const module_10334 = fn2(_mod10334);
const module_10335 = fn2(_mod10335);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10327.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10210").Chrono(createConfiguration());
const Chrono_export = require("module_10210").Chrono;

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
export const hant = fn(_mod10336);
export const hans = fn(_mod10337);
export const casual = chrono;
export const strict = chrono1;
