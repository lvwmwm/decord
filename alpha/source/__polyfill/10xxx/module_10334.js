// Module ID: 10334
// Function ID: 10335
// Dependencies: [10188, 10195, 10197, 10221, 10335, 10337, 10338, 10339, 10340, 10341, 10342, 10343, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10334
import _mod10221 from "module_10221" /* 10221 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10337 from "module_10337" /* 10337 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import _mod10341 from "module_10341" /* 10341 */;
import _mod10342 from "module_10342" /* 10342 */;
import _mod10343 from "module_10343" /* 10343 */;
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
  items = [new module_10221.default(flag2), , , , ];
  new module_10221.default(flag2);
  items[1] = new module_10335.default();
  new module_10335.default();
  items[2] = new module_10337.default();
  new module_10337.default();
  items[3] = new module_10340.default();
  new module_10340.default();
  items[4] = new module_10343.default();
  new module_10343.default();
  items1 = [new module_10338.default(), ];
  new module_10338.default();
  items1[1] = new module_10339.default();
  new module_10339.default();
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
  const _default = new module_10341.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10342.default();
  push2(_default1);
  return tmp;
}
const module_10221 = fn(_mod10221);
const module_10335 = fn(_mod10335);
const module_10337 = fn(_mod10337);
const module_10338 = fn(_mod10338);
const module_10339 = fn(_mod10339);
const module_10340 = fn(_mod10340);
const module_10341 = fn(_mod10341);
const module_10342 = fn(_mod10342);
const module_10343 = fn(_mod10343);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10341.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10342.default();
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
