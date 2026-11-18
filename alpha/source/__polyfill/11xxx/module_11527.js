// Module ID: 11527
// Function ID: 11528
// Dependencies: [11528, 11530, 11532, 11533, 11534, 11535, 11536, 11537, 11538, 11539, 11540, 11371, 11378, 11380, 11404, 11541, 11416, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11527
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11416 from "module_11416" /* 11416 */;
import _mod11528 from "module_11528" /* 11528 */;
import _mod11530 from "module_11530" /* 11530 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;
import _mod11535 from "module_11535" /* 11535 */;
import _mod11536 from "module_11536" /* 11536 */;
import _mod11537 from "module_11537" /* 11537 */;
import _mod11538 from "module_11538" /* 11538 */;
import _mod11539 from "module_11539" /* 11539 */;
import _mod11540 from "module_11540" /* 11540 */;
import _mod11541 from "module_11541" /* 11541 */;
import { Chrono } from "module_11371" /* 11371 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11416.default(), , , , , , ];
  new module_11416.default();
  items[1] = new module_11404.default(true);
  new module_11404.default(true);
  items[2] = new module_11528.default();
  new module_11528.default();
  items[3] = new module_11530.default();
  new module_11530.default();
  items[4] = new module_11539.default();
  new module_11539.default();
  items[5] = new module_11533.default(flag);
  new module_11533.default(flag);
  items[6] = new module_11534.default();
  new module_11534.default();
  items1 = [new module_11536.default(), ];
  new module_11536.default();
  items1[1] = new module_11535.default();
  new module_11535.default();
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
  const _default = new module_11537.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11538.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11532.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11540.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11541.default();
  unshift5(_default4);
  return tmp;
}
const module_11528 = fn(_mod11528);
const module_11530 = fn(_mod11530);
const module_11532 = fn(_mod11532);
const module_11533 = fn(_mod11533);
const module_11534 = fn(_mod11534);
const module_11535 = fn(_mod11535);
const module_11536 = fn(_mod11536);
const module_11537 = fn(_mod11537);
const module_11538 = fn(_mod11538);
const module_11539 = fn(_mod11539);
const module_11540 = fn(_mod11540);
const module_11404 = fn(_mod11404);
const module_11541 = fn(_mod11541);
const module_11416 = fn(_mod11416);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11537.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11538.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11532.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11540.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11541.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11371").Chrono(createConfiguration(true));
const Chrono_export = require("module_11371").Chrono;

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
