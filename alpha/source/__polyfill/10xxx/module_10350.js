// Module ID: 10350
// Function ID: 10351
// Dependencies: [10303, 10310, 10312, 10336, 10348, 10351, 10352, 10354, 10355, 10356, 10357, 10358, 10359, 10360, 10361, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10350
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10351 from "module_10351" /* 10351 */;
import _mod10352 from "module_10352" /* 10352 */;
import _mod10354 from "module_10354" /* 10354 */;
import _mod10355 from "module_10355" /* 10355 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10357 from "module_10357" /* 10357 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10361 from "module_10361" /* 10361 */;
import { Chrono } from "module_10303" /* 10303 */;

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
  items = [new module_10348.default(), , , , , , ];
  new module_10348.default();
  items[1] = new module_10336.default(flag2);
  new module_10336.default(flag2);
  items[2] = new module_10351.default();
  new module_10351.default();
  items[3] = new module_10354.default();
  new module_10354.default();
  items[4] = new module_10359.default();
  new module_10359.default();
  items[5] = new module_10352.default();
  new module_10352.default();
  items[6] = new module_10361.default();
  new module_10361.default();
  items1 = [new module_10355.default(), ];
  new module_10355.default();
  items1[1] = new module_10356.default();
  new module_10356.default();
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
  const _default = new module_10358.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10357.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10360.default();
  unshift3(_default2);
  return tmp;
}
const module_10336 = fn(_mod10336);
const module_10348 = fn(_mod10348);
const module_10351 = fn(_mod10351);
const module_10352 = fn(_mod10352);
const module_10354 = fn(_mod10354);
const module_10355 = fn(_mod10355);
const module_10356 = fn(_mod10356);
const module_10357 = fn(_mod10357);
const module_10358 = fn(_mod10358);
const module_10359 = fn(_mod10359);
const module_10360 = fn(_mod10360);
const module_10361 = fn(_mod10361);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10358.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10357.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10360.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10303").Chrono(createConfiguration(true));
const Chrono_export = require("module_10303").Chrono;

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
