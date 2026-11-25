// Module ID: 11508
// Function ID: 11509
// Dependencies: [11416, 11423, 11425, 11509, 11510, 11511, 11512, 11449, 11513, 11515, 11516, 11517, 11518, 11519, 11520, 11521, 11522, 11523, 11524, 11525, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11508
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11509 from "module_11509" /* 11509 */;
import _mod11510 from "module_11510" /* 11510 */;
import _mod11511 from "module_11511" /* 11511 */;
import _mod11512 from "module_11512" /* 11512 */;
import _mod11513 from "module_11513" /* 11513 */;
import _mod11515 from "module_11515" /* 11515 */;
import _mod11516 from "module_11516" /* 11516 */;
import _mod11517 from "module_11517" /* 11517 */;
import _mod11518 from "module_11518" /* 11518 */;
import _mod11519 from "module_11519" /* 11519 */;
import _mod11520 from "module_11520" /* 11520 */;
import _mod11521 from "module_11521" /* 11521 */;
import _mod11522 from "module_11522" /* 11522 */;
import _mod11523 from "module_11523" /* 11523 */;
import _mod11524 from "module_11524" /* 11524 */;
import _mod11525 from "module_11525" /* 11525 */;

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
  items = [new module_11449.default(flag2), , , , , , , , , ];
  new module_11449.default(flag2);
  items[1] = new module_11513.default();
  new module_11513.default();
  items[2] = new module_11516.default();
  new module_11516.default();
  items[3] = new module_11517.default();
  new module_11517.default();
  items[4] = new module_11515.default();
  new module_11515.default();
  items[5] = new module_11520.default();
  new module_11520.default();
  items[6] = new module_11518.default();
  new module_11518.default();
  items[7] = new module_11519.default(flag);
  new module_11519.default(flag);
  items[8] = new module_11524.default(flag);
  new module_11524.default(flag);
  items[9] = new module_11525.default(flag);
  new module_11525.default(flag);
  items1 = [new module_11510.default(), ];
  new module_11510.default();
  items1[1] = new module_11509.default();
  new module_11509.default();
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
  const _default = new module_11511.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11512.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11521.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11517.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11523.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11522.default();
  unshift6(_default5);
  return tmp;
}
const module_11509 = fn(_mod11509);
const module_11510 = fn(_mod11510);
const module_11511 = fn(_mod11511);
const module_11512 = fn(_mod11512);
const module_11449 = fn(_mod11449);
const module_11513 = fn(_mod11513);
const module_11515 = fn(_mod11515);
const module_11516 = fn(_mod11516);
const module_11517 = fn(_mod11517);
const module_11518 = fn(_mod11518);
const module_11519 = fn(_mod11519);
const module_11520 = fn(_mod11520);
const module_11521 = fn(_mod11521);
const module_11522 = fn(_mod11522);
const module_11523 = fn(_mod11523);
const module_11524 = fn(_mod11524);
const module_11525 = fn(_mod11525);
const chrono = new require("module_11416").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11416").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11416").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
