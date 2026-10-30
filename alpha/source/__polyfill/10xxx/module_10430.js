// Module ID: 10430
// Function ID: 10431
// Dependencies: [10345, 10303, 10310, 10312, 10431, 10414, 10416, 10417, 10418, 10419, 10432, 10433, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10430
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10414 from "module_10414" /* 10414 */;
import _mod10416 from "module_10416" /* 10416 */;
import _mod10417 from "module_10417" /* 10417 */;
import _mod10418 from "module_10418" /* 10418 */;
import _mod10419 from "module_10419" /* 10419 */;
import _mod10431 from "module_10431" /* 10431 */;
import _mod10432 from "module_10432" /* 10432 */;
import _mod10433 from "module_10433" /* 10433 */;
import { Chrono } from "module_10303" /* 10303 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10414.default(), , , , ];
  new module_10414.default();
  items[1] = new module_10417.default();
  new module_10417.default();
  items[2] = new module_10419.default();
  new module_10419.default();
  items[3] = new module_10418.default();
  new module_10418.default();
  items[4] = new module_10416.default();
  new module_10416.default();
  items1 = [new module_10432.default(), ];
  new module_10432.default();
  items1[1] = new module_10433.default();
  new module_10433.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10345.default));
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
  const _default = new module_10431.default();
  unshift(_default);
  return tmp;
}
const module_10345 = fn(_mod10345);
const module_10431 = fn(_mod10431);
const module_10414 = fn(_mod10414);
const module_10416 = fn(_mod10416);
const module_10417 = fn(_mod10417);
const module_10418 = fn(_mod10418);
const module_10419 = fn(_mod10419);
const module_10432 = fn(_mod10432);
const module_10433 = fn(_mod10433);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10431.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10431.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10303").Chrono(createConfiguration());
const Chrono_export = require("module_10303").Chrono;

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
