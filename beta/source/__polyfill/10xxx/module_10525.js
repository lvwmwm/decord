// Module ID: 10525
// Function ID: 10526
// Dependencies: [10442, 10449, 10451, 10475, 10526, 10528, 10529, 10530, 10531, 10532, 10533, 10482]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10525
import _mod10475 from "module_10475" /* 10475 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10526 from "module_10526" /* 10526 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10529 from "module_10529" /* 10529 */;
import _mod10530 from "module_10530" /* 10530 */;
import _mod10531 from "module_10531" /* 10531 */;
import _mod10532 from "module_10532" /* 10532 */;
import _mod10533 from "module_10533" /* 10533 */;
import { Chrono } from "module_10442" /* 10442 */;

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
  items = [new module_10475.default(flag2), , , ];
  new module_10475.default(flag2);
  items[1] = new module_10526.default();
  new module_10526.default();
  items[2] = new module_10528.default();
  new module_10528.default();
  items[3] = new module_10531.default();
  new module_10531.default();
  items1 = [new module_10529.default(), ];
  new module_10529.default();
  items1[1] = new module_10530.default();
  new module_10530.default();
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
  const _default = new module_10532.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10533.default();
  push2(_default1);
  return tmp;
}
const module_10475 = fn(_mod10475);
const module_10526 = fn(_mod10526);
const module_10528 = fn(_mod10528);
const module_10529 = fn(_mod10529);
const module_10530 = fn(_mod10530);
const module_10531 = fn(_mod10531);
const module_10532 = fn(_mod10532);
const module_10533 = fn(_mod10533);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10532.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10533.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10442").Chrono(createConfiguration(true));
const Chrono_export = require("module_10442").Chrono;

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
