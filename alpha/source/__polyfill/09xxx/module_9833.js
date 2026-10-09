// Module ID: 9833
// Function ID: 9834
// Dependencies: [9786, 9793, 9795, 9819, 9831, 9834, 9835, 9837, 9838, 9839, 9840, 9841, 9842, 9843, 9844, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9833
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9831 from "module_9831" /* 9831 */;
import _mod9834 from "module_9834" /* 9834 */;
import _mod9835 from "module_9835" /* 9835 */;
import _mod9837 from "module_9837" /* 9837 */;
import _mod9838 from "module_9838" /* 9838 */;
import _mod9839 from "module_9839" /* 9839 */;
import _mod9840 from "module_9840" /* 9840 */;
import _mod9841 from "module_9841" /* 9841 */;
import _mod9842 from "module_9842" /* 9842 */;
import _mod9843 from "module_9843" /* 9843 */;
import _mod9844 from "module_9844" /* 9844 */;
import { Chrono } from "module_9786" /* 9786 */;

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
  items = [new module_9831.default(), , , , , , ];
  new module_9831.default();
  items[1] = new module_9819.default(flag2);
  new module_9819.default(flag2);
  items[2] = new module_9834.default();
  new module_9834.default();
  items[3] = new module_9837.default();
  new module_9837.default();
  items[4] = new module_9842.default();
  new module_9842.default();
  items[5] = new module_9835.default();
  new module_9835.default();
  items[6] = new module_9844.default();
  new module_9844.default();
  items1 = [new module_9838.default(), ];
  new module_9838.default();
  items1[1] = new module_9839.default();
  new module_9839.default();
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
  const _default = new module_9841.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9840.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9843.default();
  unshift3(_default2);
  return tmp;
}
const module_9819 = fn(_mod9819);
const module_9831 = fn(_mod9831);
const module_9834 = fn(_mod9834);
const module_9835 = fn(_mod9835);
const module_9837 = fn(_mod9837);
const module_9838 = fn(_mod9838);
const module_9839 = fn(_mod9839);
const module_9840 = fn(_mod9840);
const module_9841 = fn(_mod9841);
const module_9842 = fn(_mod9842);
const module_9843 = fn(_mod9843);
const module_9844 = fn(_mod9844);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9841.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9840.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9843.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));
const Chrono_export = require("module_9786").Chrono;

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
