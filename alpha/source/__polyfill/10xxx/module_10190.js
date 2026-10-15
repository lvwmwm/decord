// Module ID: 10190
// Function ID: 10191
// Dependencies: [10191, 10193, 10195, 10196, 10197, 10198, 10199, 10200, 10201, 10202, 10203, 10034, 10041, 10043, 10067, 10204, 10079, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10190
import _mod10067 from "module_10067" /* 10067 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import _mod10197 from "module_10197" /* 10197 */;
import _mod10198 from "module_10198" /* 10198 */;
import _mod10199 from "module_10199" /* 10199 */;
import _mod10200 from "module_10200" /* 10200 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import { Chrono } from "module_10034" /* 10034 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10079.default(), , , , , , ];
  new module_10079.default();
  items[1] = new module_10067.default(true);
  new module_10067.default(true);
  items[2] = new module_10191.default();
  new module_10191.default();
  items[3] = new module_10193.default();
  new module_10193.default();
  items[4] = new module_10202.default();
  new module_10202.default();
  items[5] = new module_10196.default(flag);
  new module_10196.default(flag);
  items[6] = new module_10197.default();
  new module_10197.default();
  items1 = [new module_10199.default(), ];
  new module_10199.default();
  items1[1] = new module_10198.default();
  new module_10198.default();
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
  const _default = new module_10200.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10201.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10195.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10203.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10204.default();
  unshift5(_default4);
  return tmp;
}
const module_10191 = fn(_mod10191);
const module_10193 = fn(_mod10193);
const module_10195 = fn(_mod10195);
const module_10196 = fn(_mod10196);
const module_10197 = fn(_mod10197);
const module_10198 = fn(_mod10198);
const module_10199 = fn(_mod10199);
const module_10200 = fn(_mod10200);
const module_10201 = fn(_mod10201);
const module_10202 = fn(_mod10202);
const module_10203 = fn(_mod10203);
const module_10067 = fn(_mod10067);
const module_10204 = fn(_mod10204);
const module_10079 = fn(_mod10079);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10200.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10201.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10195.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10203.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10204.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10034").Chrono(createConfiguration(true));
const Chrono_export = require("module_10034").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
