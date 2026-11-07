// Module ID: 10632
// Function ID: 10633
// Dependencies: [10442, 10449, 10451, 10475, 10487, 10633, 10635, 10636, 10637, 10482]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10632
import _mod10475 from "module_10475" /* 10475 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10633 from "module_10633" /* 10633 */;
import _mod10635 from "module_10635" /* 10635 */;
import _mod10636 from "module_10636" /* 10636 */;
import _mod10637 from "module_10637" /* 10637 */;
import { Chrono } from "module_10442" /* 10442 */;

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
  items = [new module_10487.default(), , , , ];
  new module_10487.default();
  items[1] = new module_10475.default(flag);
  new module_10475.default(flag);
  items[2] = new module_10635.default();
  new module_10635.default();
  items[3] = new module_10633.default();
  new module_10633.default();
  items[4] = new module_10636.default();
  new module_10636.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10637.default();
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
  items = [new module_10487.default(), , , , ];
  new module_10487.default();
  items[1] = new module_10475.default(flag2);
  new module_10475.default(flag2);
  items[2] = new module_10635.default();
  new module_10635.default();
  items[3] = new module_10633.default();
  new module_10633.default();
  items[4] = new module_10636.default();
  new module_10636.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10475 = fn(_mod10475);
const module_10487 = fn(_mod10487);
const module_10633 = fn(_mod10633);
const module_10635 = fn(_mod10635);
const module_10636 = fn(_mod10636);
const module_10637 = fn(_mod10637);
const chrono = new require("module_10442").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10487.default();
items = [_default, , , , ];
const _default1 = new module_10475.default(true);
items[1] = _default1;
const _default2 = new module_10635.default();
items[2] = _default2;
const _default3 = new module_10633.default();
items[3] = _default3;
const _default4 = new module_10636.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10442").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
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
