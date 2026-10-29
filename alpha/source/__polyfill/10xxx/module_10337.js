// Module ID: 10337
// Function ID: 10338
// Dependencies: [10278, 10285, 10287, 10338, 10339, 10311, 10340, 10341, 10342, 10343, 10345, 10346, 10347, 10348, 10349, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10337
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import _mod10341 from "module_10341" /* 10341 */;
import _mod10342 from "module_10342" /* 10342 */;
import _mod10343 from "module_10343" /* 10343 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10346 from "module_10346" /* 10346 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;
import { Chrono } from "module_10278" /* 10278 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10311.default(flag2), , , , , , ];
  new module_10311.default(flag2);
  items[1] = new module_10346.default();
  new module_10346.default();
  items[2] = new module_10340.default();
  new module_10340.default();
  items[3] = new module_10345.default();
  new module_10345.default();
  items[4] = new module_10347.default();
  new module_10347.default();
  items[5] = new module_10348.default();
  new module_10348.default();
  items[6] = new module_10343.default();
  new module_10343.default();
  items1 = [new module_10341.default(), ];
  new module_10341.default();
  items1[1] = new module_10342.default();
  new module_10342.default();
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10338.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10339.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10349.default();
  unshift3(_default2);
  return tmp;
}
const module_10338 = fn(_mod10338);
const module_10339 = fn(_mod10339);
const module_10311 = fn(_mod10311);
const module_10340 = fn(_mod10340);
const module_10341 = fn(_mod10341);
const module_10342 = fn(_mod10342);
const module_10343 = fn(_mod10343);
const module_10345 = fn(_mod10345);
const module_10346 = fn(_mod10346);
const module_10347 = fn(_mod10347);
const module_10348 = fn(_mod10348);
const module_10349 = fn(_mod10349);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10338.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10339.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10349.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10278").Chrono(createConfiguration(true));
const Chrono_export = require("module_10278").Chrono;

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
