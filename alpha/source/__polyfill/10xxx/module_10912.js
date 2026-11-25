// Module ID: 10912
// Function ID: 10913
// Dependencies: [10829, 10836, 10838, 10862, 10913, 10915, 10916, 10917, 10918, 10919, 10920, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10912
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10913 from "module_10913" /* 10913 */;
import _mod10915 from "module_10915" /* 10915 */;
import _mod10916 from "module_10916" /* 10916 */;
import _mod10917 from "module_10917" /* 10917 */;
import _mod10918 from "module_10918" /* 10918 */;
import _mod10919 from "module_10919" /* 10919 */;
import _mod10920 from "module_10920" /* 10920 */;
import { Chrono } from "module_10829" /* 10829 */;

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
  items = [new module_10862.default(flag2), , , ];
  new module_10862.default(flag2);
  items[1] = new module_10913.default();
  new module_10913.default();
  items[2] = new module_10915.default();
  new module_10915.default();
  items[3] = new module_10918.default();
  new module_10918.default();
  items1 = [new module_10916.default(), ];
  new module_10916.default();
  items1[1] = new module_10917.default();
  new module_10917.default();
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
  const _default = new module_10919.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10920.default();
  push2(_default1);
  return tmp;
}
const module_10862 = fn(_mod10862);
const module_10913 = fn(_mod10913);
const module_10915 = fn(_mod10915);
const module_10916 = fn(_mod10916);
const module_10917 = fn(_mod10917);
const module_10918 = fn(_mod10918);
const module_10919 = fn(_mod10919);
const module_10920 = fn(_mod10920);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10919.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10920.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10829").Chrono(createConfiguration(true));
const Chrono_export = require("module_10829").Chrono;

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
export const casual = chrono;
export const strict = chrono1;
