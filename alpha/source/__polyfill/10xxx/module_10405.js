// Module ID: 10405
// Function ID: 10406
// Dependencies: [10320, 10278, 10285, 10287, 10406, 10389, 10391, 10392, 10393, 10394, 10407, 10408, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10405
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10389 from "module_10389" /* 10389 */;
import _mod10391 from "module_10391" /* 10391 */;
import _mod10392 from "module_10392" /* 10392 */;
import _mod10393 from "module_10393" /* 10393 */;
import _mod10394 from "module_10394" /* 10394 */;
import _mod10406 from "module_10406" /* 10406 */;
import _mod10407 from "module_10407" /* 10407 */;
import _mod10408 from "module_10408" /* 10408 */;
import { Chrono } from "module_10278" /* 10278 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10389.default(), , , , ];
  new module_10389.default();
  items[1] = new module_10392.default();
  new module_10392.default();
  items[2] = new module_10394.default();
  new module_10394.default();
  items[3] = new module_10393.default();
  new module_10393.default();
  items[4] = new module_10391.default();
  new module_10391.default();
  items1 = [new module_10407.default(), ];
  new module_10407.default();
  items1[1] = new module_10408.default();
  new module_10408.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10320.default));
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
  const _default = new module_10406.default();
  unshift(_default);
  return tmp;
}
const module_10320 = fn(_mod10320);
const module_10406 = fn(_mod10406);
const module_10389 = fn(_mod10389);
const module_10391 = fn(_mod10391);
const module_10392 = fn(_mod10392);
const module_10393 = fn(_mod10393);
const module_10394 = fn(_mod10394);
const module_10407 = fn(_mod10407);
const module_10408 = fn(_mod10408);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10406.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10406.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10278").Chrono(createConfiguration());
const Chrono_export = require("module_10278").Chrono;

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
