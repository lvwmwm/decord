// Module ID: 10161
// Function ID: 10162
// Dependencies: [10076, 10034, 10041, 10043, 10162, 10145, 10147, 10148, 10149, 10150, 10163, 10164, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10161
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10076 from "module_10076" /* 10076 */;
import _mod10145 from "module_10145" /* 10145 */;
import _mod10147 from "module_10147" /* 10147 */;
import _mod10148 from "module_10148" /* 10148 */;
import _mod10149 from "module_10149" /* 10149 */;
import _mod10150 from "module_10150" /* 10150 */;
import _mod10162 from "module_10162" /* 10162 */;
import _mod10163 from "module_10163" /* 10163 */;
import _mod10164 from "module_10164" /* 10164 */;
import { Chrono } from "module_10034" /* 10034 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10145.default(), , , , ];
  new module_10145.default();
  items[1] = new module_10148.default();
  new module_10148.default();
  items[2] = new module_10150.default();
  new module_10150.default();
  items[3] = new module_10149.default();
  new module_10149.default();
  items[4] = new module_10147.default();
  new module_10147.default();
  items1 = [new module_10163.default(), ];
  new module_10163.default();
  items1[1] = new module_10164.default();
  new module_10164.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10076.default));
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
  const _default = new module_10162.default();
  unshift(_default);
  return tmp;
}
const module_10076 = fn(_mod10076);
const module_10162 = fn(_mod10162);
const module_10145 = fn(_mod10145);
const module_10147 = fn(_mod10147);
const module_10148 = fn(_mod10148);
const module_10149 = fn(_mod10149);
const module_10150 = fn(_mod10150);
const module_10163 = fn(_mod10163);
const module_10164 = fn(_mod10164);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10162.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10162.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10034").Chrono(createConfiguration());
const Chrono_export = require("module_10034").Chrono;

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
