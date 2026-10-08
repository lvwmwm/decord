// Module ID: 9913
// Function ID: 9914
// Dependencies: [9767, 9774, 9776, 9800, 9914, 9916, 9917, 9918, 9919, 9920, 9921, 9922, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9913
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9914 from "module_9914" /* 9914 */;
import _mod9916 from "module_9916" /* 9916 */;
import _mod9917 from "module_9917" /* 9917 */;
import _mod9918 from "module_9918" /* 9918 */;
import _mod9919 from "module_9919" /* 9919 */;
import _mod9920 from "module_9920" /* 9920 */;
import _mod9921 from "module_9921" /* 9921 */;
import _mod9922 from "module_9922" /* 9922 */;
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
  items = [new module_9800.default(flag2), , , , ];
  new module_9800.default(flag2);
  items[1] = new module_9914.default();
  new module_9914.default();
  items[2] = new module_9916.default();
  new module_9916.default();
  items[3] = new module_9919.default();
  new module_9919.default();
  items[4] = new module_9922.default();
  new module_9922.default();
  items1 = [new module_9917.default(), ];
  new module_9917.default();
  items1[1] = new module_9918.default();
  new module_9918.default();
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
  const _default = new module_9920.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9921.default();
  push2(_default1);
  return tmp;
}
const module_9800 = fn(_mod9800);
const module_9914 = fn(_mod9914);
const module_9916 = fn(_mod9916);
const module_9917 = fn(_mod9917);
const module_9918 = fn(_mod9918);
const module_9919 = fn(_mod9919);
const module_9920 = fn(_mod9920);
const module_9921 = fn(_mod9921);
const module_9922 = fn(_mod9922);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9920.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9921.default();
push2(_default1);
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
