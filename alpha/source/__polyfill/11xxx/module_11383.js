// Module ID: 11383
// Function ID: 11384
// Dependencies: [11291, 11298, 11300, 11384, 11385, 11386, 11387, 11324, 11388, 11390, 11391, 11392, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11383
import _mod11324 from "module_11324" /* 11324 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11384 from "module_11384" /* 11384 */;
import _mod11385 from "module_11385" /* 11385 */;
import _mod11386 from "module_11386" /* 11386 */;
import _mod11387 from "module_11387" /* 11387 */;
import _mod11388 from "module_11388" /* 11388 */;
import _mod11390 from "module_11390" /* 11390 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11392 from "module_11392" /* 11392 */;
import _mod11393 from "module_11393" /* 11393 */;
import _mod11394 from "module_11394" /* 11394 */;
import _mod11395 from "module_11395" /* 11395 */;
import _mod11396 from "module_11396" /* 11396 */;
import _mod11397 from "module_11397" /* 11397 */;
import _mod11398 from "module_11398" /* 11398 */;
import _mod11399 from "module_11399" /* 11399 */;
import _mod11400 from "module_11400" /* 11400 */;

const require = globalThis.__r;

function createConfiguration(flag) {
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
  items = [new module_11324.default(flag2), , , , , , , , , ];
  new module_11324.default(flag2);
  items[1] = new module_11388.default();
  new module_11388.default();
  items[2] = new module_11391.default();
  new module_11391.default();
  items[3] = new module_11392.default();
  new module_11392.default();
  items[4] = new module_11390.default();
  new module_11390.default();
  items[5] = new module_11395.default();
  new module_11395.default();
  items[6] = new module_11393.default();
  new module_11393.default();
  items[7] = new module_11394.default(flag);
  new module_11394.default(flag);
  items[8] = new module_11399.default(flag);
  new module_11399.default(flag);
  items[9] = new module_11400.default(flag);
  new module_11400.default(flag);
  items1 = [new module_11385.default(), ];
  new module_11385.default();
  items1[1] = new module_11384.default();
  new module_11384.default();
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
  const _default = new module_11386.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11387.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11396.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11392.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11398.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11397.default();
  unshift6(_default5);
  return tmp;
}
const module_11384 = fn(_mod11384);
const module_11385 = fn(_mod11385);
const module_11386 = fn(_mod11386);
const module_11387 = fn(_mod11387);
const module_11324 = fn(_mod11324);
const module_11388 = fn(_mod11388);
const module_11390 = fn(_mod11390);
const module_11391 = fn(_mod11391);
const module_11392 = fn(_mod11392);
const module_11393 = fn(_mod11393);
const module_11394 = fn(_mod11394);
const module_11395 = fn(_mod11395);
const module_11396 = fn(_mod11396);
const module_11397 = fn(_mod11397);
const module_11398 = fn(_mod11398);
const module_11399 = fn(_mod11399);
const module_11400 = fn(_mod11400);
const chrono = new require("module_11291").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11291").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
