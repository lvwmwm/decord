// Module ID: 10266
// Function ID: 10267
// Dependencies: [10182, 10140, 10147, 10149, 10257, 10258, 10260, 10261, 10262, 10263, 10264, 10265, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10266
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10260 from "module_10260" /* 10260 */;
import _mod10261 from "module_10261" /* 10261 */;
import _mod10262 from "module_10262" /* 10262 */;
import _mod10263 from "module_10263" /* 10263 */;
import _mod10264 from "module_10264" /* 10264 */;
import _mod10265 from "module_10265" /* 10265 */;
import { Chrono } from "module_10140" /* 10140 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10258.default(), , , , ];
  new module_10258.default();
  items[1] = new module_10261.default();
  new module_10261.default();
  items[2] = new module_10263.default();
  new module_10263.default();
  items[3] = new module_10262.default();
  new module_10262.default();
  items[4] = new module_10260.default();
  new module_10260.default();
  items1 = [new module_10264.default(), ];
  new module_10264.default();
  items1[1] = new module_10265.default();
  new module_10265.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10182.default));
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
  const _default = new module_10257.default();
  unshift(_default);
  return tmp;
}
const module_10182 = fn(_mod10182);
const module_10257 = fn(_mod10257);
const module_10258 = fn(_mod10258);
const module_10260 = fn(_mod10260);
const module_10261 = fn(_mod10261);
const module_10262 = fn(_mod10262);
const module_10263 = fn(_mod10263);
const module_10264 = fn(_mod10264);
const module_10265 = fn(_mod10265);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10257.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10257.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10140").Chrono(createConfiguration());
const Chrono_export = require("module_10140").Chrono;

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
