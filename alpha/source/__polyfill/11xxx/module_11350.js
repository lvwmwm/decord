// Module ID: 11350
// Function ID: 11351
// Dependencies: [11291, 11298, 11300, 11351, 11352, 11324, 11353, 11354, 11355, 11356, 11358, 11359, 11360, 11361, 11362, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11350
import _mod11324 from "module_11324" /* 11324 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11351 from "module_11351" /* 11351 */;
import _mod11352 from "module_11352" /* 11352 */;
import _mod11353 from "module_11353" /* 11353 */;
import _mod11354 from "module_11354" /* 11354 */;
import _mod11355 from "module_11355" /* 11355 */;
import _mod11356 from "module_11356" /* 11356 */;
import _mod11358 from "module_11358" /* 11358 */;
import _mod11359 from "module_11359" /* 11359 */;
import _mod11360 from "module_11360" /* 11360 */;
import _mod11361 from "module_11361" /* 11361 */;
import _mod11362 from "module_11362" /* 11362 */;
import { Chrono } from "module_11291" /* 11291 */;

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
  items = [new module_11324.default(flag2), , , , , , ];
  new module_11324.default(flag2);
  items[1] = new module_11359.default();
  new module_11359.default();
  items[2] = new module_11353.default();
  new module_11353.default();
  items[3] = new module_11358.default();
  new module_11358.default();
  items[4] = new module_11360.default();
  new module_11360.default();
  items[5] = new module_11361.default();
  new module_11361.default();
  items[6] = new module_11356.default();
  new module_11356.default();
  items1 = [new module_11354.default(), ];
  new module_11354.default();
  items1[1] = new module_11355.default();
  new module_11355.default();
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
  const _default = new module_11351.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11352.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11362.default();
  unshift3(_default2);
  return tmp;
}
const module_11351 = fn(_mod11351);
const module_11352 = fn(_mod11352);
const module_11324 = fn(_mod11324);
const module_11353 = fn(_mod11353);
const module_11354 = fn(_mod11354);
const module_11355 = fn(_mod11355);
const module_11356 = fn(_mod11356);
const module_11358 = fn(_mod11358);
const module_11359 = fn(_mod11359);
const module_11360 = fn(_mod11360);
const module_11361 = fn(_mod11361);
const module_11362 = fn(_mod11362);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11351.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11352.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11362.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));
const Chrono_export = require("module_11291").Chrono;

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
