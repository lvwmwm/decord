// Module ID: 10615
// Function ID: 10616
// Dependencies: [10616, 10618, 10620, 10621, 10622, 10623, 10624, 10625, 10626, 10627, 10628, 10459, 10466, 10468, 10492, 10629, 10504, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10615
import _mod10492 from "module_10492" /* 10492 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10616 from "module_10616" /* 10616 */;
import _mod10618 from "module_10618" /* 10618 */;
import _mod10620 from "module_10620" /* 10620 */;
import _mod10621 from "module_10621" /* 10621 */;
import _mod10622 from "module_10622" /* 10622 */;
import _mod10623 from "module_10623" /* 10623 */;
import _mod10624 from "module_10624" /* 10624 */;
import _mod10625 from "module_10625" /* 10625 */;
import _mod10626 from "module_10626" /* 10626 */;
import _mod10627 from "module_10627" /* 10627 */;
import _mod10628 from "module_10628" /* 10628 */;
import _mod10629 from "module_10629" /* 10629 */;
import { Chrono } from "module_10459" /* 10459 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10504.default(), , , , , , ];
  new module_10504.default();
  items[1] = new module_10492.default(true);
  new module_10492.default(true);
  items[2] = new module_10616.default();
  new module_10616.default();
  items[3] = new module_10618.default();
  new module_10618.default();
  items[4] = new module_10627.default();
  new module_10627.default();
  items[5] = new module_10621.default(flag);
  new module_10621.default(flag);
  items[6] = new module_10622.default();
  new module_10622.default();
  items1 = [new module_10624.default(), ];
  new module_10624.default();
  items1[1] = new module_10623.default();
  new module_10623.default();
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
  const _default = new module_10625.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10626.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10620.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10628.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10629.default();
  unshift5(_default4);
  return tmp;
}
const module_10616 = fn(_mod10616);
const module_10618 = fn(_mod10618);
const module_10620 = fn(_mod10620);
const module_10621 = fn(_mod10621);
const module_10622 = fn(_mod10622);
const module_10623 = fn(_mod10623);
const module_10624 = fn(_mod10624);
const module_10625 = fn(_mod10625);
const module_10626 = fn(_mod10626);
const module_10627 = fn(_mod10627);
const module_10628 = fn(_mod10628);
const module_10492 = fn(_mod10492);
const module_10629 = fn(_mod10629);
const module_10504 = fn(_mod10504);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10625.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10626.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10620.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10628.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10629.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10459").Chrono(createConfiguration(true));
const Chrono_export = require("module_10459").Chrono;

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
