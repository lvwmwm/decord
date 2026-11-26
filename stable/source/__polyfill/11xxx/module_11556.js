// Module ID: 11556
// Function ID: 11557
// Dependencies: [11557, 11559, 11561, 11562, 11563, 11564, 11565, 11566, 11567, 11568, 11569, 11425, 11432, 11434, 11458, 11570, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11556
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11557 from "module_11557" /* 11557 */;
import _mod11559 from "module_11559" /* 11559 */;
import _mod11561 from "module_11561" /* 11561 */;
import _mod11562 from "module_11562" /* 11562 */;
import _mod11563 from "module_11563" /* 11563 */;
import _mod11564 from "module_11564" /* 11564 */;
import _mod11565 from "module_11565" /* 11565 */;
import _mod11566 from "module_11566" /* 11566 */;
import _mod11567 from "module_11567" /* 11567 */;
import _mod11568 from "module_11568" /* 11568 */;
import _mod11569 from "module_11569" /* 11569 */;
import _mod11570 from "module_11570" /* 11570 */;
import { Chrono } from "module_11425" /* 11425 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11458.default(true), , , , , ];
  new module_11458.default(true);
  items[1] = new module_11557.default();
  new module_11557.default();
  items[2] = new module_11559.default();
  new module_11559.default();
  items[3] = new module_11568.default();
  new module_11568.default();
  items[4] = new module_11562.default(flag);
  new module_11562.default(flag);
  items[5] = new module_11563.default();
  new module_11563.default();
  items1 = [new module_11565.default(), ];
  new module_11565.default();
  items1[1] = new module_11564.default();
  new module_11564.default();
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
  const _default = new module_11566.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11567.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11561.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11569.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11570.default();
  unshift5(_default4);
  return tmp;
}
const module_11557 = fn(_mod11557);
const module_11559 = fn(_mod11559);
const module_11561 = fn(_mod11561);
const module_11562 = fn(_mod11562);
const module_11563 = fn(_mod11563);
const module_11564 = fn(_mod11564);
const module_11565 = fn(_mod11565);
const module_11566 = fn(_mod11566);
const module_11567 = fn(_mod11567);
const module_11568 = fn(_mod11568);
const module_11569 = fn(_mod11569);
const module_11458 = fn(_mod11458);
const module_11570 = fn(_mod11570);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11566.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11567.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11561.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11569.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11570.default();
unshift5(_default4);
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
