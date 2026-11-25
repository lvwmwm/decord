// Module ID: 10956
// Function ID: 10957
// Dependencies: [10871, 10829, 10836, 10838, 10957, 10940, 10942, 10943, 10944, 10945, 10958, 10959, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10956
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10940 from "module_10940" /* 10940 */;
import _mod10942 from "module_10942" /* 10942 */;
import _mod10943 from "module_10943" /* 10943 */;
import _mod10944 from "module_10944" /* 10944 */;
import _mod10945 from "module_10945" /* 10945 */;
import _mod10957 from "module_10957" /* 10957 */;
import _mod10958 from "module_10958" /* 10958 */;
import _mod10959 from "module_10959" /* 10959 */;
import { Chrono } from "module_10829" /* 10829 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10940.default(), , , , ];
  new module_10940.default();
  items[1] = new module_10943.default();
  new module_10943.default();
  items[2] = new module_10945.default();
  new module_10945.default();
  items[3] = new module_10944.default();
  new module_10944.default();
  items[4] = new module_10942.default();
  new module_10942.default();
  items1 = [new module_10958.default(), ];
  new module_10958.default();
  items1[1] = new module_10959.default();
  new module_10959.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10871.default));
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
  const _default = new module_10957.default();
  unshift(_default);
  return tmp;
}
const module_10871 = fn(_mod10871);
const module_10957 = fn(_mod10957);
const module_10940 = fn(_mod10940);
const module_10942 = fn(_mod10942);
const module_10943 = fn(_mod10943);
const module_10944 = fn(_mod10944);
const module_10945 = fn(_mod10945);
const module_10958 = fn(_mod10958);
const module_10959 = fn(_mod10959);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10957.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10957.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10829").Chrono(createConfiguration());
const Chrono_export = require("module_10829").Chrono;

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
