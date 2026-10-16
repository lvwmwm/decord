// Module ID: 10123
// Function ID: 10124
// Dependencies: [10124, 10126, 10127, 10128, 10129, 10130, 10131, 10051, 10058, 10060, 10132, 10133, 10097, 10091]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10123
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10097 from "module_10097" /* 10097 */;
import _mod10124 from "module_10124" /* 10124 */;
import _mod10126 from "module_10126" /* 10126 */;
import _mod10127 from "module_10127" /* 10127 */;
import _mod10128 from "module_10128" /* 10128 */;
import _mod10129 from "module_10129" /* 10129 */;
import _mod10130 from "module_10130" /* 10130 */;
import _mod10131 from "module_10131" /* 10131 */;
import _mod10132 from "module_10132" /* 10132 */;
import _mod10133 from "module_10133" /* 10133 */;
import { Chrono } from "module_10051" /* 10051 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10124.default(), , , , ];
  new module_10124.default();
  items[1] = new module_10128.default();
  new module_10128.default();
  items[2] = new module_10133.default();
  new module_10133.default();
  items[3] = new module_10129.default();
  new module_10129.default();
  items[4] = new module_10130.default();
  new module_10130.default();
  items1 = [new module_10132.default(), , ];
  new module_10132.default();
  items1[1] = new module_10131.default();
  new module_10131.default();
  items1[2] = new module_10126.default();
  new module_10126.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10097.default));
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
  const _default = new module_10127.default();
  unshift(_default);
  return tmp;
}
const module_10124 = fn(_mod10124);
const module_10126 = fn(_mod10126);
const module_10127 = fn(_mod10127);
const module_10128 = fn(_mod10128);
const module_10129 = fn(_mod10129);
const module_10130 = fn(_mod10130);
const module_10131 = fn(_mod10131);
const module_10132 = fn(_mod10132);
const module_10133 = fn(_mod10133);
const module_10097 = fn(_mod10097);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10127.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10051").Chrono(createConfiguration(true));
const Chrono_export = require("module_10051").Chrono;

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
