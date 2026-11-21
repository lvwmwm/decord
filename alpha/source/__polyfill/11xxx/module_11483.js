// Module ID: 11483
// Function ID: 11484
// Dependencies: [11484, 11486, 11487, 11488, 11489, 11490, 11491, 11411, 11418, 11420, 11492, 11493, 11457, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11483
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11484 from "module_11484" /* 11484 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
import _mod11488 from "module_11488" /* 11488 */;
import _mod11489 from "module_11489" /* 11489 */;
import _mod11490 from "module_11490" /* 11490 */;
import _mod11491 from "module_11491" /* 11491 */;
import _mod11492 from "module_11492" /* 11492 */;
import _mod11493 from "module_11493" /* 11493 */;
import { Chrono } from "module_11411" /* 11411 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11484.default(), , , , ];
  new module_11484.default();
  items[1] = new module_11488.default();
  new module_11488.default();
  items[2] = new module_11493.default();
  new module_11493.default();
  items[3] = new module_11489.default();
  new module_11489.default();
  items[4] = new module_11490.default();
  new module_11490.default();
  items1 = [new module_11492.default(), , ];
  new module_11492.default();
  items1[1] = new module_11491.default();
  new module_11491.default();
  items1[2] = new module_11486.default();
  new module_11486.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11457.default));
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
  const _default = new module_11487.default();
  unshift(_default);
  return tmp;
}
const module_11484 = fn(_mod11484);
const module_11486 = fn(_mod11486);
const module_11487 = fn(_mod11487);
const module_11488 = fn(_mod11488);
const module_11489 = fn(_mod11489);
const module_11490 = fn(_mod11490);
const module_11491 = fn(_mod11491);
const module_11492 = fn(_mod11492);
const module_11493 = fn(_mod11493);
const module_11457 = fn(_mod11457);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11487.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11411").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
