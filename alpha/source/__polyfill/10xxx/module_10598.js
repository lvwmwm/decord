// Module ID: 10598
// Function ID: 10599
// Dependencies: [10599, 10601, 10603, 10604, 10605, 10606, 10607, 10608, 10609, 10610, 10611, 10442, 10449, 10451, 10475, 10612, 10487, 10482]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10598
import _mod10475 from "module_10475" /* 10475 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10599 from "module_10599" /* 10599 */;
import _mod10601 from "module_10601" /* 10601 */;
import _mod10603 from "module_10603" /* 10603 */;
import _mod10604 from "module_10604" /* 10604 */;
import _mod10605 from "module_10605" /* 10605 */;
import _mod10606 from "module_10606" /* 10606 */;
import _mod10607 from "module_10607" /* 10607 */;
import _mod10608 from "module_10608" /* 10608 */;
import _mod10609 from "module_10609" /* 10609 */;
import _mod10610 from "module_10610" /* 10610 */;
import _mod10611 from "module_10611" /* 10611 */;
import _mod10612 from "module_10612" /* 10612 */;
import { Chrono } from "module_10442" /* 10442 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10487.default(), , , , , , ];
  new module_10487.default();
  items[1] = new module_10475.default(true);
  new module_10475.default(true);
  items[2] = new module_10599.default();
  new module_10599.default();
  items[3] = new module_10601.default();
  new module_10601.default();
  items[4] = new module_10610.default();
  new module_10610.default();
  items[5] = new module_10604.default(flag);
  new module_10604.default(flag);
  items[6] = new module_10605.default();
  new module_10605.default();
  items1 = [new module_10607.default(), ];
  new module_10607.default();
  items1[1] = new module_10606.default();
  new module_10606.default();
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
  const _default = new module_10608.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10609.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10603.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10611.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10612.default();
  unshift5(_default4);
  return tmp;
}
const module_10599 = fn(_mod10599);
const module_10601 = fn(_mod10601);
const module_10603 = fn(_mod10603);
const module_10604 = fn(_mod10604);
const module_10605 = fn(_mod10605);
const module_10606 = fn(_mod10606);
const module_10607 = fn(_mod10607);
const module_10608 = fn(_mod10608);
const module_10609 = fn(_mod10609);
const module_10610 = fn(_mod10610);
const module_10611 = fn(_mod10611);
const module_10475 = fn(_mod10475);
const module_10612 = fn(_mod10612);
const module_10487 = fn(_mod10487);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10608.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10609.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10603.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10611.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10612.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10442").Chrono(createConfiguration(true));
const Chrono_export = require("module_10442").Chrono;

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
