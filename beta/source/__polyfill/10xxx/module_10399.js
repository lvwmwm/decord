// Module ID: 10399
// Function ID: 10400
// Dependencies: [10400, 10402, 10404, 10405, 10406, 10407, 10408, 10409, 10410, 10411, 10412, 10243, 10250, 10252, 10276, 10413, 10288, 10283]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10399
import _mod10276 from "module_10276" /* 10276 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10288 from "module_10288" /* 10288 */;
import _mod10400 from "module_10400" /* 10400 */;
import _mod10402 from "module_10402" /* 10402 */;
import _mod10404 from "module_10404" /* 10404 */;
import _mod10405 from "module_10405" /* 10405 */;
import _mod10406 from "module_10406" /* 10406 */;
import _mod10407 from "module_10407" /* 10407 */;
import _mod10408 from "module_10408" /* 10408 */;
import _mod10409 from "module_10409" /* 10409 */;
import _mod10410 from "module_10410" /* 10410 */;
import _mod10411 from "module_10411" /* 10411 */;
import _mod10412 from "module_10412" /* 10412 */;
import _mod10413 from "module_10413" /* 10413 */;
import { Chrono } from "module_10243" /* 10243 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10288.default(), , , , , , ];
  new module_10288.default();
  items[1] = new module_10276.default(true);
  new module_10276.default(true);
  items[2] = new module_10400.default();
  new module_10400.default();
  items[3] = new module_10402.default();
  new module_10402.default();
  items[4] = new module_10411.default();
  new module_10411.default();
  items[5] = new module_10405.default(flag);
  new module_10405.default(flag);
  items[6] = new module_10406.default();
  new module_10406.default();
  items1 = [new module_10408.default(), ];
  new module_10408.default();
  items1[1] = new module_10407.default();
  new module_10407.default();
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
  const _default = new module_10409.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10410.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10404.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10412.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10413.default();
  unshift5(_default4);
  return tmp;
}
const module_10400 = fn(_mod10400);
const module_10402 = fn(_mod10402);
const module_10404 = fn(_mod10404);
const module_10405 = fn(_mod10405);
const module_10406 = fn(_mod10406);
const module_10407 = fn(_mod10407);
const module_10408 = fn(_mod10408);
const module_10409 = fn(_mod10409);
const module_10410 = fn(_mod10410);
const module_10411 = fn(_mod10411);
const module_10412 = fn(_mod10412);
const module_10276 = fn(_mod10276);
const module_10413 = fn(_mod10413);
const module_10288 = fn(_mod10288);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10409.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10410.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10404.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10412.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10413.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10243").Chrono(createConfiguration(true));
const Chrono_export = require("module_10243").Chrono;

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
