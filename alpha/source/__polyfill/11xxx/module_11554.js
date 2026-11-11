// Module ID: 11554
// Function ID: 11555
// Dependencies: [11364, 11371, 11373, 11397, 11409, 11555, 11557, 11558, 11559, 11404]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 11554
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11555 from "module_11555" /* 11555 */;
import _mod11557 from "module_11557" /* 11557 */;
import _mod11558 from "module_11558" /* 11558 */;
import _mod11559 from "module_11559" /* 11559 */;
import { Chrono } from "module_11364" /* 11364 */;

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
  items = [new module_11409.default(), , , , ];
  new module_11409.default();
  items[1] = new module_11397.default(flag);
  new module_11397.default(flag);
  items[2] = new module_11557.default();
  new module_11557.default();
  items[3] = new module_11555.default();
  new module_11555.default();
  items[4] = new module_11558.default();
  new module_11558.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_11559.default();
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
  items = [new module_11409.default(), , , , ];
  new module_11409.default();
  items[1] = new module_11397.default(flag2);
  new module_11397.default(flag2);
  items[2] = new module_11557.default();
  new module_11557.default();
  items[3] = new module_11555.default();
  new module_11555.default();
  items[4] = new module_11558.default();
  new module_11558.default();
  return includeCommonConfiguration(obj, flag);
}
const module_11397 = fn(_mod11397);
const module_11409 = fn(_mod11409);
const module_11555 = fn(_mod11555);
const module_11557 = fn(_mod11557);
const module_11558 = fn(_mod11558);
const module_11559 = fn(_mod11559);
const chrono = new require("module_11364").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_11409.default();
items = [_default, , , , ];
const _default1 = new module_11397.default(true);
items[1] = _default1;
const _default2 = new module_11557.default();
items[2] = _default2;
const _default3 = new module_11555.default();
items[3] = _default3;
const _default4 = new module_11558.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_11364").Chrono;

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
