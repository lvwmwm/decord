// Module ID: 10546
// Function ID: 10547
// Dependencies: [10547, 10549, 10550, 10551, 10552, 10553, 10554, 10474, 10481, 10483, 10555, 10556, 10520, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10546
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10520 from "module_10520" /* 10520 */;
import _mod10547 from "module_10547" /* 10547 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10550 from "module_10550" /* 10550 */;
import _mod10551 from "module_10551" /* 10551 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10553 from "module_10553" /* 10553 */;
import _mod10554 from "module_10554" /* 10554 */;
import _mod10555 from "module_10555" /* 10555 */;
import _mod10556 from "module_10556" /* 10556 */;
import { Chrono } from "module_10474" /* 10474 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10547.default(), , , , ];
  new module_10547.default();
  items[1] = new module_10551.default();
  new module_10551.default();
  items[2] = new module_10556.default();
  new module_10556.default();
  items[3] = new module_10552.default();
  new module_10552.default();
  items[4] = new module_10553.default();
  new module_10553.default();
  items1 = [new module_10555.default(), , ];
  new module_10555.default();
  items1[1] = new module_10554.default();
  new module_10554.default();
  items1[2] = new module_10549.default();
  new module_10549.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10520.default));
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10550.default();
  unshift(_default);
  return tmp;
}
const module_10547 = fn(_mod10547);
const module_10549 = fn(_mod10549);
const module_10550 = fn(_mod10550);
const module_10551 = fn(_mod10551);
const module_10552 = fn(_mod10552);
const module_10553 = fn(_mod10553);
const module_10554 = fn(_mod10554);
const module_10555 = fn(_mod10555);
const module_10556 = fn(_mod10556);
const module_10520 = fn(_mod10520);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10550.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10474").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
