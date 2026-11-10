// Module ID: 10433
// Function ID: 10434
// Name: hant
// Dependencies: [10323, 10330, 10332, 10365, 10434, 10436, 10437, 10438, 10439, 10440, 10441, 10443, 10444, 10445, 10446, 10447, 10448, 10449, 10450, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10433 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10434 from "module_10434" /* 10434 */;
import _mod10436 from "module_10436" /* 10436 */;
import _mod10437 from "module_10437" /* 10437 */;
import _mod10438 from "module_10438" /* 10438 */;
import _mod10439 from "module_10439" /* 10439 */;
import _mod10440 from "module_10440" /* 10440 */;
import _mod10441 from "module_10441" /* 10441 */;
import _mod10443 from "module_10443" /* 10443 */;
import _mod10444 from "module_10444" /* 10444 */;
import _mod10445 from "module_10445" /* 10445 */;
import _mod10446 from "module_10446" /* 10446 */;
import _mod10447 from "module_10447" /* 10447 */;
import _mod10448 from "module_10448" /* 10448 */;
import _mod10449 from "module_10449" /* 10449 */;
import _mod10450 from "module_10450" /* 10450 */;
import { Chrono } from "module_10323" /* 10323 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10441.default(), , , , , , , , , ];
  new module_10441.default();
  items[1] = new module_10434.default();
  new module_10434.default();
  items[2] = new module_10444.default();
  new module_10444.default();
  items[3] = new module_10437.default();
  new module_10437.default();
  items[4] = new module_10446.default();
  new module_10446.default();
  items[5] = new module_10439.default();
  new module_10439.default();
  items[6] = new module_10445.default();
  new module_10445.default();
  items[7] = new module_10438.default();
  new module_10438.default();
  items[8] = new module_10443.default();
  new module_10443.default();
  items[9] = new module_10436.default();
  new module_10436.default();
  items1 = [new module_10447.default(), ];
  new module_10447.default();
  items1[1] = new module_10448.default();
  new module_10448.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10365.default));
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
  const _default = new module_10440.default();
  unshift(_default);
  return tmp;
}
const module_10365 = fn2(_mod10365);
const module_10434 = fn2(_mod10434);
const module_10436 = fn2(_mod10436);
const module_10437 = fn2(_mod10437);
const module_10438 = fn2(_mod10438);
const module_10439 = fn2(_mod10439);
const module_10440 = fn2(_mod10440);
const module_10441 = fn2(_mod10441);
const module_10443 = fn2(_mod10443);
const module_10444 = fn2(_mod10444);
const module_10445 = fn2(_mod10445);
const module_10446 = fn2(_mod10446);
const module_10447 = fn2(_mod10447);
const module_10448 = fn2(_mod10448);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10440.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10323").Chrono(createConfiguration());
const Chrono_export = require("module_10323").Chrono;

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
export const hant = fn(_mod10449);
export const hans = fn(_mod10450);
export const casual = chrono;
export const strict = chrono1;
