// Module ID: 10081
// Function ID: 10082
// Dependencies: [9891, 9898, 9900, 9924, 9936, 10082, 10084, 10085, 10086, 9931]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10081
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod10082 from "module_10082" /* 10082 */;
import _mod10084 from "module_10084" /* 10084 */;
import _mod10085 from "module_10085" /* 10085 */;
import _mod10086 from "module_10086" /* 10086 */;
import { Chrono } from "module_9891" /* 9891 */;

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
  items = [new module_9936.default(), , , , ];
  new module_9936.default();
  items[1] = new module_9924.default(flag);
  new module_9924.default(flag);
  items[2] = new module_10084.default();
  new module_10084.default();
  items[3] = new module_10082.default();
  new module_10082.default();
  items[4] = new module_10085.default();
  new module_10085.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10086.default();
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
  items = [new module_9936.default(), , , , ];
  new module_9936.default();
  items[1] = new module_9924.default(flag2);
  new module_9924.default(flag2);
  items[2] = new module_10084.default();
  new module_10084.default();
  items[3] = new module_10082.default();
  new module_10082.default();
  items[4] = new module_10085.default();
  new module_10085.default();
  return includeCommonConfiguration(obj, flag);
}
const module_9924 = fn(_mod9924);
const module_9936 = fn(_mod9936);
const module_10082 = fn(_mod10082);
const module_10084 = fn(_mod10084);
const module_10085 = fn(_mod10085);
const module_10086 = fn(_mod10086);
const chrono = new require("module_9891").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_9936.default();
items = [_default, , , , ];
const _default1 = new module_9924.default(true);
items[1] = _default1;
const _default2 = new module_10084.default();
items[2] = _default2;
const _default3 = new module_10082.default();
items[3] = _default3;
const _default4 = new module_10085.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_9891").Chrono;

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
