// Module ID: 10857
// Function ID: 10858
// Dependencies: [10772, 10730, 10737, 10739, 10858, 10841, 10843, 10844, 10845, 10846, 10859, 10860, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10857
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10772 from "module_10772" /* 10772 */;
import _mod10841 from "module_10841" /* 10841 */;
import _mod10843 from "module_10843" /* 10843 */;
import _mod10844 from "module_10844" /* 10844 */;
import _mod10845 from "module_10845" /* 10845 */;
import _mod10846 from "module_10846" /* 10846 */;
import _mod10858 from "module_10858" /* 10858 */;
import _mod10859 from "module_10859" /* 10859 */;
import _mod10860 from "module_10860" /* 10860 */;
import { Chrono } from "module_10730" /* 10730 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10841.default(), , , , ];
  new module_10841.default();
  items[1] = new module_10844.default();
  new module_10844.default();
  items[2] = new module_10846.default();
  new module_10846.default();
  items[3] = new module_10845.default();
  new module_10845.default();
  items[4] = new module_10843.default();
  new module_10843.default();
  items1 = [new module_10859.default(), ];
  new module_10859.default();
  items1[1] = new module_10860.default();
  new module_10860.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10772.default));
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10858.default();
  unshift(_default);
  return tmp;
}
const module_10772 = fn(_mod10772);
const module_10858 = fn(_mod10858);
const module_10841 = fn(_mod10841);
const module_10843 = fn(_mod10843);
const module_10844 = fn(_mod10844);
const module_10845 = fn(_mod10845);
const module_10846 = fn(_mod10846);
const module_10859 = fn(_mod10859);
const module_10860 = fn(_mod10860);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10858.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10858.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10730").Chrono(createConfiguration());
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
