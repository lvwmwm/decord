// Module ID: 11447
// Function ID: 11448
// Dependencies: [11364, 11371, 11373, 11397, 11448, 11450, 11451, 11452, 11453, 11454, 11455, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11447
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11448 from "module_11448" /* 11448 */;
import _mod11450 from "module_11450" /* 11450 */;
import _mod11451 from "module_11451" /* 11451 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11454 from "module_11454" /* 11454 */;
import _mod11455 from "module_11455" /* 11455 */;
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
  items = [new module_11397.default(flag2), , , ];
  new module_11397.default(flag2);
  items[1] = new module_11448.default();
  new module_11448.default();
  items[2] = new module_11450.default();
  new module_11450.default();
  items[3] = new module_11453.default();
  new module_11453.default();
  items1 = [new module_11451.default(), ];
  new module_11451.default();
  items1[1] = new module_11452.default();
  new module_11452.default();
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
  const _default = new module_11454.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11455.default();
  push2(_default1);
  return tmp;
}
const module_11397 = fn(_mod11397);
const module_11448 = fn(_mod11448);
const module_11450 = fn(_mod11450);
const module_11451 = fn(_mod11451);
const module_11452 = fn(_mod11452);
const module_11453 = fn(_mod11453);
const module_11454 = fn(_mod11454);
const module_11455 = fn(_mod11455);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11454.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11455.default();
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
