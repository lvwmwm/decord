// Module ID: 10246
// Function ID: 10247
// Dependencies: [10247, 10249, 10251, 10252, 10253, 10254, 10255, 10256, 10257, 10258, 10259, 10115, 10122, 10124, 10148, 10260, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10246
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10247 from "module_10247" /* 10247 */;
import _mod10249 from "module_10249" /* 10249 */;
import _mod10251 from "module_10251" /* 10251 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10254 from "module_10254" /* 10254 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
import _mod10260 from "module_10260" /* 10260 */;
import { Chrono } from "module_10115" /* 10115 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10148.default(true), , , , , ];
  new module_10148.default(true);
  items[1] = new module_10247.default();
  new module_10247.default();
  items[2] = new module_10249.default();
  new module_10249.default();
  items[3] = new module_10258.default();
  new module_10258.default();
  items[4] = new module_10252.default(flag);
  new module_10252.default(flag);
  items[5] = new module_10253.default();
  new module_10253.default();
  items1 = [new module_10255.default(), ];
  new module_10255.default();
  items1[1] = new module_10254.default();
  new module_10254.default();
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
  const _default = new module_10256.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10257.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10251.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10259.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10260.default();
  unshift5(_default4);
  return tmp;
}
const module_10247 = fn(_mod10247);
const module_10249 = fn(_mod10249);
const module_10251 = fn(_mod10251);
const module_10252 = fn(_mod10252);
const module_10253 = fn(_mod10253);
const module_10254 = fn(_mod10254);
const module_10255 = fn(_mod10255);
const module_10256 = fn(_mod10256);
const module_10257 = fn(_mod10257);
const module_10258 = fn(_mod10258);
const module_10259 = fn(_mod10259);
const module_10148 = fn(_mod10148);
const module_10260 = fn(_mod10260);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10256.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10257.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10251.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10259.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10260.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10115").Chrono(createConfiguration(true));
const Chrono_export = require("module_10115").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
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
