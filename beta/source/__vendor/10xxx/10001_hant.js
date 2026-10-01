// Module ID: 10001
// Function ID: 10002
// Name: hant
// Dependencies: [9891, 9898, 9900, 9933, 10002, 10004, 10005, 10006, 10007, 10008, 10009, 10011, 10012, 10013, 10014, 10015, 10016, 10017, 10018, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10001 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod10002 from "module_10002" /* 10002 */;
import _mod10004 from "module_10004" /* 10004 */;
import _mod10005 from "module_10005" /* 10005 */;
import _mod10006 from "module_10006" /* 10006 */;
import _mod10007 from "module_10007" /* 10007 */;
import _mod10008 from "module_10008" /* 10008 */;
import _mod10009 from "module_10009" /* 10009 */;
import _mod10011 from "module_10011" /* 10011 */;
import _mod10012 from "module_10012" /* 10012 */;
import _mod10013 from "module_10013" /* 10013 */;
import _mod10014 from "module_10014" /* 10014 */;
import _mod10015 from "module_10015" /* 10015 */;
import _mod10016 from "module_10016" /* 10016 */;
import _mod10017 from "module_10017" /* 10017 */;
import _mod10018 from "module_10018" /* 10018 */;
import { Chrono } from "module_9891" /* 9891 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10009.default(), , , , , , , , , ];
  new module_10009.default();
  items[1] = new module_10002.default();
  new module_10002.default();
  items[2] = new module_10012.default();
  new module_10012.default();
  items[3] = new module_10005.default();
  new module_10005.default();
  items[4] = new module_10014.default();
  new module_10014.default();
  items[5] = new module_10007.default();
  new module_10007.default();
  items[6] = new module_10013.default();
  new module_10013.default();
  items[7] = new module_10006.default();
  new module_10006.default();
  items[8] = new module_10011.default();
  new module_10011.default();
  items[9] = new module_10004.default();
  new module_10004.default();
  items1 = [new module_10015.default(), ];
  new module_10015.default();
  items1[1] = new module_10016.default();
  new module_10016.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9933.default));
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
  const _default = new module_10008.default();
  unshift(_default);
  return tmp;
}
const module_9933 = fn2(_mod9933);
const module_10002 = fn2(_mod10002);
const module_10004 = fn2(_mod10004);
const module_10005 = fn2(_mod10005);
const module_10006 = fn2(_mod10006);
const module_10007 = fn2(_mod10007);
const module_10008 = fn2(_mod10008);
const module_10009 = fn2(_mod10009);
const module_10011 = fn2(_mod10011);
const module_10012 = fn2(_mod10012);
const module_10013 = fn2(_mod10013);
const module_10014 = fn2(_mod10014);
const module_10015 = fn2(_mod10015);
const module_10016 = fn2(_mod10016);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10008.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration());
const Chrono_export = require("module_9891").Chrono;

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
export const hant = fn(_mod10017);
export const hans = fn(_mod10018);
export const casual = chrono;
export const strict = chrono1;
