// Module ID: 11447
// Function ID: 11448
// Dependencies: [11448, 11450, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11291, 11298, 11300, 11324, 11461, 11336, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11447
import _mod11324 from "module_11324" /* 11324 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11336 from "module_11336" /* 11336 */;
import _mod11448 from "module_11448" /* 11448 */;
import _mod11450 from "module_11450" /* 11450 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11454 from "module_11454" /* 11454 */;
import _mod11455 from "module_11455" /* 11455 */;
import _mod11456 from "module_11456" /* 11456 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11458 from "module_11458" /* 11458 */;
import _mod11459 from "module_11459" /* 11459 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11461 from "module_11461" /* 11461 */;
import { Chrono } from "module_11291" /* 11291 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11336.default(), , , , , , ];
  new module_11336.default();
  items[1] = new module_11324.default(true);
  new module_11324.default(true);
  items[2] = new module_11448.default();
  new module_11448.default();
  items[3] = new module_11450.default();
  new module_11450.default();
  items[4] = new module_11459.default();
  new module_11459.default();
  items[5] = new module_11453.default(flag);
  new module_11453.default(flag);
  items[6] = new module_11454.default();
  new module_11454.default();
  items1 = [new module_11456.default(), ];
  new module_11456.default();
  items1[1] = new module_11455.default();
  new module_11455.default();
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
  const _default = new module_11457.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11458.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11452.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11460.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11461.default();
  unshift5(_default4);
  return tmp;
}
const module_11448 = fn(_mod11448);
const module_11450 = fn(_mod11450);
const module_11452 = fn(_mod11452);
const module_11453 = fn(_mod11453);
const module_11454 = fn(_mod11454);
const module_11455 = fn(_mod11455);
const module_11456 = fn(_mod11456);
const module_11457 = fn(_mod11457);
const module_11458 = fn(_mod11458);
const module_11459 = fn(_mod11459);
const module_11460 = fn(_mod11460);
const module_11324 = fn(_mod11324);
const module_11461 = fn(_mod11461);
const module_11336 = fn(_mod11336);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11457.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11458.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11452.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11460.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11461.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));
const Chrono_export = require("module_11291").Chrono;

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
