// Module ID: 10271
// Function ID: 10272
// Dependencies: [10272, 10274, 10276, 10277, 10278, 10279, 10280, 10281, 10282, 10283, 10284, 10115, 10122, 10124, 10148, 10285, 10160, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10271
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10272 from "module_10272" /* 10272 */;
import _mod10274 from "module_10274" /* 10274 */;
import _mod10276 from "module_10276" /* 10276 */;
import _mod10277 from "module_10277" /* 10277 */;
import _mod10278 from "module_10278" /* 10278 */;
import _mod10279 from "module_10279" /* 10279 */;
import _mod10280 from "module_10280" /* 10280 */;
import _mod10281 from "module_10281" /* 10281 */;
import _mod10282 from "module_10282" /* 10282 */;
import _mod10283 from "module_10283" /* 10283 */;
import _mod10284 from "module_10284" /* 10284 */;
import _mod10285 from "module_10285" /* 10285 */;
import { Chrono } from "module_10115" /* 10115 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10160.default(), , , , , , ];
  new module_10160.default();
  items[1] = new module_10148.default(true);
  new module_10148.default(true);
  items[2] = new module_10272.default();
  new module_10272.default();
  items[3] = new module_10274.default();
  new module_10274.default();
  items[4] = new module_10283.default();
  new module_10283.default();
  items[5] = new module_10277.default(flag);
  new module_10277.default(flag);
  items[6] = new module_10278.default();
  new module_10278.default();
  items1 = [new module_10280.default(), ];
  new module_10280.default();
  items1[1] = new module_10279.default();
  new module_10279.default();
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
  const _default = new module_10281.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10282.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10276.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10284.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10285.default();
  unshift5(_default4);
  return tmp;
}
const module_10272 = fn(_mod10272);
const module_10274 = fn(_mod10274);
const module_10276 = fn(_mod10276);
const module_10277 = fn(_mod10277);
const module_10278 = fn(_mod10278);
const module_10279 = fn(_mod10279);
const module_10280 = fn(_mod10280);
const module_10281 = fn(_mod10281);
const module_10282 = fn(_mod10282);
const module_10283 = fn(_mod10283);
const module_10284 = fn(_mod10284);
const module_10148 = fn(_mod10148);
const module_10285 = fn(_mod10285);
const module_10160 = fn(_mod10160);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10281.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10282.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10276.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10284.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10285.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10115").Chrono(createConfiguration(true));
const Chrono_export = require("module_10115").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
