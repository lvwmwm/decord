// Module ID: 10314
// Function ID: 10315
// Dependencies: [10230, 10188, 10195, 10197, 10305, 10306, 10308, 10309, 10310, 10311, 10312, 10313, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10314
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10306 from "module_10306" /* 10306 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10309 from "module_10309" /* 10309 */;
import _mod10310 from "module_10310" /* 10310 */;
import _mod10311 from "module_10311" /* 10311 */;
import _mod10312 from "module_10312" /* 10312 */;
import _mod10313 from "module_10313" /* 10313 */;
import { Chrono } from "module_10188" /* 10188 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10306.default(), , , , ];
  new module_10306.default();
  items[1] = new module_10309.default();
  new module_10309.default();
  items[2] = new module_10311.default();
  new module_10311.default();
  items[3] = new module_10310.default();
  new module_10310.default();
  items[4] = new module_10308.default();
  new module_10308.default();
  items1 = [new module_10312.default(), ];
  new module_10312.default();
  items1[1] = new module_10313.default();
  new module_10313.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10230.default));
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
  const _default = new module_10305.default();
  unshift(_default);
  return tmp;
}
const module_10230 = fn(_mod10230);
const module_10305 = fn(_mod10305);
const module_10306 = fn(_mod10306);
const module_10308 = fn(_mod10308);
const module_10309 = fn(_mod10309);
const module_10310 = fn(_mod10310);
const module_10311 = fn(_mod10311);
const module_10312 = fn(_mod10312);
const module_10313 = fn(_mod10313);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10305.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10305.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10188").Chrono(createConfiguration());
const Chrono_export = require("module_10188").Chrono;

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
