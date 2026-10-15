// Module ID: 10224
// Function ID: 10225
// Dependencies: [10034, 10041, 10043, 10067, 10079, 10225, 10227, 10228, 10229, 10074]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10224
import _mod10067 from "module_10067" /* 10067 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10225 from "module_10225" /* 10225 */;
import _mod10227 from "module_10227" /* 10227 */;
import _mod10228 from "module_10228" /* 10228 */;
import _mod10229 from "module_10229" /* 10229 */;
import { Chrono } from "module_10034" /* 10034 */;

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
  items = [new module_10079.default(), , , , ];
  new module_10079.default();
  items[1] = new module_10067.default(flag);
  new module_10067.default(flag);
  items[2] = new module_10227.default();
  new module_10227.default();
  items[3] = new module_10225.default();
  new module_10225.default();
  items[4] = new module_10228.default();
  new module_10228.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10229.default();
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
  items = [new module_10079.default(), , , , ];
  new module_10079.default();
  items[1] = new module_10067.default(flag2);
  new module_10067.default(flag2);
  items[2] = new module_10227.default();
  new module_10227.default();
  items[3] = new module_10225.default();
  new module_10225.default();
  items[4] = new module_10228.default();
  new module_10228.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10067 = fn(_mod10067);
const module_10079 = fn(_mod10079);
const module_10225 = fn(_mod10225);
const module_10227 = fn(_mod10227);
const module_10228 = fn(_mod10228);
const module_10229 = fn(_mod10229);
const chrono = new require("module_10034").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10079.default();
items = [_default, , , , ];
const _default1 = new module_10067.default(true);
items[1] = _default1;
const _default2 = new module_10227.default();
items[2] = _default2;
const _default3 = new module_10225.default();
items[3] = _default3;
const _default4 = new module_10228.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10034").Chrono;

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
