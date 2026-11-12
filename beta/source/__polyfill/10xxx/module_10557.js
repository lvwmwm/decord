// Module ID: 10557
// Function ID: 10558
// Dependencies: [10474, 10481, 10483, 10507, 10558, 10560, 10561, 10562, 10563, 10564, 10565, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10557
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10558 from "module_10558" /* 10558 */;
import _mod10560 from "module_10560" /* 10560 */;
import _mod10561 from "module_10561" /* 10561 */;
import _mod10562 from "module_10562" /* 10562 */;
import _mod10563 from "module_10563" /* 10563 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10565 from "module_10565" /* 10565 */;
import { Chrono } from "module_10474" /* 10474 */;

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
  items = [new module_10507.default(flag2), , , ];
  new module_10507.default(flag2);
  items[1] = new module_10558.default();
  new module_10558.default();
  items[2] = new module_10560.default();
  new module_10560.default();
  items[3] = new module_10563.default();
  new module_10563.default();
  items1 = [new module_10561.default(), ];
  new module_10561.default();
  items1[1] = new module_10562.default();
  new module_10562.default();
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
  const _default = new module_10564.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10565.default();
  push2(_default1);
  return tmp;
}
const module_10507 = fn(_mod10507);
const module_10558 = fn(_mod10558);
const module_10560 = fn(_mod10560);
const module_10561 = fn(_mod10561);
const module_10562 = fn(_mod10562);
const module_10563 = fn(_mod10563);
const module_10564 = fn(_mod10564);
const module_10565 = fn(_mod10565);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10564.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10565.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10474").Chrono(createConfiguration(true));
const Chrono_export = require("module_10474").Chrono;

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
