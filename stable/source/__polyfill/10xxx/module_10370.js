// Module ID: 10370
// Function ID: 10371
// Dependencies: [10285, 10243, 10250, 10252, 10371, 10354, 10356, 10357, 10358, 10359, 10372, 10373, 10283]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10370
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10285 from "module_10285" /* 10285 */;
import _mod10354 from "module_10354" /* 10354 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10357 from "module_10357" /* 10357 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;
import _mod10371 from "module_10371" /* 10371 */;
import _mod10372 from "module_10372" /* 10372 */;
import _mod10373 from "module_10373" /* 10373 */;
import { Chrono } from "module_10243" /* 10243 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10354.default(), , , , ];
  new module_10354.default();
  items[1] = new module_10357.default();
  new module_10357.default();
  items[2] = new module_10359.default();
  new module_10359.default();
  items[3] = new module_10358.default();
  new module_10358.default();
  items[4] = new module_10356.default();
  new module_10356.default();
  items1 = [new module_10372.default(), ];
  new module_10372.default();
  items1[1] = new module_10373.default();
  new module_10373.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10285.default));
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
  const _default = new module_10371.default();
  unshift(_default);
  return tmp;
}
const module_10285 = fn(_mod10285);
const module_10371 = fn(_mod10371);
const module_10354 = fn(_mod10354);
const module_10356 = fn(_mod10356);
const module_10357 = fn(_mod10357);
const module_10358 = fn(_mod10358);
const module_10359 = fn(_mod10359);
const module_10372 = fn(_mod10372);
const module_10373 = fn(_mod10373);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10371.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10371.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10243").Chrono(createConfiguration());
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
