// Module ID: 11561
// Function ID: 11562
// Dependencies: [11371, 11378, 11380, 11404, 11416, 11562, 11564, 11565, 11566, 11411]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 11561
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11416 from "module_11416" /* 11416 */;
import _mod11562 from "module_11562" /* 11562 */;
import _mod11564 from "module_11564" /* 11564 */;
import _mod11565 from "module_11565" /* 11565 */;
import _mod11566 from "module_11566" /* 11566 */;
import { Chrono } from "module_11371" /* 11371 */;

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
  items = [new module_11416.default(), , , , ];
  new module_11416.default();
  items[1] = new module_11404.default(flag);
  new module_11404.default(flag);
  items[2] = new module_11564.default();
  new module_11564.default();
  items[3] = new module_11562.default();
  new module_11562.default();
  items[4] = new module_11565.default();
  new module_11565.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_11566.default();
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
  items = [new module_11416.default(), , , , ];
  new module_11416.default();
  items[1] = new module_11404.default(flag2);
  new module_11404.default(flag2);
  items[2] = new module_11564.default();
  new module_11564.default();
  items[3] = new module_11562.default();
  new module_11562.default();
  items[4] = new module_11565.default();
  new module_11565.default();
  return includeCommonConfiguration(obj, flag);
}
const module_11404 = fn(_mod11404);
const module_11416 = fn(_mod11416);
const module_11562 = fn(_mod11562);
const module_11564 = fn(_mod11564);
const module_11565 = fn(_mod11565);
const module_11566 = fn(_mod11566);
const chrono = new require("module_11371").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_11416.default();
items = [_default, , , , ];
const _default1 = new module_11404.default(true);
items[1] = _default1;
const _default2 = new module_11564.default();
items[2] = _default2;
const _default3 = new module_11562.default();
items[3] = _default3;
const _default4 = new module_11565.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_11371").Chrono;

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
