// Module ID: 10223
// Function ID: 10224
// Dependencies: [10140, 10147, 10149, 10173, 10224, 10226, 10227, 10228, 10229, 10230, 10231, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10223
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10224 from "module_10224" /* 10224 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10227 from "module_10227" /* 10227 */;
import _mod10228 from "module_10228" /* 10228 */;
import _mod10229 from "module_10229" /* 10229 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10231 from "module_10231" /* 10231 */;
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
  items = [new module_10173.default(flag2), , , ];
  new module_10173.default(flag2);
  items[1] = new module_10224.default();
  new module_10224.default();
  items[2] = new module_10226.default();
  new module_10226.default();
  items[3] = new module_10229.default();
  new module_10229.default();
  items1 = [new module_10227.default(), ];
  new module_10227.default();
  items1[1] = new module_10228.default();
  new module_10228.default();
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
  const _default = new module_10230.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10231.default();
  push2(_default1);
  return tmp;
}
const module_10173 = fn(_mod10173);
const module_10224 = fn(_mod10224);
const module_10226 = fn(_mod10226);
const module_10227 = fn(_mod10227);
const module_10228 = fn(_mod10228);
const module_10229 = fn(_mod10229);
const module_10230 = fn(_mod10230);
const module_10231 = fn(_mod10231);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10230.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10231.default();
push2(_default1);
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
