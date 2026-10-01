// Module ID: 10022
// Function ID: 10023
// Dependencies: [10023, 10025, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10035, 9891, 9898, 9900, 9924, 10036, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10022
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod10023 from "module_10023" /* 10023 */;
import _mod10025 from "module_10025" /* 10025 */;
import _mod10027 from "module_10027" /* 10027 */;
import _mod10028 from "module_10028" /* 10028 */;
import _mod10029 from "module_10029" /* 10029 */;
import _mod10030 from "module_10030" /* 10030 */;
import _mod10031 from "module_10031" /* 10031 */;
import _mod10032 from "module_10032" /* 10032 */;
import _mod10033 from "module_10033" /* 10033 */;
import _mod10034 from "module_10034" /* 10034 */;
import _mod10035 from "module_10035" /* 10035 */;
import _mod10036 from "module_10036" /* 10036 */;
import { Chrono } from "module_9891" /* 9891 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9924.default(true), , , , , ];
  new module_9924.default(true);
  items[1] = new module_10023.default();
  new module_10023.default();
  items[2] = new module_10025.default();
  new module_10025.default();
  items[3] = new module_10034.default();
  new module_10034.default();
  items[4] = new module_10028.default(flag);
  new module_10028.default(flag);
  items[5] = new module_10029.default();
  new module_10029.default();
  items1 = [new module_10031.default(), ];
  new module_10031.default();
  items1[1] = new module_10030.default();
  new module_10030.default();
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
  const _default = new module_10032.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10033.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10027.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10035.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10036.default();
  unshift5(_default4);
  return tmp;
}
const module_10023 = fn(_mod10023);
const module_10025 = fn(_mod10025);
const module_10027 = fn(_mod10027);
const module_10028 = fn(_mod10028);
const module_10029 = fn(_mod10029);
const module_10030 = fn(_mod10030);
const module_10031 = fn(_mod10031);
const module_10032 = fn(_mod10032);
const module_10033 = fn(_mod10033);
const module_10034 = fn(_mod10034);
const module_10035 = fn(_mod10035);
const module_9924 = fn(_mod9924);
const module_10036 = fn(_mod10036);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10032.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10033.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10027.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10035.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10036.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));
const Chrono_export = require("module_9891").Chrono;

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
