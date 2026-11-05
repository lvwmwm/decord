// Module ID: 10663
// Function ID: 10664
// Dependencies: [10664, 10666, 10668, 10669, 10670, 10671, 10672, 10673, 10674, 10675, 10676, 10507, 10514, 10516, 10540, 10677, 10552, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10663
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10664 from "module_10664" /* 10664 */;
import _mod10666 from "module_10666" /* 10666 */;
import _mod10668 from "module_10668" /* 10668 */;
import _mod10669 from "module_10669" /* 10669 */;
import _mod10670 from "module_10670" /* 10670 */;
import _mod10671 from "module_10671" /* 10671 */;
import _mod10672 from "module_10672" /* 10672 */;
import _mod10673 from "module_10673" /* 10673 */;
import _mod10674 from "module_10674" /* 10674 */;
import _mod10675 from "module_10675" /* 10675 */;
import _mod10676 from "module_10676" /* 10676 */;
import _mod10677 from "module_10677" /* 10677 */;
import { Chrono } from "module_10507" /* 10507 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10552.default(), , , , , , ];
  new module_10552.default();
  items[1] = new module_10540.default(true);
  new module_10540.default(true);
  items[2] = new module_10664.default();
  new module_10664.default();
  items[3] = new module_10666.default();
  new module_10666.default();
  items[4] = new module_10675.default();
  new module_10675.default();
  items[5] = new module_10669.default(flag);
  new module_10669.default(flag);
  items[6] = new module_10670.default();
  new module_10670.default();
  items1 = [new module_10672.default(), ];
  new module_10672.default();
  items1[1] = new module_10671.default();
  new module_10671.default();
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
  const _default = new module_10673.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10674.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10668.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10676.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10677.default();
  unshift5(_default4);
  return tmp;
}
const module_10664 = fn(_mod10664);
const module_10666 = fn(_mod10666);
const module_10668 = fn(_mod10668);
const module_10669 = fn(_mod10669);
const module_10670 = fn(_mod10670);
const module_10671 = fn(_mod10671);
const module_10672 = fn(_mod10672);
const module_10673 = fn(_mod10673);
const module_10674 = fn(_mod10674);
const module_10675 = fn(_mod10675);
const module_10676 = fn(_mod10676);
const module_10540 = fn(_mod10540);
const module_10677 = fn(_mod10677);
const module_10552 = fn(_mod10552);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10673.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10674.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10668.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10676.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10677.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10507").Chrono(createConfiguration(true));
const Chrono_export = require("module_10507").Chrono;

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
