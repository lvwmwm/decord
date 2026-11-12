// Module ID: 11441
// Function ID: 11442
// Dependencies: [11358, 11365, 11367, 11391, 11442, 11444, 11445, 11446, 11447, 11448, 11449, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11441
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11442 from "module_11442" /* 11442 */;
import _mod11444 from "module_11444" /* 11444 */;
import _mod11445 from "module_11445" /* 11445 */;
import _mod11446 from "module_11446" /* 11446 */;
import _mod11447 from "module_11447" /* 11447 */;
import _mod11448 from "module_11448" /* 11448 */;
import _mod11449 from "module_11449" /* 11449 */;
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
  items = [new module_11391.default(flag2), , , ];
  new module_11391.default(flag2);
  items[1] = new module_11442.default();
  new module_11442.default();
  items[2] = new module_11444.default();
  new module_11444.default();
  items[3] = new module_11447.default();
  new module_11447.default();
  items1 = [new module_11445.default(), ];
  new module_11445.default();
  items1[1] = new module_11446.default();
  new module_11446.default();
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
  const _default = new module_11448.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11449.default();
  push2(_default1);
  return tmp;
}
const module_11391 = fn(_mod11391);
const module_11442 = fn(_mod11442);
const module_11444 = fn(_mod11444);
const module_11445 = fn(_mod11445);
const module_11446 = fn(_mod11446);
const module_11447 = fn(_mod11447);
const module_11448 = fn(_mod11448);
const module_11449 = fn(_mod11449);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11448.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11449.default();
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
