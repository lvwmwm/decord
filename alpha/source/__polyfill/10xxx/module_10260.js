// Module ID: 10260
// Function ID: 10261
// Dependencies: [10261, 10263, 10265, 10266, 10267, 10268, 10269, 10270, 10271, 10272, 10273, 10129, 10136, 10138, 10162, 10274, 10169]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10260
import _mod10162 from "module_10162" /* 10162 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10169 */;
import _mod10261 from "module_10261" /* 10261 */;
import _mod10263 from "module_10263" /* 10263 */;
import _mod10265 from "module_10265" /* 10265 */;
import _mod10266 from "module_10266" /* 10266 */;
import _mod10267 from "module_10267" /* 10267 */;
import _mod10268 from "module_10268" /* 10268 */;
import _mod10269 from "module_10269" /* 10269 */;
import _mod10270 from "module_10270" /* 10270 */;
import _mod10271 from "module_10271" /* 10271 */;
import _mod10272 from "module_10272" /* 10272 */;
import _mod10273 from "module_10273" /* 10273 */;
import _mod10274 from "module_10274" /* 10274 */;
import { Chrono } from "module_10129" /* 10129 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10162.default(true), , , , , ];
  new module_10162.default(true);
  items[1] = new module_10261.default();
  new module_10261.default();
  items[2] = new module_10263.default();
  new module_10263.default();
  items[3] = new module_10272.default();
  new module_10272.default();
  items[4] = new module_10266.default(flag);
  new module_10266.default(flag);
  items[5] = new module_10267.default();
  new module_10267.default();
  items1 = [new module_10269.default(), ];
  new module_10269.default();
  items1[1] = new module_10268.default();
  new module_10268.default();
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
  const _default = new module_10270.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10271.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10265.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10273.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10274.default();
  unshift5(_default4);
  return tmp;
}
const module_10261 = fn(_mod10261);
const module_10263 = fn(_mod10263);
const module_10265 = fn(_mod10265);
const module_10266 = fn(_mod10266);
const module_10267 = fn(_mod10267);
const module_10268 = fn(_mod10268);
const module_10269 = fn(_mod10269);
const module_10270 = fn(_mod10270);
const module_10271 = fn(_mod10271);
const module_10272 = fn(_mod10272);
const module_10273 = fn(_mod10273);
const module_10162 = fn(_mod10162);
const module_10274 = fn(_mod10274);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10270.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10271.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10265.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10273.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10274.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10129").Chrono(createConfiguration(true));
const Chrono_export = require("module_10129").Chrono;

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
