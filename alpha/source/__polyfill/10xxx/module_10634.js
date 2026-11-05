// Module ID: 10634
// Function ID: 10635
// Dependencies: [10549, 10507, 10514, 10516, 10635, 10618, 10620, 10621, 10622, 10623, 10636, 10637, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10634
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10618 from "module_10618" /* 10618 */;
import _mod10620 from "module_10620" /* 10620 */;
import _mod10621 from "module_10621" /* 10621 */;
import _mod10622 from "module_10622" /* 10622 */;
import _mod10623 from "module_10623" /* 10623 */;
import _mod10635 from "module_10635" /* 10635 */;
import _mod10636 from "module_10636" /* 10636 */;
import _mod10637 from "module_10637" /* 10637 */;
import { Chrono } from "module_10507" /* 10507 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10618.default(), , , , ];
  new module_10618.default();
  items[1] = new module_10621.default();
  new module_10621.default();
  items[2] = new module_10623.default();
  new module_10623.default();
  items[3] = new module_10622.default();
  new module_10622.default();
  items[4] = new module_10620.default();
  new module_10620.default();
  items1 = [new module_10636.default(), ];
  new module_10636.default();
  items1[1] = new module_10637.default();
  new module_10637.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10549.default));
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
  const _default = new module_10635.default();
  unshift(_default);
  return tmp;
}
const module_10549 = fn(_mod10549);
const module_10635 = fn(_mod10635);
const module_10618 = fn(_mod10618);
const module_10620 = fn(_mod10620);
const module_10621 = fn(_mod10621);
const module_10622 = fn(_mod10622);
const module_10623 = fn(_mod10623);
const module_10636 = fn(_mod10636);
const module_10637 = fn(_mod10637);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10635.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10635.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10507").Chrono(createConfiguration());
const Chrono_export = require("module_10507").Chrono;

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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
