// Module ID: 10296
// Function ID: 10297
// Dependencies: [10297, 10299, 10301, 10302, 10303, 10304, 10305, 10306, 10307, 10308, 10309, 10140, 10147, 10149, 10173, 10310, 10185, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10296
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10302 from "module_10302" /* 10302 */;
import _mod10303 from "module_10303" /* 10303 */;
import _mod10304 from "module_10304" /* 10304 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10306 from "module_10306" /* 10306 */;
import _mod10307 from "module_10307" /* 10307 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10309 from "module_10309" /* 10309 */;
import _mod10310 from "module_10310" /* 10310 */;
import { Chrono } from "module_10140" /* 10140 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10185.default(), , , , , , ];
  new module_10185.default();
  items[1] = new module_10173.default(true);
  new module_10173.default(true);
  items[2] = new module_10297.default();
  new module_10297.default();
  items[3] = new module_10299.default();
  new module_10299.default();
  items[4] = new module_10308.default();
  new module_10308.default();
  items[5] = new module_10302.default(flag);
  new module_10302.default(flag);
  items[6] = new module_10303.default();
  new module_10303.default();
  items1 = [new module_10305.default(), ];
  new module_10305.default();
  items1[1] = new module_10304.default();
  new module_10304.default();
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
  const _default = new module_10306.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10307.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10301.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10309.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10310.default();
  unshift5(_default4);
  return tmp;
}
const module_10297 = fn(_mod10297);
const module_10299 = fn(_mod10299);
const module_10301 = fn(_mod10301);
const module_10302 = fn(_mod10302);
const module_10303 = fn(_mod10303);
const module_10304 = fn(_mod10304);
const module_10305 = fn(_mod10305);
const module_10306 = fn(_mod10306);
const module_10307 = fn(_mod10307);
const module_10308 = fn(_mod10308);
const module_10309 = fn(_mod10309);
const module_10173 = fn(_mod10173);
const module_10310 = fn(_mod10310);
const module_10185 = fn(_mod10185);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10306.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10307.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10301.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10309.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10310.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10140").Chrono(createConfiguration(true));
const Chrono_export = require("module_10140").Chrono;

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
