// Module ID: 9826
// Function ID: 9827
// Dependencies: [9767, 9774, 9776, 9827, 9828, 9800, 9829, 9830, 9831, 9832, 9834, 9835, 9836, 9837, 9838, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9826
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9827 from "module_9827" /* 9827 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9829 from "module_9829" /* 9829 */;
import _mod9830 from "module_9830" /* 9830 */;
import _mod9831 from "module_9831" /* 9831 */;
import _mod9832 from "module_9832" /* 9832 */;
import _mod9834 from "module_9834" /* 9834 */;
import _mod9835 from "module_9835" /* 9835 */;
import _mod9836 from "module_9836" /* 9836 */;
import _mod9837 from "module_9837" /* 9837 */;
import _mod9838 from "module_9838" /* 9838 */;
import { Chrono } from "module_9767" /* 9767 */;

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
  items = [new module_9800.default(flag2), , , , , , ];
  new module_9800.default(flag2);
  items[1] = new module_9835.default();
  new module_9835.default();
  items[2] = new module_9829.default();
  new module_9829.default();
  items[3] = new module_9834.default();
  new module_9834.default();
  items[4] = new module_9836.default();
  new module_9836.default();
  items[5] = new module_9837.default();
  new module_9837.default();
  items[6] = new module_9832.default();
  new module_9832.default();
  items1 = [new module_9830.default(), ];
  new module_9830.default();
  items1[1] = new module_9831.default();
  new module_9831.default();
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
  const _default = new module_9827.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9828.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9838.default();
  unshift3(_default2);
  return tmp;
}
const module_9827 = fn(_mod9827);
const module_9828 = fn(_mod9828);
const module_9800 = fn(_mod9800);
const module_9829 = fn(_mod9829);
const module_9830 = fn(_mod9830);
const module_9831 = fn(_mod9831);
const module_9832 = fn(_mod9832);
const module_9834 = fn(_mod9834);
const module_9835 = fn(_mod9835);
const module_9836 = fn(_mod9836);
const module_9837 = fn(_mod9837);
const module_9838 = fn(_mod9838);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9827.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9828.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9838.default();
unshift3(_default2);
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
