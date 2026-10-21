// Module ID: 10296
// Function ID: 10297
// Dependencies: [10211, 10169, 10176, 10178, 10297, 10280, 10282, 10283, 10284, 10285, 10298, 10299, 10209]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10296
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10209 */;
import _mod10211 from "module_10211" /* 10211 */;
import _mod10280 from "module_10280" /* 10280 */;
import _mod10282 from "module_10282" /* 10282 */;
import _mod10283 from "module_10283" /* 10283 */;
import _mod10284 from "module_10284" /* 10284 */;
import _mod10285 from "module_10285" /* 10285 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10298 from "module_10298" /* 10298 */;
import _mod10299 from "module_10299" /* 10299 */;
import { Chrono } from "module_10169" /* 10169 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10280.default(), , , , ];
  new module_10280.default();
  items[1] = new module_10283.default();
  new module_10283.default();
  items[2] = new module_10285.default();
  new module_10285.default();
  items[3] = new module_10284.default();
  new module_10284.default();
  items[4] = new module_10282.default();
  new module_10282.default();
  items1 = [new module_10298.default(), ];
  new module_10298.default();
  items1[1] = new module_10299.default();
  new module_10299.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10211.default));
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
  const _default = new module_10297.default();
  unshift(_default);
  return tmp;
}
const module_10211 = fn(_mod10211);
const module_10297 = fn(_mod10297);
const module_10280 = fn(_mod10280);
const module_10282 = fn(_mod10282);
const module_10283 = fn(_mod10283);
const module_10284 = fn(_mod10284);
const module_10285 = fn(_mod10285);
const module_10298 = fn(_mod10298);
const module_10299 = fn(_mod10299);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10297.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10297.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10169").Chrono(createConfiguration());
const Chrono_export = require("module_10169").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
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
