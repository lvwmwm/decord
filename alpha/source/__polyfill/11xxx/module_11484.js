// Module ID: 11484
// Function ID: 11485
// Dependencies: [11400, 11358, 11365, 11367, 11475, 11476, 11478, 11479, 11480, 11481, 11482, 11483, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11484
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11475 from "module_11475" /* 11475 */;
import _mod11476 from "module_11476" /* 11476 */;
import _mod11478 from "module_11478" /* 11478 */;
import _mod11479 from "module_11479" /* 11479 */;
import _mod11480 from "module_11480" /* 11480 */;
import _mod11481 from "module_11481" /* 11481 */;
import _mod11482 from "module_11482" /* 11482 */;
import _mod11483 from "module_11483" /* 11483 */;
import { Chrono } from "module_11358" /* 11358 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11476.default(), , , , ];
  new module_11476.default();
  items[1] = new module_11479.default();
  new module_11479.default();
  items[2] = new module_11481.default();
  new module_11481.default();
  items[3] = new module_11480.default();
  new module_11480.default();
  items[4] = new module_11478.default();
  new module_11478.default();
  items1 = [new module_11482.default(), ];
  new module_11482.default();
  items1[1] = new module_11483.default();
  new module_11483.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11400.default));
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
  const _default = new module_11475.default();
  unshift(_default);
  return tmp;
}
const module_11400 = fn(_mod11400);
const module_11475 = fn(_mod11475);
const module_11476 = fn(_mod11476);
const module_11478 = fn(_mod11478);
const module_11479 = fn(_mod11479);
const module_11480 = fn(_mod11480);
const module_11481 = fn(_mod11481);
const module_11482 = fn(_mod11482);
const module_11483 = fn(_mod11483);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11475.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11475.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11358").Chrono(createConfiguration());
const Chrono_export = require("module_11358").Chrono;

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
