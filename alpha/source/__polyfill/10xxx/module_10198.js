// Module ID: 10198
// Function ID: 10199
// Dependencies: [10115, 10122, 10124, 10148, 10199, 10201, 10202, 10203, 10204, 10205, 10206, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10198
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10199 from "module_10199" /* 10199 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10206 from "module_10206" /* 10206 */;
import { Chrono } from "module_10115" /* 10115 */;

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
  items = [new module_10148.default(flag2), , , ];
  new module_10148.default(flag2);
  items[1] = new module_10199.default();
  new module_10199.default();
  items[2] = new module_10201.default();
  new module_10201.default();
  items[3] = new module_10204.default();
  new module_10204.default();
  items1 = [new module_10202.default(), ];
  new module_10202.default();
  items1[1] = new module_10203.default();
  new module_10203.default();
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
  const _default = new module_10205.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10206.default();
  push2(_default1);
  return tmp;
}
const module_10148 = fn(_mod10148);
const module_10199 = fn(_mod10199);
const module_10201 = fn(_mod10201);
const module_10202 = fn(_mod10202);
const module_10203 = fn(_mod10203);
const module_10204 = fn(_mod10204);
const module_10205 = fn(_mod10205);
const module_10206 = fn(_mod10206);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10205.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10206.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10115").Chrono(createConfiguration(true));
const Chrono_export = require("module_10115").Chrono;

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
