// Module ID: 11432
// Function ID: 11433
// Dependencies: [11349, 11356, 11358, 11382, 11433, 11435, 11436, 11437, 11438, 11439, 11440, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11432
import _mod11382 from "module_11382" /* 11382 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11433 from "module_11433" /* 11433 */;
import _mod11435 from "module_11435" /* 11435 */;
import _mod11436 from "module_11436" /* 11436 */;
import _mod11437 from "module_11437" /* 11437 */;
import _mod11438 from "module_11438" /* 11438 */;
import _mod11439 from "module_11439" /* 11439 */;
import _mod11440 from "module_11440" /* 11440 */;
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
  items = [new module_11382.default(flag2), , , ];
  new module_11382.default(flag2);
  items[1] = new module_11433.default();
  new module_11433.default();
  items[2] = new module_11435.default();
  new module_11435.default();
  items[3] = new module_11438.default();
  new module_11438.default();
  items1 = [new module_11436.default(), ];
  new module_11436.default();
  items1[1] = new module_11437.default();
  new module_11437.default();
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
  const _default = new module_11439.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11440.default();
  push2(_default1);
  return tmp;
}
const module_11382 = fn(_mod11382);
const module_11433 = fn(_mod11433);
const module_11435 = fn(_mod11435);
const module_11436 = fn(_mod11436);
const module_11437 = fn(_mod11437);
const module_11438 = fn(_mod11438);
const module_11439 = fn(_mod11439);
const module_11440 = fn(_mod11440);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11439.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11440.default();
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
