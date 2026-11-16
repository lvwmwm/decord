// Module ID: 11472
// Function ID: 11473
// Dependencies: [11425, 11432, 11434, 11458, 11470, 11473, 11474, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11472
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11473 from "module_11473" /* 11473 */;
import _mod11474 from "module_11474" /* 11474 */;
import _mod11476 from "module_11476" /* 11476 */;
import _mod11477 from "module_11477" /* 11477 */;
import _mod11478 from "module_11478" /* 11478 */;
import _mod11479 from "module_11479" /* 11479 */;
import _mod11480 from "module_11480" /* 11480 */;
import _mod11481 from "module_11481" /* 11481 */;
import _mod11482 from "module_11482" /* 11482 */;
import _mod11483 from "module_11483" /* 11483 */;
import { Chrono } from "module_11425" /* 11425 */;

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
  items = [new module_11470.default(), , , , , , ];
  new module_11470.default();
  items[1] = new module_11458.default(flag2);
  new module_11458.default(flag2);
  items[2] = new module_11473.default();
  new module_11473.default();
  items[3] = new module_11476.default();
  new module_11476.default();
  items[4] = new module_11481.default();
  new module_11481.default();
  items[5] = new module_11474.default();
  new module_11474.default();
  items[6] = new module_11483.default();
  new module_11483.default();
  items1 = [new module_11477.default(), ];
  new module_11477.default();
  items1[1] = new module_11478.default();
  new module_11478.default();
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
  const _default = new module_11480.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11479.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11482.default();
  unshift3(_default2);
  return tmp;
}
const module_11458 = fn(_mod11458);
const module_11470 = fn(_mod11470);
const module_11473 = fn(_mod11473);
const module_11474 = fn(_mod11474);
const module_11476 = fn(_mod11476);
const module_11477 = fn(_mod11477);
const module_11478 = fn(_mod11478);
const module_11479 = fn(_mod11479);
const module_11480 = fn(_mod11480);
const module_11481 = fn(_mod11481);
const module_11482 = fn(_mod11482);
const module_11483 = fn(_mod11483);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11480.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11479.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11482.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11425").Chrono(createConfiguration(true));
const Chrono_export = require("module_11425").Chrono;

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
