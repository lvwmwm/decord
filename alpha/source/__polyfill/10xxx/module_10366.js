// Module ID: 10366
// Function ID: 10367
// Dependencies: [10367, 10369, 10371, 10372, 10373, 10374, 10375, 10376, 10377, 10378, 10379, 10210, 10217, 10219, 10243, 10380, 10255, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10366
import _mod10243 from "module_10243" /* 10243 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10367 from "module_10367" /* 10367 */;
import _mod10369 from "module_10369" /* 10369 */;
import _mod10371 from "module_10371" /* 10371 */;
import _mod10372 from "module_10372" /* 10372 */;
import _mod10373 from "module_10373" /* 10373 */;
import _mod10374 from "module_10374" /* 10374 */;
import _mod10375 from "module_10375" /* 10375 */;
import _mod10376 from "module_10376" /* 10376 */;
import _mod10377 from "module_10377" /* 10377 */;
import _mod10378 from "module_10378" /* 10378 */;
import _mod10379 from "module_10379" /* 10379 */;
import _mod10380 from "module_10380" /* 10380 */;
import { Chrono } from "module_10210" /* 10210 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10255.default(), , , , , , ];
  new module_10255.default();
  items[1] = new module_10243.default(true);
  new module_10243.default(true);
  items[2] = new module_10367.default();
  new module_10367.default();
  items[3] = new module_10369.default();
  new module_10369.default();
  items[4] = new module_10378.default();
  new module_10378.default();
  items[5] = new module_10372.default(flag);
  new module_10372.default(flag);
  items[6] = new module_10373.default();
  new module_10373.default();
  items1 = [new module_10375.default(), ];
  new module_10375.default();
  items1[1] = new module_10374.default();
  new module_10374.default();
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
  const _default = new module_10376.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10377.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10371.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10379.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10380.default();
  unshift5(_default4);
  return tmp;
}
const module_10367 = fn(_mod10367);
const module_10369 = fn(_mod10369);
const module_10371 = fn(_mod10371);
const module_10372 = fn(_mod10372);
const module_10373 = fn(_mod10373);
const module_10374 = fn(_mod10374);
const module_10375 = fn(_mod10375);
const module_10376 = fn(_mod10376);
const module_10377 = fn(_mod10377);
const module_10378 = fn(_mod10378);
const module_10379 = fn(_mod10379);
const module_10243 = fn(_mod10243);
const module_10380 = fn(_mod10380);
const module_10255 = fn(_mod10255);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10376.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10377.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10371.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10379.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10380.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10210").Chrono(createConfiguration(true));
const Chrono_export = require("module_10210").Chrono;

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
