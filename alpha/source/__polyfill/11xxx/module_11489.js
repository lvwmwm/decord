// Module ID: 11489
// Function ID: 11490
// Dependencies: [11490, 11492, 11494, 11495, 11496, 11497, 11498, 11499, 11500, 11501, 11502, 11358, 11365, 11367, 11391, 11503, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11489
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11490 from "module_11490" /* 11490 */;
import _mod11492 from "module_11492" /* 11492 */;
import _mod11494 from "module_11494" /* 11494 */;
import _mod11495 from "module_11495" /* 11495 */;
import _mod11496 from "module_11496" /* 11496 */;
import _mod11497 from "module_11497" /* 11497 */;
import _mod11498 from "module_11498" /* 11498 */;
import _mod11499 from "module_11499" /* 11499 */;
import _mod11500 from "module_11500" /* 11500 */;
import _mod11501 from "module_11501" /* 11501 */;
import _mod11502 from "module_11502" /* 11502 */;
import _mod11503 from "module_11503" /* 11503 */;
import { Chrono } from "module_11358" /* 11358 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11391.default(true), , , , , ];
  new module_11391.default(true);
  items[1] = new module_11490.default();
  new module_11490.default();
  items[2] = new module_11492.default();
  new module_11492.default();
  items[3] = new module_11501.default();
  new module_11501.default();
  items[4] = new module_11495.default(flag);
  new module_11495.default(flag);
  items[5] = new module_11496.default();
  new module_11496.default();
  items1 = [new module_11498.default(), ];
  new module_11498.default();
  items1[1] = new module_11497.default();
  new module_11497.default();
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
  const _default = new module_11499.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11500.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11494.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11502.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11503.default();
  unshift5(_default4);
  return tmp;
}
const module_11490 = fn(_mod11490);
const module_11492 = fn(_mod11492);
const module_11494 = fn(_mod11494);
const module_11495 = fn(_mod11495);
const module_11496 = fn(_mod11496);
const module_11497 = fn(_mod11497);
const module_11498 = fn(_mod11498);
const module_11499 = fn(_mod11499);
const module_11500 = fn(_mod11500);
const module_11501 = fn(_mod11501);
const module_11502 = fn(_mod11502);
const module_11391 = fn(_mod11391);
const module_11503 = fn(_mod11503);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11499.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11500.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11494.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11502.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11503.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11358").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
