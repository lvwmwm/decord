// Module ID: 11547
// Function ID: 11548
// Dependencies: [11548, 11550, 11552, 11553, 11554, 11555, 11556, 11557, 11558, 11559, 11560, 11416, 11423, 11425, 11449, 11561, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11547
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11548 from "module_11548" /* 11548 */;
import _mod11550 from "module_11550" /* 11550 */;
import _mod11552 from "module_11552" /* 11552 */;
import _mod11553 from "module_11553" /* 11553 */;
import _mod11554 from "module_11554" /* 11554 */;
import _mod11555 from "module_11555" /* 11555 */;
import _mod11556 from "module_11556" /* 11556 */;
import _mod11557 from "module_11557" /* 11557 */;
import _mod11558 from "module_11558" /* 11558 */;
import _mod11559 from "module_11559" /* 11559 */;
import _mod11560 from "module_11560" /* 11560 */;
import _mod11561 from "module_11561" /* 11561 */;
import { Chrono } from "module_11416" /* 11416 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11449.default(true), , , , , ];
  new module_11449.default(true);
  items[1] = new module_11548.default();
  new module_11548.default();
  items[2] = new module_11550.default();
  new module_11550.default();
  items[3] = new module_11559.default();
  new module_11559.default();
  items[4] = new module_11553.default(flag);
  new module_11553.default(flag);
  items[5] = new module_11554.default();
  new module_11554.default();
  items1 = [new module_11556.default(), ];
  new module_11556.default();
  items1[1] = new module_11555.default();
  new module_11555.default();
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
  const _default = new module_11557.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11558.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11552.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11560.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11561.default();
  unshift5(_default4);
  return tmp;
}
const module_11548 = fn(_mod11548);
const module_11550 = fn(_mod11550);
const module_11552 = fn(_mod11552);
const module_11553 = fn(_mod11553);
const module_11554 = fn(_mod11554);
const module_11555 = fn(_mod11555);
const module_11556 = fn(_mod11556);
const module_11557 = fn(_mod11557);
const module_11558 = fn(_mod11558);
const module_11559 = fn(_mod11559);
const module_11560 = fn(_mod11560);
const module_11449 = fn(_mod11449);
const module_11561 = fn(_mod11561);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11557.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11558.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11552.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11560.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11561.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11416").Chrono(createConfiguration(true));
const Chrono_export = require("module_11416").Chrono;

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
