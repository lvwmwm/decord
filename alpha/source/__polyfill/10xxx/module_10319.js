// Module ID: 10319
// Function ID: 10320
// Dependencies: [10129, 10136, 10138, 10162, 10174, 10320, 10322, 10323, 10324, 10169]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10319
import _mod10162 from "module_10162" /* 10162 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10169 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10322 from "module_10322" /* 10322 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;
import { Chrono } from "module_10129" /* 10129 */;

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
  items = [new module_10174.default(), , , , ];
  new module_10174.default();
  items[1] = new module_10162.default(flag);
  new module_10162.default(flag);
  items[2] = new module_10322.default();
  new module_10322.default();
  items[3] = new module_10320.default();
  new module_10320.default();
  items[4] = new module_10323.default();
  new module_10323.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10324.default();
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
  items = [new module_10174.default(), , , , ];
  new module_10174.default();
  items[1] = new module_10162.default(flag2);
  new module_10162.default(flag2);
  items[2] = new module_10322.default();
  new module_10322.default();
  items[3] = new module_10320.default();
  new module_10320.default();
  items[4] = new module_10323.default();
  new module_10323.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10162 = fn(_mod10162);
const module_10174 = fn(_mod10174);
const module_10320 = fn(_mod10320);
const module_10322 = fn(_mod10322);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);
const chrono = new require("module_10129").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10174.default();
items = [_default, , , , ];
const _default1 = new module_10162.default(true);
items[1] = _default1;
const _default2 = new module_10322.default();
items[2] = _default2;
const _default3 = new module_10320.default();
items[3] = _default3;
const _default4 = new module_10323.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10129").Chrono;

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
export const casual = chrono;
export const strict = chrono1;
