// Module ID: 12136
// Function ID: 12137
// Dependencies: [12089, 12096, 12098, 12122, 12134, 12137, 12138, 12140, 12141, 12142, 12143, 12144, 12145, 12146, 12147, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12136
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12134 from "module_12134" /* 12134 */;
import _mod12137 from "module_12137" /* 12137 */;
import _mod12138 from "module_12138" /* 12138 */;
import _mod12140 from "module_12140" /* 12140 */;
import _mod12141 from "module_12141" /* 12141 */;
import _mod12142 from "module_12142" /* 12142 */;
import _mod12143 from "module_12143" /* 12143 */;
import _mod12144 from "module_12144" /* 12144 */;
import _mod12145 from "module_12145" /* 12145 */;
import _mod12146 from "module_12146" /* 12146 */;
import _mod12147 from "module_12147" /* 12147 */;
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
  items = [new module_12134.default(), , , , , , ];
  new module_12134.default();
  items[1] = new module_12122.default(flag2);
  new module_12122.default(flag2);
  items[2] = new module_12137.default();
  new module_12137.default();
  items[3] = new module_12140.default();
  new module_12140.default();
  items[4] = new module_12145.default();
  new module_12145.default();
  items[5] = new module_12138.default();
  new module_12138.default();
  items[6] = new module_12147.default();
  new module_12147.default();
  items1 = [new module_12141.default(), ];
  new module_12141.default();
  items1[1] = new module_12142.default();
  new module_12142.default();
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
  const _default = new module_12144.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_12143.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_12146.default();
  unshift3(_default2);
  return tmp;
}
const module_12122 = fn(_mod12122);
const module_12134 = fn(_mod12134);
const module_12137 = fn(_mod12137);
const module_12138 = fn(_mod12138);
const module_12140 = fn(_mod12140);
const module_12141 = fn(_mod12141);
const module_12142 = fn(_mod12142);
const module_12143 = fn(_mod12143);
const module_12144 = fn(_mod12144);
const module_12145 = fn(_mod12145);
const module_12146 = fn(_mod12146);
const module_12147 = fn(_mod12147);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12144.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_12143.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_12146.default();
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
