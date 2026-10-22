// Module ID: 10378
// Function ID: 10379
// Dependencies: [10188, 10195, 10197, 10221, 10233, 10379, 10381, 10382, 10383, 10228]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10378
import _mod10221 from "module_10221" /* 10221 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10233 from "module_10233" /* 10233 */;
import _mod10379 from "module_10379" /* 10379 */;
import _mod10381 from "module_10381" /* 10381 */;
import _mod10382 from "module_10382" /* 10382 */;
import _mod10383 from "module_10383" /* 10383 */;
import { Chrono } from "module_10188" /* 10188 */;

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
  items = [new module_10233.default(), , , , ];
  new module_10233.default();
  items[1] = new module_10221.default(flag);
  new module_10221.default(flag);
  items[2] = new module_10381.default();
  new module_10381.default();
  items[3] = new module_10379.default();
  new module_10379.default();
  items[4] = new module_10382.default();
  new module_10382.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10383.default();
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
  items = [new module_10233.default(), , , , ];
  new module_10233.default();
  items[1] = new module_10221.default(flag2);
  new module_10221.default(flag2);
  items[2] = new module_10381.default();
  new module_10381.default();
  items[3] = new module_10379.default();
  new module_10379.default();
  items[4] = new module_10382.default();
  new module_10382.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10221 = fn(_mod10221);
const module_10233 = fn(_mod10233);
const module_10379 = fn(_mod10379);
const module_10381 = fn(_mod10381);
const module_10382 = fn(_mod10382);
const module_10383 = fn(_mod10383);
const chrono = new require("module_10188").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10233.default();
items = [_default, , , , ];
const _default1 = new module_10221.default(true);
items[1] = _default1;
const _default2 = new module_10381.default();
items[2] = _default2;
const _default3 = new module_10379.default();
items[3] = _default3;
const _default4 = new module_10382.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10188").Chrono;

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
