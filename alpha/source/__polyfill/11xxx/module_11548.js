// Module ID: 11548
// Function ID: 11549
// Dependencies: [11358, 11365, 11367, 11391, 11403, 11549, 11551, 11552, 11553, 11398]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 11548
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11403 from "module_11403" /* 11403 */;
import _mod11549 from "module_11549" /* 11549 */;
import _mod11551 from "module_11551" /* 11551 */;
import _mod11552 from "module_11552" /* 11552 */;
import _mod11553 from "module_11553" /* 11553 */;
import { Chrono } from "module_11358" /* 11358 */;

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
  items = [new module_11403.default(), , , , ];
  new module_11403.default();
  items[1] = new module_11391.default(flag);
  new module_11391.default(flag);
  items[2] = new module_11551.default();
  new module_11551.default();
  items[3] = new module_11549.default();
  new module_11549.default();
  items[4] = new module_11552.default();
  new module_11552.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_11553.default();
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
  items = [new module_11403.default(), , , , ];
  new module_11403.default();
  items[1] = new module_11391.default(flag2);
  new module_11391.default(flag2);
  items[2] = new module_11551.default();
  new module_11551.default();
  items[3] = new module_11549.default();
  new module_11549.default();
  items[4] = new module_11552.default();
  new module_11552.default();
  return includeCommonConfiguration(obj, flag);
}
const module_11391 = fn(_mod11391);
const module_11403 = fn(_mod11403);
const module_11549 = fn(_mod11549);
const module_11551 = fn(_mod11551);
const module_11552 = fn(_mod11552);
const module_11553 = fn(_mod11553);
const chrono = new require("module_11358").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_11403.default();
items = [_default, , , , ];
const _default1 = new module_11391.default(true);
items[1] = _default1;
const _default2 = new module_11551.default();
items[2] = _default2;
const _default3 = new module_11549.default();
items[3] = _default3;
const _default4 = new module_11552.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
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
