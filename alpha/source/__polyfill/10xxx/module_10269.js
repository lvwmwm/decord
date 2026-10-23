// Module ID: 10269
// Function ID: 10270
// Dependencies: [10210, 10217, 10219, 10270, 10271, 10243, 10272, 10273, 10274, 10275, 10277, 10278, 10279, 10280, 10281, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10269
import _mod10243 from "module_10243" /* 10243 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10270 from "module_10270" /* 10270 */;
import _mod10271 from "module_10271" /* 10271 */;
import _mod10272 from "module_10272" /* 10272 */;
import _mod10273 from "module_10273" /* 10273 */;
import _mod10274 from "module_10274" /* 10274 */;
import _mod10275 from "module_10275" /* 10275 */;
import _mod10277 from "module_10277" /* 10277 */;
import _mod10278 from "module_10278" /* 10278 */;
import _mod10279 from "module_10279" /* 10279 */;
import _mod10280 from "module_10280" /* 10280 */;
import _mod10281 from "module_10281" /* 10281 */;
import { Chrono } from "module_10210" /* 10210 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10243.default(flag2), , , , , , ];
  new module_10243.default(flag2);
  items[1] = new module_10278.default();
  new module_10278.default();
  items[2] = new module_10272.default();
  new module_10272.default();
  items[3] = new module_10277.default();
  new module_10277.default();
  items[4] = new module_10279.default();
  new module_10279.default();
  items[5] = new module_10280.default();
  new module_10280.default();
  items[6] = new module_10275.default();
  new module_10275.default();
  items1 = [new module_10273.default(), ];
  new module_10273.default();
  items1[1] = new module_10274.default();
  new module_10274.default();
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
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
  const _default2 = new module_10281.default();
  unshift3(_default2);
  return tmp;
}
const module_10270 = fn(_mod10270);
const module_10271 = fn(_mod10271);
const module_10243 = fn(_mod10243);
const module_10272 = fn(_mod10272);
const module_10273 = fn(_mod10273);
const module_10274 = fn(_mod10274);
const module_10275 = fn(_mod10275);
const module_10277 = fn(_mod10277);
const module_10278 = fn(_mod10278);
const module_10279 = fn(_mod10279);
const module_10280 = fn(_mod10280);
const module_10281 = fn(_mod10281);
const configuration = createConfiguration(false, true);
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
let _default2 = new module_10281.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10210").Chrono(createConfiguration(true));
const Chrono_export = require("module_10210").Chrono;

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
