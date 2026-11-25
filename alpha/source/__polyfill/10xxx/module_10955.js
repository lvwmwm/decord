// Module ID: 10955
// Function ID: 10956
// Dependencies: [10871, 10829, 10836, 10838, 10946, 10947, 10949, 10950, 10951, 10952, 10953, 10954, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10955
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10946 from "module_10946" /* 10946 */;
import _mod10947 from "module_10947" /* 10947 */;
import _mod10949 from "module_10949" /* 10949 */;
import _mod10950 from "module_10950" /* 10950 */;
import _mod10951 from "module_10951" /* 10951 */;
import _mod10952 from "module_10952" /* 10952 */;
import _mod10953 from "module_10953" /* 10953 */;
import _mod10954 from "module_10954" /* 10954 */;
import { Chrono } from "module_10829" /* 10829 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10947.default(), , , , ];
  new module_10947.default();
  items[1] = new module_10950.default();
  new module_10950.default();
  items[2] = new module_10952.default();
  new module_10952.default();
  items[3] = new module_10951.default();
  new module_10951.default();
  items[4] = new module_10949.default();
  new module_10949.default();
  items1 = [new module_10953.default(), ];
  new module_10953.default();
  items1[1] = new module_10954.default();
  new module_10954.default();
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
  const _default = new module_10946.default();
  unshift(_default);
  return tmp;
}
const module_10871 = fn(_mod10871);
const module_10946 = fn(_mod10946);
const module_10947 = fn(_mod10947);
const module_10949 = fn(_mod10949);
const module_10950 = fn(_mod10950);
const module_10951 = fn(_mod10951);
const module_10952 = fn(_mod10952);
const module_10953 = fn(_mod10953);
const module_10954 = fn(_mod10954);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10946.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10946.default();
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
