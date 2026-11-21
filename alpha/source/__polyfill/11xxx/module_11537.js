// Module ID: 11537
// Function ID: 11538
// Dependencies: [11453, 11411, 11418, 11420, 11528, 11529, 11531, 11532, 11533, 11534, 11535, 11536, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11537
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11528 from "module_11528" /* 11528 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;
import _mod11535 from "module_11535" /* 11535 */;
import _mod11536 from "module_11536" /* 11536 */;
import { Chrono } from "module_11411" /* 11411 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11529.default(), , , , ];
  new module_11529.default();
  items[1] = new module_11532.default();
  new module_11532.default();
  items[2] = new module_11534.default();
  new module_11534.default();
  items[3] = new module_11533.default();
  new module_11533.default();
  items[4] = new module_11531.default();
  new module_11531.default();
  items1 = [new module_11535.default(), ];
  new module_11535.default();
  items1[1] = new module_11536.default();
  new module_11536.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11453.default));
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
  const _default = new module_11528.default();
  unshift(_default);
  return tmp;
}
const module_11453 = fn(_mod11453);
const module_11528 = fn(_mod11528);
const module_11529 = fn(_mod11529);
const module_11531 = fn(_mod11531);
const module_11532 = fn(_mod11532);
const module_11533 = fn(_mod11533);
const module_11534 = fn(_mod11534);
const module_11535 = fn(_mod11535);
const module_11536 = fn(_mod11536);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11528.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11528.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11411").Chrono(createConfiguration());
const Chrono_export = require("module_11411").Chrono;

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
