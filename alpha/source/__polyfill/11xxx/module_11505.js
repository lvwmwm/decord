// Module ID: 11505
// Function ID: 11506
// Dependencies: [11506, 11508, 11510, 11511, 11512, 11513, 11514, 11515, 11516, 11517, 11518, 11349, 11356, 11358, 11382, 11519, 11394, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11505
import _mod11382 from "module_11382" /* 11382 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11394 from "module_11394" /* 11394 */;
import _mod11506 from "module_11506" /* 11506 */;
import _mod11508 from "module_11508" /* 11508 */;
import _mod11510 from "module_11510" /* 11510 */;
import _mod11511 from "module_11511" /* 11511 */;
import _mod11512 from "module_11512" /* 11512 */;
import _mod11513 from "module_11513" /* 11513 */;
import _mod11514 from "module_11514" /* 11514 */;
import _mod11515 from "module_11515" /* 11515 */;
import _mod11516 from "module_11516" /* 11516 */;
import _mod11517 from "module_11517" /* 11517 */;
import _mod11518 from "module_11518" /* 11518 */;
import _mod11519 from "module_11519" /* 11519 */;
import { Chrono } from "module_11349" /* 11349 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11394.default(), , , , , , ];
  new module_11394.default();
  items[1] = new module_11382.default(true);
  new module_11382.default(true);
  items[2] = new module_11506.default();
  new module_11506.default();
  items[3] = new module_11508.default();
  new module_11508.default();
  items[4] = new module_11517.default();
  new module_11517.default();
  items[5] = new module_11511.default(flag);
  new module_11511.default(flag);
  items[6] = new module_11512.default();
  new module_11512.default();
  items1 = [new module_11514.default(), ];
  new module_11514.default();
  items1[1] = new module_11513.default();
  new module_11513.default();
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
  const _default = new module_11515.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11516.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11510.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11518.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11519.default();
  unshift5(_default4);
  return tmp;
}
const module_11506 = fn(_mod11506);
const module_11508 = fn(_mod11508);
const module_11510 = fn(_mod11510);
const module_11511 = fn(_mod11511);
const module_11512 = fn(_mod11512);
const module_11513 = fn(_mod11513);
const module_11514 = fn(_mod11514);
const module_11515 = fn(_mod11515);
const module_11516 = fn(_mod11516);
const module_11517 = fn(_mod11517);
const module_11518 = fn(_mod11518);
const module_11382 = fn(_mod11382);
const module_11519 = fn(_mod11519);
const module_11394 = fn(_mod11394);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11515.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11516.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11510.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11518.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11519.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11349").Chrono(createConfiguration(true));
const Chrono_export = require("module_11349").Chrono;

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
