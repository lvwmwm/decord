// Module ID: 11484
// Function ID: 11485
// Dependencies: [11425, 11432, 11434, 11485, 11486, 11458, 11487, 11488, 11489, 11490, 11492, 11493, 11494, 11495, 11496, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11484
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11485 from "module_11485" /* 11485 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
import _mod11488 from "module_11488" /* 11488 */;
import _mod11489 from "module_11489" /* 11489 */;
import _mod11490 from "module_11490" /* 11490 */;
import _mod11492 from "module_11492" /* 11492 */;
import _mod11493 from "module_11493" /* 11493 */;
import _mod11494 from "module_11494" /* 11494 */;
import _mod11495 from "module_11495" /* 11495 */;
import _mod11496 from "module_11496" /* 11496 */;
import { Chrono } from "module_11425" /* 11425 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11458.default(flag2), , , , , , ];
  new module_11458.default(flag2);
  items[1] = new module_11493.default();
  new module_11493.default();
  items[2] = new module_11487.default();
  new module_11487.default();
  items[3] = new module_11492.default();
  new module_11492.default();
  items[4] = new module_11494.default();
  new module_11494.default();
  items[5] = new module_11495.default();
  new module_11495.default();
  items[6] = new module_11490.default();
  new module_11490.default();
  items1 = [new module_11488.default(), ];
  new module_11488.default();
  items1[1] = new module_11489.default();
  new module_11489.default();
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_11485.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11486.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11496.default();
  unshift3(_default2);
  return tmp;
}
const module_11485 = fn(_mod11485);
const module_11486 = fn(_mod11486);
const module_11458 = fn(_mod11458);
const module_11487 = fn(_mod11487);
const module_11488 = fn(_mod11488);
const module_11489 = fn(_mod11489);
const module_11490 = fn(_mod11490);
const module_11492 = fn(_mod11492);
const module_11493 = fn(_mod11493);
const module_11494 = fn(_mod11494);
const module_11495 = fn(_mod11495);
const module_11496 = fn(_mod11496);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11485.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11486.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11496.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11425").Chrono(createConfiguration(true));
const Chrono_export = require("module_11425").Chrono;

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
