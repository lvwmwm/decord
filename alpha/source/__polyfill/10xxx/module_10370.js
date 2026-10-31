// Module ID: 10370
// Function ID: 10371
// Dependencies: [10323, 10330, 10332, 10356, 10368, 10371, 10372, 10374, 10375, 10376, 10377, 10378, 10379, 10380, 10381, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10370
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10371 from "module_10371" /* 10371 */;
import _mod10372 from "module_10372" /* 10372 */;
import _mod10374 from "module_10374" /* 10374 */;
import _mod10375 from "module_10375" /* 10375 */;
import _mod10376 from "module_10376" /* 10376 */;
import _mod10377 from "module_10377" /* 10377 */;
import _mod10378 from "module_10378" /* 10378 */;
import _mod10379 from "module_10379" /* 10379 */;
import _mod10380 from "module_10380" /* 10380 */;
import _mod10381 from "module_10381" /* 10381 */;
import { Chrono } from "module_10323" /* 10323 */;

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
  items = [new module_10368.default(), , , , , , ];
  new module_10368.default();
  items[1] = new module_10356.default(flag2);
  new module_10356.default(flag2);
  items[2] = new module_10371.default();
  new module_10371.default();
  items[3] = new module_10374.default();
  new module_10374.default();
  items[4] = new module_10379.default();
  new module_10379.default();
  items[5] = new module_10372.default();
  new module_10372.default();
  items[6] = new module_10381.default();
  new module_10381.default();
  items1 = [new module_10375.default(), ];
  new module_10375.default();
  items1[1] = new module_10376.default();
  new module_10376.default();
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
  const _default = new module_10378.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10377.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10380.default();
  unshift3(_default2);
  return tmp;
}
const module_10356 = fn(_mod10356);
const module_10368 = fn(_mod10368);
const module_10371 = fn(_mod10371);
const module_10372 = fn(_mod10372);
const module_10374 = fn(_mod10374);
const module_10375 = fn(_mod10375);
const module_10376 = fn(_mod10376);
const module_10377 = fn(_mod10377);
const module_10378 = fn(_mod10378);
const module_10379 = fn(_mod10379);
const module_10380 = fn(_mod10380);
const module_10381 = fn(_mod10381);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10378.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10377.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10380.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10323").Chrono(createConfiguration(true));
const Chrono_export = require("module_10323").Chrono;

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
