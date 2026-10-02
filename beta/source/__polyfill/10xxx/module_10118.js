// Module ID: 10118
// Function ID: 10119
// Dependencies: [9928, 9935, 9937, 9961, 9973, 10119, 10121, 10122, 10123, 9968]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10118
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9973 from "module_9973" /* 9973 */;
import _mod10119 from "module_10119" /* 10119 */;
import _mod10121 from "module_10121" /* 10121 */;
import _mod10122 from "module_10122" /* 10122 */;
import _mod10123 from "module_10123" /* 10123 */;
import { Chrono } from "module_9928" /* 9928 */;

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
  items = [new module_9973.default(), , , , ];
  new module_9973.default();
  items[1] = new module_9961.default(flag);
  new module_9961.default(flag);
  items[2] = new module_10121.default();
  new module_10121.default();
  items[3] = new module_10119.default();
  new module_10119.default();
  items[4] = new module_10122.default();
  new module_10122.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10123.default();
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
  items = [new module_9973.default(), , , , ];
  new module_9973.default();
  items[1] = new module_9961.default(flag2);
  new module_9961.default(flag2);
  items[2] = new module_10121.default();
  new module_10121.default();
  items[3] = new module_10119.default();
  new module_10119.default();
  items[4] = new module_10122.default();
  new module_10122.default();
  return includeCommonConfiguration(obj, flag);
}
const module_9961 = fn(_mod9961);
const module_9973 = fn(_mod9973);
const module_10119 = fn(_mod10119);
const module_10121 = fn(_mod10121);
const module_10122 = fn(_mod10122);
const module_10123 = fn(_mod10123);
const chrono = new require("module_9928").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_9973.default();
items = [_default, , , , ];
const _default1 = new module_9961.default(true);
items[1] = _default1;
const _default2 = new module_10121.default();
items[2] = _default2;
const _default3 = new module_10119.default();
items[3] = _default3;
const _default4 = new module_10122.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_9928").Chrono;

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
