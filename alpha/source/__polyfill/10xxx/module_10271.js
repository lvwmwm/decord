// Module ID: 10271
// Function ID: 10272
// Dependencies: [10188, 10195, 10197, 10221, 10272, 10274, 10275, 10276, 10277, 10278, 10279, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10271
import _mod10221 from "module_10221" /* 10221 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10272 from "module_10272" /* 10272 */;
import _mod10274 from "module_10274" /* 10274 */;
import _mod10275 from "module_10275" /* 10275 */;
import _mod10276 from "module_10276" /* 10276 */;
import _mod10277 from "module_10277" /* 10277 */;
import _mod10278 from "module_10278" /* 10278 */;
import _mod10279 from "module_10279" /* 10279 */;
import { Chrono } from "module_10188" /* 10188 */;

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
  items = [new module_10221.default(flag2), , , ];
  new module_10221.default(flag2);
  items[1] = new module_10272.default();
  new module_10272.default();
  items[2] = new module_10274.default();
  new module_10274.default();
  items[3] = new module_10277.default();
  new module_10277.default();
  items1 = [new module_10275.default(), ];
  new module_10275.default();
  items1[1] = new module_10276.default();
  new module_10276.default();
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
  const _default = new module_10278.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10279.default();
  push2(_default1);
  return tmp;
}
const module_10221 = fn(_mod10221);
const module_10272 = fn(_mod10272);
const module_10274 = fn(_mod10274);
const module_10275 = fn(_mod10275);
const module_10276 = fn(_mod10276);
const module_10277 = fn(_mod10277);
const module_10278 = fn(_mod10278);
const module_10279 = fn(_mod10279);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10278.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10279.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10188").Chrono(createConfiguration(true));
const Chrono_export = require("module_10188").Chrono;

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
