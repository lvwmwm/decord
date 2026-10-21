// Module ID: 10300
// Function ID: 10301
// Dependencies: [10301, 10303, 10305, 10306, 10307, 10308, 10309, 10310, 10311, 10312, 10313, 10169, 10176, 10178, 10202, 10314, 10209]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10300
import _mod10202 from "module_10202" /* 10202 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10209 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10303 from "module_10303" /* 10303 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10306 from "module_10306" /* 10306 */;
import _mod10307 from "module_10307" /* 10307 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10309 from "module_10309" /* 10309 */;
import _mod10310 from "module_10310" /* 10310 */;
import _mod10311 from "module_10311" /* 10311 */;
import _mod10312 from "module_10312" /* 10312 */;
import _mod10313 from "module_10313" /* 10313 */;
import _mod10314 from "module_10314" /* 10314 */;
import { Chrono } from "module_10169" /* 10169 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10202.default(true), , , , , ];
  new module_10202.default(true);
  items[1] = new module_10301.default();
  new module_10301.default();
  items[2] = new module_10303.default();
  new module_10303.default();
  items[3] = new module_10312.default();
  new module_10312.default();
  items[4] = new module_10306.default(flag);
  new module_10306.default(flag);
  items[5] = new module_10307.default();
  new module_10307.default();
  items1 = [new module_10309.default(), ];
  new module_10309.default();
  items1[1] = new module_10308.default();
  new module_10308.default();
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
  const _default = new module_10310.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10311.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10305.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10313.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10314.default();
  unshift5(_default4);
  return tmp;
}
const module_10301 = fn(_mod10301);
const module_10303 = fn(_mod10303);
const module_10305 = fn(_mod10305);
const module_10306 = fn(_mod10306);
const module_10307 = fn(_mod10307);
const module_10308 = fn(_mod10308);
const module_10309 = fn(_mod10309);
const module_10310 = fn(_mod10310);
const module_10311 = fn(_mod10311);
const module_10312 = fn(_mod10312);
const module_10313 = fn(_mod10313);
const module_10202 = fn(_mod10202);
const module_10314 = fn(_mod10314);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10310.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10311.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10305.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10313.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10314.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10169").Chrono(createConfiguration(true));
const Chrono_export = require("module_10169").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
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
