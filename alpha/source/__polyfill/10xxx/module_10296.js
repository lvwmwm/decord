// Module ID: 10296
// Function ID: 10297
// Dependencies: [10213, 10220, 10222, 10246, 10297, 10299, 10300, 10301, 10302, 10303, 10304, 10253]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10296
import _mod10246 from "module_10246" /* 10246 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10253 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10300 from "module_10300" /* 10300 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10302 from "module_10302" /* 10302 */;
import _mod10303 from "module_10303" /* 10303 */;
import _mod10304 from "module_10304" /* 10304 */;
import { Chrono } from "module_10213" /* 10213 */;

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
  items = [new module_10246.default(flag2), , , ];
  new module_10246.default(flag2);
  items[1] = new module_10297.default();
  new module_10297.default();
  items[2] = new module_10299.default();
  new module_10299.default();
  items[3] = new module_10302.default();
  new module_10302.default();
  items1 = [new module_10300.default(), ];
  new module_10300.default();
  items1[1] = new module_10301.default();
  new module_10301.default();
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
  const _default = new module_10303.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10304.default();
  push2(_default1);
  return tmp;
}
const module_10246 = fn(_mod10246);
const module_10297 = fn(_mod10297);
const module_10299 = fn(_mod10299);
const module_10300 = fn(_mod10300);
const module_10301 = fn(_mod10301);
const module_10302 = fn(_mod10302);
const module_10303 = fn(_mod10303);
const module_10304 = fn(_mod10304);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10303.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10304.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10213").Chrono(createConfiguration(true));
const Chrono_export = require("module_10213").Chrono;

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
