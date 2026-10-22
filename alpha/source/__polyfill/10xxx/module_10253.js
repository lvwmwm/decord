// Module ID: 10253
// Function ID: 10254
// Dependencies: [10254, 10256, 10257, 10258, 10259, 10260, 10261, 10181, 10188, 10190, 10262, 10263, 10227, 10221]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10253
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
import _mod10227 from "module_10227" /* 10227 */;
import _mod10254 from "module_10254" /* 10254 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
import _mod10260 from "module_10260" /* 10260 */;
import _mod10261 from "module_10261" /* 10261 */;
import _mod10262 from "module_10262" /* 10262 */;
import _mod10263 from "module_10263" /* 10263 */;
import { Chrono } from "module_10181" /* 10181 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10254.default(), , , , ];
  new module_10254.default();
  items[1] = new module_10258.default();
  new module_10258.default();
  items[2] = new module_10263.default();
  new module_10263.default();
  items[3] = new module_10259.default();
  new module_10259.default();
  items[4] = new module_10260.default();
  new module_10260.default();
  items1 = [new module_10262.default(), , ];
  new module_10262.default();
  items1[1] = new module_10261.default();
  new module_10261.default();
  items1[2] = new module_10256.default();
  new module_10256.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10227.default));
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
  const _default = new module_10257.default();
  unshift(_default);
  return tmp;
}
const module_10254 = fn(_mod10254);
const module_10256 = fn(_mod10256);
const module_10257 = fn(_mod10257);
const module_10258 = fn(_mod10258);
const module_10259 = fn(_mod10259);
const module_10260 = fn(_mod10260);
const module_10261 = fn(_mod10261);
const module_10262 = fn(_mod10262);
const module_10263 = fn(_mod10263);
const module_10227 = fn(_mod10227);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10257.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10181").Chrono(createConfiguration(true));
const Chrono_export = require("module_10181").Chrono;

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
