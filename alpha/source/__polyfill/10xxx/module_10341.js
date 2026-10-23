// Module ID: 10341
// Function ID: 10342
// Dependencies: [10342, 10344, 10346, 10347, 10348, 10349, 10350, 10351, 10352, 10353, 10354, 10210, 10217, 10219, 10243, 10355, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10341
import _mod10243 from "module_10243" /* 10243 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10342 from "module_10342" /* 10342 */;
import _mod10344 from "module_10344" /* 10344 */;
import _mod10346 from "module_10346" /* 10346 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;
import _mod10350 from "module_10350" /* 10350 */;
import _mod10351 from "module_10351" /* 10351 */;
import _mod10352 from "module_10352" /* 10352 */;
import _mod10353 from "module_10353" /* 10353 */;
import _mod10354 from "module_10354" /* 10354 */;
import _mod10355 from "module_10355" /* 10355 */;
import { Chrono } from "module_10210" /* 10210 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10243.default(true), , , , , ];
  new module_10243.default(true);
  items[1] = new module_10342.default();
  new module_10342.default();
  items[2] = new module_10344.default();
  new module_10344.default();
  items[3] = new module_10353.default();
  new module_10353.default();
  items[4] = new module_10347.default(flag);
  new module_10347.default(flag);
  items[5] = new module_10348.default();
  new module_10348.default();
  items1 = [new module_10350.default(), ];
  new module_10350.default();
  items1[1] = new module_10349.default();
  new module_10349.default();
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
  const _default = new module_10351.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10352.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10346.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10354.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10355.default();
  unshift5(_default4);
  return tmp;
}
const module_10342 = fn(_mod10342);
const module_10344 = fn(_mod10344);
const module_10346 = fn(_mod10346);
const module_10347 = fn(_mod10347);
const module_10348 = fn(_mod10348);
const module_10349 = fn(_mod10349);
const module_10350 = fn(_mod10350);
const module_10351 = fn(_mod10351);
const module_10352 = fn(_mod10352);
const module_10353 = fn(_mod10353);
const module_10354 = fn(_mod10354);
const module_10243 = fn(_mod10243);
const module_10355 = fn(_mod10355);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10351.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10352.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10346.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10354.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10355.default();
unshift5(_default4);
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
