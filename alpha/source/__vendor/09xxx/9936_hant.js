// Module ID: 9936
// Function ID: 9937
// Name: hant
// Dependencies: [9826, 9833, 9835, 9868, 9937, 9939, 9940, 9941, 9942, 9943, 9944, 9946, 9947, 9948, 9949, 9950, 9951, 9952, 9953, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9936 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9868 from "module_9868" /* 9868 */;
import _mod9937 from "module_9937" /* 9937 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9941 from "module_9941" /* 9941 */;
import _mod9942 from "module_9942" /* 9942 */;
import _mod9943 from "module_9943" /* 9943 */;
import _mod9944 from "module_9944" /* 9944 */;
import _mod9946 from "module_9946" /* 9946 */;
import _mod9947 from "module_9947" /* 9947 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9949 from "module_9949" /* 9949 */;
import _mod9950 from "module_9950" /* 9950 */;
import _mod9951 from "module_9951" /* 9951 */;
import _mod9952 from "module_9952" /* 9952 */;
import _mod9953 from "module_9953" /* 9953 */;
import { Chrono } from "module_9826" /* 9826 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9944.default(), , , , , , , , , ];
  new module_9944.default();
  items[1] = new module_9937.default();
  new module_9937.default();
  items[2] = new module_9947.default();
  new module_9947.default();
  items[3] = new module_9940.default();
  new module_9940.default();
  items[4] = new module_9949.default();
  new module_9949.default();
  items[5] = new module_9942.default();
  new module_9942.default();
  items[6] = new module_9948.default();
  new module_9948.default();
  items[7] = new module_9941.default();
  new module_9941.default();
  items[8] = new module_9946.default();
  new module_9946.default();
  items[9] = new module_9939.default();
  new module_9939.default();
  items1 = [new module_9950.default(), ];
  new module_9950.default();
  items1[1] = new module_9951.default();
  new module_9951.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9868.default));
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
  const _default = new module_9943.default();
  unshift(_default);
  return tmp;
}
const module_9868 = fn2(_mod9868);
const module_9937 = fn2(_mod9937);
const module_9939 = fn2(_mod9939);
const module_9940 = fn2(_mod9940);
const module_9941 = fn2(_mod9941);
const module_9942 = fn2(_mod9942);
const module_9943 = fn2(_mod9943);
const module_9944 = fn2(_mod9944);
const module_9946 = fn2(_mod9946);
const module_9947 = fn2(_mod9947);
const module_9948 = fn2(_mod9948);
const module_9949 = fn2(_mod9949);
const module_9950 = fn2(_mod9950);
const module_9951 = fn2(_mod9951);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9943.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9826").Chrono(createConfiguration());
const Chrono_export = require("module_9826").Chrono;

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
export const hant = fn(_mod9952);
export const hans = fn(_mod9953);
export const casual = chrono;
export const strict = chrono1;
