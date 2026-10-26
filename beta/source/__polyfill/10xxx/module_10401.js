// Module ID: 10401
// Function ID: 10402
// Dependencies: [10211, 10218, 10220, 10244, 10256, 10402, 10404, 10405, 10406, 10251]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10401
import _mod10244 from "module_10244" /* 10244 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10251 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10402 from "module_10402" /* 10402 */;
import _mod10404 from "module_10404" /* 10404 */;
import _mod10405 from "module_10405" /* 10405 */;
import _mod10406 from "module_10406" /* 10406 */;
import { Chrono } from "module_10211" /* 10211 */;

const require = globalThis.__r;

let items;
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
  let items;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10256.default(), , , , ];
  new module_10256.default();
  items[1] = new module_10244.default(flag);
  new module_10244.default(flag);
  items[2] = new module_10404.default();
  new module_10404.default();
  items[3] = new module_10402.default();
  new module_10402.default();
  items[4] = new module_10405.default();
  new module_10405.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10406.default();
  unshift(_default5);
  return result;
}
function createConfiguration(flag) {
  let items;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10256.default(), , , , ];
  new module_10256.default();
  items[1] = new module_10244.default(flag2);
  new module_10244.default(flag2);
  items[2] = new module_10404.default();
  new module_10404.default();
  items[3] = new module_10402.default();
  new module_10402.default();
  items[4] = new module_10405.default();
  new module_10405.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10244 = fn(_mod10244);
const module_10256 = fn(_mod10256);
const module_10402 = fn(_mod10402);
const module_10404 = fn(_mod10404);
const module_10405 = fn(_mod10405);
const module_10406 = fn(_mod10406);
const chrono = new require("module_10211").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10256.default();
items = [_default, , , , ];
const _default1 = new module_10244.default(true);
items[1] = _default1;
const _default2 = new module_10404.default();
items[2] = _default2;
const _default3 = new module_10402.default();
items[3] = _default3;
const _default4 = new module_10405.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10211").Chrono;

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
