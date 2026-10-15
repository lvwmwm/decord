// Module ID: 10117
// Function ID: 10118
// Dependencies: [10034, 10041, 10043, 10067, 10118, 10120, 10121, 10122, 10123, 10124, 10125, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10117
import _mod10067 from "module_10067" /* 10067 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10118 from "module_10118" /* 10118 */;
import _mod10120 from "module_10120" /* 10120 */;
import _mod10121 from "module_10121" /* 10121 */;
import _mod10122 from "module_10122" /* 10122 */;
import _mod10123 from "module_10123" /* 10123 */;
import _mod10124 from "module_10124" /* 10124 */;
import _mod10125 from "module_10125" /* 10125 */;
import { Chrono } from "module_10034" /* 10034 */;

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
  items = [new module_10067.default(flag2), , , ];
  new module_10067.default(flag2);
  items[1] = new module_10118.default();
  new module_10118.default();
  items[2] = new module_10120.default();
  new module_10120.default();
  items[3] = new module_10123.default();
  new module_10123.default();
  items1 = [new module_10121.default(), ];
  new module_10121.default();
  items1[1] = new module_10122.default();
  new module_10122.default();
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
  const _default = new module_10124.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10125.default();
  push2(_default1);
  return tmp;
}
const module_10067 = fn(_mod10067);
const module_10118 = fn(_mod10118);
const module_10120 = fn(_mod10120);
const module_10121 = fn(_mod10121);
const module_10122 = fn(_mod10122);
const module_10123 = fn(_mod10123);
const module_10124 = fn(_mod10124);
const module_10125 = fn(_mod10125);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10124.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10125.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10034").Chrono(createConfiguration(true));
const Chrono_export = require("module_10034").Chrono;

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
