// Module ID: 9850
// Function ID: 9851
// Dependencies: [9767, 9774, 9776, 9800, 9851, 9853, 9854, 9855, 9856, 9857, 9858, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9850
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9851 from "module_9851" /* 9851 */;
import _mod9853 from "module_9853" /* 9853 */;
import _mod9854 from "module_9854" /* 9854 */;
import _mod9855 from "module_9855" /* 9855 */;
import _mod9856 from "module_9856" /* 9856 */;
import _mod9857 from "module_9857" /* 9857 */;
import _mod9858 from "module_9858" /* 9858 */;
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
  items = [new module_9800.default(flag2), , , ];
  new module_9800.default(flag2);
  items[1] = new module_9851.default();
  new module_9851.default();
  items[2] = new module_9853.default();
  new module_9853.default();
  items[3] = new module_9856.default();
  new module_9856.default();
  items1 = [new module_9854.default(), ];
  new module_9854.default();
  items1[1] = new module_9855.default();
  new module_9855.default();
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
  const _default = new module_9857.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9858.default();
  push2(_default1);
  return tmp;
}
const module_9800 = fn(_mod9800);
const module_9851 = fn(_mod9851);
const module_9853 = fn(_mod9853);
const module_9854 = fn(_mod9854);
const module_9855 = fn(_mod9855);
const module_9856 = fn(_mod9856);
const module_9857 = fn(_mod9857);
const module_9858 = fn(_mod9858);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9857.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9858.default();
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
