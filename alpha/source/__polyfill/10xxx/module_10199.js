// Module ID: 10199
// Function ID: 10200
// Dependencies: [10140, 10147, 10149, 10200, 10201, 10173, 10202, 10203, 10204, 10205, 10207, 10208, 10209, 10210, 10211, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10199
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10200 from "module_10200" /* 10200 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10207 from "module_10207" /* 10207 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10209 from "module_10209" /* 10209 */;
import _mod10210 from "module_10210" /* 10210 */;
import _mod10211 from "module_10211" /* 10211 */;
import { Chrono } from "module_10140" /* 10140 */;

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
  items = [new module_10173.default(flag2), , , , , , ];
  new module_10173.default(flag2);
  items[1] = new module_10208.default();
  new module_10208.default();
  items[2] = new module_10202.default();
  new module_10202.default();
  items[3] = new module_10207.default();
  new module_10207.default();
  items[4] = new module_10209.default();
  new module_10209.default();
  items[5] = new module_10210.default();
  new module_10210.default();
  items[6] = new module_10205.default();
  new module_10205.default();
  items1 = [new module_10203.default(), ];
  new module_10203.default();
  items1[1] = new module_10204.default();
  new module_10204.default();
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
  const _default = new module_10200.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10201.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10211.default();
  unshift3(_default2);
  return tmp;
}
const module_10200 = fn(_mod10200);
const module_10201 = fn(_mod10201);
const module_10173 = fn(_mod10173);
const module_10202 = fn(_mod10202);
const module_10203 = fn(_mod10203);
const module_10204 = fn(_mod10204);
const module_10205 = fn(_mod10205);
const module_10207 = fn(_mod10207);
const module_10208 = fn(_mod10208);
const module_10209 = fn(_mod10209);
const module_10210 = fn(_mod10210);
const module_10211 = fn(_mod10211);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10200.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10201.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10211.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10140").Chrono(createConfiguration(true));
const Chrono_export = require("module_10140").Chrono;

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
