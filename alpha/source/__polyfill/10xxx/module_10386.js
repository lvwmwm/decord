// Module ID: 10386
// Function ID: 10387
// Dependencies: [10303, 10310, 10312, 10336, 10387, 10389, 10390, 10391, 10392, 10393, 10394, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10386
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10387 from "module_10387" /* 10387 */;
import _mod10389 from "module_10389" /* 10389 */;
import _mod10390 from "module_10390" /* 10390 */;
import _mod10391 from "module_10391" /* 10391 */;
import _mod10392 from "module_10392" /* 10392 */;
import _mod10393 from "module_10393" /* 10393 */;
import _mod10394 from "module_10394" /* 10394 */;
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
  items = [new module_10336.default(flag2), , , ];
  new module_10336.default(flag2);
  items[1] = new module_10387.default();
  new module_10387.default();
  items[2] = new module_10389.default();
  new module_10389.default();
  items[3] = new module_10392.default();
  new module_10392.default();
  items1 = [new module_10390.default(), ];
  new module_10390.default();
  items1[1] = new module_10391.default();
  new module_10391.default();
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
  const _default = new module_10393.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10394.default();
  push2(_default1);
  return tmp;
}
const module_10336 = fn(_mod10336);
const module_10387 = fn(_mod10387);
const module_10389 = fn(_mod10389);
const module_10390 = fn(_mod10390);
const module_10391 = fn(_mod10391);
const module_10392 = fn(_mod10392);
const module_10393 = fn(_mod10393);
const module_10394 = fn(_mod10394);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10393.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10394.default();
push2(_default1);
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
