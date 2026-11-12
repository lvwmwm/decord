// Module ID: 10533
// Function ID: 10534
// Dependencies: [10474, 10481, 10483, 10534, 10535, 10507, 10536, 10537, 10538, 10539, 10541, 10542, 10543, 10544, 10545, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10533
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10535 from "module_10535" /* 10535 */;
import _mod10536 from "module_10536" /* 10536 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10538 from "module_10538" /* 10538 */;
import _mod10539 from "module_10539" /* 10539 */;
import _mod10541 from "module_10541" /* 10541 */;
import _mod10542 from "module_10542" /* 10542 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10544 from "module_10544" /* 10544 */;
import _mod10545 from "module_10545" /* 10545 */;
import { Chrono } from "module_10474" /* 10474 */;

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
  items = [new module_10507.default(flag2), , , , , , ];
  new module_10507.default(flag2);
  items[1] = new module_10542.default();
  new module_10542.default();
  items[2] = new module_10536.default();
  new module_10536.default();
  items[3] = new module_10541.default();
  new module_10541.default();
  items[4] = new module_10543.default();
  new module_10543.default();
  items[5] = new module_10544.default();
  new module_10544.default();
  items[6] = new module_10539.default();
  new module_10539.default();
  items1 = [new module_10537.default(), ];
  new module_10537.default();
  items1[1] = new module_10538.default();
  new module_10538.default();
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
  const unshift = parsers.unshift;
  const _default = new module_10534.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10535.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10545.default();
  unshift3(_default2);
  return tmp;
}
const module_10534 = fn(_mod10534);
const module_10535 = fn(_mod10535);
const module_10507 = fn(_mod10507);
const module_10536 = fn(_mod10536);
const module_10537 = fn(_mod10537);
const module_10538 = fn(_mod10538);
const module_10539 = fn(_mod10539);
const module_10541 = fn(_mod10541);
const module_10542 = fn(_mod10542);
const module_10543 = fn(_mod10543);
const module_10544 = fn(_mod10544);
const module_10545 = fn(_mod10545);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10534.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10535.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10545.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10474").Chrono(createConfiguration(true));
const Chrono_export = require("module_10474").Chrono;

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
