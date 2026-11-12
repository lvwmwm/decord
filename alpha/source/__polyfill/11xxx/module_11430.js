// Module ID: 11430
// Function ID: 11431
// Dependencies: [11431, 11433, 11434, 11435, 11436, 11437, 11438, 11358, 11365, 11367, 11439, 11440, 11404, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11430
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11404 from "module_11404" /* 11404 */;
import _mod11431 from "module_11431" /* 11431 */;
import _mod11433 from "module_11433" /* 11433 */;
import _mod11434 from "module_11434" /* 11434 */;
import _mod11435 from "module_11435" /* 11435 */;
import _mod11436 from "module_11436" /* 11436 */;
import _mod11437 from "module_11437" /* 11437 */;
import _mod11438 from "module_11438" /* 11438 */;
import _mod11439 from "module_11439" /* 11439 */;
import _mod11440 from "module_11440" /* 11440 */;
import { Chrono } from "module_11358" /* 11358 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11431.default(), , , , ];
  new module_11431.default();
  items[1] = new module_11435.default();
  new module_11435.default();
  items[2] = new module_11440.default();
  new module_11440.default();
  items[3] = new module_11436.default();
  new module_11436.default();
  items[4] = new module_11437.default();
  new module_11437.default();
  items1 = [new module_11439.default(), , ];
  new module_11439.default();
  items1[1] = new module_11438.default();
  new module_11438.default();
  items1[2] = new module_11433.default();
  new module_11433.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11404.default));
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
  const _default = new module_11434.default();
  unshift(_default);
  return tmp;
}
const module_11431 = fn(_mod11431);
const module_11433 = fn(_mod11433);
const module_11434 = fn(_mod11434);
const module_11435 = fn(_mod11435);
const module_11436 = fn(_mod11436);
const module_11437 = fn(_mod11437);
const module_11438 = fn(_mod11438);
const module_11439 = fn(_mod11439);
const module_11440 = fn(_mod11440);
const module_11404 = fn(_mod11404);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11434.default();
unshift(_default);
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
