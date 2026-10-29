// Module ID: 10468
// Function ID: 10469
// Dependencies: [10278, 10285, 10287, 10311, 10323, 10469, 10471, 10472, 10473, 10318]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10468
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10469 from "module_10469" /* 10469 */;
import _mod10471 from "module_10471" /* 10471 */;
import _mod10472 from "module_10472" /* 10472 */;
import _mod10473 from "module_10473" /* 10473 */;
import { Chrono } from "module_10278" /* 10278 */;

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
  items = [new module_10323.default(), , , , ];
  new module_10323.default();
  items[1] = new module_10311.default(flag);
  new module_10311.default(flag);
  items[2] = new module_10471.default();
  new module_10471.default();
  items[3] = new module_10469.default();
  new module_10469.default();
  items[4] = new module_10472.default();
  new module_10472.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10473.default();
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
  items = [new module_10323.default(), , , , ];
  new module_10323.default();
  items[1] = new module_10311.default(flag2);
  new module_10311.default(flag2);
  items[2] = new module_10471.default();
  new module_10471.default();
  items[3] = new module_10469.default();
  new module_10469.default();
  items[4] = new module_10472.default();
  new module_10472.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10311 = fn(_mod10311);
const module_10323 = fn(_mod10323);
const module_10469 = fn(_mod10469);
const module_10471 = fn(_mod10471);
const module_10472 = fn(_mod10472);
const module_10473 = fn(_mod10473);
const chrono = new require("module_10278").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10323.default();
items = [_default, , , , ];
const _default1 = new module_10311.default(true);
items[1] = _default1;
const _default2 = new module_10471.default();
items[2] = _default2;
const _default3 = new module_10469.default();
items[3] = _default3;
const _default4 = new module_10472.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10278").Chrono;

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
