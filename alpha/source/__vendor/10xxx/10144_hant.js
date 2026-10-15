// Module ID: 10144
// Function ID: 10145
// Name: hant
// Dependencies: [10034, 10041, 10043, 10076, 10145, 10147, 10148, 10149, 10150, 10151, 10152, 10154, 10155, 10156, 10157, 10158, 10159, 10160, 10161, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10144 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10076 from "module_10076" /* 10076 */;
import _mod10145 from "module_10145" /* 10145 */;
import _mod10147 from "module_10147" /* 10147 */;
import _mod10148 from "module_10148" /* 10148 */;
import _mod10149 from "module_10149" /* 10149 */;
import _mod10150 from "module_10150" /* 10150 */;
import _mod10151 from "module_10151" /* 10151 */;
import _mod10152 from "module_10152" /* 10152 */;
import _mod10154 from "module_10154" /* 10154 */;
import _mod10155 from "module_10155" /* 10155 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10158 from "module_10158" /* 10158 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10161 from "module_10161" /* 10161 */;
import { Chrono } from "module_10034" /* 10034 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10152.default(), , , , , , , , , ];
  new module_10152.default();
  items[1] = new module_10145.default();
  new module_10145.default();
  items[2] = new module_10155.default();
  new module_10155.default();
  items[3] = new module_10148.default();
  new module_10148.default();
  items[4] = new module_10157.default();
  new module_10157.default();
  items[5] = new module_10150.default();
  new module_10150.default();
  items[6] = new module_10156.default();
  new module_10156.default();
  items[7] = new module_10149.default();
  new module_10149.default();
  items[8] = new module_10154.default();
  new module_10154.default();
  items[9] = new module_10147.default();
  new module_10147.default();
  items1 = [new module_10158.default(), ];
  new module_10158.default();
  items1[1] = new module_10159.default();
  new module_10159.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10076.default));
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
  const _default = new module_10151.default();
  unshift(_default);
  return tmp;
}
const module_10076 = fn2(_mod10076);
const module_10145 = fn2(_mod10145);
const module_10147 = fn2(_mod10147);
const module_10148 = fn2(_mod10148);
const module_10149 = fn2(_mod10149);
const module_10150 = fn2(_mod10150);
const module_10151 = fn2(_mod10151);
const module_10152 = fn2(_mod10152);
const module_10154 = fn2(_mod10154);
const module_10155 = fn2(_mod10155);
const module_10156 = fn2(_mod10156);
const module_10157 = fn2(_mod10157);
const module_10158 = fn2(_mod10158);
const module_10159 = fn2(_mod10159);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10151.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10034").Chrono(createConfiguration());
const Chrono_export = require("module_10034").Chrono;

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
export const hant = fn(_mod10160);
export const hans = fn(_mod10161);
export const casual = chrono;
export const strict = chrono1;
