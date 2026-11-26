// Module ID: 11581
// Function ID: 11582
// Dependencies: [11582, 11584, 11586, 11587, 11588, 11589, 11590, 11591, 11592, 11593, 11594, 11425, 11432, 11434, 11458, 11595, 11470, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11581
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11582 from "module_11582" /* 11582 */;
import _mod11584 from "module_11584" /* 11584 */;
import _mod11586 from "module_11586" /* 11586 */;
import _mod11587 from "module_11587" /* 11587 */;
import _mod11588 from "module_11588" /* 11588 */;
import _mod11589 from "module_11589" /* 11589 */;
import _mod11590 from "module_11590" /* 11590 */;
import _mod11591 from "module_11591" /* 11591 */;
import _mod11592 from "module_11592" /* 11592 */;
import _mod11593 from "module_11593" /* 11593 */;
import _mod11594 from "module_11594" /* 11594 */;
import _mod11595 from "module_11595" /* 11595 */;
import { Chrono } from "module_11425" /* 11425 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11470.default(), , , , , , ];
  new module_11470.default();
  items[1] = new module_11458.default(true);
  new module_11458.default(true);
  items[2] = new module_11582.default();
  new module_11582.default();
  items[3] = new module_11584.default();
  new module_11584.default();
  items[4] = new module_11593.default();
  new module_11593.default();
  items[5] = new module_11587.default(flag);
  new module_11587.default(flag);
  items[6] = new module_11588.default();
  new module_11588.default();
  items1 = [new module_11590.default(), ];
  new module_11590.default();
  items1[1] = new module_11589.default();
  new module_11589.default();
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
  const _default = new module_11591.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11592.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11586.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11594.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11595.default();
  unshift5(_default4);
  return tmp;
}
const module_11582 = fn(_mod11582);
const module_11584 = fn(_mod11584);
const module_11586 = fn(_mod11586);
const module_11587 = fn(_mod11587);
const module_11588 = fn(_mod11588);
const module_11589 = fn(_mod11589);
const module_11590 = fn(_mod11590);
const module_11591 = fn(_mod11591);
const module_11592 = fn(_mod11592);
const module_11593 = fn(_mod11593);
const module_11594 = fn(_mod11594);
const module_11458 = fn(_mod11458);
const module_11595 = fn(_mod11595);
const module_11470 = fn(_mod11470);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11591.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11592.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11586.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11594.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11595.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11425").Chrono(createConfiguration(true));
const Chrono_export = require("module_11425").Chrono;

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
