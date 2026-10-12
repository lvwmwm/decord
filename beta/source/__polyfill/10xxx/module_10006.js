// Module ID: 10006
// Function ID: 10007
// Dependencies: [9816, 9823, 9825, 9849, 9861, 10007, 10009, 10010, 10011, 9856]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10006
import _mod9849 from "module_9849" /* 9849 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9856 */;
import _mod9861 from "module_9861" /* 9861 */;
import _mod10007 from "module_10007" /* 10007 */;
import _mod10009 from "module_10009" /* 10009 */;
import _mod10010 from "module_10010" /* 10010 */;
import _mod10011 from "module_10011" /* 10011 */;
import { Chrono } from "module_9816" /* 9816 */;

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
  items = [new module_9861.default(), , , , ];
  new module_9861.default();
  items[1] = new module_9849.default(flag);
  new module_9849.default(flag);
  items[2] = new module_10009.default();
  new module_10009.default();
  items[3] = new module_10007.default();
  new module_10007.default();
  items[4] = new module_10010.default();
  new module_10010.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10011.default();
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
  items = [new module_9861.default(), , , , ];
  new module_9861.default();
  items[1] = new module_9849.default(flag2);
  new module_9849.default(flag2);
  items[2] = new module_10009.default();
  new module_10009.default();
  items[3] = new module_10007.default();
  new module_10007.default();
  items[4] = new module_10010.default();
  new module_10010.default();
  return includeCommonConfiguration(obj, flag);
}
const module_9849 = fn(_mod9849);
const module_9861 = fn(_mod9861);
const module_10007 = fn(_mod10007);
const module_10009 = fn(_mod10009);
const module_10010 = fn(_mod10010);
const module_10011 = fn(_mod10011);
const chrono = new require("module_9816").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_9861.default();
items = [_default, , , , ];
const _default1 = new module_9849.default(true);
items[1] = _default1;
const _default2 = new module_10009.default();
items[2] = _default2;
const _default3 = new module_10007.default();
items[3] = _default3;
const _default4 = new module_10010.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_9816").Chrono;

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
