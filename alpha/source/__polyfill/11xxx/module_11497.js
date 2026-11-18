// Module ID: 11497
// Function ID: 11498
// Dependencies: [11413, 11371, 11378, 11380, 11488, 11489, 11491, 11492, 11493, 11494, 11495, 11496, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11497
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11488 from "module_11488" /* 11488 */;
import _mod11489 from "module_11489" /* 11489 */;
import _mod11491 from "module_11491" /* 11491 */;
import _mod11492 from "module_11492" /* 11492 */;
import _mod11493 from "module_11493" /* 11493 */;
import _mod11494 from "module_11494" /* 11494 */;
import _mod11495 from "module_11495" /* 11495 */;
import _mod11496 from "module_11496" /* 11496 */;
import { Chrono } from "module_11371" /* 11371 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11489.default(), , , , ];
  new module_11489.default();
  items[1] = new module_11492.default();
  new module_11492.default();
  items[2] = new module_11494.default();
  new module_11494.default();
  items[3] = new module_11493.default();
  new module_11493.default();
  items[4] = new module_11491.default();
  new module_11491.default();
  items1 = [new module_11495.default(), ];
  new module_11495.default();
  items1[1] = new module_11496.default();
  new module_11496.default();
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
  const _default = new module_11488.default();
  unshift(_default);
  return tmp;
}
const module_11413 = fn(_mod11413);
const module_11488 = fn(_mod11488);
const module_11489 = fn(_mod11489);
const module_11491 = fn(_mod11491);
const module_11492 = fn(_mod11492);
const module_11493 = fn(_mod11493);
const module_11494 = fn(_mod11494);
const module_11495 = fn(_mod11495);
const module_11496 = fn(_mod11496);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11488.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11488.default();
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
