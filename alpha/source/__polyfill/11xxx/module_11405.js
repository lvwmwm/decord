// Module ID: 11405
// Function ID: 11406
// Dependencies: [11358, 11365, 11367, 11391, 11403, 11406, 11407, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11405
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11403 from "module_11403" /* 11403 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11407 from "module_11407" /* 11407 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11410 from "module_11410" /* 11410 */;
import _mod11411 from "module_11411" /* 11411 */;
import _mod11412 from "module_11412" /* 11412 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11414 from "module_11414" /* 11414 */;
import _mod11415 from "module_11415" /* 11415 */;
import _mod11416 from "module_11416" /* 11416 */;
import { Chrono } from "module_11358" /* 11358 */;

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
  items = [new module_11403.default(), , , , , , ];
  new module_11403.default();
  items[1] = new module_11391.default(flag2);
  new module_11391.default(flag2);
  items[2] = new module_11406.default();
  new module_11406.default();
  items[3] = new module_11409.default();
  new module_11409.default();
  items[4] = new module_11414.default();
  new module_11414.default();
  items[5] = new module_11407.default();
  new module_11407.default();
  items[6] = new module_11416.default();
  new module_11416.default();
  items1 = [new module_11410.default(), ];
  new module_11410.default();
  items1[1] = new module_11411.default();
  new module_11411.default();
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
  const _default = new module_11413.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11412.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11415.default();
  unshift3(_default2);
  return tmp;
}
const module_11391 = fn(_mod11391);
const module_11403 = fn(_mod11403);
const module_11406 = fn(_mod11406);
const module_11407 = fn(_mod11407);
const module_11409 = fn(_mod11409);
const module_11410 = fn(_mod11410);
const module_11411 = fn(_mod11411);
const module_11412 = fn(_mod11412);
const module_11413 = fn(_mod11413);
const module_11414 = fn(_mod11414);
const module_11415 = fn(_mod11415);
const module_11416 = fn(_mod11416);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11413.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11412.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11415.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11358").Chrono(createConfiguration(true));
const Chrono_export = require("module_11358").Chrono;

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
