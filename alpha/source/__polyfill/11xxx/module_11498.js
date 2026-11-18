// Module ID: 11498
// Function ID: 11499
// Dependencies: [11413, 11371, 11378, 11380, 11499, 11482, 11484, 11485, 11486, 11487, 11500, 11501, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11498
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11482 from "module_11482" /* 11482 */;
import _mod11484 from "module_11484" /* 11484 */;
import _mod11485 from "module_11485" /* 11485 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
import _mod11499 from "module_11499" /* 11499 */;
import _mod11500 from "module_11500" /* 11500 */;
import _mod11501 from "module_11501" /* 11501 */;
import { Chrono } from "module_11371" /* 11371 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11482.default(), , , , ];
  new module_11482.default();
  items[1] = new module_11485.default();
  new module_11485.default();
  items[2] = new module_11487.default();
  new module_11487.default();
  items[3] = new module_11486.default();
  new module_11486.default();
  items[4] = new module_11484.default();
  new module_11484.default();
  items1 = [new module_11500.default(), ];
  new module_11500.default();
  items1[1] = new module_11501.default();
  new module_11501.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11413.default));
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
  const _default = new module_11499.default();
  unshift(_default);
  return tmp;
}
const module_11413 = fn(_mod11413);
const module_11499 = fn(_mod11499);
const module_11482 = fn(_mod11482);
const module_11484 = fn(_mod11484);
const module_11485 = fn(_mod11485);
const module_11486 = fn(_mod11486);
const module_11487 = fn(_mod11487);
const module_11500 = fn(_mod11500);
const module_11501 = fn(_mod11501);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11499.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11499.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11371").Chrono(createConfiguration());
const Chrono_export = require("module_11371").Chrono;

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
