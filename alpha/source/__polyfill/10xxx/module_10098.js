// Module ID: 10098
// Function ID: 10099
// Dependencies: [10051, 10058, 10060, 10084, 10096, 10099, 10100, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10091]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10098
import _mod10084 from "module_10084" /* 10084 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10096 from "module_10096" /* 10096 */;
import _mod10099 from "module_10099" /* 10099 */;
import _mod10100 from "module_10100" /* 10100 */;
import _mod10102 from "module_10102" /* 10102 */;
import _mod10103 from "module_10103" /* 10103 */;
import _mod10104 from "module_10104" /* 10104 */;
import _mod10105 from "module_10105" /* 10105 */;
import _mod10106 from "module_10106" /* 10106 */;
import _mod10107 from "module_10107" /* 10107 */;
import _mod10108 from "module_10108" /* 10108 */;
import _mod10109 from "module_10109" /* 10109 */;
import { Chrono } from "module_10051" /* 10051 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10096.default(), , , , , , ];
  new module_10096.default();
  items[1] = new module_10084.default(flag2);
  new module_10084.default(flag2);
  items[2] = new module_10099.default();
  new module_10099.default();
  items[3] = new module_10102.default();
  new module_10102.default();
  items[4] = new module_10107.default();
  new module_10107.default();
  items[5] = new module_10100.default();
  new module_10100.default();
  items[6] = new module_10109.default();
  new module_10109.default();
  items1 = [new module_10103.default(), ];
  new module_10103.default();
  items1[1] = new module_10104.default();
  new module_10104.default();
  return includeCommonConfiguration(obj, flag);
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10106.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10105.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10108.default();
  unshift3(_default2);
  return tmp;
}
const module_10084 = fn(_mod10084);
const module_10096 = fn(_mod10096);
const module_10099 = fn(_mod10099);
const module_10100 = fn(_mod10100);
const module_10102 = fn(_mod10102);
const module_10103 = fn(_mod10103);
const module_10104 = fn(_mod10104);
const module_10105 = fn(_mod10105);
const module_10106 = fn(_mod10106);
const module_10107 = fn(_mod10107);
const module_10108 = fn(_mod10108);
const module_10109 = fn(_mod10109);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10106.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10105.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10108.default();
unshift3(_default2);
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
