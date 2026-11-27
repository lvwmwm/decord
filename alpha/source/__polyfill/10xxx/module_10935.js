// Module ID: 10935
// Function ID: 10936
// Dependencies: [10876, 10883, 10885, 10936, 10937, 10909, 10938, 10939, 10940, 10941, 10943, 10944, 10945, 10946, 10947, 10916]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10935
import _mod10909 from "module_10909" /* 10909 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod10936 from "module_10936" /* 10936 */;
import _mod10937 from "module_10937" /* 10937 */;
import _mod10938 from "module_10938" /* 10938 */;
import _mod10939 from "module_10939" /* 10939 */;
import _mod10940 from "module_10940" /* 10940 */;
import _mod10941 from "module_10941" /* 10941 */;
import _mod10943 from "module_10943" /* 10943 */;
import _mod10944 from "module_10944" /* 10944 */;
import _mod10945 from "module_10945" /* 10945 */;
import _mod10946 from "module_10946" /* 10946 */;
import _mod10947 from "module_10947" /* 10947 */;
import { Chrono } from "module_10876" /* 10876 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10909.default(flag2), , , , , , ];
  new module_10909.default(flag2);
  items[1] = new module_10944.default();
  new module_10944.default();
  items[2] = new module_10938.default();
  new module_10938.default();
  items[3] = new module_10943.default();
  new module_10943.default();
  items[4] = new module_10945.default();
  new module_10945.default();
  items[5] = new module_10946.default();
  new module_10946.default();
  items[6] = new module_10941.default();
  new module_10941.default();
  items1 = [new module_10939.default(), ];
  new module_10939.default();
  items1[1] = new module_10940.default();
  new module_10940.default();
  return includeCommonConfiguration(obj, flag);
}
const fn = this && this.__importDefault || ((__esModule) => {
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10936.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10937.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10947.default();
  unshift3(_default2);
  return tmp;
}
const module_10936 = fn(_mod10936);
const module_10937 = fn(_mod10937);
const module_10909 = fn(_mod10909);
const module_10938 = fn(_mod10938);
const module_10939 = fn(_mod10939);
const module_10940 = fn(_mod10940);
const module_10941 = fn(_mod10941);
const module_10943 = fn(_mod10943);
const module_10944 = fn(_mod10944);
const module_10945 = fn(_mod10945);
const module_10946 = fn(_mod10946);
const module_10947 = fn(_mod10947);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10936.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10937.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10947.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10876").Chrono(createConfiguration(true));
const Chrono_export = require("module_10876").Chrono;

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
export const casual = chrono;
export const strict = chrono1;
