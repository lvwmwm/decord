// Module ID: 11521
// Function ID: 11522
// Name: hant
// Dependencies: [11411, 11418, 11420, 11453, 11522, 11524, 11525, 11526, 11527, 11528, 11529, 11531, 11532, 11533, 11534, 11535, 11536, 11537, 11538, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11521 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11522 from "module_11522" /* 11522 */;
import _mod11524 from "module_11524" /* 11524 */;
import _mod11525 from "module_11525" /* 11525 */;
import _mod11526 from "module_11526" /* 11526 */;
import _mod11527 from "module_11527" /* 11527 */;
import _mod11528 from "module_11528" /* 11528 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;
import _mod11535 from "module_11535" /* 11535 */;
import _mod11536 from "module_11536" /* 11536 */;
import _mod11537 from "module_11537" /* 11537 */;
import _mod11538 from "module_11538" /* 11538 */;
import { Chrono } from "module_11411" /* 11411 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11529.default(), , , , , , , , , ];
  new module_11529.default();
  items[1] = new module_11522.default();
  new module_11522.default();
  items[2] = new module_11532.default();
  new module_11532.default();
  items[3] = new module_11525.default();
  new module_11525.default();
  items[4] = new module_11534.default();
  new module_11534.default();
  items[5] = new module_11527.default();
  new module_11527.default();
  items[6] = new module_11533.default();
  new module_11533.default();
  items[7] = new module_11526.default();
  new module_11526.default();
  items[8] = new module_11531.default();
  new module_11531.default();
  items[9] = new module_11524.default();
  new module_11524.default();
  items1 = [new module_11535.default(), ];
  new module_11535.default();
  items1[1] = new module_11536.default();
  new module_11536.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11453.default));
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
  const _default = new module_11528.default();
  unshift(_default);
  return tmp;
}
const module_11453 = fn2(_mod11453);
const module_11522 = fn2(_mod11522);
const module_11524 = fn2(_mod11524);
const module_11525 = fn2(_mod11525);
const module_11526 = fn2(_mod11526);
const module_11527 = fn2(_mod11527);
const module_11528 = fn2(_mod11528);
const module_11529 = fn2(_mod11529);
const module_11531 = fn2(_mod11531);
const module_11532 = fn2(_mod11532);
const module_11533 = fn2(_mod11533);
const module_11534 = fn2(_mod11534);
const module_11535 = fn2(_mod11535);
const module_11536 = fn2(_mod11536);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11528.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11411").Chrono(createConfiguration());
const Chrono_export = require("module_11411").Chrono;

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
export const hant = fn(_mod11537);
export const hans = fn(_mod11538);
export const casual = chrono;
export const strict = chrono1;
