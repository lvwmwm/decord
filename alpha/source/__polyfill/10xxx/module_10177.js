// Module ID: 10177
// Function ID: 10178
// Dependencies: [10092, 10050, 10057, 10059, 10178, 10161, 10163, 10164, 10165, 10166, 10179, 10180, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10177
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10092 from "module_10092" /* 10092 */;
import _mod10161 from "module_10161" /* 10161 */;
import _mod10163 from "module_10163" /* 10163 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10165 from "module_10165" /* 10165 */;
import _mod10166 from "module_10166" /* 10166 */;
import _mod10178 from "module_10178" /* 10178 */;
import _mod10179 from "module_10179" /* 10179 */;
import _mod10180 from "module_10180" /* 10180 */;
import { Chrono } from "module_10050" /* 10050 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10161.default(), , , , ];
  new module_10161.default();
  items[1] = new module_10164.default();
  new module_10164.default();
  items[2] = new module_10166.default();
  new module_10166.default();
  items[3] = new module_10165.default();
  new module_10165.default();
  items[4] = new module_10163.default();
  new module_10163.default();
  items1 = [new module_10179.default(), ];
  new module_10179.default();
  items1[1] = new module_10180.default();
  new module_10180.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10092.default));
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
  const _default = new module_10178.default();
  unshift(_default);
  return tmp;
}
const module_10092 = fn(_mod10092);
const module_10178 = fn(_mod10178);
const module_10161 = fn(_mod10161);
const module_10163 = fn(_mod10163);
const module_10164 = fn(_mod10164);
const module_10165 = fn(_mod10165);
const module_10166 = fn(_mod10166);
const module_10179 = fn(_mod10179);
const module_10180 = fn(_mod10180);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10178.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10178.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10050").Chrono(createConfiguration());
const Chrono_export = require("module_10050").Chrono;

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
