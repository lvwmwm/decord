// Module ID: 11363
// Function ID: 11364
// Dependencies: [11364, 11366, 11367, 11368, 11369, 11370, 11371, 11291, 11298, 11300, 11372, 11373, 11337, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11363
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11337 from "module_11337" /* 11337 */;
import _mod11364 from "module_11364" /* 11364 */;
import _mod11366 from "module_11366" /* 11366 */;
import _mod11367 from "module_11367" /* 11367 */;
import _mod11368 from "module_11368" /* 11368 */;
import _mod11369 from "module_11369" /* 11369 */;
import _mod11370 from "module_11370" /* 11370 */;
import _mod11371 from "module_11371" /* 11371 */;
import _mod11372 from "module_11372" /* 11372 */;
import _mod11373 from "module_11373" /* 11373 */;
import { Chrono } from "module_11291" /* 11291 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11364.default(), , , , ];
  new module_11364.default();
  items[1] = new module_11368.default();
  new module_11368.default();
  items[2] = new module_11373.default();
  new module_11373.default();
  items[3] = new module_11369.default();
  new module_11369.default();
  items[4] = new module_11370.default();
  new module_11370.default();
  items1 = [new module_11372.default(), , ];
  new module_11372.default();
  items1[1] = new module_11371.default();
  new module_11371.default();
  items1[2] = new module_11366.default();
  new module_11366.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11337.default));
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
  const _default = new module_11367.default();
  unshift(_default);
  return tmp;
}
const module_11364 = fn(_mod11364);
const module_11366 = fn(_mod11366);
const module_11367 = fn(_mod11367);
const module_11368 = fn(_mod11368);
const module_11369 = fn(_mod11369);
const module_11370 = fn(_mod11370);
const module_11371 = fn(_mod11371);
const module_11372 = fn(_mod11372);
const module_11373 = fn(_mod11373);
const module_11337 = fn(_mod11337);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11367.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));
const Chrono_export = require("module_11291").Chrono;

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
