// Module ID: 10985
// Function ID: 10986
// Name: hant
// Dependencies: [10875, 10882, 10884, 10917, 10986, 10988, 10989, 10990, 10991, 10992, 10993, 10995, 10996, 10997, 10998, 10999, 11000, 11001, 11002, 10915]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10985 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10915 */;
import _mod10917 from "module_10917" /* 10917 */;
import _mod10986 from "module_10986" /* 10986 */;
import _mod10988 from "module_10988" /* 10988 */;
import _mod10989 from "module_10989" /* 10989 */;
import _mod10990 from "module_10990" /* 10990 */;
import _mod10991 from "module_10991" /* 10991 */;
import _mod10992 from "module_10992" /* 10992 */;
import _mod10993 from "module_10993" /* 10993 */;
import _mod10995 from "module_10995" /* 10995 */;
import _mod10996 from "module_10996" /* 10996 */;
import _mod10997 from "module_10997" /* 10997 */;
import _mod10998 from "module_10998" /* 10998 */;
import _mod10999 from "module_10999" /* 10999 */;
import _mod11000 from "module_11000" /* 11000 */;
import _mod11001 from "module_11001" /* 11001 */;
import _mod11002 from "module_11002" /* 11002 */;
import { Chrono } from "module_10875" /* 10875 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10993.default(), , , , , , , , , ];
  new module_10993.default();
  items[1] = new module_10986.default();
  new module_10986.default();
  items[2] = new module_10996.default();
  new module_10996.default();
  items[3] = new module_10989.default();
  new module_10989.default();
  items[4] = new module_10998.default();
  new module_10998.default();
  items[5] = new module_10991.default();
  new module_10991.default();
  items[6] = new module_10997.default();
  new module_10997.default();
  items[7] = new module_10990.default();
  new module_10990.default();
  items[8] = new module_10995.default();
  new module_10995.default();
  items[9] = new module_10988.default();
  new module_10988.default();
  items1 = [new module_10999.default(), ];
  new module_10999.default();
  items1[1] = new module_11000.default();
  new module_11000.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10917.default));
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
  const _default = new module_10992.default();
  unshift(_default);
  return tmp;
}
const module_10917 = fn2(_mod10917);
const module_10986 = fn2(_mod10986);
const module_10988 = fn2(_mod10988);
const module_10989 = fn2(_mod10989);
const module_10990 = fn2(_mod10990);
const module_10991 = fn2(_mod10991);
const module_10992 = fn2(_mod10992);
const module_10993 = fn2(_mod10993);
const module_10995 = fn2(_mod10995);
const module_10996 = fn2(_mod10996);
const module_10997 = fn2(_mod10997);
const module_10998 = fn2(_mod10998);
const module_10999 = fn2(_mod10999);
const module_11000 = fn2(_mod11000);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10992.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10875").Chrono(createConfiguration());
const Chrono_export = require("module_10875").Chrono;

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
export const hant = fn(_mod11001);
export const hans = fn(_mod11002);
export const casual = chrono;
export const strict = chrono1;
