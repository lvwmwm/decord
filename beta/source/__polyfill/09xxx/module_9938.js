// Module ID: 9938
// Function ID: 9939
// Dependencies: [9853, 9811, 9818, 9820, 9939, 9922, 9924, 9925, 9926, 9927, 9940, 9941, 9851]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9938
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9851 */;
import _mod9853 from "module_9853" /* 9853 */;
import _mod9922 from "module_9922" /* 9922 */;
import _mod9924 from "module_9924" /* 9924 */;
import _mod9925 from "module_9925" /* 9925 */;
import _mod9926 from "module_9926" /* 9926 */;
import _mod9927 from "module_9927" /* 9927 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9941 from "module_9941" /* 9941 */;
import { Chrono } from "module_9811" /* 9811 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9922.default(), , , , ];
  new module_9922.default();
  items[1] = new module_9925.default();
  new module_9925.default();
  items[2] = new module_9927.default();
  new module_9927.default();
  items[3] = new module_9926.default();
  new module_9926.default();
  items[4] = new module_9924.default();
  new module_9924.default();
  items1 = [new module_9940.default(), ];
  new module_9940.default();
  items1[1] = new module_9941.default();
  new module_9941.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9853.default));
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
  const _default = new module_9939.default();
  unshift(_default);
  return tmp;
}
const module_9853 = fn(_mod9853);
const module_9939 = fn(_mod9939);
const module_9922 = fn(_mod9922);
const module_9924 = fn(_mod9924);
const module_9925 = fn(_mod9925);
const module_9926 = fn(_mod9926);
const module_9927 = fn(_mod9927);
const module_9940 = fn(_mod9940);
const module_9941 = fn(_mod9941);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9939.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9939.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9811").Chrono(createConfiguration());
const Chrono_export = require("module_9811").Chrono;

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
