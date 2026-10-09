// Module ID: 9913
// Function ID: 9914
// Dependencies: [9828, 9786, 9793, 9795, 9914, 9897, 9899, 9900, 9901, 9902, 9915, 9916, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9913
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9897 from "module_9897" /* 9897 */;
import _mod9899 from "module_9899" /* 9899 */;
import _mod9900 from "module_9900" /* 9900 */;
import _mod9901 from "module_9901" /* 9901 */;
import _mod9902 from "module_9902" /* 9902 */;
import _mod9914 from "module_9914" /* 9914 */;
import _mod9915 from "module_9915" /* 9915 */;
import _mod9916 from "module_9916" /* 9916 */;
import { Chrono } from "module_9786" /* 9786 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9897.default(), , , , ];
  new module_9897.default();
  items[1] = new module_9900.default();
  new module_9900.default();
  items[2] = new module_9902.default();
  new module_9902.default();
  items[3] = new module_9901.default();
  new module_9901.default();
  items[4] = new module_9899.default();
  new module_9899.default();
  items1 = [new module_9915.default(), ];
  new module_9915.default();
  items1[1] = new module_9916.default();
  new module_9916.default();
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
  const _default = new module_9914.default();
  unshift(_default);
  return tmp;
}
const module_9828 = fn(_mod9828);
const module_9914 = fn(_mod9914);
const module_9897 = fn(_mod9897);
const module_9899 = fn(_mod9899);
const module_9900 = fn(_mod9900);
const module_9901 = fn(_mod9901);
const module_9902 = fn(_mod9902);
const module_9915 = fn(_mod9915);
const module_9916 = fn(_mod9916);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9914.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9914.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
