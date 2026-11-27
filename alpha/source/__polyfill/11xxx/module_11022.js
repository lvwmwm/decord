// Module ID: 11022
// Function ID: 11023
// Dependencies: [10876, 10883, 10885, 10909, 11023, 11025, 11026, 11027, 11028, 11029, 11030, 11031, 10916]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11022
import _mod10909 from "module_10909" /* 10909 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod11023 from "module_11023" /* 11023 */;
import _mod11025 from "module_11025" /* 11025 */;
import _mod11026 from "module_11026" /* 11026 */;
import _mod11027 from "module_11027" /* 11027 */;
import _mod11028 from "module_11028" /* 11028 */;
import _mod11029 from "module_11029" /* 11029 */;
import _mod11030 from "module_11030" /* 11030 */;
import _mod11031 from "module_11031" /* 11031 */;
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
  items = [new module_10909.default(flag2), , , , ];
  new module_10909.default(flag2);
  items[1] = new module_11023.default();
  new module_11023.default();
  items[2] = new module_11025.default();
  new module_11025.default();
  items[3] = new module_11028.default();
  new module_11028.default();
  items[4] = new module_11031.default();
  new module_11031.default();
  items1 = [new module_11026.default(), ];
  new module_11026.default();
  items1[1] = new module_11027.default();
  new module_11027.default();
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
  const push = parsers.push;
  const _default = new module_11029.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11030.default();
  push2(_default1);
  return tmp;
}
const module_10909 = fn(_mod10909);
const module_11023 = fn(_mod11023);
const module_11025 = fn(_mod11025);
const module_11026 = fn(_mod11026);
const module_11027 = fn(_mod11027);
const module_11028 = fn(_mod11028);
const module_11029 = fn(_mod11029);
const module_11030 = fn(_mod11030);
const module_11031 = fn(_mod11031);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11029.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11030.default();
push2(_default1);
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
