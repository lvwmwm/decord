// Module ID: 11475
// Function ID: 11476
// Dependencies: [11416, 11423, 11425, 11476, 11477, 11449, 11478, 11479, 11480, 11481, 11483, 11484, 11485, 11486, 11487, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11475
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11476 from "module_11476" /* 11476 */;
import _mod11477 from "module_11477" /* 11477 */;
import _mod11478 from "module_11478" /* 11478 */;
import _mod11479 from "module_11479" /* 11479 */;
import _mod11480 from "module_11480" /* 11480 */;
import _mod11481 from "module_11481" /* 11481 */;
import _mod11483 from "module_11483" /* 11483 */;
import _mod11484 from "module_11484" /* 11484 */;
import _mod11485 from "module_11485" /* 11485 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
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
  items = [new module_11449.default(flag2), , , , , , ];
  new module_11449.default(flag2);
  items[1] = new module_11484.default();
  new module_11484.default();
  items[2] = new module_11478.default();
  new module_11478.default();
  items[3] = new module_11483.default();
  new module_11483.default();
  items[4] = new module_11485.default();
  new module_11485.default();
  items[5] = new module_11486.default();
  new module_11486.default();
  items[6] = new module_11481.default();
  new module_11481.default();
  items1 = [new module_11479.default(), ];
  new module_11479.default();
  items1[1] = new module_11480.default();
  new module_11480.default();
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
  const unshift = parsers.unshift;
  const _default = new module_11476.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11477.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11487.default();
  unshift3(_default2);
  return tmp;
}
const module_11476 = fn(_mod11476);
const module_11477 = fn(_mod11477);
const module_11449 = fn(_mod11449);
const module_11478 = fn(_mod11478);
const module_11479 = fn(_mod11479);
const module_11480 = fn(_mod11480);
const module_11481 = fn(_mod11481);
const module_11483 = fn(_mod11483);
const module_11484 = fn(_mod11484);
const module_11485 = fn(_mod11485);
const module_11486 = fn(_mod11486);
const module_11487 = fn(_mod11487);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11476.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11477.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11487.default();
unshift3(_default2);
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
