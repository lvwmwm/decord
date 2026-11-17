// Module ID: 12199
// Function ID: 12200
// Name: hant
// Dependencies: [12089, 12096, 12098, 12131, 12200, 12202, 12203, 12204, 12205, 12206, 12207, 12209, 12210, 12211, 12212, 12213, 12214, 12215, 12216, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12199 (hant)
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12131 from "module_12131" /* 12131 */;
import _mod12200 from "module_12200" /* 12200 */;
import _mod12202 from "module_12202" /* 12202 */;
import _mod12203 from "module_12203" /* 12203 */;
import _mod12204 from "module_12204" /* 12204 */;
import _mod12205 from "module_12205" /* 12205 */;
import _mod12206 from "module_12206" /* 12206 */;
import _mod12207 from "module_12207" /* 12207 */;
import _mod12209 from "module_12209" /* 12209 */;
import _mod12210 from "module_12210" /* 12210 */;
import _mod12211 from "module_12211" /* 12211 */;
import _mod12212 from "module_12212" /* 12212 */;
import _mod12213 from "module_12213" /* 12213 */;
import _mod12214 from "module_12214" /* 12214 */;
import _mod12215 from "module_12215" /* 12215 */;
import _mod12216 from "module_12216" /* 12216 */;
import { Chrono } from "module_12089" /* 12089 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_12207.default(), , , , , , , , , ];
  new module_12207.default();
  items[1] = new module_12200.default();
  new module_12200.default();
  items[2] = new module_12210.default();
  new module_12210.default();
  items[3] = new module_12203.default();
  new module_12203.default();
  items[4] = new module_12212.default();
  new module_12212.default();
  items[5] = new module_12205.default();
  new module_12205.default();
  items[6] = new module_12211.default();
  new module_12211.default();
  items[7] = new module_12204.default();
  new module_12204.default();
  items[8] = new module_12209.default();
  new module_12209.default();
  items[9] = new module_12202.default();
  new module_12202.default();
  items1 = [new module_12213.default(), ];
  new module_12213.default();
  items1[1] = new module_12214.default();
  new module_12214.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_12131.default));
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
  const _default = new module_12206.default();
  unshift(_default);
  return tmp;
}
const module_12131 = fn2(_mod12131);
const module_12200 = fn2(_mod12200);
const module_12202 = fn2(_mod12202);
const module_12203 = fn2(_mod12203);
const module_12204 = fn2(_mod12204);
const module_12205 = fn2(_mod12205);
const module_12206 = fn2(_mod12206);
const module_12207 = fn2(_mod12207);
const module_12209 = fn2(_mod12209);
const module_12210 = fn2(_mod12210);
const module_12211 = fn2(_mod12211);
const module_12212 = fn2(_mod12212);
const module_12213 = fn2(_mod12213);
const module_12214 = fn2(_mod12214);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12206.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_12089").Chrono(createConfiguration());
const Chrono_export = require("module_12089").Chrono;

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
export const hant = fn(_mod12215);
export const hans = fn(_mod12216);
export const casual = chrono;
export const strict = chrono1;
