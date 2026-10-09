// Module ID: 9912
// Function ID: 9913
// Dependencies: [9828, 9786, 9793, 9795, 9903, 9904, 9906, 9907, 9908, 9909, 9910, 9911, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9912
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9903 from "module_9903" /* 9903 */;
import _mod9904 from "module_9904" /* 9904 */;
import _mod9906 from "module_9906" /* 9906 */;
import _mod9907 from "module_9907" /* 9907 */;
import _mod9908 from "module_9908" /* 9908 */;
import _mod9909 from "module_9909" /* 9909 */;
import _mod9910 from "module_9910" /* 9910 */;
import _mod9911 from "module_9911" /* 9911 */;
import { Chrono } from "module_9786" /* 9786 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9904.default(), , , , ];
  new module_9904.default();
  items[1] = new module_9907.default();
  new module_9907.default();
  items[2] = new module_9909.default();
  new module_9909.default();
  items[3] = new module_9908.default();
  new module_9908.default();
  items[4] = new module_9906.default();
  new module_9906.default();
  items1 = [new module_9910.default(), ];
  new module_9910.default();
  items1[1] = new module_9911.default();
  new module_9911.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9828.default));
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
  const _default = new module_9903.default();
  unshift(_default);
  return tmp;
}
const module_9828 = fn(_mod9828);
const module_9903 = fn(_mod9903);
const module_9904 = fn(_mod9904);
const module_9906 = fn(_mod9906);
const module_9907 = fn(_mod9907);
const module_9908 = fn(_mod9908);
const module_9909 = fn(_mod9909);
const module_9910 = fn(_mod9910);
const module_9911 = fn(_mod9911);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9903.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9903.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9786").Chrono(createConfiguration());
const Chrono_export = require("module_9786").Chrono;

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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
