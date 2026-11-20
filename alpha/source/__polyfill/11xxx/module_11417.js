// Module ID: 11417
// Function ID: 11418
// Dependencies: [11333, 11291, 11298, 11300, 11408, 11409, 11411, 11412, 11413, 11414, 11415, 11416, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11417
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11333 from "module_11333" /* 11333 */;
import _mod11408 from "module_11408" /* 11408 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11411 from "module_11411" /* 11411 */;
import _mod11412 from "module_11412" /* 11412 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11414 from "module_11414" /* 11414 */;
import _mod11415 from "module_11415" /* 11415 */;
import _mod11416 from "module_11416" /* 11416 */;
import { Chrono } from "module_11291" /* 11291 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11409.default(), , , , ];
  new module_11409.default();
  items[1] = new module_11412.default();
  new module_11412.default();
  items[2] = new module_11414.default();
  new module_11414.default();
  items[3] = new module_11413.default();
  new module_11413.default();
  items[4] = new module_11411.default();
  new module_11411.default();
  items1 = [new module_11415.default(), ];
  new module_11415.default();
  items1[1] = new module_11416.default();
  new module_11416.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11333.default));
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11408.default();
  unshift(_default);
  return tmp;
}
const module_11333 = fn(_mod11333);
const module_11408 = fn(_mod11408);
const module_11409 = fn(_mod11409);
const module_11411 = fn(_mod11411);
const module_11412 = fn(_mod11412);
const module_11413 = fn(_mod11413);
const module_11414 = fn(_mod11414);
const module_11415 = fn(_mod11415);
const module_11416 = fn(_mod11416);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11408.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11408.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11291").Chrono(createConfiguration());
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
