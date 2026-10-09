// Module ID: 9976
// Function ID: 9977
// Dependencies: [9786, 9793, 9795, 9819, 9831, 9977, 9979, 9980, 9981, 9826]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 9976
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9831 from "module_9831" /* 9831 */;
import _mod9977 from "module_9977" /* 9977 */;
import _mod9979 from "module_9979" /* 9979 */;
import _mod9980 from "module_9980" /* 9980 */;
import _mod9981 from "module_9981" /* 9981 */;
import { Chrono } from "module_9786" /* 9786 */;

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
  items = [new module_9831.default(), , , , ];
  new module_9831.default();
  items[1] = new module_9819.default(flag);
  new module_9819.default(flag);
  items[2] = new module_9979.default();
  new module_9979.default();
  items[3] = new module_9977.default();
  new module_9977.default();
  items[4] = new module_9980.default();
  new module_9980.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_9981.default();
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
  items = [new module_9831.default(), , , , ];
  new module_9831.default();
  items[1] = new module_9819.default(flag2);
  new module_9819.default(flag2);
  items[2] = new module_9979.default();
  new module_9979.default();
  items[3] = new module_9977.default();
  new module_9977.default();
  items[4] = new module_9980.default();
  new module_9980.default();
  return includeCommonConfiguration(obj, flag);
}
const module_9819 = fn(_mod9819);
const module_9831 = fn(_mod9831);
const module_9977 = fn(_mod9977);
const module_9979 = fn(_mod9979);
const module_9980 = fn(_mod9980);
const module_9981 = fn(_mod9981);
const chrono = new require("module_9786").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_9831.default();
items = [_default, , , , ];
const _default1 = new module_9819.default(true);
items[1] = _default1;
const _default2 = new module_9979.default();
items[2] = _default2;
const _default3 = new module_9977.default();
items[3] = _default3;
const _default4 = new module_9980.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_9786").Chrono;

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
