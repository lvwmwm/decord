// Module ID: 10424
// Function ID: 10425
// Dependencies: [10278, 10285, 10287, 10311, 10425, 10427, 10428, 10429, 10430, 10431, 10432, 10433, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10424
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10425 from "module_10425" /* 10425 */;
import _mod10427 from "module_10427" /* 10427 */;
import _mod10428 from "module_10428" /* 10428 */;
import _mod10429 from "module_10429" /* 10429 */;
import _mod10430 from "module_10430" /* 10430 */;
import _mod10431 from "module_10431" /* 10431 */;
import _mod10432 from "module_10432" /* 10432 */;
import _mod10433 from "module_10433" /* 10433 */;
import { Chrono } from "module_10278" /* 10278 */;

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
  items = [new module_10311.default(flag2), , , , ];
  new module_10311.default(flag2);
  items[1] = new module_10425.default();
  new module_10425.default();
  items[2] = new module_10427.default();
  new module_10427.default();
  items[3] = new module_10430.default();
  new module_10430.default();
  items[4] = new module_10433.default();
  new module_10433.default();
  items1 = [new module_10428.default(), ];
  new module_10428.default();
  items1[1] = new module_10429.default();
  new module_10429.default();
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
  const _default = new module_10431.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10432.default();
  push2(_default1);
  return tmp;
}
const module_10311 = fn(_mod10311);
const module_10425 = fn(_mod10425);
const module_10427 = fn(_mod10427);
const module_10428 = fn(_mod10428);
const module_10429 = fn(_mod10429);
const module_10430 = fn(_mod10430);
const module_10431 = fn(_mod10431);
const module_10432 = fn(_mod10432);
const module_10433 = fn(_mod10433);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10431.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10432.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10278").Chrono(createConfiguration(true));
const Chrono_export = require("module_10278").Chrono;

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
