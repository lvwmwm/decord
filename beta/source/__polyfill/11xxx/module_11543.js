// Module ID: 11543
// Function ID: 11544
// Dependencies: [11458, 11416, 11423, 11425, 11544, 11527, 11529, 11530, 11531, 11532, 11545, 11546, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11543
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11458 from "module_11458" /* 11458 */;
import _mod11527 from "module_11527" /* 11527 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11530 from "module_11530" /* 11530 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11544 from "module_11544" /* 11544 */;
import _mod11545 from "module_11545" /* 11545 */;
import _mod11546 from "module_11546" /* 11546 */;
import { Chrono } from "module_11416" /* 11416 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11527.default(), , , , ];
  new module_11527.default();
  items[1] = new module_11530.default();
  new module_11530.default();
  items[2] = new module_11532.default();
  new module_11532.default();
  items[3] = new module_11531.default();
  new module_11531.default();
  items[4] = new module_11529.default();
  new module_11529.default();
  items1 = [new module_11545.default(), ];
  new module_11545.default();
  items1[1] = new module_11546.default();
  new module_11546.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11458.default));
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
  const _default = new module_11544.default();
  unshift(_default);
  return tmp;
}
const module_11458 = fn(_mod11458);
const module_11544 = fn(_mod11544);
const module_11527 = fn(_mod11527);
const module_11529 = fn(_mod11529);
const module_11530 = fn(_mod11530);
const module_11531 = fn(_mod11531);
const module_11532 = fn(_mod11532);
const module_11545 = fn(_mod11545);
const module_11546 = fn(_mod11546);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11544.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11544.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11416").Chrono(createConfiguration());
const Chrono_export = require("module_11416").Chrono;

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
