// Module ID: 10939
// Function ID: 10940
// Name: hant
// Dependencies: [10829, 10836, 10838, 10871, 10940, 10942, 10943, 10944, 10945, 10946, 10947, 10949, 10950, 10951, 10952, 10953, 10954, 10955, 10956, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10939 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10940 from "module_10940" /* 10940 */;
import _mod10942 from "module_10942" /* 10942 */;
import _mod10943 from "module_10943" /* 10943 */;
import _mod10944 from "module_10944" /* 10944 */;
import _mod10945 from "module_10945" /* 10945 */;
import _mod10946 from "module_10946" /* 10946 */;
import _mod10947 from "module_10947" /* 10947 */;
import _mod10949 from "module_10949" /* 10949 */;
import _mod10950 from "module_10950" /* 10950 */;
import _mod10951 from "module_10951" /* 10951 */;
import _mod10952 from "module_10952" /* 10952 */;
import _mod10953 from "module_10953" /* 10953 */;
import _mod10954 from "module_10954" /* 10954 */;
import _mod10955 from "module_10955" /* 10955 */;
import _mod10956 from "module_10956" /* 10956 */;
import { Chrono } from "module_10829" /* 10829 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10947.default(), , , , , , , , , ];
  new module_10947.default();
  items[1] = new module_10940.default();
  new module_10940.default();
  items[2] = new module_10950.default();
  new module_10950.default();
  items[3] = new module_10943.default();
  new module_10943.default();
  items[4] = new module_10952.default();
  new module_10952.default();
  items[5] = new module_10945.default();
  new module_10945.default();
  items[6] = new module_10951.default();
  new module_10951.default();
  items[7] = new module_10944.default();
  new module_10944.default();
  items[8] = new module_10949.default();
  new module_10949.default();
  items[9] = new module_10942.default();
  new module_10942.default();
  items1 = [new module_10953.default(), ];
  new module_10953.default();
  items1[1] = new module_10954.default();
  new module_10954.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10871.default));
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
  const _default = new module_10946.default();
  unshift(_default);
  return tmp;
}
const module_10871 = fn2(_mod10871);
const module_10940 = fn2(_mod10940);
const module_10942 = fn2(_mod10942);
const module_10943 = fn2(_mod10943);
const module_10944 = fn2(_mod10944);
const module_10945 = fn2(_mod10945);
const module_10946 = fn2(_mod10946);
const module_10947 = fn2(_mod10947);
const module_10949 = fn2(_mod10949);
const module_10950 = fn2(_mod10950);
const module_10951 = fn2(_mod10951);
const module_10952 = fn2(_mod10952);
const module_10953 = fn2(_mod10953);
const module_10954 = fn2(_mod10954);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10946.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10829").Chrono(createConfiguration());
const Chrono_export = require("module_10829").Chrono;

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
export const hant = fn(_mod10955);
export const hans = fn(_mod10956);
export const casual = chrono;
export const strict = chrono1;
