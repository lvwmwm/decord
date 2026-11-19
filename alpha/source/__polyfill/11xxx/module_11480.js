// Module ID: 11480
// Function ID: 11481
// Dependencies: [11481, 11483, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11492, 11493, 11349, 11356, 11358, 11382, 11494, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11480
import _mod11382 from "module_11382" /* 11382 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11481 from "module_11481" /* 11481 */;
import _mod11483 from "module_11483" /* 11483 */;
import _mod11485 from "module_11485" /* 11485 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
import _mod11488 from "module_11488" /* 11488 */;
import _mod11489 from "module_11489" /* 11489 */;
import _mod11490 from "module_11490" /* 11490 */;
import _mod11491 from "module_11491" /* 11491 */;
import _mod11492 from "module_11492" /* 11492 */;
import _mod11493 from "module_11493" /* 11493 */;
import _mod11494 from "module_11494" /* 11494 */;
import { Chrono } from "module_11349" /* 11349 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11382.default(true), , , , , ];
  new module_11382.default(true);
  items[1] = new module_11481.default();
  new module_11481.default();
  items[2] = new module_11483.default();
  new module_11483.default();
  items[3] = new module_11492.default();
  new module_11492.default();
  items[4] = new module_11486.default(flag);
  new module_11486.default(flag);
  items[5] = new module_11487.default();
  new module_11487.default();
  items1 = [new module_11489.default(), ];
  new module_11489.default();
  items1[1] = new module_11488.default();
  new module_11488.default();
  return includeCommonConfiguration(obj, flag);
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
  const _default = new module_11490.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11491.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11485.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11493.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11494.default();
  unshift5(_default4);
  return tmp;
}
const module_11481 = fn(_mod11481);
const module_11483 = fn(_mod11483);
const module_11485 = fn(_mod11485);
const module_11486 = fn(_mod11486);
const module_11487 = fn(_mod11487);
const module_11488 = fn(_mod11488);
const module_11489 = fn(_mod11489);
const module_11490 = fn(_mod11490);
const module_11491 = fn(_mod11491);
const module_11492 = fn(_mod11492);
const module_11493 = fn(_mod11493);
const module_11382 = fn(_mod11382);
const module_11494 = fn(_mod11494);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11490.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11491.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11485.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11493.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11494.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11349").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
