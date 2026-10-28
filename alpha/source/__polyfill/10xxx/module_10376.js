// Module ID: 10376
// Function ID: 10377
// Dependencies: [10377, 10379, 10381, 10382, 10383, 10384, 10385, 10386, 10387, 10388, 10389, 10245, 10252, 10254, 10278, 10390, 10285]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10376
import _mod10278 from "module_10278" /* 10278 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10285 */;
import _mod10377 from "module_10377" /* 10377 */;
import _mod10379 from "module_10379" /* 10379 */;
import _mod10381 from "module_10381" /* 10381 */;
import _mod10382 from "module_10382" /* 10382 */;
import _mod10383 from "module_10383" /* 10383 */;
import _mod10384 from "module_10384" /* 10384 */;
import _mod10385 from "module_10385" /* 10385 */;
import _mod10386 from "module_10386" /* 10386 */;
import _mod10387 from "module_10387" /* 10387 */;
import _mod10388 from "module_10388" /* 10388 */;
import _mod10389 from "module_10389" /* 10389 */;
import _mod10390 from "module_10390" /* 10390 */;
import { Chrono } from "module_10245" /* 10245 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10278.default(true), , , , , ];
  new module_10278.default(true);
  items[1] = new module_10377.default();
  new module_10377.default();
  items[2] = new module_10379.default();
  new module_10379.default();
  items[3] = new module_10388.default();
  new module_10388.default();
  items[4] = new module_10382.default(flag);
  new module_10382.default(flag);
  items[5] = new module_10383.default();
  new module_10383.default();
  items1 = [new module_10385.default(), ];
  new module_10385.default();
  items1[1] = new module_10384.default();
  new module_10384.default();
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
  const _default = new module_10386.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10387.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10381.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10389.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10390.default();
  unshift5(_default4);
  return tmp;
}
const module_10377 = fn(_mod10377);
const module_10379 = fn(_mod10379);
const module_10381 = fn(_mod10381);
const module_10382 = fn(_mod10382);
const module_10383 = fn(_mod10383);
const module_10384 = fn(_mod10384);
const module_10385 = fn(_mod10385);
const module_10386 = fn(_mod10386);
const module_10387 = fn(_mod10387);
const module_10388 = fn(_mod10388);
const module_10389 = fn(_mod10389);
const module_10278 = fn(_mod10278);
const module_10390 = fn(_mod10390);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10386.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10387.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10381.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10389.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10390.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10245").Chrono(createConfiguration(true));
const Chrono_export = require("module_10245").Chrono;

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
