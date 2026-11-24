// Module ID: 11601
// Function ID: 11602
// Dependencies: [11411, 11418, 11420, 11444, 11456, 11602, 11604, 11605, 11606, 11451]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 11601
import _mod11444 from "module_11444" /* 11444 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11456 from "module_11456" /* 11456 */;
import _mod11602 from "module_11602" /* 11602 */;
import _mod11604 from "module_11604" /* 11604 */;
import _mod11605 from "module_11605" /* 11605 */;
import _mod11606 from "module_11606" /* 11606 */;
import { Chrono } from "module_11411" /* 11411 */;

const require = globalThis.__r;

let items;
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
  let items;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11456.default(), , , , ];
  new module_11456.default();
  items[1] = new module_11444.default(flag);
  new module_11444.default(flag);
  items[2] = new module_11604.default();
  new module_11604.default();
  items[3] = new module_11602.default();
  new module_11602.default();
  items[4] = new module_11605.default();
  new module_11605.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_11606.default();
  unshift(_default5);
  return result;
}
function createConfiguration(flag) {
  let items;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11456.default(), , , , ];
  new module_11456.default();
  items[1] = new module_11444.default(flag2);
  new module_11444.default(flag2);
  items[2] = new module_11604.default();
  new module_11604.default();
  items[3] = new module_11602.default();
  new module_11602.default();
  items[4] = new module_11605.default();
  new module_11605.default();
  return includeCommonConfiguration(obj, flag);
}
const module_11444 = fn(_mod11444);
const module_11456 = fn(_mod11456);
const module_11602 = fn(_mod11602);
const module_11604 = fn(_mod11604);
const module_11605 = fn(_mod11605);
const module_11606 = fn(_mod11606);
const chrono = new require("module_11411").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_11456.default();
items = [_default, , , , ];
const _default1 = new module_11444.default(true);
items[1] = _default1;
const _default2 = new module_11604.default();
items[2] = _default2;
const _default3 = new module_11602.default();
items[3] = _default3;
const _default4 = new module_11605.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_11411").Chrono;

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
