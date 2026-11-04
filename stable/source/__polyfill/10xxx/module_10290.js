// Module ID: 10290
// Function ID: 10291
// Dependencies: [10243, 10250, 10252, 10276, 10288, 10291, 10292, 10294, 10295, 10296, 10297, 10298, 10299, 10300, 10301, 10283]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10290
import _mod10276 from "module_10276" /* 10276 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10288 from "module_10288" /* 10288 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import _mod10296 from "module_10296" /* 10296 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10298 from "module_10298" /* 10298 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10300 from "module_10300" /* 10300 */;
import _mod10301 from "module_10301" /* 10301 */;
import { Chrono } from "module_10243" /* 10243 */;

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
  items = [new module_10288.default(), , , , , , ];
  new module_10288.default();
  items[1] = new module_10276.default(flag2);
  new module_10276.default(flag2);
  items[2] = new module_10291.default();
  new module_10291.default();
  items[3] = new module_10294.default();
  new module_10294.default();
  items[4] = new module_10299.default();
  new module_10299.default();
  items[5] = new module_10292.default();
  new module_10292.default();
  items[6] = new module_10301.default();
  new module_10301.default();
  items1 = [new module_10295.default(), ];
  new module_10295.default();
  items1[1] = new module_10296.default();
  new module_10296.default();
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
  const _default = new module_10298.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10297.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10300.default();
  unshift3(_default2);
  return tmp;
}
const module_10276 = fn(_mod10276);
const module_10288 = fn(_mod10288);
const module_10291 = fn(_mod10291);
const module_10292 = fn(_mod10292);
const module_10294 = fn(_mod10294);
const module_10295 = fn(_mod10295);
const module_10296 = fn(_mod10296);
const module_10297 = fn(_mod10297);
const module_10298 = fn(_mod10298);
const module_10299 = fn(_mod10299);
const module_10300 = fn(_mod10300);
const module_10301 = fn(_mod10301);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10298.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10297.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10300.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10243").Chrono(createConfiguration(true));
const Chrono_export = require("module_10243").Chrono;

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
