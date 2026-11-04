// Module ID: 10657
// Function ID: 10658
// Dependencies: [10658, 10660, 10662, 10663, 10664, 10665, 10666, 10667, 10668, 10669, 10670, 10501, 10508, 10510, 10534, 10671, 10546, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10657
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10546 from "module_10546" /* 10546 */;
import _mod10658 from "module_10658" /* 10658 */;
import _mod10660 from "module_10660" /* 10660 */;
import _mod10662 from "module_10662" /* 10662 */;
import _mod10663 from "module_10663" /* 10663 */;
import _mod10664 from "module_10664" /* 10664 */;
import _mod10665 from "module_10665" /* 10665 */;
import _mod10666 from "module_10666" /* 10666 */;
import _mod10667 from "module_10667" /* 10667 */;
import _mod10668 from "module_10668" /* 10668 */;
import _mod10669 from "module_10669" /* 10669 */;
import _mod10670 from "module_10670" /* 10670 */;
import _mod10671 from "module_10671" /* 10671 */;
import { Chrono } from "module_10501" /* 10501 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10546.default(), , , , , , ];
  new module_10546.default();
  items[1] = new module_10534.default(true);
  new module_10534.default(true);
  items[2] = new module_10658.default();
  new module_10658.default();
  items[3] = new module_10660.default();
  new module_10660.default();
  items[4] = new module_10669.default();
  new module_10669.default();
  items[5] = new module_10663.default(flag);
  new module_10663.default(flag);
  items[6] = new module_10664.default();
  new module_10664.default();
  items1 = [new module_10666.default(), ];
  new module_10666.default();
  items1[1] = new module_10665.default();
  new module_10665.default();
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10667.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10668.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10662.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10670.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10671.default();
  unshift5(_default4);
  return tmp;
}
const module_10658 = fn(_mod10658);
const module_10660 = fn(_mod10660);
const module_10662 = fn(_mod10662);
const module_10663 = fn(_mod10663);
const module_10664 = fn(_mod10664);
const module_10665 = fn(_mod10665);
const module_10666 = fn(_mod10666);
const module_10667 = fn(_mod10667);
const module_10668 = fn(_mod10668);
const module_10669 = fn(_mod10669);
const module_10670 = fn(_mod10670);
const module_10534 = fn(_mod10534);
const module_10671 = fn(_mod10671);
const module_10546 = fn(_mod10546);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10667.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10668.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10662.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10670.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10671.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10501").Chrono(createConfiguration(true));
const Chrono_export = require("module_10501").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
