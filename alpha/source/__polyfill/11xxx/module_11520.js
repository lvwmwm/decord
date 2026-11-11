// Module ID: 11520
// Function ID: 11521
// Dependencies: [11521, 11523, 11525, 11526, 11527, 11528, 11529, 11530, 11531, 11532, 11533, 11364, 11371, 11373, 11397, 11534, 11409, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11520
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11521 from "module_11521" /* 11521 */;
import _mod11523 from "module_11523" /* 11523 */;
import _mod11525 from "module_11525" /* 11525 */;
import _mod11526 from "module_11526" /* 11526 */;
import _mod11527 from "module_11527" /* 11527 */;
import _mod11528 from "module_11528" /* 11528 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11530 from "module_11530" /* 11530 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;
import { Chrono } from "module_11364" /* 11364 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11409.default(), , , , , , ];
  new module_11409.default();
  items[1] = new module_11397.default(true);
  new module_11397.default(true);
  items[2] = new module_11521.default();
  new module_11521.default();
  items[3] = new module_11523.default();
  new module_11523.default();
  items[4] = new module_11532.default();
  new module_11532.default();
  items[5] = new module_11526.default(flag);
  new module_11526.default(flag);
  items[6] = new module_11527.default();
  new module_11527.default();
  items1 = [new module_11529.default(), ];
  new module_11529.default();
  items1[1] = new module_11528.default();
  new module_11528.default();
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
  const _default = new module_11530.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11531.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11525.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11533.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11534.default();
  unshift5(_default4);
  return tmp;
}
const module_11521 = fn(_mod11521);
const module_11523 = fn(_mod11523);
const module_11525 = fn(_mod11525);
const module_11526 = fn(_mod11526);
const module_11527 = fn(_mod11527);
const module_11528 = fn(_mod11528);
const module_11529 = fn(_mod11529);
const module_11530 = fn(_mod11530);
const module_11531 = fn(_mod11531);
const module_11532 = fn(_mod11532);
const module_11533 = fn(_mod11533);
const module_11397 = fn(_mod11397);
const module_11534 = fn(_mod11534);
const module_11409 = fn(_mod11409);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11530.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11531.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11525.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11533.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11534.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11364").Chrono(createConfiguration(true));
const Chrono_export = require("module_11364").Chrono;

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
