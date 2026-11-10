// Module ID: 10531
// Function ID: 10532
// Dependencies: [10448, 10455, 10457, 10481, 10532, 10534, 10535, 10536, 10537, 10538, 10539, 10488]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10531
import _mod10481 from "module_10481" /* 10481 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10532 from "module_10532" /* 10532 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10535 from "module_10535" /* 10535 */;
import _mod10536 from "module_10536" /* 10536 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10538 from "module_10538" /* 10538 */;
import _mod10539 from "module_10539" /* 10539 */;
import { Chrono } from "module_10448" /* 10448 */;

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
  items = [new module_10481.default(flag2), , , ];
  new module_10481.default(flag2);
  items[1] = new module_10532.default();
  new module_10532.default();
  items[2] = new module_10534.default();
  new module_10534.default();
  items[3] = new module_10537.default();
  new module_10537.default();
  items1 = [new module_10535.default(), ];
  new module_10535.default();
  items1[1] = new module_10536.default();
  new module_10536.default();
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
  const _default = new module_10538.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10539.default();
  push2(_default1);
  return tmp;
}
const module_10481 = fn(_mod10481);
const module_10532 = fn(_mod10532);
const module_10534 = fn(_mod10534);
const module_10535 = fn(_mod10535);
const module_10536 = fn(_mod10536);
const module_10537 = fn(_mod10537);
const module_10538 = fn(_mod10538);
const module_10539 = fn(_mod10539);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10538.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10539.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10448").Chrono(createConfiguration(true));
const Chrono_export = require("module_10448").Chrono;

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
