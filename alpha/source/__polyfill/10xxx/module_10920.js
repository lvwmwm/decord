// Module ID: 10920
// Function ID: 10921
// Dependencies: [10730, 10737, 10739, 10763, 10775, 10921, 10923, 10924, 10925, 10770]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10920
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10775 from "module_10775" /* 10775 */;
import _mod10921 from "module_10921" /* 10921 */;
import _mod10923 from "module_10923" /* 10923 */;
import _mod10924 from "module_10924" /* 10924 */;
import _mod10925 from "module_10925" /* 10925 */;
import { Chrono } from "module_10730" /* 10730 */;

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
  items = [new module_10775.default(), , , , ];
  new module_10775.default();
  items[1] = new module_10763.default(flag);
  new module_10763.default(flag);
  items[2] = new module_10923.default();
  new module_10923.default();
  items[3] = new module_10921.default();
  new module_10921.default();
  items[4] = new module_10924.default();
  new module_10924.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10925.default();
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
  items = [new module_10775.default(), , , , ];
  new module_10775.default();
  items[1] = new module_10763.default(flag2);
  new module_10763.default(flag2);
  items[2] = new module_10923.default();
  new module_10923.default();
  items[3] = new module_10921.default();
  new module_10921.default();
  items[4] = new module_10924.default();
  new module_10924.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10763 = fn(_mod10763);
const module_10775 = fn(_mod10775);
const module_10921 = fn(_mod10921);
const module_10923 = fn(_mod10923);
const module_10924 = fn(_mod10924);
const module_10925 = fn(_mod10925);
const chrono = new require("module_10730").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10775.default();
items = [_default, , , , ];
const _default1 = new module_10763.default(true);
items[1] = _default1;
const _default2 = new module_10923.default();
items[2] = _default2;
const _default3 = new module_10921.default();
items[3] = _default3;
const _default4 = new module_10924.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10730").Chrono;

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
