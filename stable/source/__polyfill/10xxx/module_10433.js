// Module ID: 10433
// Function ID: 10434
// Dependencies: [10243, 10250, 10252, 10276, 10288, 10434, 10436, 10437, 10438, 10283]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10433
import _mod10276 from "module_10276" /* 10276 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10288 from "module_10288" /* 10288 */;
import _mod10434 from "module_10434" /* 10434 */;
import _mod10436 from "module_10436" /* 10436 */;
import _mod10437 from "module_10437" /* 10437 */;
import _mod10438 from "module_10438" /* 10438 */;
import { Chrono } from "module_10243" /* 10243 */;

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
  items = [new module_10288.default(), , , , ];
  new module_10288.default();
  items[1] = new module_10276.default(flag);
  new module_10276.default(flag);
  items[2] = new module_10436.default();
  new module_10436.default();
  items[3] = new module_10434.default();
  new module_10434.default();
  items[4] = new module_10437.default();
  new module_10437.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10438.default();
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
  items = [new module_10288.default(), , , , ];
  new module_10288.default();
  items[1] = new module_10276.default(flag2);
  new module_10276.default(flag2);
  items[2] = new module_10436.default();
  new module_10436.default();
  items[3] = new module_10434.default();
  new module_10434.default();
  items[4] = new module_10437.default();
  new module_10437.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10276 = fn(_mod10276);
const module_10288 = fn(_mod10288);
const module_10434 = fn(_mod10434);
const module_10436 = fn(_mod10436);
const module_10437 = fn(_mod10437);
const module_10438 = fn(_mod10438);
const chrono = new require("module_10243").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10288.default();
items = [_default, , , , ];
const _default1 = new module_10276.default(true);
items[1] = _default1;
const _default2 = new module_10436.default();
items[2] = _default2;
const _default3 = new module_10434.default();
items[3] = _default3;
const _default4 = new module_10437.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10243").Chrono;

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
