// Module ID: 10479
// Function ID: 10480
// Dependencies: [10480, 10482, 10484, 10485, 10486, 10487, 10488, 10489, 10490, 10491, 10492, 10323, 10330, 10332, 10356, 10493, 10368, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10479
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10480 from "module_10480" /* 10480 */;
import _mod10482 from "module_10482" /* 10482 */;
import _mod10484 from "module_10484" /* 10484 */;
import _mod10485 from "module_10485" /* 10485 */;
import _mod10486 from "module_10486" /* 10486 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10488 from "module_10488" /* 10488 */;
import _mod10489 from "module_10489" /* 10489 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10492 from "module_10492" /* 10492 */;
import _mod10493 from "module_10493" /* 10493 */;
import { Chrono } from "module_10323" /* 10323 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10368.default(), , , , , , ];
  new module_10368.default();
  items[1] = new module_10356.default(true);
  new module_10356.default(true);
  items[2] = new module_10480.default();
  new module_10480.default();
  items[3] = new module_10482.default();
  new module_10482.default();
  items[4] = new module_10491.default();
  new module_10491.default();
  items[5] = new module_10485.default(flag);
  new module_10485.default(flag);
  items[6] = new module_10486.default();
  new module_10486.default();
  items1 = [new module_10488.default(), ];
  new module_10488.default();
  items1[1] = new module_10487.default();
  new module_10487.default();
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
  const _default = new module_10489.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10490.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10484.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10492.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10493.default();
  unshift5(_default4);
  return tmp;
}
const module_10480 = fn(_mod10480);
const module_10482 = fn(_mod10482);
const module_10484 = fn(_mod10484);
const module_10485 = fn(_mod10485);
const module_10486 = fn(_mod10486);
const module_10487 = fn(_mod10487);
const module_10488 = fn(_mod10488);
const module_10489 = fn(_mod10489);
const module_10490 = fn(_mod10490);
const module_10491 = fn(_mod10491);
const module_10492 = fn(_mod10492);
const module_10356 = fn(_mod10356);
const module_10493 = fn(_mod10493);
const module_10368 = fn(_mod10368);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10489.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10490.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10484.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10492.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10493.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10323").Chrono(createConfiguration(true));
const Chrono_export = require("module_10323").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
