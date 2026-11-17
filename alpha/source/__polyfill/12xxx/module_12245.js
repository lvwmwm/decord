// Module ID: 12245
// Function ID: 12246
// Dependencies: [12246, 12248, 12250, 12251, 12252, 12253, 12254, 12255, 12256, 12257, 12258, 12089, 12096, 12098, 12122, 12259, 12134, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12245
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12134 from "module_12134" /* 12134 */;
import _mod12246 from "module_12246" /* 12246 */;
import _mod12248 from "module_12248" /* 12248 */;
import _mod12250 from "module_12250" /* 12250 */;
import _mod12251 from "module_12251" /* 12251 */;
import _mod12252 from "module_12252" /* 12252 */;
import _mod12253 from "module_12253" /* 12253 */;
import _mod12254 from "module_12254" /* 12254 */;
import _mod12255 from "module_12255" /* 12255 */;
import _mod12256 from "module_12256" /* 12256 */;
import _mod12257 from "module_12257" /* 12257 */;
import _mod12258 from "module_12258" /* 12258 */;
import _mod12259 from "module_12259" /* 12259 */;
import { Chrono } from "module_12089" /* 12089 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_12134.default(), , , , , , ];
  new module_12134.default();
  items[1] = new module_12122.default(true);
  new module_12122.default(true);
  items[2] = new module_12246.default();
  new module_12246.default();
  items[3] = new module_12248.default();
  new module_12248.default();
  items[4] = new module_12257.default();
  new module_12257.default();
  items[5] = new module_12251.default(flag);
  new module_12251.default(flag);
  items[6] = new module_12252.default();
  new module_12252.default();
  items1 = [new module_12254.default(), ];
  new module_12254.default();
  items1[1] = new module_12253.default();
  new module_12253.default();
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
  const _default = new module_12255.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_12256.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_12250.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_12258.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_12259.default();
  unshift5(_default4);
  return tmp;
}
const module_12246 = fn(_mod12246);
const module_12248 = fn(_mod12248);
const module_12250 = fn(_mod12250);
const module_12251 = fn(_mod12251);
const module_12252 = fn(_mod12252);
const module_12253 = fn(_mod12253);
const module_12254 = fn(_mod12254);
const module_12255 = fn(_mod12255);
const module_12256 = fn(_mod12256);
const module_12257 = fn(_mod12257);
const module_12258 = fn(_mod12258);
const module_12122 = fn(_mod12122);
const module_12259 = fn(_mod12259);
const module_12134 = fn(_mod12134);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12255.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_12256.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_12250.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_12258.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_12259.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_12089").Chrono(createConfiguration(true));
const Chrono_export = require("module_12089").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
