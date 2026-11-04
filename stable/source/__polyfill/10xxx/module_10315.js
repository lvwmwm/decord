// Module ID: 10315
// Function ID: 10316
// Dependencies: [10316, 10318, 10319, 10320, 10321, 10322, 10323, 10243, 10250, 10252, 10324, 10325, 10289, 10283]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10315
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10316 from "module_10316" /* 10316 */;
import _mod10318 from "module_10318" /* 10318 */;
import _mod10319 from "module_10319" /* 10319 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10321 from "module_10321" /* 10321 */;
import _mod10322 from "module_10322" /* 10322 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10325 from "module_10325" /* 10325 */;
import { Chrono } from "module_10243" /* 10243 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10316.default(), , , , ];
  new module_10316.default();
  items[1] = new module_10320.default();
  new module_10320.default();
  items[2] = new module_10325.default();
  new module_10325.default();
  items[3] = new module_10321.default();
  new module_10321.default();
  items[4] = new module_10322.default();
  new module_10322.default();
  items1 = [new module_10324.default(), , ];
  new module_10324.default();
  items1[1] = new module_10323.default();
  new module_10323.default();
  items1[2] = new module_10318.default();
  new module_10318.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10289.default));
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
  const _default = new module_10319.default();
  unshift(_default);
  return tmp;
}
const module_10316 = fn(_mod10316);
const module_10318 = fn(_mod10318);
const module_10319 = fn(_mod10319);
const module_10320 = fn(_mod10320);
const module_10321 = fn(_mod10321);
const module_10322 = fn(_mod10322);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);
const module_10325 = fn(_mod10325);
const module_10289 = fn(_mod10289);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10319.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10243").Chrono(createConfiguration(true));
const Chrono_export = require("module_10243").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
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
