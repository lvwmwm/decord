// Module ID: 10005
// Function ID: 10006
// Dependencies: [9815, 9822, 9824, 9848, 9860, 10006, 10008, 10009, 10010, 9855]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10005
import _mod9848 from "module_9848" /* 9848 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9860 from "module_9860" /* 9860 */;
import _mod10006 from "module_10006" /* 10006 */;
import _mod10008 from "module_10008" /* 10008 */;
import _mod10009 from "module_10009" /* 10009 */;
import _mod10010 from "module_10010" /* 10010 */;
import { Chrono } from "module_9815" /* 9815 */;

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
  items = [new module_9860.default(), , , , ];
  new module_9860.default();
  items[1] = new module_9848.default(flag);
  new module_9848.default(flag);
  items[2] = new module_10008.default();
  new module_10008.default();
  items[3] = new module_10006.default();
  new module_10006.default();
  items[4] = new module_10009.default();
  new module_10009.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10010.default();
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
  items = [new module_9860.default(), , , , ];
  new module_9860.default();
  items[1] = new module_9848.default(flag2);
  new module_9848.default(flag2);
  items[2] = new module_10008.default();
  new module_10008.default();
  items[3] = new module_10006.default();
  new module_10006.default();
  items[4] = new module_10009.default();
  new module_10009.default();
  return includeCommonConfiguration(obj, flag);
}
const module_9848 = fn(_mod9848);
const module_9860 = fn(_mod9860);
const module_10006 = fn(_mod10006);
const module_10008 = fn(_mod10008);
const module_10009 = fn(_mod10009);
const module_10010 = fn(_mod10010);
const chrono = new require("module_9815").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_9860.default();
items = [_default, , , , ];
const _default1 = new module_9848.default(true);
items[1] = _default1;
const _default2 = new module_10008.default();
items[2] = _default2;
const _default3 = new module_10006.default();
items[3] = _default3;
const _default4 = new module_10009.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_9815").Chrono;

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
