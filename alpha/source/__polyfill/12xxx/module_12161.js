// Module ID: 12161
// Function ID: 12162
// Dependencies: [12162, 12164, 12165, 12166, 12167, 12168, 12169, 12089, 12096, 12098, 12170, 12171, 12135, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12161
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12135 from "module_12135" /* 12135 */;
import _mod12162 from "module_12162" /* 12162 */;
import _mod12164 from "module_12164" /* 12164 */;
import _mod12165 from "module_12165" /* 12165 */;
import _mod12166 from "module_12166" /* 12166 */;
import _mod12167 from "module_12167" /* 12167 */;
import _mod12168 from "module_12168" /* 12168 */;
import _mod12169 from "module_12169" /* 12169 */;
import _mod12170 from "module_12170" /* 12170 */;
import _mod12171 from "module_12171" /* 12171 */;
import { Chrono } from "module_12089" /* 12089 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_12162.default(), , , , ];
  new module_12162.default();
  items[1] = new module_12166.default();
  new module_12166.default();
  items[2] = new module_12171.default();
  new module_12171.default();
  items[3] = new module_12167.default();
  new module_12167.default();
  items[4] = new module_12168.default();
  new module_12168.default();
  items1 = [new module_12170.default(), , ];
  new module_12170.default();
  items1[1] = new module_12169.default();
  new module_12169.default();
  items1[2] = new module_12164.default();
  new module_12164.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_12135.default));
  return result;
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_12165.default();
  unshift(_default);
  return tmp;
}
const module_12162 = fn(_mod12162);
const module_12164 = fn(_mod12164);
const module_12165 = fn(_mod12165);
const module_12166 = fn(_mod12166);
const module_12167 = fn(_mod12167);
const module_12168 = fn(_mod12168);
const module_12169 = fn(_mod12169);
const module_12170 = fn(_mod12170);
const module_12171 = fn(_mod12171);
const module_12135 = fn(_mod12135);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12165.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_12089").Chrono(createConfiguration(true));
const Chrono_export = require("module_12089").Chrono;

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
