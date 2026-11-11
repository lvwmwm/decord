// Module ID: 11495
// Function ID: 11496
// Dependencies: [11496, 11498, 11500, 11501, 11502, 11503, 11504, 11505, 11506, 11507, 11508, 11364, 11371, 11373, 11397, 11509, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11495
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11496 from "module_11496" /* 11496 */;
import _mod11498 from "module_11498" /* 11498 */;
import _mod11500 from "module_11500" /* 11500 */;
import _mod11501 from "module_11501" /* 11501 */;
import _mod11502 from "module_11502" /* 11502 */;
import _mod11503 from "module_11503" /* 11503 */;
import _mod11504 from "module_11504" /* 11504 */;
import _mod11505 from "module_11505" /* 11505 */;
import _mod11506 from "module_11506" /* 11506 */;
import _mod11507 from "module_11507" /* 11507 */;
import _mod11508 from "module_11508" /* 11508 */;
import _mod11509 from "module_11509" /* 11509 */;
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
  items = [new module_11397.default(true), , , , , ];
  new module_11397.default(true);
  items[1] = new module_11496.default();
  new module_11496.default();
  items[2] = new module_11498.default();
  new module_11498.default();
  items[3] = new module_11507.default();
  new module_11507.default();
  items[4] = new module_11501.default(flag);
  new module_11501.default(flag);
  items[5] = new module_11502.default();
  new module_11502.default();
  items1 = [new module_11504.default(), ];
  new module_11504.default();
  items1[1] = new module_11503.default();
  new module_11503.default();
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
  const _default = new module_11505.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11506.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11500.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11508.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11509.default();
  unshift5(_default4);
  return tmp;
}
const module_11496 = fn(_mod11496);
const module_11498 = fn(_mod11498);
const module_11500 = fn(_mod11500);
const module_11501 = fn(_mod11501);
const module_11502 = fn(_mod11502);
const module_11503 = fn(_mod11503);
const module_11504 = fn(_mod11504);
const module_11505 = fn(_mod11505);
const module_11506 = fn(_mod11506);
const module_11507 = fn(_mod11507);
const module_11508 = fn(_mod11508);
const module_11397 = fn(_mod11397);
const module_11509 = fn(_mod11509);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11505.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11506.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11500.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11508.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11509.default();
unshift5(_default4);
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
