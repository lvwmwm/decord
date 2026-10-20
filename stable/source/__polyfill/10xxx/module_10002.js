// Module ID: 10002
// Function ID: 10003
// Dependencies: [9812, 9819, 9821, 9845, 9857, 10003, 10005, 10006, 10007, 9852]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10002
import _mod9845 from "module_9845" /* 9845 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9852 */;
import _mod9857 from "module_9857" /* 9857 */;
import _mod10003 from "module_10003" /* 10003 */;
import _mod10005 from "module_10005" /* 10005 */;
import _mod10006 from "module_10006" /* 10006 */;
import _mod10007 from "module_10007" /* 10007 */;
import { Chrono } from "module_9812" /* 9812 */;

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
  items = [new module_9857.default(), , , , ];
  new module_9857.default();
  items[1] = new module_9845.default(flag);
  new module_9845.default(flag);
  items[2] = new module_10005.default();
  new module_10005.default();
  items[3] = new module_10003.default();
  new module_10003.default();
  items[4] = new module_10006.default();
  new module_10006.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10007.default();
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
  items = [new module_9857.default(), , , , ];
  new module_9857.default();
  items[1] = new module_9845.default(flag2);
  new module_9845.default(flag2);
  items[2] = new module_10005.default();
  new module_10005.default();
  items[3] = new module_10003.default();
  new module_10003.default();
  items[4] = new module_10006.default();
  new module_10006.default();
  return includeCommonConfiguration(obj, flag);
}
const module_9845 = fn(_mod9845);
const module_9857 = fn(_mod9857);
const module_10003 = fn(_mod10003);
const module_10005 = fn(_mod10005);
const module_10006 = fn(_mod10006);
const module_10007 = fn(_mod10007);
const chrono = new require("module_9812").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_9857.default();
items = [_default, , , , ];
const _default1 = new module_9845.default(true);
items[1] = _default1;
const _default2 = new module_10005.default();
items[2] = _default2;
const _default3 = new module_10003.default();
items[3] = _default3;
const _default4 = new module_10006.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_9812").Chrono;

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
