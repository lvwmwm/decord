// Module ID: 11418
// Function ID: 11419
// Dependencies: [11333, 11291, 11298, 11300, 11419, 11402, 11404, 11405, 11406, 11407, 11420, 11421, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11418
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11333 from "module_11333" /* 11333 */;
import _mod11402 from "module_11402" /* 11402 */;
import _mod11404 from "module_11404" /* 11404 */;
import _mod11405 from "module_11405" /* 11405 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11407 from "module_11407" /* 11407 */;
import _mod11419 from "module_11419" /* 11419 */;
import _mod11420 from "module_11420" /* 11420 */;
import _mod11421 from "module_11421" /* 11421 */;
import { Chrono } from "module_11291" /* 11291 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11402.default(), , , , ];
  new module_11402.default();
  items[1] = new module_11405.default();
  new module_11405.default();
  items[2] = new module_11407.default();
  new module_11407.default();
  items[3] = new module_11406.default();
  new module_11406.default();
  items[4] = new module_11404.default();
  new module_11404.default();
  items1 = [new module_11420.default(), ];
  new module_11420.default();
  items1[1] = new module_11421.default();
  new module_11421.default();
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
  const _default = new module_11419.default();
  unshift(_default);
  return tmp;
}
const module_11333 = fn(_mod11333);
const module_11419 = fn(_mod11419);
const module_11402 = fn(_mod11402);
const module_11404 = fn(_mod11404);
const module_11405 = fn(_mod11405);
const module_11406 = fn(_mod11406);
const module_11407 = fn(_mod11407);
const module_11420 = fn(_mod11420);
const module_11421 = fn(_mod11421);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11419.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11419.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
