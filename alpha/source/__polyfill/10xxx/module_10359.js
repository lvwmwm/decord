// Module ID: 10359
// Function ID: 10360
// Dependencies: [10169, 10176, 10178, 10202, 10214, 10360, 10362, 10363, 10364, 10209]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10359
import _mod10202 from "module_10202" /* 10202 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10209 */;
import _mod10214 from "module_10214" /* 10214 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10362 from "module_10362" /* 10362 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10364 from "module_10364" /* 10364 */;
import { Chrono } from "module_10169" /* 10169 */;

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
  items = [new module_10214.default(), , , , ];
  new module_10214.default();
  items[1] = new module_10202.default(flag);
  new module_10202.default(flag);
  items[2] = new module_10362.default();
  new module_10362.default();
  items[3] = new module_10360.default();
  new module_10360.default();
  items[4] = new module_10363.default();
  new module_10363.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10364.default();
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
  items = [new module_10214.default(), , , , ];
  new module_10214.default();
  items[1] = new module_10202.default(flag2);
  new module_10202.default(flag2);
  items[2] = new module_10362.default();
  new module_10362.default();
  items[3] = new module_10360.default();
  new module_10360.default();
  items[4] = new module_10363.default();
  new module_10363.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10202 = fn(_mod10202);
const module_10214 = fn(_mod10214);
const module_10360 = fn(_mod10360);
const module_10362 = fn(_mod10362);
const module_10363 = fn(_mod10363);
const module_10364 = fn(_mod10364);
const chrono = new require("module_10169").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10214.default();
items = [_default, , , , ];
const _default1 = new module_10202.default(true);
items[1] = _default1;
const _default2 = new module_10362.default();
items[2] = _default2;
const _default3 = new module_10360.default();
items[3] = _default3;
const _default4 = new module_10363.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10169").Chrono;

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
