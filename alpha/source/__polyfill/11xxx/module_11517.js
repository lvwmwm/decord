// Module ID: 11517
// Function ID: 11518
// Dependencies: [11371, 11378, 11380, 11404, 11518, 11520, 11521, 11522, 11523, 11524, 11525, 11526, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11517
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11518 from "module_11518" /* 11518 */;
import _mod11520 from "module_11520" /* 11520 */;
import _mod11521 from "module_11521" /* 11521 */;
import _mod11522 from "module_11522" /* 11522 */;
import _mod11523 from "module_11523" /* 11523 */;
import _mod11524 from "module_11524" /* 11524 */;
import _mod11525 from "module_11525" /* 11525 */;
import _mod11526 from "module_11526" /* 11526 */;
import { Chrono } from "module_11371" /* 11371 */;

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
  items = [new module_11404.default(flag2), , , , ];
  new module_11404.default(flag2);
  items[1] = new module_11518.default();
  new module_11518.default();
  items[2] = new module_11520.default();
  new module_11520.default();
  items[3] = new module_11523.default();
  new module_11523.default();
  items[4] = new module_11526.default();
  new module_11526.default();
  items1 = [new module_11521.default(), ];
  new module_11521.default();
  items1[1] = new module_11522.default();
  new module_11522.default();
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
  const _default = new module_11524.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11525.default();
  push2(_default1);
  return tmp;
}
const module_11404 = fn(_mod11404);
const module_11518 = fn(_mod11518);
const module_11520 = fn(_mod11520);
const module_11521 = fn(_mod11521);
const module_11522 = fn(_mod11522);
const module_11523 = fn(_mod11523);
const module_11524 = fn(_mod11524);
const module_11525 = fn(_mod11525);
const module_11526 = fn(_mod11526);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11524.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11525.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11371").Chrono(createConfiguration(true));
const Chrono_export = require("module_11371").Chrono;

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
