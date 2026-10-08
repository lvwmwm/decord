// Module ID: 9877
// Function ID: 9878
// Name: hant
// Dependencies: [9767, 9774, 9776, 9809, 9878, 9880, 9881, 9882, 9883, 9884, 9885, 9887, 9888, 9889, 9890, 9891, 9892, 9893, 9894, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9877 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9809 from "module_9809" /* 9809 */;
import _mod9878 from "module_9878" /* 9878 */;
import _mod9880 from "module_9880" /* 9880 */;
import _mod9881 from "module_9881" /* 9881 */;
import _mod9882 from "module_9882" /* 9882 */;
import _mod9883 from "module_9883" /* 9883 */;
import _mod9884 from "module_9884" /* 9884 */;
import _mod9885 from "module_9885" /* 9885 */;
import _mod9887 from "module_9887" /* 9887 */;
import _mod9888 from "module_9888" /* 9888 */;
import _mod9889 from "module_9889" /* 9889 */;
import _mod9890 from "module_9890" /* 9890 */;
import _mod9891 from "module_9891" /* 9891 */;
import _mod9892 from "module_9892" /* 9892 */;
import _mod9893 from "module_9893" /* 9893 */;
import _mod9894 from "module_9894" /* 9894 */;
import { Chrono } from "module_9767" /* 9767 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9885.default(), , , , , , , , , ];
  new module_9885.default();
  items[1] = new module_9878.default();
  new module_9878.default();
  items[2] = new module_9888.default();
  new module_9888.default();
  items[3] = new module_9881.default();
  new module_9881.default();
  items[4] = new module_9890.default();
  new module_9890.default();
  items[5] = new module_9883.default();
  new module_9883.default();
  items[6] = new module_9889.default();
  new module_9889.default();
  items[7] = new module_9882.default();
  new module_9882.default();
  items[8] = new module_9887.default();
  new module_9887.default();
  items[9] = new module_9880.default();
  new module_9880.default();
  items1 = [new module_9891.default(), ];
  new module_9891.default();
  items1[1] = new module_9892.default();
  new module_9892.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9809.default));
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
  const _default = new module_9884.default();
  unshift(_default);
  return tmp;
}
const module_9809 = fn2(_mod9809);
const module_9878 = fn2(_mod9878);
const module_9880 = fn2(_mod9880);
const module_9881 = fn2(_mod9881);
const module_9882 = fn2(_mod9882);
const module_9883 = fn2(_mod9883);
const module_9884 = fn2(_mod9884);
const module_9885 = fn2(_mod9885);
const module_9887 = fn2(_mod9887);
const module_9888 = fn2(_mod9888);
const module_9889 = fn2(_mod9889);
const module_9890 = fn2(_mod9890);
const module_9891 = fn2(_mod9891);
const module_9892 = fn2(_mod9892);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9884.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9767").Chrono(createConfiguration());
const Chrono_export = require("module_9767").Chrono;

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
export const hant = fn(_mod9893);
export const hans = fn(_mod9894);
export const casual = chrono;
export const strict = chrono1;
