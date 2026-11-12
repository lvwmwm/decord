// Module ID: 10620
// Function ID: 10621
// Dependencies: [10474, 10481, 10483, 10507, 10621, 10623, 10624, 10625, 10626, 10627, 10628, 10629, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10620
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10621 from "module_10621" /* 10621 */;
import _mod10623 from "module_10623" /* 10623 */;
import _mod10624 from "module_10624" /* 10624 */;
import _mod10625 from "module_10625" /* 10625 */;
import _mod10626 from "module_10626" /* 10626 */;
import _mod10627 from "module_10627" /* 10627 */;
import _mod10628 from "module_10628" /* 10628 */;
import _mod10629 from "module_10629" /* 10629 */;
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
  items = [new module_10507.default(flag2), , , , ];
  new module_10507.default(flag2);
  items[1] = new module_10621.default();
  new module_10621.default();
  items[2] = new module_10623.default();
  new module_10623.default();
  items[3] = new module_10626.default();
  new module_10626.default();
  items[4] = new module_10629.default();
  new module_10629.default();
  items1 = [new module_10624.default(), ];
  new module_10624.default();
  items1[1] = new module_10625.default();
  new module_10625.default();
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
  const _default = new module_10627.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10628.default();
  push2(_default1);
  return tmp;
}
const module_10507 = fn(_mod10507);
const module_10621 = fn(_mod10621);
const module_10623 = fn(_mod10623);
const module_10624 = fn(_mod10624);
const module_10625 = fn(_mod10625);
const module_10626 = fn(_mod10626);
const module_10627 = fn(_mod10627);
const module_10628 = fn(_mod10628);
const module_10629 = fn(_mod10629);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10627.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10628.default();
push2(_default1);
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
