// Module ID: 11504
// Function ID: 11505
// Dependencies: [11358, 11365, 11367, 11391, 11505, 11507, 11508, 11509, 11510, 11511, 11512, 11513, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11504
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11505 from "module_11505" /* 11505 */;
import _mod11507 from "module_11507" /* 11507 */;
import _mod11508 from "module_11508" /* 11508 */;
import _mod11509 from "module_11509" /* 11509 */;
import _mod11510 from "module_11510" /* 11510 */;
import _mod11511 from "module_11511" /* 11511 */;
import _mod11512 from "module_11512" /* 11512 */;
import _mod11513 from "module_11513" /* 11513 */;
import { Chrono } from "module_11358" /* 11358 */;

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
  items = [new module_11391.default(flag2), , , , ];
  new module_11391.default(flag2);
  items[1] = new module_11505.default();
  new module_11505.default();
  items[2] = new module_11507.default();
  new module_11507.default();
  items[3] = new module_11510.default();
  new module_11510.default();
  items[4] = new module_11513.default();
  new module_11513.default();
  items1 = [new module_11508.default(), ];
  new module_11508.default();
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
  const push = parsers.push;
  const _default = new module_11511.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11512.default();
  push2(_default1);
  return tmp;
}
const module_11391 = fn(_mod11391);
const module_11505 = fn(_mod11505);
const module_11507 = fn(_mod11507);
const module_11508 = fn(_mod11508);
const module_11509 = fn(_mod11509);
const module_11510 = fn(_mod11510);
const module_11511 = fn(_mod11511);
const module_11512 = fn(_mod11512);
const module_11513 = fn(_mod11513);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11511.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11512.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11358").Chrono(createConfiguration(true));
const Chrono_export = require("module_11358").Chrono;

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
