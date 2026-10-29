// Module ID: 10361
// Function ID: 10362
// Dependencies: [10278, 10285, 10287, 10311, 10362, 10364, 10365, 10366, 10367, 10368, 10369, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10361
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10362 from "module_10362" /* 10362 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import _mod10367 from "module_10367" /* 10367 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10369 from "module_10369" /* 10369 */;
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
  items = [new module_10311.default(flag2), , , ];
  new module_10311.default(flag2);
  items[1] = new module_10362.default();
  new module_10362.default();
  items[2] = new module_10364.default();
  new module_10364.default();
  items[3] = new module_10367.default();
  new module_10367.default();
  items1 = [new module_10365.default(), ];
  new module_10365.default();
  items1[1] = new module_10366.default();
  new module_10366.default();
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
  const _default = new module_10368.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10369.default();
  push2(_default1);
  return tmp;
}
const module_10311 = fn(_mod10311);
const module_10362 = fn(_mod10362);
const module_10364 = fn(_mod10364);
const module_10365 = fn(_mod10365);
const module_10366 = fn(_mod10366);
const module_10367 = fn(_mod10367);
const module_10368 = fn(_mod10368);
const module_10369 = fn(_mod10369);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10368.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10369.default();
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
