// Module ID: 11557
// Function ID: 11558
// Dependencies: [11411, 11418, 11420, 11444, 11558, 11560, 11561, 11562, 11563, 11564, 11565, 11566, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11557
import _mod11444 from "module_11444" /* 11444 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11558 from "module_11558" /* 11558 */;
import _mod11560 from "module_11560" /* 11560 */;
import _mod11561 from "module_11561" /* 11561 */;
import _mod11562 from "module_11562" /* 11562 */;
import _mod11563 from "module_11563" /* 11563 */;
import _mod11564 from "module_11564" /* 11564 */;
import _mod11565 from "module_11565" /* 11565 */;
import _mod11566 from "module_11566" /* 11566 */;
import { Chrono } from "module_11411" /* 11411 */;

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
  items = [new module_11444.default(flag2), , , , ];
  new module_11444.default(flag2);
  items[1] = new module_11558.default();
  new module_11558.default();
  items[2] = new module_11560.default();
  new module_11560.default();
  items[3] = new module_11563.default();
  new module_11563.default();
  items[4] = new module_11566.default();
  new module_11566.default();
  items1 = [new module_11561.default(), ];
  new module_11561.default();
  items1[1] = new module_11562.default();
  new module_11562.default();
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
  const _default = new module_11564.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11565.default();
  push2(_default1);
  return tmp;
}
const module_11444 = fn(_mod11444);
const module_11558 = fn(_mod11558);
const module_11560 = fn(_mod11560);
const module_11561 = fn(_mod11561);
const module_11562 = fn(_mod11562);
const module_11563 = fn(_mod11563);
const module_11564 = fn(_mod11564);
const module_11565 = fn(_mod11565);
const module_11566 = fn(_mod11566);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11564.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11565.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11411").Chrono(createConfiguration(true));
const Chrono_export = require("module_11411").Chrono;

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
