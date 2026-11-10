// Module ID: 10450
// Function ID: 10451
// Dependencies: [10365, 10323, 10330, 10332, 10451, 10434, 10436, 10437, 10438, 10439, 10452, 10453, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10450
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10434 from "module_10434" /* 10434 */;
import _mod10436 from "module_10436" /* 10436 */;
import _mod10437 from "module_10437" /* 10437 */;
import _mod10438 from "module_10438" /* 10438 */;
import _mod10439 from "module_10439" /* 10439 */;
import _mod10451 from "module_10451" /* 10451 */;
import _mod10452 from "module_10452" /* 10452 */;
import _mod10453 from "module_10453" /* 10453 */;
import { Chrono } from "module_10323" /* 10323 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10434.default(), , , , ];
  new module_10434.default();
  items[1] = new module_10437.default();
  new module_10437.default();
  items[2] = new module_10439.default();
  new module_10439.default();
  items[3] = new module_10438.default();
  new module_10438.default();
  items[4] = new module_10436.default();
  new module_10436.default();
  items1 = [new module_10452.default(), ];
  new module_10452.default();
  items1[1] = new module_10453.default();
  new module_10453.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10365.default));
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
  const _default = new module_10451.default();
  unshift(_default);
  return tmp;
}
const module_10365 = fn(_mod10365);
const module_10451 = fn(_mod10451);
const module_10434 = fn(_mod10434);
const module_10436 = fn(_mod10436);
const module_10437 = fn(_mod10437);
const module_10438 = fn(_mod10438);
const module_10439 = fn(_mod10439);
const module_10452 = fn(_mod10452);
const module_10453 = fn(_mod10453);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10451.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10451.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10323").Chrono(createConfiguration());
const Chrono_export = require("module_10323").Chrono;

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
