// Module ID: 10542
// Function ID: 10543
// Dependencies: [10459, 10466, 10468, 10492, 10543, 10545, 10546, 10547, 10548, 10549, 10550, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10542
import _mod10492 from "module_10492" /* 10492 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10545 from "module_10545" /* 10545 */;
import _mod10546 from "module_10546" /* 10546 */;
import _mod10547 from "module_10547" /* 10547 */;
import _mod10548 from "module_10548" /* 10548 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10550 from "module_10550" /* 10550 */;
import { Chrono } from "module_10459" /* 10459 */;

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
  items = [new module_10492.default(flag2), , , ];
  new module_10492.default(flag2);
  items[1] = new module_10543.default();
  new module_10543.default();
  items[2] = new module_10545.default();
  new module_10545.default();
  items[3] = new module_10548.default();
  new module_10548.default();
  items1 = [new module_10546.default(), ];
  new module_10546.default();
  items1[1] = new module_10547.default();
  new module_10547.default();
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
  const _default = new module_10549.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10550.default();
  push2(_default1);
  return tmp;
}
const module_10492 = fn(_mod10492);
const module_10543 = fn(_mod10543);
const module_10545 = fn(_mod10545);
const module_10546 = fn(_mod10546);
const module_10547 = fn(_mod10547);
const module_10548 = fn(_mod10548);
const module_10549 = fn(_mod10549);
const module_10550 = fn(_mod10550);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10549.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10550.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10459").Chrono(createConfiguration(true));
const Chrono_export = require("module_10459").Chrono;

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
