// Module ID: 10337
// Function ID: 10338
// Dependencies: [10338, 10340, 10342, 10343, 10344, 10345, 10346, 10347, 10348, 10349, 10350, 10181, 10188, 10190, 10214, 10351, 10226, 10221]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10337
import _mod10214 from "module_10214" /* 10214 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10340 from "module_10340" /* 10340 */;
import _mod10342 from "module_10342" /* 10342 */;
import _mod10343 from "module_10343" /* 10343 */;
import _mod10344 from "module_10344" /* 10344 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10346 from "module_10346" /* 10346 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;
import _mod10350 from "module_10350" /* 10350 */;
import _mod10351 from "module_10351" /* 10351 */;
import { Chrono } from "module_10181" /* 10181 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10226.default(), , , , , , ];
  new module_10226.default();
  items[1] = new module_10214.default(true);
  new module_10214.default(true);
  items[2] = new module_10338.default();
  new module_10338.default();
  items[3] = new module_10340.default();
  new module_10340.default();
  items[4] = new module_10349.default();
  new module_10349.default();
  items[5] = new module_10343.default(flag);
  new module_10343.default(flag);
  items[6] = new module_10344.default();
  new module_10344.default();
  items1 = [new module_10346.default(), ];
  new module_10346.default();
  items1[1] = new module_10345.default();
  new module_10345.default();
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
  const _default = new module_10347.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10348.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10342.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10350.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10351.default();
  unshift5(_default4);
  return tmp;
}
const module_10338 = fn(_mod10338);
const module_10340 = fn(_mod10340);
const module_10342 = fn(_mod10342);
const module_10343 = fn(_mod10343);
const module_10344 = fn(_mod10344);
const module_10345 = fn(_mod10345);
const module_10346 = fn(_mod10346);
const module_10347 = fn(_mod10347);
const module_10348 = fn(_mod10348);
const module_10349 = fn(_mod10349);
const module_10350 = fn(_mod10350);
const module_10214 = fn(_mod10214);
const module_10351 = fn(_mod10351);
const module_10226 = fn(_mod10226);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10347.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10348.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10342.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10350.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10351.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10181").Chrono(createConfiguration(true));
const Chrono_export = require("module_10181").Chrono;

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
