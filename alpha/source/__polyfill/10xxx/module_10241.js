// Module ID: 10241
// Function ID: 10242
// Dependencies: [10051, 10058, 10060, 10084, 10096, 10242, 10244, 10245, 10246, 10091]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10241
import _mod10084 from "module_10084" /* 10084 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10096 from "module_10096" /* 10096 */;
import _mod10242 from "module_10242" /* 10242 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import _mod10246 from "module_10246" /* 10246 */;
import { Chrono } from "module_10051" /* 10051 */;

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
  items = [new module_10096.default(), , , , ];
  new module_10096.default();
  items[1] = new module_10084.default(flag);
  new module_10084.default(flag);
  items[2] = new module_10244.default();
  new module_10244.default();
  items[3] = new module_10242.default();
  new module_10242.default();
  items[4] = new module_10245.default();
  new module_10245.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10246.default();
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
  items = [new module_10096.default(), , , , ];
  new module_10096.default();
  items[1] = new module_10084.default(flag2);
  new module_10084.default(flag2);
  items[2] = new module_10244.default();
  new module_10244.default();
  items[3] = new module_10242.default();
  new module_10242.default();
  items[4] = new module_10245.default();
  new module_10245.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10084 = fn(_mod10084);
const module_10096 = fn(_mod10096);
const module_10242 = fn(_mod10242);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const module_10246 = fn(_mod10246);
const chrono = new require("module_10051").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10096.default();
items = [_default, , , , ];
const _default1 = new module_10084.default(true);
items[1] = _default1;
const _default2 = new module_10244.default();
items[2] = _default2;
const _default3 = new module_10242.default();
items[3] = _default3;
const _default4 = new module_10245.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10051").Chrono;

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
