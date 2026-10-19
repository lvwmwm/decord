// Module ID: 10187
// Function ID: 10188
// Dependencies: [10188, 10190, 10191, 10192, 10193, 10194, 10195, 10115, 10122, 10124, 10196, 10197, 10161, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10187
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10161 from "module_10161" /* 10161 */;
import _mod10188 from "module_10188" /* 10188 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10192 from "module_10192" /* 10192 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import _mod10197 from "module_10197" /* 10197 */;
import { Chrono } from "module_10115" /* 10115 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10188.default(), , , , ];
  new module_10188.default();
  items[1] = new module_10192.default();
  new module_10192.default();
  items[2] = new module_10197.default();
  new module_10197.default();
  items[3] = new module_10193.default();
  new module_10193.default();
  items[4] = new module_10194.default();
  new module_10194.default();
  items1 = [new module_10196.default(), , ];
  new module_10196.default();
  items1[1] = new module_10195.default();
  new module_10195.default();
  items1[2] = new module_10190.default();
  new module_10190.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10161.default));
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
  const _default = new module_10191.default();
  unshift(_default);
  return tmp;
}
const module_10188 = fn(_mod10188);
const module_10190 = fn(_mod10190);
const module_10191 = fn(_mod10191);
const module_10192 = fn(_mod10192);
const module_10193 = fn(_mod10193);
const module_10194 = fn(_mod10194);
const module_10195 = fn(_mod10195);
const module_10196 = fn(_mod10196);
const module_10197 = fn(_mod10197);
const module_10161 = fn(_mod10161);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10191.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10115").Chrono(createConfiguration(true));
const Chrono_export = require("module_10115").Chrono;

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
