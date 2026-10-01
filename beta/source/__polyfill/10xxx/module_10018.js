// Module ID: 10018
// Function ID: 10019
// Dependencies: [9933, 9891, 9898, 9900, 10019, 10002, 10004, 10005, 10006, 10007, 10020, 10021, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10018
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod10002 from "module_10002" /* 10002 */;
import _mod10004 from "module_10004" /* 10004 */;
import _mod10005 from "module_10005" /* 10005 */;
import _mod10006 from "module_10006" /* 10006 */;
import _mod10007 from "module_10007" /* 10007 */;
import _mod10019 from "module_10019" /* 10019 */;
import _mod10020 from "module_10020" /* 10020 */;
import _mod10021 from "module_10021" /* 10021 */;
import { Chrono } from "module_9891" /* 9891 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10002.default(), , , , ];
  new module_10002.default();
  items[1] = new module_10005.default();
  new module_10005.default();
  items[2] = new module_10007.default();
  new module_10007.default();
  items[3] = new module_10006.default();
  new module_10006.default();
  items[4] = new module_10004.default();
  new module_10004.default();
  items1 = [new module_10020.default(), ];
  new module_10020.default();
  items1[1] = new module_10021.default();
  new module_10021.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9933.default));
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
  const _default = new module_10019.default();
  unshift(_default);
  return tmp;
}
const module_9933 = fn(_mod9933);
const module_10019 = fn(_mod10019);
const module_10002 = fn(_mod10002);
const module_10004 = fn(_mod10004);
const module_10005 = fn(_mod10005);
const module_10006 = fn(_mod10006);
const module_10007 = fn(_mod10007);
const module_10020 = fn(_mod10020);
const module_10021 = fn(_mod10021);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10019.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10019.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9891").Chrono(createConfiguration());
const Chrono_export = require("module_9891").Chrono;

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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
