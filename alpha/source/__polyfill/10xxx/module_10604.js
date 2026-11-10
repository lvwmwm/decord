// Module ID: 10604
// Function ID: 10605
// Dependencies: [10605, 10607, 10609, 10610, 10611, 10612, 10613, 10614, 10615, 10616, 10617, 10448, 10455, 10457, 10481, 10618, 10493, 10488]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10604
import _mod10481 from "module_10481" /* 10481 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10605 from "module_10605" /* 10605 */;
import _mod10607 from "module_10607" /* 10607 */;
import _mod10609 from "module_10609" /* 10609 */;
import _mod10610 from "module_10610" /* 10610 */;
import _mod10611 from "module_10611" /* 10611 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10613 from "module_10613" /* 10613 */;
import _mod10614 from "module_10614" /* 10614 */;
import _mod10615 from "module_10615" /* 10615 */;
import _mod10616 from "module_10616" /* 10616 */;
import _mod10617 from "module_10617" /* 10617 */;
import _mod10618 from "module_10618" /* 10618 */;
import { Chrono } from "module_10448" /* 10448 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10493.default(), , , , , , ];
  new module_10493.default();
  items[1] = new module_10481.default(true);
  new module_10481.default(true);
  items[2] = new module_10605.default();
  new module_10605.default();
  items[3] = new module_10607.default();
  new module_10607.default();
  items[4] = new module_10616.default();
  new module_10616.default();
  items[5] = new module_10610.default(flag);
  new module_10610.default(flag);
  items[6] = new module_10611.default();
  new module_10611.default();
  items1 = [new module_10613.default(), ];
  new module_10613.default();
  items1[1] = new module_10612.default();
  new module_10612.default();
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
  const _default = new module_10614.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10615.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10609.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10617.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10618.default();
  unshift5(_default4);
  return tmp;
}
const module_10605 = fn(_mod10605);
const module_10607 = fn(_mod10607);
const module_10609 = fn(_mod10609);
const module_10610 = fn(_mod10610);
const module_10611 = fn(_mod10611);
const module_10612 = fn(_mod10612);
const module_10613 = fn(_mod10613);
const module_10614 = fn(_mod10614);
const module_10615 = fn(_mod10615);
const module_10616 = fn(_mod10616);
const module_10617 = fn(_mod10617);
const module_10481 = fn(_mod10481);
const module_10618 = fn(_mod10618);
const module_10493 = fn(_mod10493);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10614.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10615.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10609.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10617.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10618.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10448").Chrono(createConfiguration(true));
const Chrono_export = require("module_10448").Chrono;

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
