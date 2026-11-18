// Module ID: 11502
// Function ID: 11503
// Dependencies: [11503, 11505, 11507, 11508, 11509, 11510, 11511, 11512, 11513, 11514, 11515, 11371, 11378, 11380, 11404, 11516, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11502
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11503 from "module_11503" /* 11503 */;
import _mod11505 from "module_11505" /* 11505 */;
import _mod11507 from "module_11507" /* 11507 */;
import _mod11508 from "module_11508" /* 11508 */;
import _mod11509 from "module_11509" /* 11509 */;
import _mod11510 from "module_11510" /* 11510 */;
import _mod11511 from "module_11511" /* 11511 */;
import _mod11512 from "module_11512" /* 11512 */;
import _mod11513 from "module_11513" /* 11513 */;
import _mod11514 from "module_11514" /* 11514 */;
import _mod11515 from "module_11515" /* 11515 */;
import _mod11516 from "module_11516" /* 11516 */;
import { Chrono } from "module_11371" /* 11371 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11404.default(true), , , , , ];
  new module_11404.default(true);
  items[1] = new module_11503.default();
  new module_11503.default();
  items[2] = new module_11505.default();
  new module_11505.default();
  items[3] = new module_11514.default();
  new module_11514.default();
  items[4] = new module_11508.default(flag);
  new module_11508.default(flag);
  items[5] = new module_11509.default();
  new module_11509.default();
  items1 = [new module_11511.default(), ];
  new module_11511.default();
  items1[1] = new module_11510.default();
  new module_11510.default();
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
  const _default = new module_11512.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11513.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11507.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11515.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11516.default();
  unshift5(_default4);
  return tmp;
}
const module_11503 = fn(_mod11503);
const module_11505 = fn(_mod11505);
const module_11507 = fn(_mod11507);
const module_11508 = fn(_mod11508);
const module_11509 = fn(_mod11509);
const module_11510 = fn(_mod11510);
const module_11511 = fn(_mod11511);
const module_11512 = fn(_mod11512);
const module_11513 = fn(_mod11513);
const module_11514 = fn(_mod11514);
const module_11515 = fn(_mod11515);
const module_11404 = fn(_mod11404);
const module_11516 = fn(_mod11516);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11512.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11513.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11507.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11515.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11516.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11371").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
