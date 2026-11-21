// Module ID: 11494
// Function ID: 11495
// Dependencies: [11411, 11418, 11420, 11444, 11495, 11497, 11498, 11499, 11500, 11501, 11502, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11494
import _mod11444 from "module_11444" /* 11444 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11495 from "module_11495" /* 11495 */;
import _mod11497 from "module_11497" /* 11497 */;
import _mod11498 from "module_11498" /* 11498 */;
import _mod11499 from "module_11499" /* 11499 */;
import _mod11500 from "module_11500" /* 11500 */;
import _mod11501 from "module_11501" /* 11501 */;
import _mod11502 from "module_11502" /* 11502 */;
import { Chrono } from "module_11411" /* 11411 */;

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
  items = [new module_11444.default(flag2), , , ];
  new module_11444.default(flag2);
  items[1] = new module_11495.default();
  new module_11495.default();
  items[2] = new module_11497.default();
  new module_11497.default();
  items[3] = new module_11500.default();
  new module_11500.default();
  items1 = [new module_11498.default(), ];
  new module_11498.default();
  items1[1] = new module_11499.default();
  new module_11499.default();
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
  const push = parsers.push;
  const _default = new module_11501.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11502.default();
  push2(_default1);
  return tmp;
}
const module_11444 = fn(_mod11444);
const module_11495 = fn(_mod11495);
const module_11497 = fn(_mod11497);
const module_11498 = fn(_mod11498);
const module_11499 = fn(_mod11499);
const module_11500 = fn(_mod11500);
const module_11501 = fn(_mod11501);
const module_11502 = fn(_mod11502);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11501.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11502.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11411").Chrono(createConfiguration(true));
const Chrono_export = require("module_11411").Chrono;

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
