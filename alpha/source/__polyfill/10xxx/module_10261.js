// Module ID: 10261
// Function ID: 10262
// Dependencies: [10115, 10122, 10124, 10148, 10262, 10264, 10265, 10266, 10267, 10268, 10269, 10270, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10261
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10262 from "module_10262" /* 10262 */;
import _mod10264 from "module_10264" /* 10264 */;
import _mod10265 from "module_10265" /* 10265 */;
import _mod10266 from "module_10266" /* 10266 */;
import _mod10267 from "module_10267" /* 10267 */;
import _mod10268 from "module_10268" /* 10268 */;
import _mod10269 from "module_10269" /* 10269 */;
import _mod10270 from "module_10270" /* 10270 */;
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
  items = [new module_10148.default(flag2), , , , ];
  new module_10148.default(flag2);
  items[1] = new module_10262.default();
  new module_10262.default();
  items[2] = new module_10264.default();
  new module_10264.default();
  items[3] = new module_10267.default();
  new module_10267.default();
  items[4] = new module_10270.default();
  new module_10270.default();
  items1 = [new module_10265.default(), ];
  new module_10265.default();
  items1[1] = new module_10266.default();
  new module_10266.default();
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
  const _default = new module_10268.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10269.default();
  push2(_default1);
  return tmp;
}
const module_10148 = fn(_mod10148);
const module_10262 = fn(_mod10262);
const module_10264 = fn(_mod10264);
const module_10265 = fn(_mod10265);
const module_10266 = fn(_mod10266);
const module_10267 = fn(_mod10267);
const module_10268 = fn(_mod10268);
const module_10269 = fn(_mod10269);
const module_10270 = fn(_mod10270);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10268.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10269.default();
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
