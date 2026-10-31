// Module ID: 10382
// Function ID: 10383
// Dependencies: [10323, 10330, 10332, 10383, 10384, 10356, 10385, 10386, 10387, 10388, 10390, 10391, 10392, 10393, 10394, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10382
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10383 from "module_10383" /* 10383 */;
import _mod10384 from "module_10384" /* 10384 */;
import _mod10385 from "module_10385" /* 10385 */;
import _mod10386 from "module_10386" /* 10386 */;
import _mod10387 from "module_10387" /* 10387 */;
import _mod10388 from "module_10388" /* 10388 */;
import _mod10390 from "module_10390" /* 10390 */;
import _mod10391 from "module_10391" /* 10391 */;
import _mod10392 from "module_10392" /* 10392 */;
import _mod10393 from "module_10393" /* 10393 */;
import _mod10394 from "module_10394" /* 10394 */;
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
  items = [new module_10356.default(flag2), , , , , , ];
  new module_10356.default(flag2);
  items[1] = new module_10391.default();
  new module_10391.default();
  items[2] = new module_10385.default();
  new module_10385.default();
  items[3] = new module_10390.default();
  new module_10390.default();
  items[4] = new module_10392.default();
  new module_10392.default();
  items[5] = new module_10393.default();
  new module_10393.default();
  items[6] = new module_10388.default();
  new module_10388.default();
  items1 = [new module_10386.default(), ];
  new module_10386.default();
  items1[1] = new module_10387.default();
  new module_10387.default();
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
  const _default = new module_10383.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10384.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10394.default();
  unshift3(_default2);
  return tmp;
}
const module_10383 = fn(_mod10383);
const module_10384 = fn(_mod10384);
const module_10356 = fn(_mod10356);
const module_10385 = fn(_mod10385);
const module_10386 = fn(_mod10386);
const module_10387 = fn(_mod10387);
const module_10388 = fn(_mod10388);
const module_10390 = fn(_mod10390);
const module_10391 = fn(_mod10391);
const module_10392 = fn(_mod10392);
const module_10393 = fn(_mod10393);
const module_10394 = fn(_mod10394);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10383.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10384.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10394.default();
unshift3(_default2);
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
