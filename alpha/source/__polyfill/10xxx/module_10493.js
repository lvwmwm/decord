// Module ID: 10493
// Function ID: 10494
// Dependencies: [10303, 10310, 10312, 10336, 10348, 10494, 10496, 10497, 10498, 10343]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10493
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10494 from "module_10494" /* 10494 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10498 from "module_10498" /* 10498 */;
import { Chrono } from "module_10303" /* 10303 */;

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
  items = [new module_10348.default(), , , , ];
  new module_10348.default();
  items[1] = new module_10336.default(flag);
  new module_10336.default(flag);
  items[2] = new module_10496.default();
  new module_10496.default();
  items[3] = new module_10494.default();
  new module_10494.default();
  items[4] = new module_10497.default();
  new module_10497.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10498.default();
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
  items = [new module_10348.default(), , , , ];
  new module_10348.default();
  items[1] = new module_10336.default(flag2);
  new module_10336.default(flag2);
  items[2] = new module_10496.default();
  new module_10496.default();
  items[3] = new module_10494.default();
  new module_10494.default();
  items[4] = new module_10497.default();
  new module_10497.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10336 = fn(_mod10336);
const module_10348 = fn(_mod10348);
const module_10494 = fn(_mod10494);
const module_10496 = fn(_mod10496);
const module_10497 = fn(_mod10497);
const module_10498 = fn(_mod10498);
const chrono = new require("module_10303").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10348.default();
items = [_default, , , , ];
const _default1 = new module_10336.default(true);
items[1] = _default1;
const _default2 = new module_10496.default();
items[2] = _default2;
const _default3 = new module_10494.default();
items[3] = _default3;
const _default4 = new module_10497.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10303").Chrono;

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
