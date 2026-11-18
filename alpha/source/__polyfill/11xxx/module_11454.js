// Module ID: 11454
// Function ID: 11455
// Dependencies: [11371, 11378, 11380, 11404, 11455, 11457, 11458, 11459, 11460, 11461, 11462, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11454
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11455 from "module_11455" /* 11455 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11458 from "module_11458" /* 11458 */;
import _mod11459 from "module_11459" /* 11459 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11461 from "module_11461" /* 11461 */;
import _mod11462 from "module_11462" /* 11462 */;
import { Chrono } from "module_11371" /* 11371 */;

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
  items = [new module_11404.default(flag2), , , ];
  new module_11404.default(flag2);
  items[1] = new module_11455.default();
  new module_11455.default();
  items[2] = new module_11457.default();
  new module_11457.default();
  items[3] = new module_11460.default();
  new module_11460.default();
  items1 = [new module_11458.default(), ];
  new module_11458.default();
  items1[1] = new module_11459.default();
  new module_11459.default();
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
  const _default = new module_11461.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11462.default();
  push2(_default1);
  return tmp;
}
const module_11404 = fn(_mod11404);
const module_11455 = fn(_mod11455);
const module_11457 = fn(_mod11457);
const module_11458 = fn(_mod11458);
const module_11459 = fn(_mod11459);
const module_11460 = fn(_mod11460);
const module_11461 = fn(_mod11461);
const module_11462 = fn(_mod11462);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11461.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11462.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11371").Chrono(createConfiguration(true));
const Chrono_export = require("module_11371").Chrono;

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
