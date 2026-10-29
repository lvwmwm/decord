// Module ID: 10409
// Function ID: 10410
// Dependencies: [10410, 10412, 10414, 10415, 10416, 10417, 10418, 10419, 10420, 10421, 10422, 10278, 10285, 10287, 10311, 10423, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10409
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10410 from "module_10410" /* 10410 */;
import _mod10412 from "module_10412" /* 10412 */;
import _mod10414 from "module_10414" /* 10414 */;
import _mod10415 from "module_10415" /* 10415 */;
import _mod10416 from "module_10416" /* 10416 */;
import _mod10417 from "module_10417" /* 10417 */;
import _mod10418 from "module_10418" /* 10418 */;
import _mod10419 from "module_10419" /* 10419 */;
import _mod10420 from "module_10420" /* 10420 */;
import _mod10421 from "module_10421" /* 10421 */;
import _mod10422 from "module_10422" /* 10422 */;
import _mod10423 from "module_10423" /* 10423 */;
import { Chrono } from "module_10278" /* 10278 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10311.default(true), , , , , ];
  new module_10311.default(true);
  items[1] = new module_10410.default();
  new module_10410.default();
  items[2] = new module_10412.default();
  new module_10412.default();
  items[3] = new module_10421.default();
  new module_10421.default();
  items[4] = new module_10415.default(flag);
  new module_10415.default(flag);
  items[5] = new module_10416.default();
  new module_10416.default();
  items1 = [new module_10418.default(), ];
  new module_10418.default();
  items1[1] = new module_10417.default();
  new module_10417.default();
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
  const _default = new module_10419.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10420.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10414.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10422.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10423.default();
  unshift5(_default4);
  return tmp;
}
const module_10410 = fn(_mod10410);
const module_10412 = fn(_mod10412);
const module_10414 = fn(_mod10414);
const module_10415 = fn(_mod10415);
const module_10416 = fn(_mod10416);
const module_10417 = fn(_mod10417);
const module_10418 = fn(_mod10418);
const module_10419 = fn(_mod10419);
const module_10420 = fn(_mod10420);
const module_10421 = fn(_mod10421);
const module_10422 = fn(_mod10422);
const module_10311 = fn(_mod10311);
const module_10423 = fn(_mod10423);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10419.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10420.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10414.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10422.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10423.default();
unshift5(_default4);
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
