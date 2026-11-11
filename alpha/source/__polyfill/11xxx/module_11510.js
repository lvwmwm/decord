// Module ID: 11510
// Function ID: 11511
// Dependencies: [11364, 11371, 11373, 11397, 11511, 11513, 11514, 11515, 11516, 11517, 11518, 11519, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11510
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11511 from "module_11511" /* 11511 */;
import _mod11513 from "module_11513" /* 11513 */;
import _mod11514 from "module_11514" /* 11514 */;
import _mod11515 from "module_11515" /* 11515 */;
import _mod11516 from "module_11516" /* 11516 */;
import _mod11517 from "module_11517" /* 11517 */;
import _mod11518 from "module_11518" /* 11518 */;
import _mod11519 from "module_11519" /* 11519 */;
import { Chrono } from "module_11364" /* 11364 */;

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
  items = [new module_11397.default(flag2), , , , ];
  new module_11397.default(flag2);
  items[1] = new module_11511.default();
  new module_11511.default();
  items[2] = new module_11513.default();
  new module_11513.default();
  items[3] = new module_11516.default();
  new module_11516.default();
  items[4] = new module_11519.default();
  new module_11519.default();
  items1 = [new module_11514.default(), ];
  new module_11514.default();
  items1[1] = new module_11515.default();
  new module_11515.default();
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
  const _default = new module_11517.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11518.default();
  push2(_default1);
  return tmp;
}
const module_11397 = fn(_mod11397);
const module_11511 = fn(_mod11511);
const module_11513 = fn(_mod11513);
const module_11514 = fn(_mod11514);
const module_11515 = fn(_mod11515);
const module_11516 = fn(_mod11516);
const module_11517 = fn(_mod11517);
const module_11518 = fn(_mod11518);
const module_11519 = fn(_mod11519);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11517.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11518.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11364").Chrono(createConfiguration(true));
const Chrono_export = require("module_11364").Chrono;

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
