// Module ID: 10196
// Function ID: 10197
// Dependencies: [10050, 10057, 10059, 10083, 10197, 10199, 10200, 10201, 10202, 10203, 10204, 10205, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10196
import _mod10083 from "module_10083" /* 10083 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10197 from "module_10197" /* 10197 */;
import _mod10199 from "module_10199" /* 10199 */;
import _mod10200 from "module_10200" /* 10200 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import { Chrono } from "module_10050" /* 10050 */;

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
  items = [new module_10083.default(flag2), , , , ];
  new module_10083.default(flag2);
  items[1] = new module_10197.default();
  new module_10197.default();
  items[2] = new module_10199.default();
  new module_10199.default();
  items[3] = new module_10202.default();
  new module_10202.default();
  items[4] = new module_10205.default();
  new module_10205.default();
  items1 = [new module_10200.default(), ];
  new module_10200.default();
  items1[1] = new module_10201.default();
  new module_10201.default();
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
  const _default = new module_10203.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10204.default();
  push2(_default1);
  return tmp;
}
const module_10083 = fn(_mod10083);
const module_10197 = fn(_mod10197);
const module_10199 = fn(_mod10199);
const module_10200 = fn(_mod10200);
const module_10201 = fn(_mod10201);
const module_10202 = fn(_mod10202);
const module_10203 = fn(_mod10203);
const module_10204 = fn(_mod10204);
const module_10205 = fn(_mod10205);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10203.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10204.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10050").Chrono(createConfiguration(true));
const Chrono_export = require("module_10050").Chrono;

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
