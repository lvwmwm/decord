// Module ID: 10403
// Function ID: 10404
// Dependencies: [10213, 10220, 10222, 10246, 10258, 10404, 10406, 10407, 10408, 10253]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10403
import _mod10246 from "module_10246" /* 10246 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10253 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10404 from "module_10404" /* 10404 */;
import _mod10406 from "module_10406" /* 10406 */;
import _mod10407 from "module_10407" /* 10407 */;
import _mod10408 from "module_10408" /* 10408 */;
import { Chrono } from "module_10213" /* 10213 */;

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
  items = [new module_10258.default(), , , , ];
  new module_10258.default();
  items[1] = new module_10246.default(flag);
  new module_10246.default(flag);
  items[2] = new module_10406.default();
  new module_10406.default();
  items[3] = new module_10404.default();
  new module_10404.default();
  items[4] = new module_10407.default();
  new module_10407.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10408.default();
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
  items = [new module_10258.default(), , , , ];
  new module_10258.default();
  items[1] = new module_10246.default(flag2);
  new module_10246.default(flag2);
  items[2] = new module_10406.default();
  new module_10406.default();
  items[3] = new module_10404.default();
  new module_10404.default();
  items[4] = new module_10407.default();
  new module_10407.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10246 = fn(_mod10246);
const module_10258 = fn(_mod10258);
const module_10404 = fn(_mod10404);
const module_10406 = fn(_mod10406);
const module_10407 = fn(_mod10407);
const module_10408 = fn(_mod10408);
const chrono = new require("module_10213").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10258.default();
items = [_default, , , , ];
const _default1 = new module_10246.default(true);
items[1] = _default1;
const _default2 = new module_10406.default();
items[2] = _default2;
const _default3 = new module_10404.default();
items[3] = _default3;
const _default4 = new module_10407.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10213").Chrono;

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
