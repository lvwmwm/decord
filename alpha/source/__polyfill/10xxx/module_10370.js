// Module ID: 10370
// Function ID: 10371
// Dependencies: [10278, 10285, 10287, 10371, 10372, 10373, 10374, 10311, 10375, 10377, 10378, 10379, 10380, 10381, 10382, 10383, 10384, 10385, 10386, 10387, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10370
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10371 from "module_10371" /* 10371 */;
import _mod10372 from "module_10372" /* 10372 */;
import _mod10373 from "module_10373" /* 10373 */;
import _mod10374 from "module_10374" /* 10374 */;
import _mod10375 from "module_10375" /* 10375 */;
import _mod10377 from "module_10377" /* 10377 */;
import _mod10378 from "module_10378" /* 10378 */;
import _mod10379 from "module_10379" /* 10379 */;
import _mod10380 from "module_10380" /* 10380 */;
import _mod10381 from "module_10381" /* 10381 */;
import _mod10382 from "module_10382" /* 10382 */;
import _mod10383 from "module_10383" /* 10383 */;
import _mod10384 from "module_10384" /* 10384 */;
import _mod10385 from "module_10385" /* 10385 */;
import _mod10386 from "module_10386" /* 10386 */;
import _mod10387 from "module_10387" /* 10387 */;

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
  items = [new module_10311.default(flag2), , , , , , , , , ];
  new module_10311.default(flag2);
  items[1] = new module_10375.default();
  new module_10375.default();
  items[2] = new module_10378.default();
  new module_10378.default();
  items[3] = new module_10379.default();
  new module_10379.default();
  items[4] = new module_10377.default();
  new module_10377.default();
  items[5] = new module_10382.default();
  new module_10382.default();
  items[6] = new module_10380.default();
  new module_10380.default();
  items[7] = new module_10381.default(flag);
  new module_10381.default(flag);
  items[8] = new module_10386.default(flag);
  new module_10386.default(flag);
  items[9] = new module_10387.default(flag);
  new module_10387.default(flag);
  items1 = [new module_10372.default(), ];
  new module_10372.default();
  items1[1] = new module_10371.default();
  new module_10371.default();
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
  const _default = new module_10373.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10374.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10383.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10379.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10385.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10384.default();
  unshift6(_default5);
  return tmp;
}
const module_10371 = fn(_mod10371);
const module_10372 = fn(_mod10372);
const module_10373 = fn(_mod10373);
const module_10374 = fn(_mod10374);
const module_10311 = fn(_mod10311);
const module_10375 = fn(_mod10375);
const module_10377 = fn(_mod10377);
const module_10378 = fn(_mod10378);
const module_10379 = fn(_mod10379);
const module_10380 = fn(_mod10380);
const module_10381 = fn(_mod10381);
const module_10382 = fn(_mod10382);
const module_10383 = fn(_mod10383);
const module_10384 = fn(_mod10384);
const module_10385 = fn(_mod10385);
const module_10386 = fn(_mod10386);
const module_10387 = fn(_mod10387);
const chrono = new require("module_10278").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10278").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10278").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
