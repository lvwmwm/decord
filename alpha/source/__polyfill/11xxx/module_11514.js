// Module ID: 11514
// Function ID: 11515
// Dependencies: [11515, 11517, 11519, 11520, 11521, 11522, 11523, 11524, 11525, 11526, 11527, 11358, 11365, 11367, 11391, 11528, 11403, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11514
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11403 from "module_11403" /* 11403 */;
import _mod11515 from "module_11515" /* 11515 */;
import _mod11517 from "module_11517" /* 11517 */;
import _mod11519 from "module_11519" /* 11519 */;
import _mod11520 from "module_11520" /* 11520 */;
import _mod11521 from "module_11521" /* 11521 */;
import _mod11522 from "module_11522" /* 11522 */;
import _mod11523 from "module_11523" /* 11523 */;
import _mod11524 from "module_11524" /* 11524 */;
import _mod11525 from "module_11525" /* 11525 */;
import _mod11526 from "module_11526" /* 11526 */;
import _mod11527 from "module_11527" /* 11527 */;
import _mod11528 from "module_11528" /* 11528 */;
import { Chrono } from "module_11358" /* 11358 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11403.default(), , , , , , ];
  new module_11403.default();
  items[1] = new module_11391.default(true);
  new module_11391.default(true);
  items[2] = new module_11515.default();
  new module_11515.default();
  items[3] = new module_11517.default();
  new module_11517.default();
  items[4] = new module_11526.default();
  new module_11526.default();
  items[5] = new module_11520.default(flag);
  new module_11520.default(flag);
  items[6] = new module_11521.default();
  new module_11521.default();
  items1 = [new module_11523.default(), ];
  new module_11523.default();
  items1[1] = new module_11522.default();
  new module_11522.default();
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
  const _default = new module_11524.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11525.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11519.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11527.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11528.default();
  unshift5(_default4);
  return tmp;
}
const module_11515 = fn(_mod11515);
const module_11517 = fn(_mod11517);
const module_11519 = fn(_mod11519);
const module_11520 = fn(_mod11520);
const module_11521 = fn(_mod11521);
const module_11522 = fn(_mod11522);
const module_11523 = fn(_mod11523);
const module_11524 = fn(_mod11524);
const module_11525 = fn(_mod11525);
const module_11526 = fn(_mod11526);
const module_11527 = fn(_mod11527);
const module_11391 = fn(_mod11391);
const module_11528 = fn(_mod11528);
const module_11403 = fn(_mod11403);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11524.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11525.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11519.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11527.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11528.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11358").Chrono(createConfiguration(true));
const Chrono_export = require("module_11358").Chrono;

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
