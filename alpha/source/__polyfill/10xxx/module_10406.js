// Module ID: 10406
// Function ID: 10407
// Dependencies: [10323, 10330, 10332, 10356, 10407, 10409, 10410, 10411, 10412, 10413, 10414, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10406
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10407 from "module_10407" /* 10407 */;
import _mod10409 from "module_10409" /* 10409 */;
import _mod10410 from "module_10410" /* 10410 */;
import _mod10411 from "module_10411" /* 10411 */;
import _mod10412 from "module_10412" /* 10412 */;
import _mod10413 from "module_10413" /* 10413 */;
import _mod10414 from "module_10414" /* 10414 */;
import { Chrono } from "module_10323" /* 10323 */;

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
  items = [new module_10356.default(flag2), , , ];
  new module_10356.default(flag2);
  items[1] = new module_10407.default();
  new module_10407.default();
  items[2] = new module_10409.default();
  new module_10409.default();
  items[3] = new module_10412.default();
  new module_10412.default();
  items1 = [new module_10410.default(), ];
  new module_10410.default();
  items1[1] = new module_10411.default();
  new module_10411.default();
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
  const _default = new module_10413.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10414.default();
  push2(_default1);
  return tmp;
}
const module_10356 = fn(_mod10356);
const module_10407 = fn(_mod10407);
const module_10409 = fn(_mod10409);
const module_10410 = fn(_mod10410);
const module_10411 = fn(_mod10411);
const module_10412 = fn(_mod10412);
const module_10413 = fn(_mod10413);
const module_10414 = fn(_mod10414);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10413.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10414.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10323").Chrono(createConfiguration(true));
const Chrono_export = require("module_10323").Chrono;

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
