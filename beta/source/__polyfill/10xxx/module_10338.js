// Module ID: 10338
// Function ID: 10339
// Dependencies: [10253, 10211, 10218, 10220, 10339, 10322, 10324, 10325, 10326, 10327, 10340, 10341, 10251]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10338
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10251 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10322 from "module_10322" /* 10322 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10325 from "module_10325" /* 10325 */;
import _mod10326 from "module_10326" /* 10326 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import _mod10341 from "module_10341" /* 10341 */;
import { Chrono } from "module_10211" /* 10211 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10322.default(), , , , ];
  new module_10322.default();
  items[1] = new module_10325.default();
  new module_10325.default();
  items[2] = new module_10327.default();
  new module_10327.default();
  items[3] = new module_10326.default();
  new module_10326.default();
  items[4] = new module_10324.default();
  new module_10324.default();
  items1 = [new module_10340.default(), ];
  new module_10340.default();
  items1[1] = new module_10341.default();
  new module_10341.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10253.default));
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
  const _default = new module_10339.default();
  unshift(_default);
  return tmp;
}
const module_10253 = fn(_mod10253);
const module_10339 = fn(_mod10339);
const module_10322 = fn(_mod10322);
const module_10324 = fn(_mod10324);
const module_10325 = fn(_mod10325);
const module_10326 = fn(_mod10326);
const module_10327 = fn(_mod10327);
const module_10340 = fn(_mod10340);
const module_10341 = fn(_mod10341);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10339.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10339.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10211").Chrono(createConfiguration());
const Chrono_export = require("module_10211").Chrono;

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
