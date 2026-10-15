// Module ID: 10106
// Function ID: 10107
// Dependencies: [10107, 10109, 10110, 10111, 10112, 10113, 10114, 10034, 10041, 10043, 10115, 10116, 10080, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10106
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10080 from "module_10080" /* 10080 */;
import _mod10107 from "module_10107" /* 10107 */;
import _mod10109 from "module_10109" /* 10109 */;
import _mod10110 from "module_10110" /* 10110 */;
import _mod10111 from "module_10111" /* 10111 */;
import _mod10112 from "module_10112" /* 10112 */;
import _mod10113 from "module_10113" /* 10113 */;
import _mod10114 from "module_10114" /* 10114 */;
import _mod10115 from "module_10115" /* 10115 */;
import _mod10116 from "module_10116" /* 10116 */;
import { Chrono } from "module_10034" /* 10034 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10107.default(), , , , ];
  new module_10107.default();
  items[1] = new module_10111.default();
  new module_10111.default();
  items[2] = new module_10116.default();
  new module_10116.default();
  items[3] = new module_10112.default();
  new module_10112.default();
  items[4] = new module_10113.default();
  new module_10113.default();
  items1 = [new module_10115.default(), , ];
  new module_10115.default();
  items1[1] = new module_10114.default();
  new module_10114.default();
  items1[2] = new module_10109.default();
  new module_10109.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10080.default));
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
  const _default = new module_10110.default();
  unshift(_default);
  return tmp;
}
const module_10107 = fn(_mod10107);
const module_10109 = fn(_mod10109);
const module_10110 = fn(_mod10110);
const module_10111 = fn(_mod10111);
const module_10112 = fn(_mod10112);
const module_10113 = fn(_mod10113);
const module_10114 = fn(_mod10114);
const module_10115 = fn(_mod10115);
const module_10116 = fn(_mod10116);
const module_10080 = fn(_mod10080);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10110.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10034").Chrono(createConfiguration(true));
const Chrono_export = require("module_10034").Chrono;

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
