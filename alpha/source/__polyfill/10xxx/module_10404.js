// Module ID: 10404
// Function ID: 10405
// Dependencies: [10320, 10278, 10285, 10287, 10395, 10396, 10398, 10399, 10400, 10401, 10402, 10403, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10404
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10395 from "module_10395" /* 10395 */;
import _mod10396 from "module_10396" /* 10396 */;
import _mod10398 from "module_10398" /* 10398 */;
import _mod10399 from "module_10399" /* 10399 */;
import _mod10400 from "module_10400" /* 10400 */;
import _mod10401 from "module_10401" /* 10401 */;
import _mod10402 from "module_10402" /* 10402 */;
import _mod10403 from "module_10403" /* 10403 */;
import { Chrono } from "module_10278" /* 10278 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10396.default(), , , , ];
  new module_10396.default();
  items[1] = new module_10399.default();
  new module_10399.default();
  items[2] = new module_10401.default();
  new module_10401.default();
  items[3] = new module_10400.default();
  new module_10400.default();
  items[4] = new module_10398.default();
  new module_10398.default();
  items1 = [new module_10402.default(), ];
  new module_10402.default();
  items1[1] = new module_10403.default();
  new module_10403.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10320.default));
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
  const _default = new module_10395.default();
  unshift(_default);
  return tmp;
}
const module_10320 = fn(_mod10320);
const module_10395 = fn(_mod10395);
const module_10396 = fn(_mod10396);
const module_10398 = fn(_mod10398);
const module_10399 = fn(_mod10399);
const module_10400 = fn(_mod10400);
const module_10401 = fn(_mod10401);
const module_10402 = fn(_mod10402);
const module_10403 = fn(_mod10403);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10395.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10395.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10278").Chrono(createConfiguration());
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
