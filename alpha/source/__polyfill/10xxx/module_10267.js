// Module ID: 10267
// Function ID: 10268
// Dependencies: [10182, 10140, 10147, 10149, 10268, 10251, 10253, 10254, 10255, 10256, 10269, 10270, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10267
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10251 from "module_10251" /* 10251 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10254 from "module_10254" /* 10254 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10268 from "module_10268" /* 10268 */;
import _mod10269 from "module_10269" /* 10269 */;
import _mod10270 from "module_10270" /* 10270 */;
import { Chrono } from "module_10140" /* 10140 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10251.default(), , , , ];
  new module_10251.default();
  items[1] = new module_10254.default();
  new module_10254.default();
  items[2] = new module_10256.default();
  new module_10256.default();
  items[3] = new module_10255.default();
  new module_10255.default();
  items[4] = new module_10253.default();
  new module_10253.default();
  items1 = [new module_10269.default(), ];
  new module_10269.default();
  items1[1] = new module_10270.default();
  new module_10270.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10182.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10268.default();
  unshift(_default);
  return tmp;
}
const module_10182 = fn(_mod10182);
const module_10268 = fn(_mod10268);
const module_10251 = fn(_mod10251);
const module_10253 = fn(_mod10253);
const module_10254 = fn(_mod10254);
const module_10255 = fn(_mod10255);
const module_10256 = fn(_mod10256);
const module_10269 = fn(_mod10269);
const module_10270 = fn(_mod10270);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10268.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10268.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10140").Chrono(createConfiguration());
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
