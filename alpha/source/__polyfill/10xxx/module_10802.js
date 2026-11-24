// Module ID: 10802
// Function ID: 10803
// Dependencies: [10803, 10805, 10806, 10807, 10808, 10809, 10810, 10730, 10737, 10739, 10811, 10812, 10776, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10802
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10776 from "module_10776" /* 10776 */;
import _mod10803 from "module_10803" /* 10803 */;
import _mod10805 from "module_10805" /* 10805 */;
import _mod10806 from "module_10806" /* 10806 */;
import _mod10807 from "module_10807" /* 10807 */;
import _mod10808 from "module_10808" /* 10808 */;
import _mod10809 from "module_10809" /* 10809 */;
import _mod10810 from "module_10810" /* 10810 */;
import _mod10811 from "module_10811" /* 10811 */;
import _mod10812 from "module_10812" /* 10812 */;
import { Chrono } from "module_10730" /* 10730 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10803.default(), , , , ];
  new module_10803.default();
  items[1] = new module_10807.default();
  new module_10807.default();
  items[2] = new module_10812.default();
  new module_10812.default();
  items[3] = new module_10808.default();
  new module_10808.default();
  items[4] = new module_10809.default();
  new module_10809.default();
  items1 = [new module_10811.default(), , ];
  new module_10811.default();
  items1[1] = new module_10810.default();
  new module_10810.default();
  items1[2] = new module_10805.default();
  new module_10805.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10776.default));
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
  const _default = new module_10806.default();
  unshift(_default);
  return tmp;
}
const module_10803 = fn(_mod10803);
const module_10805 = fn(_mod10805);
const module_10806 = fn(_mod10806);
const module_10807 = fn(_mod10807);
const module_10808 = fn(_mod10808);
const module_10809 = fn(_mod10809);
const module_10810 = fn(_mod10810);
const module_10811 = fn(_mod10811);
const module_10812 = fn(_mod10812);
const module_10776 = fn(_mod10776);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10806.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10730").Chrono(createConfiguration(true));
const Chrono_export = require("module_10730").Chrono;

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
