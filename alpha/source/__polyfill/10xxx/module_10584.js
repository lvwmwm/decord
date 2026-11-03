// Module ID: 10584
// Function ID: 10585
// Dependencies: [10585, 10587, 10589, 10590, 10591, 10592, 10593, 10594, 10595, 10596, 10597, 10453, 10460, 10462, 10486, 10598, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10584
import _mod10486 from "module_10486" /* 10486 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10585 from "module_10585" /* 10585 */;
import _mod10587 from "module_10587" /* 10587 */;
import _mod10589 from "module_10589" /* 10589 */;
import _mod10590 from "module_10590" /* 10590 */;
import _mod10591 from "module_10591" /* 10591 */;
import _mod10592 from "module_10592" /* 10592 */;
import _mod10593 from "module_10593" /* 10593 */;
import _mod10594 from "module_10594" /* 10594 */;
import _mod10595 from "module_10595" /* 10595 */;
import _mod10596 from "module_10596" /* 10596 */;
import _mod10597 from "module_10597" /* 10597 */;
import _mod10598 from "module_10598" /* 10598 */;
import { Chrono } from "module_10453" /* 10453 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10486.default(true), , , , , ];
  new module_10486.default(true);
  items[1] = new module_10585.default();
  new module_10585.default();
  items[2] = new module_10587.default();
  new module_10587.default();
  items[3] = new module_10596.default();
  new module_10596.default();
  items[4] = new module_10590.default(flag);
  new module_10590.default(flag);
  items[5] = new module_10591.default();
  new module_10591.default();
  items1 = [new module_10593.default(), ];
  new module_10593.default();
  items1[1] = new module_10592.default();
  new module_10592.default();
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
  const _default = new module_10594.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10595.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10589.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10597.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10598.default();
  unshift5(_default4);
  return tmp;
}
const module_10585 = fn(_mod10585);
const module_10587 = fn(_mod10587);
const module_10589 = fn(_mod10589);
const module_10590 = fn(_mod10590);
const module_10591 = fn(_mod10591);
const module_10592 = fn(_mod10592);
const module_10593 = fn(_mod10593);
const module_10594 = fn(_mod10594);
const module_10595 = fn(_mod10595);
const module_10596 = fn(_mod10596);
const module_10597 = fn(_mod10597);
const module_10486 = fn(_mod10486);
const module_10598 = fn(_mod10598);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10594.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10595.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10589.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10597.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10598.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration(true));
const Chrono_export = require("module_10453").Chrono;

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
