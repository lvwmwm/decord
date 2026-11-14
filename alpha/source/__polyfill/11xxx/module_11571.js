// Module ID: 11571
// Function ID: 11572
// Dependencies: [11425, 11432, 11434, 11458, 11572, 11574, 11575, 11576, 11577, 11578, 11579, 11580, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11571
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11572 from "module_11572" /* 11572 */;
import _mod11574 from "module_11574" /* 11574 */;
import _mod11575 from "module_11575" /* 11575 */;
import _mod11576 from "module_11576" /* 11576 */;
import _mod11577 from "module_11577" /* 11577 */;
import _mod11578 from "module_11578" /* 11578 */;
import _mod11579 from "module_11579" /* 11579 */;
import _mod11580 from "module_11580" /* 11580 */;
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
  items = [new module_11458.default(flag2), , , , ];
  new module_11458.default(flag2);
  items[1] = new module_11572.default();
  new module_11572.default();
  items[2] = new module_11574.default();
  new module_11574.default();
  items[3] = new module_11577.default();
  new module_11577.default();
  items[4] = new module_11580.default();
  new module_11580.default();
  items1 = [new module_11575.default(), ];
  new module_11575.default();
  items1[1] = new module_11576.default();
  new module_11576.default();
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
  const _default = new module_11578.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11579.default();
  push2(_default1);
  return tmp;
}
const module_11458 = fn(_mod11458);
const module_11572 = fn(_mod11572);
const module_11574 = fn(_mod11574);
const module_11575 = fn(_mod11575);
const module_11576 = fn(_mod11576);
const module_11577 = fn(_mod11577);
const module_11578 = fn(_mod11578);
const module_11579 = fn(_mod11579);
const module_11580 = fn(_mod11580);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11578.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11579.default();
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
