// Module ID: 9909
// Function ID: 9910
// Dependencies: [9826, 9833, 9835, 9859, 9910, 9912, 9913, 9914, 9915, 9916, 9917, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9909
import _mod9859 from "module_9859" /* 9859 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9910 from "module_9910" /* 9910 */;
import _mod9912 from "module_9912" /* 9912 */;
import _mod9913 from "module_9913" /* 9913 */;
import _mod9914 from "module_9914" /* 9914 */;
import _mod9915 from "module_9915" /* 9915 */;
import _mod9916 from "module_9916" /* 9916 */;
import _mod9917 from "module_9917" /* 9917 */;
import { Chrono } from "module_9826" /* 9826 */;

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
  items = [new module_9859.default(flag2), , , ];
  new module_9859.default(flag2);
  items[1] = new module_9910.default();
  new module_9910.default();
  items[2] = new module_9912.default();
  new module_9912.default();
  items[3] = new module_9915.default();
  new module_9915.default();
  items1 = [new module_9913.default(), ];
  new module_9913.default();
  items1[1] = new module_9914.default();
  new module_9914.default();
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
  const push = parsers.push;
  const _default = new module_9916.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9917.default();
  push2(_default1);
  return tmp;
}
const module_9859 = fn(_mod9859);
const module_9910 = fn(_mod9910);
const module_9912 = fn(_mod9912);
const module_9913 = fn(_mod9913);
const module_9914 = fn(_mod9914);
const module_9915 = fn(_mod9915);
const module_9916 = fn(_mod9916);
const module_9917 = fn(_mod9917);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9916.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9917.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9826").Chrono(createConfiguration(true));
const Chrono_export = require("module_9826").Chrono;

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
