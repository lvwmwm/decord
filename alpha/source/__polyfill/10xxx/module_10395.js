// Module ID: 10395
// Function ID: 10396
// Dependencies: [10396, 10398, 10399, 10400, 10401, 10402, 10403, 10323, 10330, 10332, 10404, 10405, 10369, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10395
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10369 from "module_10369" /* 10369 */;
import _mod10396 from "module_10396" /* 10396 */;
import _mod10398 from "module_10398" /* 10398 */;
import _mod10399 from "module_10399" /* 10399 */;
import _mod10400 from "module_10400" /* 10400 */;
import _mod10401 from "module_10401" /* 10401 */;
import _mod10402 from "module_10402" /* 10402 */;
import _mod10403 from "module_10403" /* 10403 */;
import _mod10404 from "module_10404" /* 10404 */;
import _mod10405 from "module_10405" /* 10405 */;
import { Chrono } from "module_10323" /* 10323 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10396.default(), , , , ];
  new module_10396.default();
  items[1] = new module_10400.default();
  new module_10400.default();
  items[2] = new module_10405.default();
  new module_10405.default();
  items[3] = new module_10401.default();
  new module_10401.default();
  items[4] = new module_10402.default();
  new module_10402.default();
  items1 = [new module_10404.default(), , ];
  new module_10404.default();
  items1[1] = new module_10403.default();
  new module_10403.default();
  items1[2] = new module_10398.default();
  new module_10398.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10369.default));
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
  const _default = new module_10399.default();
  unshift(_default);
  return tmp;
}
const module_10396 = fn(_mod10396);
const module_10398 = fn(_mod10398);
const module_10399 = fn(_mod10399);
const module_10400 = fn(_mod10400);
const module_10401 = fn(_mod10401);
const module_10402 = fn(_mod10402);
const module_10403 = fn(_mod10403);
const module_10404 = fn(_mod10404);
const module_10405 = fn(_mod10405);
const module_10369 = fn(_mod10369);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10399.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10323").Chrono(createConfiguration(true));
const Chrono_export = require("module_10323").Chrono;

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
