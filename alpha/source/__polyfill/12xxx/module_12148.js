// Module ID: 12148
// Function ID: 12149
// Dependencies: [12089, 12096, 12098, 12149, 12150, 12122, 12151, 12152, 12153, 12154, 12156, 12157, 12158, 12159, 12160, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12148
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12149 from "module_12149" /* 12149 */;
import _mod12150 from "module_12150" /* 12150 */;
import _mod12151 from "module_12151" /* 12151 */;
import _mod12152 from "module_12152" /* 12152 */;
import _mod12153 from "module_12153" /* 12153 */;
import _mod12154 from "module_12154" /* 12154 */;
import _mod12156 from "module_12156" /* 12156 */;
import _mod12157 from "module_12157" /* 12157 */;
import _mod12158 from "module_12158" /* 12158 */;
import _mod12159 from "module_12159" /* 12159 */;
import _mod12160 from "module_12160" /* 12160 */;
import { Chrono } from "module_12089" /* 12089 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_12122.default(flag2), , , , , , ];
  new module_12122.default(flag2);
  items[1] = new module_12157.default();
  new module_12157.default();
  items[2] = new module_12151.default();
  new module_12151.default();
  items[3] = new module_12156.default();
  new module_12156.default();
  items[4] = new module_12158.default();
  new module_12158.default();
  items[5] = new module_12159.default();
  new module_12159.default();
  items[6] = new module_12154.default();
  new module_12154.default();
  items1 = [new module_12152.default(), ];
  new module_12152.default();
  items1[1] = new module_12153.default();
  new module_12153.default();
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_12149.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_12150.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_12160.default();
  unshift3(_default2);
  return tmp;
}
const module_12149 = fn(_mod12149);
const module_12150 = fn(_mod12150);
const module_12122 = fn(_mod12122);
const module_12151 = fn(_mod12151);
const module_12152 = fn(_mod12152);
const module_12153 = fn(_mod12153);
const module_12154 = fn(_mod12154);
const module_12156 = fn(_mod12156);
const module_12157 = fn(_mod12157);
const module_12158 = fn(_mod12158);
const module_12159 = fn(_mod12159);
const module_12160 = fn(_mod12160);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12149.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_12150.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_12160.default();
unshift3(_default2);
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
