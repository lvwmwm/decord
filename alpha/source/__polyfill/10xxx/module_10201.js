// Module ID: 10201
// Function ID: 10202
// Dependencies: [10202, 10204, 10205, 10206, 10207, 10208, 10209, 10129, 10136, 10138, 10210, 10211, 10175, 10169]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10201
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10169 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10206 from "module_10206" /* 10206 */;
import _mod10207 from "module_10207" /* 10207 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10209 from "module_10209" /* 10209 */;
import _mod10210 from "module_10210" /* 10210 */;
import _mod10211 from "module_10211" /* 10211 */;
import { Chrono } from "module_10129" /* 10129 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10202.default(), , , , ];
  new module_10202.default();
  items[1] = new module_10206.default();
  new module_10206.default();
  items[2] = new module_10211.default();
  new module_10211.default();
  items[3] = new module_10207.default();
  new module_10207.default();
  items[4] = new module_10208.default();
  new module_10208.default();
  items1 = [new module_10210.default(), , ];
  new module_10210.default();
  items1[1] = new module_10209.default();
  new module_10209.default();
  items1[2] = new module_10204.default();
  new module_10204.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10175.default));
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
  const _default = new module_10205.default();
  unshift(_default);
  return tmp;
}
const module_10202 = fn(_mod10202);
const module_10204 = fn(_mod10204);
const module_10205 = fn(_mod10205);
const module_10206 = fn(_mod10206);
const module_10207 = fn(_mod10207);
const module_10208 = fn(_mod10208);
const module_10209 = fn(_mod10209);
const module_10210 = fn(_mod10210);
const module_10211 = fn(_mod10211);
const module_10175 = fn(_mod10175);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10205.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10129").Chrono(createConfiguration(true));
const Chrono_export = require("module_10129").Chrono;

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
