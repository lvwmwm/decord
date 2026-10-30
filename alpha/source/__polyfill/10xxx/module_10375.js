// Module ID: 10375
// Function ID: 10376
// Dependencies: [10376, 10378, 10379, 10380, 10381, 10382, 10383, 10303, 10310, 10312, 10384, 10385, 10349, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10375
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10349 from "module_10349" /* 10349 */;
import _mod10376 from "module_10376" /* 10376 */;
import _mod10378 from "module_10378" /* 10378 */;
import _mod10379 from "module_10379" /* 10379 */;
import _mod10380 from "module_10380" /* 10380 */;
import _mod10381 from "module_10381" /* 10381 */;
import _mod10382 from "module_10382" /* 10382 */;
import _mod10383 from "module_10383" /* 10383 */;
import _mod10384 from "module_10384" /* 10384 */;
import _mod10385 from "module_10385" /* 10385 */;
import { Chrono } from "module_10303" /* 10303 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10376.default(), , , , ];
  new module_10376.default();
  items[1] = new module_10380.default();
  new module_10380.default();
  items[2] = new module_10385.default();
  new module_10385.default();
  items[3] = new module_10381.default();
  new module_10381.default();
  items[4] = new module_10382.default();
  new module_10382.default();
  items1 = [new module_10384.default(), , ];
  new module_10384.default();
  items1[1] = new module_10383.default();
  new module_10383.default();
  items1[2] = new module_10378.default();
  new module_10378.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10349.default));
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
  const _default = new module_10379.default();
  unshift(_default);
  return tmp;
}
const module_10376 = fn(_mod10376);
const module_10378 = fn(_mod10378);
const module_10379 = fn(_mod10379);
const module_10380 = fn(_mod10380);
const module_10381 = fn(_mod10381);
const module_10382 = fn(_mod10382);
const module_10383 = fn(_mod10383);
const module_10384 = fn(_mod10384);
const module_10385 = fn(_mod10385);
const module_10349 = fn(_mod10349);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10379.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10303").Chrono(createConfiguration(true));
const Chrono_export = require("module_10303").Chrono;

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
