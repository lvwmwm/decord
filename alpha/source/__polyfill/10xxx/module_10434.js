// Module ID: 10434
// Function ID: 10435
// Dependencies: [10435, 10437, 10439, 10440, 10441, 10442, 10443, 10444, 10445, 10446, 10447, 10278, 10285, 10287, 10311, 10448, 10323, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10434
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10435 from "module_10435" /* 10435 */;
import _mod10437 from "module_10437" /* 10437 */;
import _mod10439 from "module_10439" /* 10439 */;
import _mod10440 from "module_10440" /* 10440 */;
import _mod10441 from "module_10441" /* 10441 */;
import _mod10442 from "module_10442" /* 10442 */;
import _mod10443 from "module_10443" /* 10443 */;
import _mod10444 from "module_10444" /* 10444 */;
import _mod10445 from "module_10445" /* 10445 */;
import _mod10446 from "module_10446" /* 10446 */;
import _mod10447 from "module_10447" /* 10447 */;
import _mod10448 from "module_10448" /* 10448 */;
import { Chrono } from "module_10278" /* 10278 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10323.default(), , , , , , ];
  new module_10323.default();
  items[1] = new module_10311.default(true);
  new module_10311.default(true);
  items[2] = new module_10435.default();
  new module_10435.default();
  items[3] = new module_10437.default();
  new module_10437.default();
  items[4] = new module_10446.default();
  new module_10446.default();
  items[5] = new module_10440.default(flag);
  new module_10440.default(flag);
  items[6] = new module_10441.default();
  new module_10441.default();
  items1 = [new module_10443.default(), ];
  new module_10443.default();
  items1[1] = new module_10442.default();
  new module_10442.default();
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
  const _default = new module_10444.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10445.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10439.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10447.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10448.default();
  unshift5(_default4);
  return tmp;
}
const module_10435 = fn(_mod10435);
const module_10437 = fn(_mod10437);
const module_10439 = fn(_mod10439);
const module_10440 = fn(_mod10440);
const module_10441 = fn(_mod10441);
const module_10442 = fn(_mod10442);
const module_10443 = fn(_mod10443);
const module_10444 = fn(_mod10444);
const module_10445 = fn(_mod10445);
const module_10446 = fn(_mod10446);
const module_10447 = fn(_mod10447);
const module_10311 = fn(_mod10311);
const module_10448 = fn(_mod10448);
const module_10323 = fn(_mod10323);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10444.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10445.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10439.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10447.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10448.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10278").Chrono(createConfiguration(true));
const Chrono_export = require("module_10278").Chrono;

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
