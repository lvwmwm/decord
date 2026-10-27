// Module ID: 10285
// Function ID: 10286
// Dependencies: [10286, 10288, 10289, 10290, 10291, 10292, 10293, 10213, 10220, 10222, 10294, 10295, 10259, 10253]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10285
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10253 */;
import _mod10259 from "module_10259" /* 10259 */;
import _mod10286 from "module_10286" /* 10286 */;
import _mod10288 from "module_10288" /* 10288 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10293 from "module_10293" /* 10293 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import { Chrono } from "module_10213" /* 10213 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10286.default(), , , , ];
  new module_10286.default();
  items[1] = new module_10290.default();
  new module_10290.default();
  items[2] = new module_10295.default();
  new module_10295.default();
  items[3] = new module_10291.default();
  new module_10291.default();
  items[4] = new module_10292.default();
  new module_10292.default();
  items1 = [new module_10294.default(), , ];
  new module_10294.default();
  items1[1] = new module_10293.default();
  new module_10293.default();
  items1[2] = new module_10288.default();
  new module_10288.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10259.default));
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
  const _default = new module_10289.default();
  unshift(_default);
  return tmp;
}
const module_10286 = fn(_mod10286);
const module_10288 = fn(_mod10288);
const module_10289 = fn(_mod10289);
const module_10290 = fn(_mod10290);
const module_10291 = fn(_mod10291);
const module_10292 = fn(_mod10292);
const module_10293 = fn(_mod10293);
const module_10294 = fn(_mod10294);
const module_10295 = fn(_mod10295);
const module_10259 = fn(_mod10259);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10289.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10213").Chrono(createConfiguration(true));
const Chrono_export = require("module_10213").Chrono;

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
