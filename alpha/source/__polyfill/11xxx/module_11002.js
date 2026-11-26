// Module ID: 11002
// Function ID: 11003
// Dependencies: [10917, 10875, 10882, 10884, 11003, 10986, 10988, 10989, 10990, 10991, 11004, 11005, 10915]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11002
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10915 */;
import _mod10917 from "module_10917" /* 10917 */;
import _mod10986 from "module_10986" /* 10986 */;
import _mod10988 from "module_10988" /* 10988 */;
import _mod10989 from "module_10989" /* 10989 */;
import _mod10990 from "module_10990" /* 10990 */;
import _mod10991 from "module_10991" /* 10991 */;
import _mod11003 from "module_11003" /* 11003 */;
import _mod11004 from "module_11004" /* 11004 */;
import _mod11005 from "module_11005" /* 11005 */;
import { Chrono } from "module_10875" /* 10875 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10986.default(), , , , ];
  new module_10986.default();
  items[1] = new module_10989.default();
  new module_10989.default();
  items[2] = new module_10991.default();
  new module_10991.default();
  items[3] = new module_10990.default();
  new module_10990.default();
  items[4] = new module_10988.default();
  new module_10988.default();
  items1 = [new module_11004.default(), ];
  new module_11004.default();
  items1[1] = new module_11005.default();
  new module_11005.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10917.default));
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
  const _default = new module_11003.default();
  unshift(_default);
  return tmp;
}
const module_10917 = fn(_mod10917);
const module_11003 = fn(_mod11003);
const module_10986 = fn(_mod10986);
const module_10988 = fn(_mod10988);
const module_10989 = fn(_mod10989);
const module_10990 = fn(_mod10990);
const module_10991 = fn(_mod10991);
const module_11004 = fn(_mod11004);
const module_11005 = fn(_mod11005);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11003.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11003.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10875").Chrono(createConfiguration());
const Chrono_export = require("module_10875").Chrono;

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
