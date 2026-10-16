// Module ID: 10206
// Function ID: 10207
// Dependencies: [10207, 10209, 10211, 10212, 10213, 10214, 10215, 10216, 10217, 10218, 10219, 10050, 10057, 10059, 10083, 10220, 10095, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10206
import _mod10083 from "module_10083" /* 10083 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10095 from "module_10095" /* 10095 */;
import _mod10207 from "module_10207" /* 10207 */;
import _mod10209 from "module_10209" /* 10209 */;
import _mod10211 from "module_10211" /* 10211 */;
import _mod10212 from "module_10212" /* 10212 */;
import _mod10213 from "module_10213" /* 10213 */;
import _mod10214 from "module_10214" /* 10214 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10216 from "module_10216" /* 10216 */;
import _mod10217 from "module_10217" /* 10217 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10219 from "module_10219" /* 10219 */;
import _mod10220 from "module_10220" /* 10220 */;
import { Chrono } from "module_10050" /* 10050 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10095.default(), , , , , , ];
  new module_10095.default();
  items[1] = new module_10083.default(true);
  new module_10083.default(true);
  items[2] = new module_10207.default();
  new module_10207.default();
  items[3] = new module_10209.default();
  new module_10209.default();
  items[4] = new module_10218.default();
  new module_10218.default();
  items[5] = new module_10212.default(flag);
  new module_10212.default(flag);
  items[6] = new module_10213.default();
  new module_10213.default();
  items1 = [new module_10215.default(), ];
  new module_10215.default();
  items1[1] = new module_10214.default();
  new module_10214.default();
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
  const _default = new module_10216.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10217.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10211.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10219.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10220.default();
  unshift5(_default4);
  return tmp;
}
const module_10207 = fn(_mod10207);
const module_10209 = fn(_mod10209);
const module_10211 = fn(_mod10211);
const module_10212 = fn(_mod10212);
const module_10213 = fn(_mod10213);
const module_10214 = fn(_mod10214);
const module_10215 = fn(_mod10215);
const module_10216 = fn(_mod10216);
const module_10217 = fn(_mod10217);
const module_10218 = fn(_mod10218);
const module_10219 = fn(_mod10219);
const module_10083 = fn(_mod10083);
const module_10220 = fn(_mod10220);
const module_10095 = fn(_mod10095);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10216.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10217.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10211.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10219.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10220.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10050").Chrono(createConfiguration(true));
const Chrono_export = require("module_10050").Chrono;

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
