// Module ID: 11495
// Function ID: 11496
// Dependencies: [11349, 11356, 11358, 11382, 11496, 11498, 11499, 11500, 11501, 11502, 11503, 11504, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11495
import _mod11382 from "module_11382" /* 11382 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11496 from "module_11496" /* 11496 */;
import _mod11498 from "module_11498" /* 11498 */;
import _mod11499 from "module_11499" /* 11499 */;
import _mod11500 from "module_11500" /* 11500 */;
import _mod11501 from "module_11501" /* 11501 */;
import _mod11502 from "module_11502" /* 11502 */;
import _mod11503 from "module_11503" /* 11503 */;
import _mod11504 from "module_11504" /* 11504 */;
import { Chrono } from "module_11349" /* 11349 */;

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
  items = [new module_11382.default(flag2), , , , ];
  new module_11382.default(flag2);
  items[1] = new module_11496.default();
  new module_11496.default();
  items[2] = new module_11498.default();
  new module_11498.default();
  items[3] = new module_11501.default();
  new module_11501.default();
  items[4] = new module_11504.default();
  new module_11504.default();
  items1 = [new module_11499.default(), ];
  new module_11499.default();
  items1[1] = new module_11500.default();
  new module_11500.default();
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
  const _default = new module_11502.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11503.default();
  push2(_default1);
  return tmp;
}
const module_11382 = fn(_mod11382);
const module_11496 = fn(_mod11496);
const module_11498 = fn(_mod11498);
const module_11499 = fn(_mod11499);
const module_11500 = fn(_mod11500);
const module_11501 = fn(_mod11501);
const module_11502 = fn(_mod11502);
const module_11503 = fn(_mod11503);
const module_11504 = fn(_mod11504);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11502.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11503.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11349").Chrono(createConfiguration(true));
const Chrono_export = require("module_11349").Chrono;

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
