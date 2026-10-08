// Module ID: 9839
// Function ID: 9840
// Dependencies: [9840, 9842, 9843, 9844, 9845, 9846, 9847, 9767, 9774, 9776, 9848, 9849, 9813, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9839
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9813 from "module_9813" /* 9813 */;
import _mod9840 from "module_9840" /* 9840 */;
import _mod9842 from "module_9842" /* 9842 */;
import _mod9843 from "module_9843" /* 9843 */;
import _mod9844 from "module_9844" /* 9844 */;
import _mod9845 from "module_9845" /* 9845 */;
import _mod9846 from "module_9846" /* 9846 */;
import _mod9847 from "module_9847" /* 9847 */;
import _mod9848 from "module_9848" /* 9848 */;
import _mod9849 from "module_9849" /* 9849 */;
import { Chrono } from "module_9767" /* 9767 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9840.default(), , , , ];
  new module_9840.default();
  items[1] = new module_9844.default();
  new module_9844.default();
  items[2] = new module_9849.default();
  new module_9849.default();
  items[3] = new module_9845.default();
  new module_9845.default();
  items[4] = new module_9846.default();
  new module_9846.default();
  items1 = [new module_9848.default(), , ];
  new module_9848.default();
  items1[1] = new module_9847.default();
  new module_9847.default();
  items1[2] = new module_9842.default();
  new module_9842.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9813.default));
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
  const _default = new module_9843.default();
  unshift(_default);
  return tmp;
}
const module_9840 = fn(_mod9840);
const module_9842 = fn(_mod9842);
const module_9843 = fn(_mod9843);
const module_9844 = fn(_mod9844);
const module_9845 = fn(_mod9845);
const module_9846 = fn(_mod9846);
const module_9847 = fn(_mod9847);
const module_9848 = fn(_mod9848);
const module_9849 = fn(_mod9849);
const module_9813 = fn(_mod9813);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9843.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9767").Chrono(createConfiguration(true));
const Chrono_export = require("module_9767").Chrono;

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
