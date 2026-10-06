// Module ID: 10000
// Function ID: 10001
// Dependencies: [10001, 10003, 10004, 10005, 10006, 10007, 10008, 9928, 9935, 9937, 10009, 10010, 9974, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10000
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9974 from "module_9974" /* 9974 */;
import _mod10001 from "module_10001" /* 10001 */;
import _mod10003 from "module_10003" /* 10003 */;
import _mod10004 from "module_10004" /* 10004 */;
import _mod10005 from "module_10005" /* 10005 */;
import _mod10006 from "module_10006" /* 10006 */;
import _mod10007 from "module_10007" /* 10007 */;
import _mod10008 from "module_10008" /* 10008 */;
import _mod10009 from "module_10009" /* 10009 */;
import _mod10010 from "module_10010" /* 10010 */;
import { Chrono } from "module_9928" /* 9928 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10001.default(), , , , ];
  new module_10001.default();
  items[1] = new module_10005.default();
  new module_10005.default();
  items[2] = new module_10010.default();
  new module_10010.default();
  items[3] = new module_10006.default();
  new module_10006.default();
  items[4] = new module_10007.default();
  new module_10007.default();
  items1 = [new module_10009.default(), , ];
  new module_10009.default();
  items1[1] = new module_10008.default();
  new module_10008.default();
  items1[2] = new module_10003.default();
  new module_10003.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9974.default));
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
  const _default = new module_10004.default();
  unshift(_default);
  return tmp;
}
const module_10001 = fn(_mod10001);
const module_10003 = fn(_mod10003);
const module_10004 = fn(_mod10004);
const module_10005 = fn(_mod10005);
const module_10006 = fn(_mod10006);
const module_10007 = fn(_mod10007);
const module_10008 = fn(_mod10008);
const module_10009 = fn(_mod10009);
const module_10010 = fn(_mod10010);
const module_9974 = fn(_mod9974);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10004.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9928").Chrono(createConfiguration(true));
const Chrono_export = require("module_9928").Chrono;

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
