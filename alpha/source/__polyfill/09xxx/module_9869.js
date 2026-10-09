// Module ID: 9869
// Function ID: 9870
// Dependencies: [9786, 9793, 9795, 9819, 9870, 9872, 9873, 9874, 9875, 9876, 9877, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9869
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9870 from "module_9870" /* 9870 */;
import _mod9872 from "module_9872" /* 9872 */;
import _mod9873 from "module_9873" /* 9873 */;
import _mod9874 from "module_9874" /* 9874 */;
import _mod9875 from "module_9875" /* 9875 */;
import _mod9876 from "module_9876" /* 9876 */;
import _mod9877 from "module_9877" /* 9877 */;
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
  items = [new module_9819.default(flag2), , , ];
  new module_9819.default(flag2);
  items[1] = new module_9870.default();
  new module_9870.default();
  items[2] = new module_9872.default();
  new module_9872.default();
  items[3] = new module_9875.default();
  new module_9875.default();
  items1 = [new module_9873.default(), ];
  new module_9873.default();
  items1[1] = new module_9874.default();
  new module_9874.default();
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
  const _default = new module_9876.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9877.default();
  push2(_default1);
  return tmp;
}
const module_9819 = fn(_mod9819);
const module_9870 = fn(_mod9870);
const module_9872 = fn(_mod9872);
const module_9873 = fn(_mod9873);
const module_9874 = fn(_mod9874);
const module_9875 = fn(_mod9875);
const module_9876 = fn(_mod9876);
const module_9877 = fn(_mod9877);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9876.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9877.default();
push2(_default1);
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
