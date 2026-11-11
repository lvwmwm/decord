// Module ID: 11411
// Function ID: 11412
// Dependencies: [11364, 11371, 11373, 11397, 11409, 11412, 11413, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11411
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11412 from "module_11412" /* 11412 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11415 from "module_11415" /* 11415 */;
import _mod11416 from "module_11416" /* 11416 */;
import _mod11417 from "module_11417" /* 11417 */;
import _mod11418 from "module_11418" /* 11418 */;
import _mod11419 from "module_11419" /* 11419 */;
import _mod11420 from "module_11420" /* 11420 */;
import _mod11421 from "module_11421" /* 11421 */;
import _mod11422 from "module_11422" /* 11422 */;
import { Chrono } from "module_11364" /* 11364 */;

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
  items = [new module_11409.default(), , , , , , ];
  new module_11409.default();
  items[1] = new module_11397.default(flag2);
  new module_11397.default(flag2);
  items[2] = new module_11412.default();
  new module_11412.default();
  items[3] = new module_11415.default();
  new module_11415.default();
  items[4] = new module_11420.default();
  new module_11420.default();
  items[5] = new module_11413.default();
  new module_11413.default();
  items[6] = new module_11422.default();
  new module_11422.default();
  items1 = [new module_11416.default(), ];
  new module_11416.default();
  items1[1] = new module_11417.default();
  new module_11417.default();
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
  const _default = new module_11419.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11418.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11421.default();
  unshift3(_default2);
  return tmp;
}
const module_11397 = fn(_mod11397);
const module_11409 = fn(_mod11409);
const module_11412 = fn(_mod11412);
const module_11413 = fn(_mod11413);
const module_11415 = fn(_mod11415);
const module_11416 = fn(_mod11416);
const module_11417 = fn(_mod11417);
const module_11418 = fn(_mod11418);
const module_11419 = fn(_mod11419);
const module_11420 = fn(_mod11420);
const module_11421 = fn(_mod11421);
const module_11422 = fn(_mod11422);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11419.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11418.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11421.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11364").Chrono(createConfiguration(true));
const Chrono_export = require("module_11364").Chrono;

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
