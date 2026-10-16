// Module ID: 10178
// Function ID: 10179
// Dependencies: [10093, 10051, 10058, 10060, 10179, 10162, 10164, 10165, 10166, 10167, 10180, 10181, 10091]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10178
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10093 from "module_10093" /* 10093 */;
import _mod10162 from "module_10162" /* 10162 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10165 from "module_10165" /* 10165 */;
import _mod10166 from "module_10166" /* 10166 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10179 from "module_10179" /* 10179 */;
import _mod10180 from "module_10180" /* 10180 */;
import _mod10181 from "module_10181" /* 10181 */;
import { Chrono } from "module_10051" /* 10051 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10162.default(), , , , ];
  new module_10162.default();
  items[1] = new module_10165.default();
  new module_10165.default();
  items[2] = new module_10167.default();
  new module_10167.default();
  items[3] = new module_10166.default();
  new module_10166.default();
  items[4] = new module_10164.default();
  new module_10164.default();
  items1 = [new module_10180.default(), ];
  new module_10180.default();
  items1[1] = new module_10181.default();
  new module_10181.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10093.default));
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
  const _default = new module_10179.default();
  unshift(_default);
  return tmp;
}
const module_10093 = fn(_mod10093);
const module_10179 = fn(_mod10179);
const module_10162 = fn(_mod10162);
const module_10164 = fn(_mod10164);
const module_10165 = fn(_mod10165);
const module_10166 = fn(_mod10166);
const module_10167 = fn(_mod10167);
const module_10180 = fn(_mod10180);
const module_10181 = fn(_mod10181);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10179.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10179.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10051").Chrono(createConfiguration());
const Chrono_export = require("module_10051").Chrono;

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
