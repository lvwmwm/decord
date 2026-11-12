// Module ID: 10664
// Function ID: 10665
// Dependencies: [10474, 10481, 10483, 10507, 10519, 10665, 10667, 10668, 10669, 10514]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10664
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10519 from "module_10519" /* 10519 */;
import _mod10665 from "module_10665" /* 10665 */;
import _mod10667 from "module_10667" /* 10667 */;
import _mod10668 from "module_10668" /* 10668 */;
import _mod10669 from "module_10669" /* 10669 */;
import { Chrono } from "module_10474" /* 10474 */;

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
  items = [new module_10519.default(), , , , ];
  new module_10519.default();
  items[1] = new module_10507.default(flag);
  new module_10507.default(flag);
  items[2] = new module_10667.default();
  new module_10667.default();
  items[3] = new module_10665.default();
  new module_10665.default();
  items[4] = new module_10668.default();
  new module_10668.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10669.default();
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
  items = [new module_10519.default(), , , , ];
  new module_10519.default();
  items[1] = new module_10507.default(flag2);
  new module_10507.default(flag2);
  items[2] = new module_10667.default();
  new module_10667.default();
  items[3] = new module_10665.default();
  new module_10665.default();
  items[4] = new module_10668.default();
  new module_10668.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10507 = fn(_mod10507);
const module_10519 = fn(_mod10519);
const module_10665 = fn(_mod10665);
const module_10667 = fn(_mod10667);
const module_10668 = fn(_mod10668);
const module_10669 = fn(_mod10669);
const chrono = new require("module_10474").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10519.default();
items = [_default, , , , ];
const _default1 = new module_10507.default(true);
items[1] = _default1;
const _default2 = new module_10667.default();
items[2] = _default2;
const _default3 = new module_10665.default();
items[3] = _default3;
const _default4 = new module_10668.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10474").Chrono;

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
