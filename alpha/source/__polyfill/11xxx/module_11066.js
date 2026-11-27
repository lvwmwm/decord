// Module ID: 11066
// Function ID: 11067
// Dependencies: [10876, 10883, 10885, 10909, 10921, 11067, 11069, 11070, 11071, 10916]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 11066
import _mod10909 from "module_10909" /* 10909 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod10921 from "module_10921" /* 10921 */;
import _mod11067 from "module_11067" /* 11067 */;
import _mod11069 from "module_11069" /* 11069 */;
import _mod11070 from "module_11070" /* 11070 */;
import _mod11071 from "module_11071" /* 11071 */;
import { Chrono } from "module_10876" /* 10876 */;

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
  items = [new module_10921.default(), , , , ];
  new module_10921.default();
  items[1] = new module_10909.default(flag);
  new module_10909.default(flag);
  items[2] = new module_11069.default();
  new module_11069.default();
  items[3] = new module_11067.default();
  new module_11067.default();
  items[4] = new module_11070.default();
  new module_11070.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_11071.default();
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
  items = [new module_10921.default(), , , , ];
  new module_10921.default();
  items[1] = new module_10909.default(flag2);
  new module_10909.default(flag2);
  items[2] = new module_11069.default();
  new module_11069.default();
  items[3] = new module_11067.default();
  new module_11067.default();
  items[4] = new module_11070.default();
  new module_11070.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10909 = fn(_mod10909);
const module_10921 = fn(_mod10921);
const module_11067 = fn(_mod11067);
const module_11069 = fn(_mod11069);
const module_11070 = fn(_mod11070);
const module_11071 = fn(_mod11071);
const chrono = new require("module_10876").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10921.default();
items = [_default, , , , ];
const _default1 = new module_10909.default(true);
items[1] = _default1;
const _default2 = new module_11069.default();
items[2] = _default2;
const _default3 = new module_11067.default();
items[3] = _default3;
const _default4 = new module_11070.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
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
