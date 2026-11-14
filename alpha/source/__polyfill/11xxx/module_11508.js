// Module ID: 11508
// Function ID: 11509
// Dependencies: [11425, 11432, 11434, 11458, 11509, 11511, 11512, 11513, 11514, 11515, 11516, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11508
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11509 from "module_11509" /* 11509 */;
import _mod11511 from "module_11511" /* 11511 */;
import _mod11512 from "module_11512" /* 11512 */;
import _mod11513 from "module_11513" /* 11513 */;
import _mod11514 from "module_11514" /* 11514 */;
import _mod11515 from "module_11515" /* 11515 */;
import _mod11516 from "module_11516" /* 11516 */;
import { Chrono } from "module_11425" /* 11425 */;

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
  items = [new module_11458.default(flag2), , , ];
  new module_11458.default(flag2);
  items[1] = new module_11509.default();
  new module_11509.default();
  items[2] = new module_11511.default();
  new module_11511.default();
  items[3] = new module_11514.default();
  new module_11514.default();
  items1 = [new module_11512.default(), ];
  new module_11512.default();
  items1[1] = new module_11513.default();
  new module_11513.default();
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
  const _default = new module_11515.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11516.default();
  push2(_default1);
  return tmp;
}
const module_11458 = fn(_mod11458);
const module_11509 = fn(_mod11509);
const module_11511 = fn(_mod11511);
const module_11512 = fn(_mod11512);
const module_11513 = fn(_mod11513);
const module_11514 = fn(_mod11514);
const module_11515 = fn(_mod11515);
const module_11516 = fn(_mod11516);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11515.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11516.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11425").Chrono(createConfiguration(true));
const Chrono_export = require("module_11425").Chrono;

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
