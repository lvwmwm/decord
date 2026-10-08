// Module ID: 9898
// Function ID: 9899
// Dependencies: [9899, 9901, 9903, 9904, 9905, 9906, 9907, 9908, 9909, 9910, 9911, 9767, 9774, 9776, 9800, 9912, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9898
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9899 from "module_9899" /* 9899 */;
import _mod9901 from "module_9901" /* 9901 */;
import _mod9903 from "module_9903" /* 9903 */;
import _mod9904 from "module_9904" /* 9904 */;
import _mod9905 from "module_9905" /* 9905 */;
import _mod9906 from "module_9906" /* 9906 */;
import _mod9907 from "module_9907" /* 9907 */;
import _mod9908 from "module_9908" /* 9908 */;
import _mod9909 from "module_9909" /* 9909 */;
import _mod9910 from "module_9910" /* 9910 */;
import _mod9911 from "module_9911" /* 9911 */;
import _mod9912 from "module_9912" /* 9912 */;
import { Chrono } from "module_9767" /* 9767 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9800.default(true), , , , , ];
  new module_9800.default(true);
  items[1] = new module_9899.default();
  new module_9899.default();
  items[2] = new module_9901.default();
  new module_9901.default();
  items[3] = new module_9910.default();
  new module_9910.default();
  items[4] = new module_9904.default(flag);
  new module_9904.default(flag);
  items[5] = new module_9905.default();
  new module_9905.default();
  items1 = [new module_9907.default(), ];
  new module_9907.default();
  items1[1] = new module_9906.default();
  new module_9906.default();
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
  const _default = new module_9908.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9909.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9903.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9911.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9912.default();
  unshift5(_default4);
  return tmp;
}
const module_9899 = fn(_mod9899);
const module_9901 = fn(_mod9901);
const module_9903 = fn(_mod9903);
const module_9904 = fn(_mod9904);
const module_9905 = fn(_mod9905);
const module_9906 = fn(_mod9906);
const module_9907 = fn(_mod9907);
const module_9908 = fn(_mod9908);
const module_9909 = fn(_mod9909);
const module_9910 = fn(_mod9910);
const module_9911 = fn(_mod9911);
const module_9800 = fn(_mod9800);
const module_9912 = fn(_mod9912);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9908.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9909.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9903.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9911.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9912.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9767").Chrono(createConfiguration(true));
const Chrono_export = require("module_9767").Chrono;

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
