// Module ID: 10174
// Function ID: 10175
// Dependencies: [10115, 10122, 10124, 10175, 10176, 10148, 10177, 10178, 10179, 10180, 10182, 10183, 10184, 10185, 10186, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10174
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10176 from "module_10176" /* 10176 */;
import _mod10177 from "module_10177" /* 10177 */;
import _mod10178 from "module_10178" /* 10178 */;
import _mod10179 from "module_10179" /* 10179 */;
import _mod10180 from "module_10180" /* 10180 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10183 from "module_10183" /* 10183 */;
import _mod10184 from "module_10184" /* 10184 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10186 from "module_10186" /* 10186 */;
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
  items = [new module_10148.default(flag2), , , , , , ];
  new module_10148.default(flag2);
  items[1] = new module_10183.default();
  new module_10183.default();
  items[2] = new module_10177.default();
  new module_10177.default();
  items[3] = new module_10182.default();
  new module_10182.default();
  items[4] = new module_10184.default();
  new module_10184.default();
  items[5] = new module_10185.default();
  new module_10185.default();
  items[6] = new module_10180.default();
  new module_10180.default();
  items1 = [new module_10178.default(), ];
  new module_10178.default();
  items1[1] = new module_10179.default();
  new module_10179.default();
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
  const _default = new module_10175.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10176.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10186.default();
  unshift3(_default2);
  return tmp;
}
const module_10175 = fn(_mod10175);
const module_10176 = fn(_mod10176);
const module_10148 = fn(_mod10148);
const module_10177 = fn(_mod10177);
const module_10178 = fn(_mod10178);
const module_10179 = fn(_mod10179);
const module_10180 = fn(_mod10180);
const module_10182 = fn(_mod10182);
const module_10183 = fn(_mod10183);
const module_10184 = fn(_mod10184);
const module_10185 = fn(_mod10185);
const module_10186 = fn(_mod10186);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10175.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10176.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10186.default();
unshift3(_default2);
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
