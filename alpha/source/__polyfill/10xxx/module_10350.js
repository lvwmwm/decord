// Module ID: 10350
// Function ID: 10351
// Dependencies: [10351, 10353, 10354, 10355, 10356, 10357, 10358, 10278, 10285, 10287, 10359, 10360, 10324, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10350
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10351 from "module_10351" /* 10351 */;
import _mod10353 from "module_10353" /* 10353 */;
import _mod10354 from "module_10354" /* 10354 */;
import _mod10355 from "module_10355" /* 10355 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10357 from "module_10357" /* 10357 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;
import _mod10360 from "module_10360" /* 10360 */;
import { Chrono } from "module_10278" /* 10278 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10351.default(), , , , ];
  new module_10351.default();
  items[1] = new module_10355.default();
  new module_10355.default();
  items[2] = new module_10360.default();
  new module_10360.default();
  items[3] = new module_10356.default();
  new module_10356.default();
  items[4] = new module_10357.default();
  new module_10357.default();
  items1 = [new module_10359.default(), , ];
  new module_10359.default();
  items1[1] = new module_10358.default();
  new module_10358.default();
  items1[2] = new module_10353.default();
  new module_10353.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10324.default));
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
  const _default = new module_10354.default();
  unshift(_default);
  return tmp;
}
const module_10351 = fn(_mod10351);
const module_10353 = fn(_mod10353);
const module_10354 = fn(_mod10354);
const module_10355 = fn(_mod10355);
const module_10356 = fn(_mod10356);
const module_10357 = fn(_mod10357);
const module_10358 = fn(_mod10358);
const module_10359 = fn(_mod10359);
const module_10360 = fn(_mod10360);
const module_10324 = fn(_mod10324);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10354.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10278").Chrono(createConfiguration(true));
const Chrono_export = require("module_10278").Chrono;

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
