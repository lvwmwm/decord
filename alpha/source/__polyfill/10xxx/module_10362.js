// Module ID: 10362
// Function ID: 10363
// Dependencies: [10303, 10310, 10312, 10363, 10364, 10336, 10365, 10366, 10367, 10368, 10370, 10371, 10372, 10373, 10374, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10362
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import _mod10367 from "module_10367" /* 10367 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10370 from "module_10370" /* 10370 */;
import _mod10371 from "module_10371" /* 10371 */;
import _mod10372 from "module_10372" /* 10372 */;
import _mod10373 from "module_10373" /* 10373 */;
import _mod10374 from "module_10374" /* 10374 */;
import { Chrono } from "module_10303" /* 10303 */;

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
  items = [new module_10336.default(flag2), , , , , , ];
  new module_10336.default(flag2);
  items[1] = new module_10371.default();
  new module_10371.default();
  items[2] = new module_10365.default();
  new module_10365.default();
  items[3] = new module_10370.default();
  new module_10370.default();
  items[4] = new module_10372.default();
  new module_10372.default();
  items[5] = new module_10373.default();
  new module_10373.default();
  items[6] = new module_10368.default();
  new module_10368.default();
  items1 = [new module_10366.default(), ];
  new module_10366.default();
  items1[1] = new module_10367.default();
  new module_10367.default();
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
  const _default = new module_10363.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10364.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10374.default();
  unshift3(_default2);
  return tmp;
}
const module_10363 = fn(_mod10363);
const module_10364 = fn(_mod10364);
const module_10336 = fn(_mod10336);
const module_10365 = fn(_mod10365);
const module_10366 = fn(_mod10366);
const module_10367 = fn(_mod10367);
const module_10368 = fn(_mod10368);
const module_10370 = fn(_mod10370);
const module_10371 = fn(_mod10371);
const module_10372 = fn(_mod10372);
const module_10373 = fn(_mod10373);
const module_10374 = fn(_mod10374);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10363.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10364.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10374.default();
unshift3(_default2);
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
