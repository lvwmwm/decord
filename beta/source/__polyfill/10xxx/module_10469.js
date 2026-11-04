// Module ID: 10469
// Function ID: 10470
// Dependencies: [10323, 10330, 10332, 10356, 10470, 10472, 10473, 10474, 10475, 10476, 10477, 10478, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10469
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10470 from "module_10470" /* 10470 */;
import _mod10472 from "module_10472" /* 10472 */;
import _mod10473 from "module_10473" /* 10473 */;
import _mod10474 from "module_10474" /* 10474 */;
import _mod10475 from "module_10475" /* 10475 */;
import _mod10476 from "module_10476" /* 10476 */;
import _mod10477 from "module_10477" /* 10477 */;
import _mod10478 from "module_10478" /* 10478 */;
import { Chrono } from "module_10323" /* 10323 */;

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
  items = [new module_10356.default(flag2), , , , ];
  new module_10356.default(flag2);
  items[1] = new module_10470.default();
  new module_10470.default();
  items[2] = new module_10472.default();
  new module_10472.default();
  items[3] = new module_10475.default();
  new module_10475.default();
  items[4] = new module_10478.default();
  new module_10478.default();
  items1 = [new module_10473.default(), ];
  new module_10473.default();
  items1[1] = new module_10474.default();
  new module_10474.default();
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
  const _default = new module_10476.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10477.default();
  push2(_default1);
  return tmp;
}
const module_10356 = fn(_mod10356);
const module_10470 = fn(_mod10470);
const module_10472 = fn(_mod10472);
const module_10473 = fn(_mod10473);
const module_10474 = fn(_mod10474);
const module_10475 = fn(_mod10475);
const module_10476 = fn(_mod10476);
const module_10477 = fn(_mod10477);
const module_10478 = fn(_mod10478);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10476.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10477.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10323").Chrono(createConfiguration(true));
const Chrono_export = require("module_10323").Chrono;

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
