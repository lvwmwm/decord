// Module ID: 10630
// Function ID: 10631
// Dependencies: [10631, 10633, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10474, 10481, 10483, 10507, 10644, 10519, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10630
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10519 from "module_10519" /* 10519 */;
import _mod10631 from "module_10631" /* 10631 */;
import _mod10633 from "module_10633" /* 10633 */;
import _mod10635 from "module_10635" /* 10635 */;
import _mod10636 from "module_10636" /* 10636 */;
import _mod10637 from "module_10637" /* 10637 */;
import _mod10638 from "module_10638" /* 10638 */;
import _mod10639 from "module_10639" /* 10639 */;
import _mod10640 from "module_10640" /* 10640 */;
import _mod10641 from "module_10641" /* 10641 */;
import _mod10642 from "module_10642" /* 10642 */;
import _mod10643 from "module_10643" /* 10643 */;
import _mod10644 from "module_10644" /* 10644 */;
import { Chrono } from "module_10474" /* 10474 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10519.default(), , , , , , ];
  new module_10519.default();
  items[1] = new module_10507.default(true);
  new module_10507.default(true);
  items[2] = new module_10631.default();
  new module_10631.default();
  items[3] = new module_10633.default();
  new module_10633.default();
  items[4] = new module_10642.default();
  new module_10642.default();
  items[5] = new module_10636.default(flag);
  new module_10636.default(flag);
  items[6] = new module_10637.default();
  new module_10637.default();
  items1 = [new module_10639.default(), ];
  new module_10639.default();
  items1[1] = new module_10638.default();
  new module_10638.default();
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
  const _default = new module_10640.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10641.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10635.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10643.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10644.default();
  unshift5(_default4);
  return tmp;
}
const module_10631 = fn(_mod10631);
const module_10633 = fn(_mod10633);
const module_10635 = fn(_mod10635);
const module_10636 = fn(_mod10636);
const module_10637 = fn(_mod10637);
const module_10638 = fn(_mod10638);
const module_10639 = fn(_mod10639);
const module_10640 = fn(_mod10640);
const module_10641 = fn(_mod10641);
const module_10642 = fn(_mod10642);
const module_10643 = fn(_mod10643);
const module_10507 = fn(_mod10507);
const module_10644 = fn(_mod10644);
const module_10519 = fn(_mod10519);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10640.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10641.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10635.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10643.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10644.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10474").Chrono(createConfiguration(true));
const Chrono_export = require("module_10474").Chrono;

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
