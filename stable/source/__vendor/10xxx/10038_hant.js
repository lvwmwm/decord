// Module ID: 10038
// Function ID: 10039
// Name: hant
// Dependencies: [9928, 9935, 9937, 9970, 10039, 10041, 10042, 10043, 10044, 10045, 10046, 10048, 10049, 10050, 10051, 10052, 10053, 10054, 10055, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10038 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9970 from "module_9970" /* 9970 */;
import _mod10039 from "module_10039" /* 10039 */;
import _mod10041 from "module_10041" /* 10041 */;
import _mod10042 from "module_10042" /* 10042 */;
import _mod10043 from "module_10043" /* 10043 */;
import _mod10044 from "module_10044" /* 10044 */;
import _mod10045 from "module_10045" /* 10045 */;
import _mod10046 from "module_10046" /* 10046 */;
import _mod10048 from "module_10048" /* 10048 */;
import _mod10049 from "module_10049" /* 10049 */;
import _mod10050 from "module_10050" /* 10050 */;
import _mod10051 from "module_10051" /* 10051 */;
import _mod10052 from "module_10052" /* 10052 */;
import _mod10053 from "module_10053" /* 10053 */;
import _mod10054 from "module_10054" /* 10054 */;
import _mod10055 from "module_10055" /* 10055 */;
import { Chrono } from "module_9928" /* 9928 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10046.default(), , , , , , , , , ];
  new module_10046.default();
  items[1] = new module_10039.default();
  new module_10039.default();
  items[2] = new module_10049.default();
  new module_10049.default();
  items[3] = new module_10042.default();
  new module_10042.default();
  items[4] = new module_10051.default();
  new module_10051.default();
  items[5] = new module_10044.default();
  new module_10044.default();
  items[6] = new module_10050.default();
  new module_10050.default();
  items[7] = new module_10043.default();
  new module_10043.default();
  items[8] = new module_10048.default();
  new module_10048.default();
  items[9] = new module_10041.default();
  new module_10041.default();
  items1 = [new module_10052.default(), ];
  new module_10052.default();
  items1[1] = new module_10053.default();
  new module_10053.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9970.default));
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
  const _default = new module_10045.default();
  unshift(_default);
  return tmp;
}
const module_9970 = fn2(_mod9970);
const module_10039 = fn2(_mod10039);
const module_10041 = fn2(_mod10041);
const module_10042 = fn2(_mod10042);
const module_10043 = fn2(_mod10043);
const module_10044 = fn2(_mod10044);
const module_10045 = fn2(_mod10045);
const module_10046 = fn2(_mod10046);
const module_10048 = fn2(_mod10048);
const module_10049 = fn2(_mod10049);
const module_10050 = fn2(_mod10050);
const module_10051 = fn2(_mod10051);
const module_10052 = fn2(_mod10052);
const module_10053 = fn2(_mod10053);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10045.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9928").Chrono(createConfiguration());
const Chrono_export = require("module_9928").Chrono;

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
export const hant = fn(_mod10054);
export const hans = fn(_mod10055);
export const casual = chrono;
export const strict = chrono1;
