// Module ID: 11374
// Function ID: 11375
// Dependencies: [11291, 11298, 11300, 11324, 11375, 11377, 11378, 11379, 11380, 11381, 11382, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11374
import _mod11324 from "module_11324" /* 11324 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11375 from "module_11375" /* 11375 */;
import _mod11377 from "module_11377" /* 11377 */;
import _mod11378 from "module_11378" /* 11378 */;
import _mod11379 from "module_11379" /* 11379 */;
import _mod11380 from "module_11380" /* 11380 */;
import _mod11381 from "module_11381" /* 11381 */;
import _mod11382 from "module_11382" /* 11382 */;
import { Chrono } from "module_11291" /* 11291 */;

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
  items = [new module_11324.default(flag2), , , ];
  new module_11324.default(flag2);
  items[1] = new module_11375.default();
  new module_11375.default();
  items[2] = new module_11377.default();
  new module_11377.default();
  items[3] = new module_11380.default();
  new module_11380.default();
  items1 = [new module_11378.default(), ];
  new module_11378.default();
  items1[1] = new module_11379.default();
  new module_11379.default();
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
  const _default = new module_11381.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11382.default();
  push2(_default1);
  return tmp;
}
const module_11324 = fn(_mod11324);
const module_11375 = fn(_mod11375);
const module_11377 = fn(_mod11377);
const module_11378 = fn(_mod11378);
const module_11379 = fn(_mod11379);
const module_11380 = fn(_mod11380);
const module_11381 = fn(_mod11381);
const module_11382 = fn(_mod11382);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11381.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11382.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));
const Chrono_export = require("module_11291").Chrono;

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
