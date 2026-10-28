// Module ID: 10391
// Function ID: 10392
// Dependencies: [10245, 10252, 10254, 10278, 10392, 10394, 10395, 10396, 10397, 10398, 10399, 10400, 10285]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10391
import _mod10278 from "module_10278" /* 10278 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10285 */;
import _mod10392 from "module_10392" /* 10392 */;
import _mod10394 from "module_10394" /* 10394 */;
import _mod10395 from "module_10395" /* 10395 */;
import _mod10396 from "module_10396" /* 10396 */;
import _mod10397 from "module_10397" /* 10397 */;
import _mod10398 from "module_10398" /* 10398 */;
import _mod10399 from "module_10399" /* 10399 */;
import _mod10400 from "module_10400" /* 10400 */;
import { Chrono } from "module_10245" /* 10245 */;

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
  items = [new module_10278.default(flag2), , , , ];
  new module_10278.default(flag2);
  items[1] = new module_10392.default();
  new module_10392.default();
  items[2] = new module_10394.default();
  new module_10394.default();
  items[3] = new module_10397.default();
  new module_10397.default();
  items[4] = new module_10400.default();
  new module_10400.default();
  items1 = [new module_10395.default(), ];
  new module_10395.default();
  items1[1] = new module_10396.default();
  new module_10396.default();
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
  const _default = new module_10398.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10399.default();
  push2(_default1);
  return tmp;
}
const module_10278 = fn(_mod10278);
const module_10392 = fn(_mod10392);
const module_10394 = fn(_mod10394);
const module_10395 = fn(_mod10395);
const module_10396 = fn(_mod10396);
const module_10397 = fn(_mod10397);
const module_10398 = fn(_mod10398);
const module_10399 = fn(_mod10399);
const module_10400 = fn(_mod10400);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10398.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10399.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10245").Chrono(createConfiguration(true));
const Chrono_export = require("module_10245").Chrono;

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
