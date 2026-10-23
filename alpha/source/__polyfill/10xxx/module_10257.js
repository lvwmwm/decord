// Module ID: 10257
// Function ID: 10258
// Dependencies: [10210, 10217, 10219, 10243, 10255, 10258, 10259, 10261, 10262, 10263, 10264, 10265, 10266, 10267, 10268, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10257
import _mod10243 from "module_10243" /* 10243 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
import _mod10261 from "module_10261" /* 10261 */;
import _mod10262 from "module_10262" /* 10262 */;
import _mod10263 from "module_10263" /* 10263 */;
import _mod10264 from "module_10264" /* 10264 */;
import _mod10265 from "module_10265" /* 10265 */;
import _mod10266 from "module_10266" /* 10266 */;
import _mod10267 from "module_10267" /* 10267 */;
import _mod10268 from "module_10268" /* 10268 */;
import { Chrono } from "module_10210" /* 10210 */;

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
  items = [new module_10255.default(), , , , , , ];
  new module_10255.default();
  items[1] = new module_10243.default(flag2);
  new module_10243.default(flag2);
  items[2] = new module_10258.default();
  new module_10258.default();
  items[3] = new module_10261.default();
  new module_10261.default();
  items[4] = new module_10266.default();
  new module_10266.default();
  items[5] = new module_10259.default();
  new module_10259.default();
  items[6] = new module_10268.default();
  new module_10268.default();
  items1 = [new module_10262.default(), ];
  new module_10262.default();
  items1[1] = new module_10263.default();
  new module_10263.default();
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
  const _default = new module_10265.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10264.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10267.default();
  unshift3(_default2);
  return tmp;
}
const module_10243 = fn(_mod10243);
const module_10255 = fn(_mod10255);
const module_10258 = fn(_mod10258);
const module_10259 = fn(_mod10259);
const module_10261 = fn(_mod10261);
const module_10262 = fn(_mod10262);
const module_10263 = fn(_mod10263);
const module_10264 = fn(_mod10264);
const module_10265 = fn(_mod10265);
const module_10266 = fn(_mod10266);
const module_10267 = fn(_mod10267);
const module_10268 = fn(_mod10268);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10265.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10264.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10267.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10210").Chrono(createConfiguration(true));
const Chrono_export = require("module_10210").Chrono;

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
