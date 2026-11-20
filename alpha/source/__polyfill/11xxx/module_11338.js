// Module ID: 11338
// Function ID: 11339
// Dependencies: [11291, 11298, 11300, 11324, 11336, 11339, 11340, 11342, 11343, 11344, 11345, 11346, 11347, 11348, 11349, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11338
import _mod11324 from "module_11324" /* 11324 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11336 from "module_11336" /* 11336 */;
import _mod11339 from "module_11339" /* 11339 */;
import _mod11340 from "module_11340" /* 11340 */;
import _mod11342 from "module_11342" /* 11342 */;
import _mod11343 from "module_11343" /* 11343 */;
import _mod11344 from "module_11344" /* 11344 */;
import _mod11345 from "module_11345" /* 11345 */;
import _mod11346 from "module_11346" /* 11346 */;
import _mod11347 from "module_11347" /* 11347 */;
import _mod11348 from "module_11348" /* 11348 */;
import _mod11349 from "module_11349" /* 11349 */;
import { Chrono } from "module_11291" /* 11291 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11336.default(), , , , , , ];
  new module_11336.default();
  items[1] = new module_11324.default(flag2);
  new module_11324.default(flag2);
  items[2] = new module_11339.default();
  new module_11339.default();
  items[3] = new module_11342.default();
  new module_11342.default();
  items[4] = new module_11347.default();
  new module_11347.default();
  items[5] = new module_11340.default();
  new module_11340.default();
  items[6] = new module_11349.default();
  new module_11349.default();
  items1 = [new module_11343.default(), ];
  new module_11343.default();
  items1[1] = new module_11344.default();
  new module_11344.default();
  return includeCommonConfiguration(obj, flag);
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11346.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11345.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11348.default();
  unshift3(_default2);
  return tmp;
}
const module_11324 = fn(_mod11324);
const module_11336 = fn(_mod11336);
const module_11339 = fn(_mod11339);
const module_11340 = fn(_mod11340);
const module_11342 = fn(_mod11342);
const module_11343 = fn(_mod11343);
const module_11344 = fn(_mod11344);
const module_11345 = fn(_mod11345);
const module_11346 = fn(_mod11346);
const module_11347 = fn(_mod11347);
const module_11348 = fn(_mod11348);
const module_11349 = fn(_mod11349);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11346.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11345.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11348.default();
unshift3(_default2);
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
