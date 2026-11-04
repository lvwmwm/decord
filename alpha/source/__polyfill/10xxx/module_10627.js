// Module ID: 10627
// Function ID: 10628
// Dependencies: [10543, 10501, 10508, 10510, 10618, 10619, 10621, 10622, 10623, 10624, 10625, 10626, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10627
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10618 from "module_10618" /* 10618 */;
import _mod10619 from "module_10619" /* 10619 */;
import _mod10621 from "module_10621" /* 10621 */;
import _mod10622 from "module_10622" /* 10622 */;
import _mod10623 from "module_10623" /* 10623 */;
import _mod10624 from "module_10624" /* 10624 */;
import _mod10625 from "module_10625" /* 10625 */;
import _mod10626 from "module_10626" /* 10626 */;
import { Chrono } from "module_10501" /* 10501 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10619.default(), , , , ];
  new module_10619.default();
  items[1] = new module_10622.default();
  new module_10622.default();
  items[2] = new module_10624.default();
  new module_10624.default();
  items[3] = new module_10623.default();
  new module_10623.default();
  items[4] = new module_10621.default();
  new module_10621.default();
  items1 = [new module_10625.default(), ];
  new module_10625.default();
  items1[1] = new module_10626.default();
  new module_10626.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10543.default));
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
  const _default = new module_10618.default();
  unshift(_default);
  return tmp;
}
const module_10543 = fn(_mod10543);
const module_10618 = fn(_mod10618);
const module_10619 = fn(_mod10619);
const module_10621 = fn(_mod10621);
const module_10622 = fn(_mod10622);
const module_10623 = fn(_mod10623);
const module_10624 = fn(_mod10624);
const module_10625 = fn(_mod10625);
const module_10626 = fn(_mod10626);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10618.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10618.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10501").Chrono(createConfiguration());
const Chrono_export = require("module_10501").Chrono;

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
