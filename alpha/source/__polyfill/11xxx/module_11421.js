// Module ID: 11421
// Function ID: 11422
// Dependencies: [11422, 11424, 11425, 11426, 11427, 11428, 11429, 11349, 11356, 11358, 11430, 11431, 11395, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11421
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11395 from "module_11395" /* 11395 */;
import _mod11422 from "module_11422" /* 11422 */;
import _mod11424 from "module_11424" /* 11424 */;
import _mod11425 from "module_11425" /* 11425 */;
import _mod11426 from "module_11426" /* 11426 */;
import _mod11427 from "module_11427" /* 11427 */;
import _mod11428 from "module_11428" /* 11428 */;
import _mod11429 from "module_11429" /* 11429 */;
import _mod11430 from "module_11430" /* 11430 */;
import _mod11431 from "module_11431" /* 11431 */;
import { Chrono } from "module_11349" /* 11349 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11422.default(), , , , ];
  new module_11422.default();
  items[1] = new module_11426.default();
  new module_11426.default();
  items[2] = new module_11431.default();
  new module_11431.default();
  items[3] = new module_11427.default();
  new module_11427.default();
  items[4] = new module_11428.default();
  new module_11428.default();
  items1 = [new module_11430.default(), , ];
  new module_11430.default();
  items1[1] = new module_11429.default();
  new module_11429.default();
  items1[2] = new module_11424.default();
  new module_11424.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11395.default));
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
  const _default = new module_11425.default();
  unshift(_default);
  return tmp;
}
const module_11422 = fn(_mod11422);
const module_11424 = fn(_mod11424);
const module_11425 = fn(_mod11425);
const module_11426 = fn(_mod11426);
const module_11427 = fn(_mod11427);
const module_11428 = fn(_mod11428);
const module_11429 = fn(_mod11429);
const module_11430 = fn(_mod11430);
const module_11431 = fn(_mod11431);
const module_11395 = fn(_mod11395);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11425.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11349").Chrono(createConfiguration(true));
const Chrono_export = require("module_11349").Chrono;

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
