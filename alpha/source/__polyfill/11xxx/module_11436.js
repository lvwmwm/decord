// Module ID: 11436
// Function ID: 11437
// Dependencies: [11437, 11439, 11440, 11441, 11442, 11443, 11444, 11364, 11371, 11373, 11445, 11446, 11410, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11436
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11410 from "module_11410" /* 11410 */;
import _mod11437 from "module_11437" /* 11437 */;
import _mod11439 from "module_11439" /* 11439 */;
import _mod11440 from "module_11440" /* 11440 */;
import _mod11441 from "module_11441" /* 11441 */;
import _mod11442 from "module_11442" /* 11442 */;
import _mod11443 from "module_11443" /* 11443 */;
import _mod11444 from "module_11444" /* 11444 */;
import _mod11445 from "module_11445" /* 11445 */;
import _mod11446 from "module_11446" /* 11446 */;
import { Chrono } from "module_11364" /* 11364 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11437.default(), , , , ];
  new module_11437.default();
  items[1] = new module_11441.default();
  new module_11441.default();
  items[2] = new module_11446.default();
  new module_11446.default();
  items[3] = new module_11442.default();
  new module_11442.default();
  items[4] = new module_11443.default();
  new module_11443.default();
  items1 = [new module_11445.default(), , ];
  new module_11445.default();
  items1[1] = new module_11444.default();
  new module_11444.default();
  items1[2] = new module_11439.default();
  new module_11439.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11410.default));
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
  const _default = new module_11440.default();
  unshift(_default);
  return tmp;
}
const module_11437 = fn(_mod11437);
const module_11439 = fn(_mod11439);
const module_11440 = fn(_mod11440);
const module_11441 = fn(_mod11441);
const module_11442 = fn(_mod11442);
const module_11443 = fn(_mod11443);
const module_11444 = fn(_mod11444);
const module_11445 = fn(_mod11445);
const module_11446 = fn(_mod11446);
const module_11410 = fn(_mod11410);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11440.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11364").Chrono(createConfiguration(true));
const Chrono_export = require("module_11364").Chrono;

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
