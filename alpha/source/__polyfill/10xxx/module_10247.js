// Module ID: 10247
// Function ID: 10248
// Dependencies: [10188, 10195, 10197, 10248, 10249, 10221, 10250, 10251, 10252, 10253, 10255, 10256, 10257, 10258, 10259, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10247
import _mod10221 from "module_10221" /* 10221 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10248 from "module_10248" /* 10248 */;
import _mod10249 from "module_10249" /* 10249 */;
import _mod10250 from "module_10250" /* 10250 */;
import _mod10251 from "module_10251" /* 10251 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
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
  items = [new module_10221.default(flag2), , , , , , ];
  new module_10221.default(flag2);
  items[1] = new module_10256.default();
  new module_10256.default();
  items[2] = new module_10250.default();
  new module_10250.default();
  items[3] = new module_10255.default();
  new module_10255.default();
  items[4] = new module_10257.default();
  new module_10257.default();
  items[5] = new module_10258.default();
  new module_10258.default();
  items[6] = new module_10253.default();
  new module_10253.default();
  items1 = [new module_10251.default(), ];
  new module_10251.default();
  items1[1] = new module_10252.default();
  new module_10252.default();
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
  const _default = new module_10248.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10249.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10259.default();
  unshift3(_default2);
  return tmp;
}
const module_10248 = fn(_mod10248);
const module_10249 = fn(_mod10249);
const module_10221 = fn(_mod10221);
const module_10250 = fn(_mod10250);
const module_10251 = fn(_mod10251);
const module_10252 = fn(_mod10252);
const module_10253 = fn(_mod10253);
const module_10255 = fn(_mod10255);
const module_10256 = fn(_mod10256);
const module_10257 = fn(_mod10257);
const module_10258 = fn(_mod10258);
const module_10259 = fn(_mod10259);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10248.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10249.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10259.default();
unshift3(_default2);
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
