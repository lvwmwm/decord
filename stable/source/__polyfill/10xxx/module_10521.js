// Module ID: 10521
// Function ID: 10522
// Dependencies: [10474, 10481, 10483, 10507, 10519, 10522, 10523, 10525, 10526, 10527, 10528, 10529, 10530, 10531, 10532, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10521
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10519 from "module_10519" /* 10519 */;
import _mod10522 from "module_10522" /* 10522 */;
import _mod10523 from "module_10523" /* 10523 */;
import _mod10525 from "module_10525" /* 10525 */;
import _mod10526 from "module_10526" /* 10526 */;
import _mod10527 from "module_10527" /* 10527 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10529 from "module_10529" /* 10529 */;
import _mod10530 from "module_10530" /* 10530 */;
import _mod10531 from "module_10531" /* 10531 */;
import _mod10532 from "module_10532" /* 10532 */;
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
  items = [new module_10519.default(), , , , , , ];
  new module_10519.default();
  items[1] = new module_10507.default(flag2);
  new module_10507.default(flag2);
  items[2] = new module_10522.default();
  new module_10522.default();
  items[3] = new module_10525.default();
  new module_10525.default();
  items[4] = new module_10530.default();
  new module_10530.default();
  items[5] = new module_10523.default();
  new module_10523.default();
  items[6] = new module_10532.default();
  new module_10532.default();
  items1 = [new module_10526.default(), ];
  new module_10526.default();
  items1[1] = new module_10527.default();
  new module_10527.default();
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
  const unshift = parsers.unshift;
  const _default = new module_10529.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10528.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10531.default();
  unshift3(_default2);
  return tmp;
}
const module_10507 = fn(_mod10507);
const module_10519 = fn(_mod10519);
const module_10522 = fn(_mod10522);
const module_10523 = fn(_mod10523);
const module_10525 = fn(_mod10525);
const module_10526 = fn(_mod10526);
const module_10527 = fn(_mod10527);
const module_10528 = fn(_mod10528);
const module_10529 = fn(_mod10529);
const module_10530 = fn(_mod10530);
const module_10531 = fn(_mod10531);
const module_10532 = fn(_mod10532);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10529.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10528.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10531.default();
unshift3(_default2);
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
