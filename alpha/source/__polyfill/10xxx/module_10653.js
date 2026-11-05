// Module ID: 10653
// Function ID: 10654
// Dependencies: [10507, 10514, 10516, 10540, 10654, 10656, 10657, 10658, 10659, 10660, 10661, 10662, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10653
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10654 from "module_10654" /* 10654 */;
import _mod10656 from "module_10656" /* 10656 */;
import _mod10657 from "module_10657" /* 10657 */;
import _mod10658 from "module_10658" /* 10658 */;
import _mod10659 from "module_10659" /* 10659 */;
import _mod10660 from "module_10660" /* 10660 */;
import _mod10661 from "module_10661" /* 10661 */;
import _mod10662 from "module_10662" /* 10662 */;
import { Chrono } from "module_10507" /* 10507 */;

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
  items = [new module_10540.default(flag2), , , , ];
  new module_10540.default(flag2);
  items[1] = new module_10654.default();
  new module_10654.default();
  items[2] = new module_10656.default();
  new module_10656.default();
  items[3] = new module_10659.default();
  new module_10659.default();
  items[4] = new module_10662.default();
  new module_10662.default();
  items1 = [new module_10657.default(), ];
  new module_10657.default();
  items1[1] = new module_10658.default();
  new module_10658.default();
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
  const _default = new module_10660.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10661.default();
  push2(_default1);
  return tmp;
}
const module_10540 = fn(_mod10540);
const module_10654 = fn(_mod10654);
const module_10656 = fn(_mod10656);
const module_10657 = fn(_mod10657);
const module_10658 = fn(_mod10658);
const module_10659 = fn(_mod10659);
const module_10660 = fn(_mod10660);
const module_10661 = fn(_mod10661);
const module_10662 = fn(_mod10662);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10660.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10661.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10507").Chrono(createConfiguration(true));
const Chrono_export = require("module_10507").Chrono;

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
