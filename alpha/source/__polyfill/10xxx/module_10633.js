// Module ID: 10633
// Function ID: 10634
// Dependencies: [10549, 10507, 10514, 10516, 10624, 10625, 10627, 10628, 10629, 10630, 10631, 10632, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10633
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10624 from "module_10624" /* 10624 */;
import _mod10625 from "module_10625" /* 10625 */;
import _mod10627 from "module_10627" /* 10627 */;
import _mod10628 from "module_10628" /* 10628 */;
import _mod10629 from "module_10629" /* 10629 */;
import _mod10630 from "module_10630" /* 10630 */;
import _mod10631 from "module_10631" /* 10631 */;
import _mod10632 from "module_10632" /* 10632 */;
import { Chrono } from "module_10507" /* 10507 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10625.default(), , , , ];
  new module_10625.default();
  items[1] = new module_10628.default();
  new module_10628.default();
  items[2] = new module_10630.default();
  new module_10630.default();
  items[3] = new module_10629.default();
  new module_10629.default();
  items[4] = new module_10627.default();
  new module_10627.default();
  items1 = [new module_10631.default(), ];
  new module_10631.default();
  items1[1] = new module_10632.default();
  new module_10632.default();
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
  const _default = new module_10624.default();
  unshift(_default);
  return tmp;
}
const module_10549 = fn(_mod10549);
const module_10624 = fn(_mod10624);
const module_10625 = fn(_mod10625);
const module_10627 = fn(_mod10627);
const module_10628 = fn(_mod10628);
const module_10629 = fn(_mod10629);
const module_10630 = fn(_mod10630);
const module_10631 = fn(_mod10631);
const module_10632 = fn(_mod10632);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10624.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10624.default();
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
