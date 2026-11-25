// Module ID: 10901
// Function ID: 10902
// Dependencies: [10902, 10904, 10905, 10906, 10907, 10908, 10909, 10829, 10836, 10838, 10910, 10911, 10875, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10901
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10875 from "module_10875" /* 10875 */;
import _mod10902 from "module_10902" /* 10902 */;
import _mod10904 from "module_10904" /* 10904 */;
import _mod10905 from "module_10905" /* 10905 */;
import _mod10906 from "module_10906" /* 10906 */;
import _mod10907 from "module_10907" /* 10907 */;
import _mod10908 from "module_10908" /* 10908 */;
import _mod10909 from "module_10909" /* 10909 */;
import _mod10910 from "module_10910" /* 10910 */;
import _mod10911 from "module_10911" /* 10911 */;
import { Chrono } from "module_10829" /* 10829 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10902.default(), , , , ];
  new module_10902.default();
  items[1] = new module_10906.default();
  new module_10906.default();
  items[2] = new module_10911.default();
  new module_10911.default();
  items[3] = new module_10907.default();
  new module_10907.default();
  items[4] = new module_10908.default();
  new module_10908.default();
  items1 = [new module_10910.default(), , ];
  new module_10910.default();
  items1[1] = new module_10909.default();
  new module_10909.default();
  items1[2] = new module_10904.default();
  new module_10904.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10875.default));
  return result;
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10905.default();
  unshift(_default);
  return tmp;
}
const module_10902 = fn(_mod10902);
const module_10904 = fn(_mod10904);
const module_10905 = fn(_mod10905);
const module_10906 = fn(_mod10906);
const module_10907 = fn(_mod10907);
const module_10908 = fn(_mod10908);
const module_10909 = fn(_mod10909);
const module_10910 = fn(_mod10910);
const module_10911 = fn(_mod10911);
const module_10875 = fn(_mod10875);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10905.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10829").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
