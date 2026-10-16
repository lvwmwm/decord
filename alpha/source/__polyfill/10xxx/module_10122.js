// Module ID: 10122
// Function ID: 10123
// Dependencies: [10123, 10125, 10126, 10127, 10128, 10129, 10130, 10050, 10057, 10059, 10131, 10132, 10096, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10122
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10096 from "module_10096" /* 10096 */;
import _mod10123 from "module_10123" /* 10123 */;
import _mod10125 from "module_10125" /* 10125 */;
import _mod10126 from "module_10126" /* 10126 */;
import _mod10127 from "module_10127" /* 10127 */;
import _mod10128 from "module_10128" /* 10128 */;
import _mod10129 from "module_10129" /* 10129 */;
import _mod10130 from "module_10130" /* 10130 */;
import _mod10131 from "module_10131" /* 10131 */;
import _mod10132 from "module_10132" /* 10132 */;
import { Chrono } from "module_10050" /* 10050 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10123.default(), , , , ];
  new module_10123.default();
  items[1] = new module_10127.default();
  new module_10127.default();
  items[2] = new module_10132.default();
  new module_10132.default();
  items[3] = new module_10128.default();
  new module_10128.default();
  items[4] = new module_10129.default();
  new module_10129.default();
  items1 = [new module_10131.default(), , ];
  new module_10131.default();
  items1[1] = new module_10130.default();
  new module_10130.default();
  items1[2] = new module_10125.default();
  new module_10125.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10096.default));
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
  const _default = new module_10126.default();
  unshift(_default);
  return tmp;
}
const module_10123 = fn(_mod10123);
const module_10125 = fn(_mod10125);
const module_10126 = fn(_mod10126);
const module_10127 = fn(_mod10127);
const module_10128 = fn(_mod10128);
const module_10129 = fn(_mod10129);
const module_10130 = fn(_mod10130);
const module_10131 = fn(_mod10131);
const module_10132 = fn(_mod10132);
const module_10096 = fn(_mod10096);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10126.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10050").Chrono(createConfiguration(true));
const Chrono_export = require("module_10050").Chrono;

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
