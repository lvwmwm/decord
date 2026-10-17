// Module ID: 10305
// Function ID: 10306
// Dependencies: [10115, 10122, 10124, 10148, 10160, 10306, 10308, 10309, 10310, 10155]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10305
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10306 from "module_10306" /* 10306 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10309 from "module_10309" /* 10309 */;
import _mod10310 from "module_10310" /* 10310 */;
import { Chrono } from "module_10115" /* 10115 */;

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
  items = [new module_10160.default(), , , , ];
  new module_10160.default();
  items[1] = new module_10148.default(flag);
  new module_10148.default(flag);
  items[2] = new module_10308.default();
  new module_10308.default();
  items[3] = new module_10306.default();
  new module_10306.default();
  items[4] = new module_10309.default();
  new module_10309.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10310.default();
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
  items = [new module_10160.default(), , , , ];
  new module_10160.default();
  items[1] = new module_10148.default(flag2);
  new module_10148.default(flag2);
  items[2] = new module_10308.default();
  new module_10308.default();
  items[3] = new module_10306.default();
  new module_10306.default();
  items[4] = new module_10309.default();
  new module_10309.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10148 = fn(_mod10148);
const module_10160 = fn(_mod10160);
const module_10306 = fn(_mod10306);
const module_10308 = fn(_mod10308);
const module_10309 = fn(_mod10309);
const module_10310 = fn(_mod10310);
const chrono = new require("module_10115").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10160.default();
items = [_default, , , , ];
const _default1 = new module_10148.default(true);
items[1] = _default1;
const _default2 = new module_10308.default();
items[2] = _default2;
const _default3 = new module_10306.default();
items[3] = _default3;
const _default4 = new module_10309.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10115").Chrono;

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
