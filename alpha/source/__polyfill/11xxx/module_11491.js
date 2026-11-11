// Module ID: 11491
// Function ID: 11492
// Dependencies: [11406, 11364, 11371, 11373, 11492, 11475, 11477, 11478, 11479, 11480, 11493, 11494, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11491
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11475 from "module_11475" /* 11475 */;
import _mod11477 from "module_11477" /* 11477 */;
import _mod11478 from "module_11478" /* 11478 */;
import _mod11479 from "module_11479" /* 11479 */;
import _mod11480 from "module_11480" /* 11480 */;
import _mod11492 from "module_11492" /* 11492 */;
import _mod11493 from "module_11493" /* 11493 */;
import _mod11494 from "module_11494" /* 11494 */;
import { Chrono } from "module_11364" /* 11364 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11475.default(), , , , ];
  new module_11475.default();
  items[1] = new module_11478.default();
  new module_11478.default();
  items[2] = new module_11480.default();
  new module_11480.default();
  items[3] = new module_11479.default();
  new module_11479.default();
  items[4] = new module_11477.default();
  new module_11477.default();
  items1 = [new module_11493.default(), ];
  new module_11493.default();
  items1[1] = new module_11494.default();
  new module_11494.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11406.default));
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
  const _default = new module_11492.default();
  unshift(_default);
  return tmp;
}
const module_11406 = fn(_mod11406);
const module_11492 = fn(_mod11492);
const module_11475 = fn(_mod11475);
const module_11477 = fn(_mod11477);
const module_11478 = fn(_mod11478);
const module_11479 = fn(_mod11479);
const module_11480 = fn(_mod11480);
const module_11493 = fn(_mod11493);
const module_11494 = fn(_mod11494);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11492.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11492.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11364").Chrono(createConfiguration());
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
