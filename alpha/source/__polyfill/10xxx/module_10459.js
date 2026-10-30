// Module ID: 10459
// Function ID: 10460
// Dependencies: [10460, 10462, 10464, 10465, 10466, 10467, 10468, 10469, 10470, 10471, 10472, 10303, 10310, 10312, 10336, 10473, 10348, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10459
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10460 from "module_10460" /* 10460 */;
import _mod10462 from "module_10462" /* 10462 */;
import _mod10464 from "module_10464" /* 10464 */;
import _mod10465 from "module_10465" /* 10465 */;
import _mod10466 from "module_10466" /* 10466 */;
import _mod10467 from "module_10467" /* 10467 */;
import _mod10468 from "module_10468" /* 10468 */;
import _mod10469 from "module_10469" /* 10469 */;
import _mod10470 from "module_10470" /* 10470 */;
import _mod10471 from "module_10471" /* 10471 */;
import _mod10472 from "module_10472" /* 10472 */;
import _mod10473 from "module_10473" /* 10473 */;
import { Chrono } from "module_10303" /* 10303 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10348.default(), , , , , , ];
  new module_10348.default();
  items[1] = new module_10336.default(true);
  new module_10336.default(true);
  items[2] = new module_10460.default();
  new module_10460.default();
  items[3] = new module_10462.default();
  new module_10462.default();
  items[4] = new module_10471.default();
  new module_10471.default();
  items[5] = new module_10465.default(flag);
  new module_10465.default(flag);
  items[6] = new module_10466.default();
  new module_10466.default();
  items1 = [new module_10468.default(), ];
  new module_10468.default();
  items1[1] = new module_10467.default();
  new module_10467.default();
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
  const _default = new module_10469.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10470.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10464.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10472.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10473.default();
  unshift5(_default4);
  return tmp;
}
const module_10460 = fn(_mod10460);
const module_10462 = fn(_mod10462);
const module_10464 = fn(_mod10464);
const module_10465 = fn(_mod10465);
const module_10466 = fn(_mod10466);
const module_10467 = fn(_mod10467);
const module_10468 = fn(_mod10468);
const module_10469 = fn(_mod10469);
const module_10470 = fn(_mod10470);
const module_10471 = fn(_mod10471);
const module_10472 = fn(_mod10472);
const module_10336 = fn(_mod10336);
const module_10473 = fn(_mod10473);
const module_10348 = fn(_mod10348);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10469.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10470.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10464.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10472.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10473.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10303").Chrono(createConfiguration(true));
const Chrono_export = require("module_10303").Chrono;

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
