// Module ID: 10513
// Function ID: 10514
// Dependencies: [10323, 10330, 10332, 10356, 10368, 10514, 10516, 10517, 10518, 10363]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10513
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10514 from "module_10514" /* 10514 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10517 from "module_10517" /* 10517 */;
import _mod10518 from "module_10518" /* 10518 */;
import { Chrono } from "module_10323" /* 10323 */;

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
  items = [new module_10368.default(), , , , ];
  new module_10368.default();
  items[1] = new module_10356.default(flag);
  new module_10356.default(flag);
  items[2] = new module_10516.default();
  new module_10516.default();
  items[3] = new module_10514.default();
  new module_10514.default();
  items[4] = new module_10517.default();
  new module_10517.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10518.default();
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
  items = [new module_10368.default(), , , , ];
  new module_10368.default();
  items[1] = new module_10356.default(flag2);
  new module_10356.default(flag2);
  items[2] = new module_10516.default();
  new module_10516.default();
  items[3] = new module_10514.default();
  new module_10514.default();
  items[4] = new module_10517.default();
  new module_10517.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10356 = fn(_mod10356);
const module_10368 = fn(_mod10368);
const module_10514 = fn(_mod10514);
const module_10516 = fn(_mod10516);
const module_10517 = fn(_mod10517);
const module_10518 = fn(_mod10518);
const chrono = new require("module_10323").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10368.default();
items = [_default, , , , ];
const _default1 = new module_10356.default(true);
items[1] = _default1;
const _default2 = new module_10516.default();
items[2] = _default2;
const _default3 = new module_10514.default();
items[3] = _default3;
const _default4 = new module_10517.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
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
export const casual = chrono;
export const strict = chrono1;
