// Module ID: 10520
// Function ID: 10521
// Dependencies: [10521, 10523, 10524, 10525, 10526, 10527, 10528, 10448, 10455, 10457, 10529, 10530, 10494, 10488]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10520
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10494 from "module_10494" /* 10494 */;
import _mod10521 from "module_10521" /* 10521 */;
import _mod10523 from "module_10523" /* 10523 */;
import _mod10524 from "module_10524" /* 10524 */;
import _mod10525 from "module_10525" /* 10525 */;
import _mod10526 from "module_10526" /* 10526 */;
import _mod10527 from "module_10527" /* 10527 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10529 from "module_10529" /* 10529 */;
import _mod10530 from "module_10530" /* 10530 */;
import { Chrono } from "module_10448" /* 10448 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10521.default(), , , , ];
  new module_10521.default();
  items[1] = new module_10525.default();
  new module_10525.default();
  items[2] = new module_10530.default();
  new module_10530.default();
  items[3] = new module_10526.default();
  new module_10526.default();
  items[4] = new module_10527.default();
  new module_10527.default();
  items1 = [new module_10529.default(), , ];
  new module_10529.default();
  items1[1] = new module_10528.default();
  new module_10528.default();
  items1[2] = new module_10523.default();
  new module_10523.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10494.default));
  return result;
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10524.default();
  unshift(_default);
  return tmp;
}
const module_10521 = fn(_mod10521);
const module_10523 = fn(_mod10523);
const module_10524 = fn(_mod10524);
const module_10525 = fn(_mod10525);
const module_10526 = fn(_mod10526);
const module_10527 = fn(_mod10527);
const module_10528 = fn(_mod10528);
const module_10529 = fn(_mod10529);
const module_10530 = fn(_mod10530);
const module_10494 = fn(_mod10494);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10524.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10448").Chrono(createConfiguration(true));
const Chrono_export = require("module_10448").Chrono;

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
