// Module ID: 11499
// Function ID: 11500
// Dependencies: [11416, 11423, 11425, 11449, 11500, 11502, 11503, 11504, 11505, 11506, 11507, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11499
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11500 from "module_11500" /* 11500 */;
import _mod11502 from "module_11502" /* 11502 */;
import _mod11503 from "module_11503" /* 11503 */;
import _mod11504 from "module_11504" /* 11504 */;
import _mod11505 from "module_11505" /* 11505 */;
import _mod11506 from "module_11506" /* 11506 */;
import _mod11507 from "module_11507" /* 11507 */;
import { Chrono } from "module_11416" /* 11416 */;

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
  items = [new module_11449.default(flag2), , , ];
  new module_11449.default(flag2);
  items[1] = new module_11500.default();
  new module_11500.default();
  items[2] = new module_11502.default();
  new module_11502.default();
  items[3] = new module_11505.default();
  new module_11505.default();
  items1 = [new module_11503.default(), ];
  new module_11503.default();
  items1[1] = new module_11504.default();
  new module_11504.default();
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
  const _default = new module_11506.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11507.default();
  push2(_default1);
  return tmp;
}
const module_11449 = fn(_mod11449);
const module_11500 = fn(_mod11500);
const module_11502 = fn(_mod11502);
const module_11503 = fn(_mod11503);
const module_11504 = fn(_mod11504);
const module_11505 = fn(_mod11505);
const module_11506 = fn(_mod11506);
const module_11507 = fn(_mod11507);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11506.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11507.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11416").Chrono(createConfiguration(true));
const Chrono_export = require("module_11416").Chrono;

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
