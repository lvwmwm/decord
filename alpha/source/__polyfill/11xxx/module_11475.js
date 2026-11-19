// Module ID: 11475
// Function ID: 11476
// Dependencies: [11391, 11349, 11356, 11358, 11466, 11467, 11469, 11470, 11471, 11472, 11473, 11474, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11475
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11466 from "module_11466" /* 11466 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11469 from "module_11469" /* 11469 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11472 from "module_11472" /* 11472 */;
import _mod11473 from "module_11473" /* 11473 */;
import _mod11474 from "module_11474" /* 11474 */;
import { Chrono } from "module_11349" /* 11349 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11467.default(), , , , ];
  new module_11467.default();
  items[1] = new module_11470.default();
  new module_11470.default();
  items[2] = new module_11472.default();
  new module_11472.default();
  items[3] = new module_11471.default();
  new module_11471.default();
  items[4] = new module_11469.default();
  new module_11469.default();
  items1 = [new module_11473.default(), ];
  new module_11473.default();
  items1[1] = new module_11474.default();
  new module_11474.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11391.default));
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
  const _default = new module_11466.default();
  unshift(_default);
  return tmp;
}
const module_11391 = fn(_mod11391);
const module_11466 = fn(_mod11466);
const module_11467 = fn(_mod11467);
const module_11469 = fn(_mod11469);
const module_11470 = fn(_mod11470);
const module_11471 = fn(_mod11471);
const module_11472 = fn(_mod11472);
const module_11473 = fn(_mod11473);
const module_11474 = fn(_mod11474);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11466.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11466.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11349").Chrono(createConfiguration());
const Chrono_export = require("module_11349").Chrono;

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
