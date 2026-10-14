// Module ID: 9898
// Function ID: 9899
// Dependencies: [9899, 9901, 9902, 9903, 9904, 9905, 9906, 9826, 9833, 9835, 9907, 9908, 9872, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9898
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9872 from "module_9872" /* 9872 */;
import _mod9899 from "module_9899" /* 9899 */;
import _mod9901 from "module_9901" /* 9901 */;
import _mod9902 from "module_9902" /* 9902 */;
import _mod9903 from "module_9903" /* 9903 */;
import _mod9904 from "module_9904" /* 9904 */;
import _mod9905 from "module_9905" /* 9905 */;
import _mod9906 from "module_9906" /* 9906 */;
import _mod9907 from "module_9907" /* 9907 */;
import _mod9908 from "module_9908" /* 9908 */;
import { Chrono } from "module_9826" /* 9826 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9899.default(), , , , ];
  new module_9899.default();
  items[1] = new module_9903.default();
  new module_9903.default();
  items[2] = new module_9908.default();
  new module_9908.default();
  items[3] = new module_9904.default();
  new module_9904.default();
  items[4] = new module_9905.default();
  new module_9905.default();
  items1 = [new module_9907.default(), , ];
  new module_9907.default();
  items1[1] = new module_9906.default();
  new module_9906.default();
  items1[2] = new module_9901.default();
  new module_9901.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9872.default));
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
  const _default = new module_9902.default();
  unshift(_default);
  return tmp;
}
const module_9899 = fn(_mod9899);
const module_9901 = fn(_mod9901);
const module_9902 = fn(_mod9902);
const module_9903 = fn(_mod9903);
const module_9904 = fn(_mod9904);
const module_9905 = fn(_mod9905);
const module_9906 = fn(_mod9906);
const module_9907 = fn(_mod9907);
const module_9908 = fn(_mod9908);
const module_9872 = fn(_mod9872);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9902.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9826").Chrono(createConfiguration(true));
const Chrono_export = require("module_9826").Chrono;

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
export const casual = chrono;
export const strict = chrono1;
