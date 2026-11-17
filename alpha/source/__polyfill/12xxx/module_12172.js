// Module ID: 12172
// Function ID: 12173
// Dependencies: [12089, 12096, 12098, 12122, 12173, 12175, 12176, 12177, 12178, 12179, 12180, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12172
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12173 from "module_12173" /* 12173 */;
import _mod12175 from "module_12175" /* 12175 */;
import _mod12176 from "module_12176" /* 12176 */;
import _mod12177 from "module_12177" /* 12177 */;
import _mod12178 from "module_12178" /* 12178 */;
import _mod12179 from "module_12179" /* 12179 */;
import _mod12180 from "module_12180" /* 12180 */;
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
  items = [new module_12122.default(flag2), , , ];
  new module_12122.default(flag2);
  items[1] = new module_12173.default();
  new module_12173.default();
  items[2] = new module_12175.default();
  new module_12175.default();
  items[3] = new module_12178.default();
  new module_12178.default();
  items1 = [new module_12176.default(), ];
  new module_12176.default();
  items1[1] = new module_12177.default();
  new module_12177.default();
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
  const push = parsers.push;
  const _default = new module_12179.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_12180.default();
  push2(_default1);
  return tmp;
}
const module_12122 = fn(_mod12122);
const module_12173 = fn(_mod12173);
const module_12175 = fn(_mod12175);
const module_12176 = fn(_mod12176);
const module_12177 = fn(_mod12177);
const module_12178 = fn(_mod12178);
const module_12179 = fn(_mod12179);
const module_12180 = fn(_mod12180);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_12179.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_12180.default();
push2(_default1);
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
