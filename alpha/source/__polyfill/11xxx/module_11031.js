// Module ID: 11031
// Function ID: 11032
// Dependencies: [11032, 11034, 11036, 11037, 11038, 11039, 11040, 11041, 11042, 11043, 11044, 10875, 10882, 10884, 10908, 11045, 10920, 10915]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11031
import _mod10908 from "module_10908" /* 10908 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10915 */;
import _mod10920 from "module_10920" /* 10920 */;
import _mod11032 from "module_11032" /* 11032 */;
import _mod11034 from "module_11034" /* 11034 */;
import _mod11036 from "module_11036" /* 11036 */;
import _mod11037 from "module_11037" /* 11037 */;
import _mod11038 from "module_11038" /* 11038 */;
import _mod11039 from "module_11039" /* 11039 */;
import _mod11040 from "module_11040" /* 11040 */;
import _mod11041 from "module_11041" /* 11041 */;
import _mod11042 from "module_11042" /* 11042 */;
import _mod11043 from "module_11043" /* 11043 */;
import _mod11044 from "module_11044" /* 11044 */;
import _mod11045 from "module_11045" /* 11045 */;
import { Chrono } from "module_10875" /* 10875 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10920.default(), , , , , , ];
  new module_10920.default();
  items[1] = new module_10908.default(true);
  new module_10908.default(true);
  items[2] = new module_11032.default();
  new module_11032.default();
  items[3] = new module_11034.default();
  new module_11034.default();
  items[4] = new module_11043.default();
  new module_11043.default();
  items[5] = new module_11037.default(flag);
  new module_11037.default(flag);
  items[6] = new module_11038.default();
  new module_11038.default();
  items1 = [new module_11040.default(), ];
  new module_11040.default();
  items1[1] = new module_11039.default();
  new module_11039.default();
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
  const _default = new module_11041.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11042.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11036.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11044.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11045.default();
  unshift5(_default4);
  return tmp;
}
const module_11032 = fn(_mod11032);
const module_11034 = fn(_mod11034);
const module_11036 = fn(_mod11036);
const module_11037 = fn(_mod11037);
const module_11038 = fn(_mod11038);
const module_11039 = fn(_mod11039);
const module_11040 = fn(_mod11040);
const module_11041 = fn(_mod11041);
const module_11042 = fn(_mod11042);
const module_11043 = fn(_mod11043);
const module_11044 = fn(_mod11044);
const module_10908 = fn(_mod10908);
const module_11045 = fn(_mod11045);
const module_10920 = fn(_mod10920);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11041.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11042.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11036.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11044.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11045.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10875").Chrono(createConfiguration(true));
const Chrono_export = require("module_10875").Chrono;

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
