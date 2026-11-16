// Module ID: 11615
// Function ID: 11616
// Dependencies: [11425, 11432, 11434, 11458, 11470, 11616, 11618, 11619, 11620, 11465]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 11615
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11616 from "module_11616" /* 11616 */;
import _mod11618 from "module_11618" /* 11618 */;
import _mod11619 from "module_11619" /* 11619 */;
import _mod11620 from "module_11620" /* 11620 */;
import { Chrono } from "module_11425" /* 11425 */;

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
  items = [new module_11470.default(), , , , ];
  new module_11470.default();
  items[1] = new module_11458.default(flag);
  new module_11458.default(flag);
  items[2] = new module_11618.default();
  new module_11618.default();
  items[3] = new module_11616.default();
  new module_11616.default();
  items[4] = new module_11619.default();
  new module_11619.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_11620.default();
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
  items = [new module_11470.default(), , , , ];
  new module_11470.default();
  items[1] = new module_11458.default(flag2);
  new module_11458.default(flag2);
  items[2] = new module_11618.default();
  new module_11618.default();
  items[3] = new module_11616.default();
  new module_11616.default();
  items[4] = new module_11619.default();
  new module_11619.default();
  return includeCommonConfiguration(obj, flag);
}
const module_11458 = fn(_mod11458);
const module_11470 = fn(_mod11470);
const module_11616 = fn(_mod11616);
const module_11618 = fn(_mod11618);
const module_11619 = fn(_mod11619);
const module_11620 = fn(_mod11620);
const chrono = new require("module_11425").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_11470.default();
items = [_default, , , , ];
const _default1 = new module_11458.default(true);
items[1] = _default1;
const _default2 = new module_11618.default();
items[2] = _default2;
const _default3 = new module_11616.default();
items[3] = _default3;
const _default4 = new module_11619.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_11425").Chrono;

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
