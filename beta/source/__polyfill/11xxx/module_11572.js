// Module ID: 11572
// Function ID: 11573
// Dependencies: [11573, 11575, 11577, 11578, 11579, 11580, 11581, 11582, 11583, 11584, 11585, 11416, 11423, 11425, 11449, 11586, 11461, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11572
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11461 from "module_11461" /* 11461 */;
import _mod11573 from "module_11573" /* 11573 */;
import _mod11575 from "module_11575" /* 11575 */;
import _mod11577 from "module_11577" /* 11577 */;
import _mod11578 from "module_11578" /* 11578 */;
import _mod11579 from "module_11579" /* 11579 */;
import _mod11580 from "module_11580" /* 11580 */;
import _mod11581 from "module_11581" /* 11581 */;
import _mod11582 from "module_11582" /* 11582 */;
import _mod11583 from "module_11583" /* 11583 */;
import _mod11584 from "module_11584" /* 11584 */;
import _mod11585 from "module_11585" /* 11585 */;
import _mod11586 from "module_11586" /* 11586 */;
import { Chrono } from "module_11416" /* 11416 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11461.default(), , , , , , ];
  new module_11461.default();
  items[1] = new module_11449.default(true);
  new module_11449.default(true);
  items[2] = new module_11573.default();
  new module_11573.default();
  items[3] = new module_11575.default();
  new module_11575.default();
  items[4] = new module_11584.default();
  new module_11584.default();
  items[5] = new module_11578.default(flag);
  new module_11578.default(flag);
  items[6] = new module_11579.default();
  new module_11579.default();
  items1 = [new module_11581.default(), ];
  new module_11581.default();
  items1[1] = new module_11580.default();
  new module_11580.default();
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
  const _default = new module_11582.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11583.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11577.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11585.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11586.default();
  unshift5(_default4);
  return tmp;
}
const module_11573 = fn(_mod11573);
const module_11575 = fn(_mod11575);
const module_11577 = fn(_mod11577);
const module_11578 = fn(_mod11578);
const module_11579 = fn(_mod11579);
const module_11580 = fn(_mod11580);
const module_11581 = fn(_mod11581);
const module_11582 = fn(_mod11582);
const module_11583 = fn(_mod11583);
const module_11584 = fn(_mod11584);
const module_11585 = fn(_mod11585);
const module_11449 = fn(_mod11449);
const module_11586 = fn(_mod11586);
const module_11461 = fn(_mod11461);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11582.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11583.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11577.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11585.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11586.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11416").Chrono(createConfiguration(true));
const Chrono_export = require("module_11416").Chrono;

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
