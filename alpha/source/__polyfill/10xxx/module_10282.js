// Module ID: 10282
// Function ID: 10283
// Dependencies: [10283, 10285, 10286, 10287, 10288, 10289, 10290, 10210, 10217, 10219, 10291, 10292, 10256, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10282
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10283 from "module_10283" /* 10283 */;
import _mod10285 from "module_10285" /* 10285 */;
import _mod10286 from "module_10286" /* 10286 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10288 from "module_10288" /* 10288 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import { Chrono } from "module_10210" /* 10210 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10283.default(), , , , ];
  new module_10283.default();
  items[1] = new module_10287.default();
  new module_10287.default();
  items[2] = new module_10292.default();
  new module_10292.default();
  items[3] = new module_10288.default();
  new module_10288.default();
  items[4] = new module_10289.default();
  new module_10289.default();
  items1 = [new module_10291.default(), , ];
  new module_10291.default();
  items1[1] = new module_10290.default();
  new module_10290.default();
  items1[2] = new module_10285.default();
  new module_10285.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10256.default));
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
  const _default = new module_10286.default();
  unshift(_default);
  return tmp;
}
const module_10283 = fn(_mod10283);
const module_10285 = fn(_mod10285);
const module_10286 = fn(_mod10286);
const module_10287 = fn(_mod10287);
const module_10288 = fn(_mod10288);
const module_10289 = fn(_mod10289);
const module_10290 = fn(_mod10290);
const module_10291 = fn(_mod10291);
const module_10292 = fn(_mod10292);
const module_10256 = fn(_mod10256);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10286.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10210").Chrono(createConfiguration(true));
const Chrono_export = require("module_10210").Chrono;

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
