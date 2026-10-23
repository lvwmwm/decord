// Module ID: 10337
// Function ID: 10338
// Dependencies: [10252, 10210, 10217, 10219, 10338, 10321, 10323, 10324, 10325, 10326, 10339, 10340, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10337
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10321 from "module_10321" /* 10321 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10325 from "module_10325" /* 10325 */;
import _mod10326 from "module_10326" /* 10326 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import { Chrono } from "module_10210" /* 10210 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10321.default(), , , , ];
  new module_10321.default();
  items[1] = new module_10324.default();
  new module_10324.default();
  items[2] = new module_10326.default();
  new module_10326.default();
  items[3] = new module_10325.default();
  new module_10325.default();
  items[4] = new module_10323.default();
  new module_10323.default();
  items1 = [new module_10339.default(), ];
  new module_10339.default();
  items1[1] = new module_10340.default();
  new module_10340.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10252.default));
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
  const _default = new module_10338.default();
  unshift(_default);
  return tmp;
}
const module_10252 = fn(_mod10252);
const module_10338 = fn(_mod10338);
const module_10321 = fn(_mod10321);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);
const module_10325 = fn(_mod10325);
const module_10326 = fn(_mod10326);
const module_10339 = fn(_mod10339);
const module_10340 = fn(_mod10340);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10338.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10338.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10210").Chrono(createConfiguration());
const Chrono_export = require("module_10210").Chrono;

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
