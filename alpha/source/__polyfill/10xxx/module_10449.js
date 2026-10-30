// Module ID: 10449
// Function ID: 10450
// Dependencies: [10303, 10310, 10312, 10336, 10450, 10452, 10453, 10454, 10455, 10456, 10457, 10458, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10449
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10450 from "module_10450" /* 10450 */;
import _mod10452 from "module_10452" /* 10452 */;
import _mod10453 from "module_10453" /* 10453 */;
import _mod10454 from "module_10454" /* 10454 */;
import _mod10455 from "module_10455" /* 10455 */;
import _mod10456 from "module_10456" /* 10456 */;
import _mod10457 from "module_10457" /* 10457 */;
import _mod10458 from "module_10458" /* 10458 */;
import { Chrono } from "module_10303" /* 10303 */;

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
  items = [new module_10336.default(flag2), , , , ];
  new module_10336.default(flag2);
  items[1] = new module_10450.default();
  new module_10450.default();
  items[2] = new module_10452.default();
  new module_10452.default();
  items[3] = new module_10455.default();
  new module_10455.default();
  items[4] = new module_10458.default();
  new module_10458.default();
  items1 = [new module_10453.default(), ];
  new module_10453.default();
  items1[1] = new module_10454.default();
  new module_10454.default();
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
  const _default = new module_10456.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10457.default();
  push2(_default1);
  return tmp;
}
const module_10336 = fn(_mod10336);
const module_10450 = fn(_mod10450);
const module_10452 = fn(_mod10452);
const module_10453 = fn(_mod10453);
const module_10454 = fn(_mod10454);
const module_10455 = fn(_mod10455);
const module_10456 = fn(_mod10456);
const module_10457 = fn(_mod10457);
const module_10458 = fn(_mod10458);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10456.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10457.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10303").Chrono(createConfiguration(true));
const Chrono_export = require("module_10303").Chrono;

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
