// Module ID: 10590
// Function ID: 10591
// Dependencies: [10507, 10514, 10516, 10540, 10591, 10593, 10594, 10595, 10596, 10597, 10598, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10590
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10591 from "module_10591" /* 10591 */;
import _mod10593 from "module_10593" /* 10593 */;
import _mod10594 from "module_10594" /* 10594 */;
import _mod10595 from "module_10595" /* 10595 */;
import _mod10596 from "module_10596" /* 10596 */;
import _mod10597 from "module_10597" /* 10597 */;
import _mod10598 from "module_10598" /* 10598 */;
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
  items = [new module_10540.default(flag2), , , ];
  new module_10540.default(flag2);
  items[1] = new module_10591.default();
  new module_10591.default();
  items[2] = new module_10593.default();
  new module_10593.default();
  items[3] = new module_10596.default();
  new module_10596.default();
  items1 = [new module_10594.default(), ];
  new module_10594.default();
  items1[1] = new module_10595.default();
  new module_10595.default();
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
  const _default = new module_10597.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10598.default();
  push2(_default1);
  return tmp;
}
const module_10540 = fn(_mod10540);
const module_10591 = fn(_mod10591);
const module_10593 = fn(_mod10593);
const module_10594 = fn(_mod10594);
const module_10595 = fn(_mod10595);
const module_10596 = fn(_mod10596);
const module_10597 = fn(_mod10597);
const module_10598 = fn(_mod10598);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10597.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10598.default();
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
