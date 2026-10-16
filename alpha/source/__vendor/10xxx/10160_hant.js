// Module ID: 10160
// Function ID: 10161
// Name: hant
// Dependencies: [10050, 10057, 10059, 10092, 10161, 10163, 10164, 10165, 10166, 10167, 10168, 10170, 10171, 10172, 10173, 10174, 10175, 10176, 10177, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10160 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10092 from "module_10092" /* 10092 */;
import _mod10161 from "module_10161" /* 10161 */;
import _mod10163 from "module_10163" /* 10163 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10165 from "module_10165" /* 10165 */;
import _mod10166 from "module_10166" /* 10166 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10168 from "module_10168" /* 10168 */;
import _mod10170 from "module_10170" /* 10170 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10176 from "module_10176" /* 10176 */;
import _mod10177 from "module_10177" /* 10177 */;
import { Chrono } from "module_10050" /* 10050 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10168.default(), , , , , , , , , ];
  new module_10168.default();
  items[1] = new module_10161.default();
  new module_10161.default();
  items[2] = new module_10171.default();
  new module_10171.default();
  items[3] = new module_10164.default();
  new module_10164.default();
  items[4] = new module_10173.default();
  new module_10173.default();
  items[5] = new module_10166.default();
  new module_10166.default();
  items[6] = new module_10172.default();
  new module_10172.default();
  items[7] = new module_10165.default();
  new module_10165.default();
  items[8] = new module_10170.default();
  new module_10170.default();
  items[9] = new module_10163.default();
  new module_10163.default();
  items1 = [new module_10174.default(), ];
  new module_10174.default();
  items1[1] = new module_10175.default();
  new module_10175.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10092.default));
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
  const _default = new module_10167.default();
  unshift(_default);
  return tmp;
}
const module_10092 = fn2(_mod10092);
const module_10161 = fn2(_mod10161);
const module_10163 = fn2(_mod10163);
const module_10164 = fn2(_mod10164);
const module_10165 = fn2(_mod10165);
const module_10166 = fn2(_mod10166);
const module_10167 = fn2(_mod10167);
const module_10168 = fn2(_mod10168);
const module_10170 = fn2(_mod10170);
const module_10171 = fn2(_mod10171);
const module_10172 = fn2(_mod10172);
const module_10173 = fn2(_mod10173);
const module_10174 = fn2(_mod10174);
const module_10175 = fn2(_mod10175);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10167.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10050").Chrono(createConfiguration());
const Chrono_export = require("module_10050").Chrono;

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
export const hant = fn(_mod10176);
export const hans = fn(_mod10177);
export const casual = chrono;
export const strict = chrono1;
