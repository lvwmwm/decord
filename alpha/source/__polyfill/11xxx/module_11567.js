// Module ID: 11567
// Function ID: 11568
// Dependencies: [11568, 11570, 11572, 11573, 11574, 11575, 11576, 11577, 11578, 11579, 11580, 11411, 11418, 11420, 11444, 11581, 11456, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11567
import _mod11444 from "module_11444" /* 11444 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11456 from "module_11456" /* 11456 */;
import _mod11568 from "module_11568" /* 11568 */;
import _mod11570 from "module_11570" /* 11570 */;
import _mod11572 from "module_11572" /* 11572 */;
import _mod11573 from "module_11573" /* 11573 */;
import _mod11574 from "module_11574" /* 11574 */;
import _mod11575 from "module_11575" /* 11575 */;
import _mod11576 from "module_11576" /* 11576 */;
import _mod11577 from "module_11577" /* 11577 */;
import _mod11578 from "module_11578" /* 11578 */;
import _mod11579 from "module_11579" /* 11579 */;
import _mod11580 from "module_11580" /* 11580 */;
import _mod11581 from "module_11581" /* 11581 */;
import { Chrono } from "module_11411" /* 11411 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11456.default(), , , , , , ];
  new module_11456.default();
  items[1] = new module_11444.default(true);
  new module_11444.default(true);
  items[2] = new module_11568.default();
  new module_11568.default();
  items[3] = new module_11570.default();
  new module_11570.default();
  items[4] = new module_11579.default();
  new module_11579.default();
  items[5] = new module_11573.default(flag);
  new module_11573.default(flag);
  items[6] = new module_11574.default();
  new module_11574.default();
  items1 = [new module_11576.default(), ];
  new module_11576.default();
  items1[1] = new module_11575.default();
  new module_11575.default();
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
  const _default = new module_11577.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11578.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11572.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11580.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11581.default();
  unshift5(_default4);
  return tmp;
}
const module_11568 = fn(_mod11568);
const module_11570 = fn(_mod11570);
const module_11572 = fn(_mod11572);
const module_11573 = fn(_mod11573);
const module_11574 = fn(_mod11574);
const module_11575 = fn(_mod11575);
const module_11576 = fn(_mod11576);
const module_11577 = fn(_mod11577);
const module_11578 = fn(_mod11578);
const module_11579 = fn(_mod11579);
const module_11580 = fn(_mod11580);
const module_11444 = fn(_mod11444);
const module_11581 = fn(_mod11581);
const module_11456 = fn(_mod11456);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11577.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11578.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11572.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11580.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11581.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11411").Chrono(createConfiguration(true));
const Chrono_export = require("module_11411").Chrono;

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
