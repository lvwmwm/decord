// Module ID: 10600
// Function ID: 10601
// Dependencies: [10516, 10474, 10481, 10483, 10591, 10592, 10594, 10595, 10596, 10597, 10598, 10599, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10600
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10591 from "module_10591" /* 10591 */;
import _mod10592 from "module_10592" /* 10592 */;
import _mod10594 from "module_10594" /* 10594 */;
import _mod10595 from "module_10595" /* 10595 */;
import _mod10596 from "module_10596" /* 10596 */;
import _mod10597 from "module_10597" /* 10597 */;
import _mod10598 from "module_10598" /* 10598 */;
import _mod10599 from "module_10599" /* 10599 */;
import { Chrono } from "module_10474" /* 10474 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10592.default(), , , , ];
  new module_10592.default();
  items[1] = new module_10595.default();
  new module_10595.default();
  items[2] = new module_10597.default();
  new module_10597.default();
  items[3] = new module_10596.default();
  new module_10596.default();
  items[4] = new module_10594.default();
  new module_10594.default();
  items1 = [new module_10598.default(), ];
  new module_10598.default();
  items1[1] = new module_10599.default();
  new module_10599.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10516.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10591.default();
  unshift(_default);
  return tmp;
}
const module_10516 = fn(_mod10516);
const module_10591 = fn(_mod10591);
const module_10592 = fn(_mod10592);
const module_10594 = fn(_mod10594);
const module_10595 = fn(_mod10595);
const module_10596 = fn(_mod10596);
const module_10597 = fn(_mod10597);
const module_10598 = fn(_mod10598);
const module_10599 = fn(_mod10599);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10591.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10591.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10474").Chrono(createConfiguration());
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
