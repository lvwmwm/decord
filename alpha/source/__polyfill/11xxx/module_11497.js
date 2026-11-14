// Module ID: 11497
// Function ID: 11498
// Dependencies: [11498, 11500, 11501, 11502, 11503, 11504, 11505, 11425, 11432, 11434, 11506, 11507, 11471, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11497
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11498 from "module_11498" /* 11498 */;
import _mod11500 from "module_11500" /* 11500 */;
import _mod11501 from "module_11501" /* 11501 */;
import _mod11502 from "module_11502" /* 11502 */;
import _mod11503 from "module_11503" /* 11503 */;
import _mod11504 from "module_11504" /* 11504 */;
import _mod11505 from "module_11505" /* 11505 */;
import _mod11506 from "module_11506" /* 11506 */;
import _mod11507 from "module_11507" /* 11507 */;
import { Chrono } from "module_11425" /* 11425 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11498.default(), , , , ];
  new module_11498.default();
  items[1] = new module_11502.default();
  new module_11502.default();
  items[2] = new module_11507.default();
  new module_11507.default();
  items[3] = new module_11503.default();
  new module_11503.default();
  items[4] = new module_11504.default();
  new module_11504.default();
  items1 = [new module_11506.default(), , ];
  new module_11506.default();
  items1[1] = new module_11505.default();
  new module_11505.default();
  items1[2] = new module_11500.default();
  new module_11500.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11471.default));
  return result;
}
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11501.default();
  unshift(_default);
  return tmp;
}
const module_11498 = fn(_mod11498);
const module_11500 = fn(_mod11500);
const module_11501 = fn(_mod11501);
const module_11502 = fn(_mod11502);
const module_11503 = fn(_mod11503);
const module_11504 = fn(_mod11504);
const module_11505 = fn(_mod11505);
const module_11506 = fn(_mod11506);
const module_11507 = fn(_mod11507);
const module_11471 = fn(_mod11471);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11501.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11425").Chrono(createConfiguration(true));
const Chrono_export = require("module_11425").Chrono;

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
