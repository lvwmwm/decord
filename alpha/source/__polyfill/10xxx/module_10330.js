// Module ID: 10330
// Function ID: 10331
// Dependencies: [10140, 10147, 10149, 10173, 10185, 10331, 10333, 10334, 10335, 10180]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10330
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import _mod10335 from "module_10335" /* 10335 */;
import { Chrono } from "module_10140" /* 10140 */;

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
  items = [new module_10185.default(), , , , ];
  new module_10185.default();
  items[1] = new module_10173.default(flag);
  new module_10173.default(flag);
  items[2] = new module_10333.default();
  new module_10333.default();
  items[3] = new module_10331.default();
  new module_10331.default();
  items[4] = new module_10334.default();
  new module_10334.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10335.default();
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
  items = [new module_10185.default(), , , , ];
  new module_10185.default();
  items[1] = new module_10173.default(flag2);
  new module_10173.default(flag2);
  items[2] = new module_10333.default();
  new module_10333.default();
  items[3] = new module_10331.default();
  new module_10331.default();
  items[4] = new module_10334.default();
  new module_10334.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10173 = fn(_mod10173);
const module_10185 = fn(_mod10185);
const module_10331 = fn(_mod10331);
const module_10333 = fn(_mod10333);
const module_10334 = fn(_mod10334);
const module_10335 = fn(_mod10335);
const chrono = new require("module_10140").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10185.default();
items = [_default, , , , ];
const _default1 = new module_10173.default(true);
items[1] = _default1;
const _default2 = new module_10333.default();
items[2] = _default2;
const _default3 = new module_10331.default();
items[3] = _default3;
const _default4 = new module_10334.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
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
