// Module ID: 9925
// Function ID: 9926
// Name: hant
// Dependencies: [9815, 9822, 9824, 9857, 9926, 9928, 9929, 9930, 9931, 9932, 9933, 9935, 9936, 9937, 9938, 9939, 9940, 9941, 9942, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9925 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9857 from "module_9857" /* 9857 */;
import _mod9926 from "module_9926" /* 9926 */;
import _mod9928 from "module_9928" /* 9928 */;
import _mod9929 from "module_9929" /* 9929 */;
import _mod9930 from "module_9930" /* 9930 */;
import _mod9931 from "module_9931" /* 9931 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9935 from "module_9935" /* 9935 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9937 from "module_9937" /* 9937 */;
import _mod9938 from "module_9938" /* 9938 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9941 from "module_9941" /* 9941 */;
import _mod9942 from "module_9942" /* 9942 */;
import { Chrono } from "module_9815" /* 9815 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9933.default(), , , , , , , , , ];
  new module_9933.default();
  items[1] = new module_9926.default();
  new module_9926.default();
  items[2] = new module_9936.default();
  new module_9936.default();
  items[3] = new module_9929.default();
  new module_9929.default();
  items[4] = new module_9938.default();
  new module_9938.default();
  items[5] = new module_9931.default();
  new module_9931.default();
  items[6] = new module_9937.default();
  new module_9937.default();
  items[7] = new module_9930.default();
  new module_9930.default();
  items[8] = new module_9935.default();
  new module_9935.default();
  items[9] = new module_9928.default();
  new module_9928.default();
  items1 = [new module_9939.default(), ];
  new module_9939.default();
  items1[1] = new module_9940.default();
  new module_9940.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9857.default));
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
  const _default = new module_9932.default();
  unshift(_default);
  return tmp;
}
const module_9857 = fn2(_mod9857);
const module_9926 = fn2(_mod9926);
const module_9928 = fn2(_mod9928);
const module_9929 = fn2(_mod9929);
const module_9930 = fn2(_mod9930);
const module_9931 = fn2(_mod9931);
const module_9932 = fn2(_mod9932);
const module_9933 = fn2(_mod9933);
const module_9935 = fn2(_mod9935);
const module_9936 = fn2(_mod9936);
const module_9937 = fn2(_mod9937);
const module_9938 = fn2(_mod9938);
const module_9939 = fn2(_mod9939);
const module_9940 = fn2(_mod9940);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9932.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9815").Chrono(createConfiguration());
const Chrono_export = require("module_9815").Chrono;

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
export const hant = fn(_mod9941);
export const hans = fn(_mod9942);
export const casual = chrono;
export const strict = chrono1;
