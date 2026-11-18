// Module ID: 11443
// Function ID: 11444
// Dependencies: [11444, 11446, 11447, 11448, 11449, 11450, 11451, 11371, 11378, 11380, 11452, 11453, 11417, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11443
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11417 from "module_11417" /* 11417 */;
import _mod11444 from "module_11444" /* 11444 */;
import _mod11446 from "module_11446" /* 11446 */;
import _mod11447 from "module_11447" /* 11447 */;
import _mod11448 from "module_11448" /* 11448 */;
import _mod11449 from "module_11449" /* 11449 */;
import _mod11450 from "module_11450" /* 11450 */;
import _mod11451 from "module_11451" /* 11451 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11453 from "module_11453" /* 11453 */;
import { Chrono } from "module_11371" /* 11371 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11444.default(), , , , ];
  new module_11444.default();
  items[1] = new module_11448.default();
  new module_11448.default();
  items[2] = new module_11453.default();
  new module_11453.default();
  items[3] = new module_11449.default();
  new module_11449.default();
  items[4] = new module_11450.default();
  new module_11450.default();
  items1 = [new module_11452.default(), , ];
  new module_11452.default();
  items1[1] = new module_11451.default();
  new module_11451.default();
  items1[2] = new module_11446.default();
  new module_11446.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11417.default));
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11447.default();
  unshift(_default);
  return tmp;
}
const module_11444 = fn(_mod11444);
const module_11446 = fn(_mod11446);
const module_11447 = fn(_mod11447);
const module_11448 = fn(_mod11448);
const module_11449 = fn(_mod11449);
const module_11450 = fn(_mod11450);
const module_11451 = fn(_mod11451);
const module_11452 = fn(_mod11452);
const module_11453 = fn(_mod11453);
const module_11417 = fn(_mod11417);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11447.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11371").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
