// Module ID: 10525
// Function ID: 10526
// Dependencies: [10526, 10528, 10529, 10530, 10531, 10532, 10533, 10453, 10460, 10462, 10534, 10535, 10499, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10525
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10499 from "module_10499" /* 10499 */;
import _mod10526 from "module_10526" /* 10526 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10529 from "module_10529" /* 10529 */;
import _mod10530 from "module_10530" /* 10530 */;
import _mod10531 from "module_10531" /* 10531 */;
import _mod10532 from "module_10532" /* 10532 */;
import _mod10533 from "module_10533" /* 10533 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10535 from "module_10535" /* 10535 */;
import { Chrono } from "module_10453" /* 10453 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10526.default(), , , , ];
  new module_10526.default();
  items[1] = new module_10530.default();
  new module_10530.default();
  items[2] = new module_10535.default();
  new module_10535.default();
  items[3] = new module_10531.default();
  new module_10531.default();
  items[4] = new module_10532.default();
  new module_10532.default();
  items1 = [new module_10534.default(), , ];
  new module_10534.default();
  items1[1] = new module_10533.default();
  new module_10533.default();
  items1[2] = new module_10528.default();
  new module_10528.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10499.default));
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
  const _default = new module_10529.default();
  unshift(_default);
  return tmp;
}
const module_10526 = fn(_mod10526);
const module_10528 = fn(_mod10528);
const module_10529 = fn(_mod10529);
const module_10530 = fn(_mod10530);
const module_10531 = fn(_mod10531);
const module_10532 = fn(_mod10532);
const module_10533 = fn(_mod10533);
const module_10534 = fn(_mod10534);
const module_10535 = fn(_mod10535);
const module_10499 = fn(_mod10499);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10529.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration(true));
const Chrono_export = require("module_10453").Chrono;

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
