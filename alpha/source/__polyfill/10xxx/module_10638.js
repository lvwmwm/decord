// Module ID: 10638
// Function ID: 10639
// Dependencies: [10448, 10455, 10457, 10481, 10493, 10639, 10641, 10642, 10643, 10488]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10638
import _mod10481 from "module_10481" /* 10481 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10639 from "module_10639" /* 10639 */;
import _mod10641 from "module_10641" /* 10641 */;
import _mod10642 from "module_10642" /* 10642 */;
import _mod10643 from "module_10643" /* 10643 */;
import { Chrono } from "module_10448" /* 10448 */;

const require = globalThis.__r;

let items;
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
  let items;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10493.default(), , , , ];
  new module_10493.default();
  items[1] = new module_10481.default(flag);
  new module_10481.default(flag);
  items[2] = new module_10641.default();
  new module_10641.default();
  items[3] = new module_10639.default();
  new module_10639.default();
  items[4] = new module_10642.default();
  new module_10642.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10643.default();
  unshift(_default5);
  return result;
}
function createConfiguration(flag) {
  let items;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10493.default(), , , , ];
  new module_10493.default();
  items[1] = new module_10481.default(flag2);
  new module_10481.default(flag2);
  items[2] = new module_10641.default();
  new module_10641.default();
  items[3] = new module_10639.default();
  new module_10639.default();
  items[4] = new module_10642.default();
  new module_10642.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10481 = fn(_mod10481);
const module_10493 = fn(_mod10493);
const module_10639 = fn(_mod10639);
const module_10641 = fn(_mod10641);
const module_10642 = fn(_mod10642);
const module_10643 = fn(_mod10643);
const chrono = new require("module_10448").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10493.default();
items = [_default, , , , ];
const _default1 = new module_10481.default(true);
items[1] = _default1;
const _default2 = new module_10641.default();
items[2] = _default2;
const _default3 = new module_10639.default();
items[3] = _default3;
const _default4 = new module_10642.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10448").Chrono;

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
