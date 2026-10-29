// Module ID: 10325
// Function ID: 10326
// Dependencies: [10278, 10285, 10287, 10311, 10323, 10326, 10327, 10329, 10330, 10331, 10332, 10333, 10334, 10335, 10336, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10325
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10326 from "module_10326" /* 10326 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10329 from "module_10329" /* 10329 */;
import _mod10330 from "module_10330" /* 10330 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10332 from "module_10332" /* 10332 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10336 from "module_10336" /* 10336 */;
import { Chrono } from "module_10278" /* 10278 */;

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
  items = [new module_10323.default(), , , , , , ];
  new module_10323.default();
  items[1] = new module_10311.default(flag2);
  new module_10311.default(flag2);
  items[2] = new module_10326.default();
  new module_10326.default();
  items[3] = new module_10329.default();
  new module_10329.default();
  items[4] = new module_10334.default();
  new module_10334.default();
  items[5] = new module_10327.default();
  new module_10327.default();
  items[6] = new module_10336.default();
  new module_10336.default();
  items1 = [new module_10330.default(), ];
  new module_10330.default();
  items1[1] = new module_10331.default();
  new module_10331.default();
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
  const _default = new module_10333.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10332.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10335.default();
  unshift3(_default2);
  return tmp;
}
const module_10311 = fn(_mod10311);
const module_10323 = fn(_mod10323);
const module_10326 = fn(_mod10326);
const module_10327 = fn(_mod10327);
const module_10329 = fn(_mod10329);
const module_10330 = fn(_mod10330);
const module_10331 = fn(_mod10331);
const module_10332 = fn(_mod10332);
const module_10333 = fn(_mod10333);
const module_10334 = fn(_mod10334);
const module_10335 = fn(_mod10335);
const module_10336 = fn(_mod10336);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10333.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10332.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10335.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10278").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
