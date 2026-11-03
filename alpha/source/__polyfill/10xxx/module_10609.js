// Module ID: 10609
// Function ID: 10610
// Dependencies: [10610, 10612, 10614, 10615, 10616, 10617, 10618, 10619, 10620, 10621, 10622, 10453, 10460, 10462, 10486, 10623, 10498, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10609
import _mod10486 from "module_10486" /* 10486 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10610 from "module_10610" /* 10610 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10614 from "module_10614" /* 10614 */;
import _mod10615 from "module_10615" /* 10615 */;
import _mod10616 from "module_10616" /* 10616 */;
import _mod10617 from "module_10617" /* 10617 */;
import _mod10618 from "module_10618" /* 10618 */;
import _mod10619 from "module_10619" /* 10619 */;
import _mod10620 from "module_10620" /* 10620 */;
import _mod10621 from "module_10621" /* 10621 */;
import _mod10622 from "module_10622" /* 10622 */;
import _mod10623 from "module_10623" /* 10623 */;
import { Chrono } from "module_10453" /* 10453 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10498.default(), , , , , , ];
  new module_10498.default();
  items[1] = new module_10486.default(true);
  new module_10486.default(true);
  items[2] = new module_10610.default();
  new module_10610.default();
  items[3] = new module_10612.default();
  new module_10612.default();
  items[4] = new module_10621.default();
  new module_10621.default();
  items[5] = new module_10615.default(flag);
  new module_10615.default(flag);
  items[6] = new module_10616.default();
  new module_10616.default();
  items1 = [new module_10618.default(), ];
  new module_10618.default();
  items1[1] = new module_10617.default();
  new module_10617.default();
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
  const _default = new module_10619.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10620.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10614.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10622.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10623.default();
  unshift5(_default4);
  return tmp;
}
const module_10610 = fn(_mod10610);
const module_10612 = fn(_mod10612);
const module_10614 = fn(_mod10614);
const module_10615 = fn(_mod10615);
const module_10616 = fn(_mod10616);
const module_10617 = fn(_mod10617);
const module_10618 = fn(_mod10618);
const module_10619 = fn(_mod10619);
const module_10620 = fn(_mod10620);
const module_10621 = fn(_mod10621);
const module_10622 = fn(_mod10622);
const module_10486 = fn(_mod10486);
const module_10623 = fn(_mod10623);
const module_10498 = fn(_mod10498);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10619.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10620.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10614.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10622.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10623.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration(true));
const Chrono_export = require("module_10453").Chrono;

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
