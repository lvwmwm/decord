// Module ID: 12220
// Function ID: 12221
// Dependencies: [12221, 12223, 12225, 12226, 12227, 12228, 12229, 12230, 12231, 12232, 12233, 12089, 12096, 12098, 12122, 12234, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12220
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12221 from "module_12221" /* 12221 */;
import _mod12223 from "module_12223" /* 12223 */;
import _mod12225 from "module_12225" /* 12225 */;
import _mod12226 from "module_12226" /* 12226 */;
import _mod12227 from "module_12227" /* 12227 */;
import _mod12228 from "module_12228" /* 12228 */;
import _mod12229 from "module_12229" /* 12229 */;
import _mod12230 from "module_12230" /* 12230 */;
import _mod12231 from "module_12231" /* 12231 */;
import _mod12232 from "module_12232" /* 12232 */;
import _mod12233 from "module_12233" /* 12233 */;
import _mod12234 from "module_12234" /* 12234 */;
import { Chrono } from "module_12089" /* 12089 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_12122.default(true), , , , , ];
  new module_12122.default(true);
  items[1] = new module_12221.default();
  new module_12221.default();
  items[2] = new module_12223.default();
  new module_12223.default();
  items[3] = new module_12232.default();
  new module_12232.default();
  items[4] = new module_12226.default(flag);
  new module_12226.default(flag);
  items[5] = new module_12227.default();
  new module_12227.default();
  items1 = [new module_12229.default(), ];
  new module_12229.default();
  items1[1] = new module_12228.default();
  new module_12228.default();
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
  const _default = new module_12230.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_12231.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_12225.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_12233.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_12234.default();
  unshift5(_default4);
  return tmp;
}
const module_12221 = fn(_mod12221);
const module_12223 = fn(_mod12223);
const module_12225 = fn(_mod12225);
const module_12226 = fn(_mod12226);
const module_12227 = fn(_mod12227);
const module_12228 = fn(_mod12228);
const module_12229 = fn(_mod12229);
const module_12230 = fn(_mod12230);
const module_12231 = fn(_mod12231);
const module_12232 = fn(_mod12232);
const module_12233 = fn(_mod12233);
const module_12122 = fn(_mod12122);
const module_12234 = fn(_mod12234);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12230.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_12231.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_12225.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_12233.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_12234.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_12089").Chrono(createConfiguration(true));
const Chrono_export = require("module_12089").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
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
