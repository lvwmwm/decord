// Module ID: 11503
// Function ID: 11504
// Dependencies: [11411, 11418, 11420, 11504, 11505, 11506, 11507, 11444, 11508, 11510, 11511, 11512, 11513, 11514, 11515, 11516, 11517, 11518, 11519, 11520, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11503
import _mod11444 from "module_11444" /* 11444 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11504 from "module_11504" /* 11504 */;
import _mod11505 from "module_11505" /* 11505 */;
import _mod11506 from "module_11506" /* 11506 */;
import _mod11507 from "module_11507" /* 11507 */;
import _mod11508 from "module_11508" /* 11508 */;
import _mod11510 from "module_11510" /* 11510 */;
import _mod11511 from "module_11511" /* 11511 */;
import _mod11512 from "module_11512" /* 11512 */;
import _mod11513 from "module_11513" /* 11513 */;
import _mod11514 from "module_11514" /* 11514 */;
import _mod11515 from "module_11515" /* 11515 */;
import _mod11516 from "module_11516" /* 11516 */;
import _mod11517 from "module_11517" /* 11517 */;
import _mod11518 from "module_11518" /* 11518 */;
import _mod11519 from "module_11519" /* 11519 */;
import _mod11520 from "module_11520" /* 11520 */;

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
  items = [new module_11444.default(flag2), , , , , , , , , ];
  new module_11444.default(flag2);
  items[1] = new module_11508.default();
  new module_11508.default();
  items[2] = new module_11511.default();
  new module_11511.default();
  items[3] = new module_11512.default();
  new module_11512.default();
  items[4] = new module_11510.default();
  new module_11510.default();
  items[5] = new module_11515.default();
  new module_11515.default();
  items[6] = new module_11513.default();
  new module_11513.default();
  items[7] = new module_11514.default(flag);
  new module_11514.default(flag);
  items[8] = new module_11519.default(flag);
  new module_11519.default(flag);
  items[9] = new module_11520.default(flag);
  new module_11520.default(flag);
  items1 = [new module_11505.default(), ];
  new module_11505.default();
  items1[1] = new module_11504.default();
  new module_11504.default();
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
  const _default = new module_11506.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11507.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11516.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11512.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11518.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11517.default();
  unshift6(_default5);
  return tmp;
}
const module_11504 = fn(_mod11504);
const module_11505 = fn(_mod11505);
const module_11506 = fn(_mod11506);
const module_11507 = fn(_mod11507);
const module_11444 = fn(_mod11444);
const module_11508 = fn(_mod11508);
const module_11510 = fn(_mod11510);
const module_11511 = fn(_mod11511);
const module_11512 = fn(_mod11512);
const module_11513 = fn(_mod11513);
const module_11514 = fn(_mod11514);
const module_11515 = fn(_mod11515);
const module_11516 = fn(_mod11516);
const module_11517 = fn(_mod11517);
const module_11518 = fn(_mod11518);
const module_11519 = fn(_mod11519);
const module_11520 = fn(_mod11520);
const chrono = new require("module_11411").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11411").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11411").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
