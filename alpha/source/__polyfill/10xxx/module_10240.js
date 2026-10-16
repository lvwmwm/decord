// Module ID: 10240
// Function ID: 10241
// Dependencies: [10050, 10057, 10059, 10083, 10095, 10241, 10243, 10244, 10245, 10090]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10240
import _mod10083 from "module_10083" /* 10083 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10095 from "module_10095" /* 10095 */;
import _mod10241 from "module_10241" /* 10241 */;
import _mod10243 from "module_10243" /* 10243 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import { Chrono } from "module_10050" /* 10050 */;

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
  items = [new module_10095.default(), , , , ];
  new module_10095.default();
  items[1] = new module_10083.default(flag);
  new module_10083.default(flag);
  items[2] = new module_10243.default();
  new module_10243.default();
  items[3] = new module_10241.default();
  new module_10241.default();
  items[4] = new module_10244.default();
  new module_10244.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10245.default();
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
  items = [new module_10095.default(), , , , ];
  new module_10095.default();
  items[1] = new module_10083.default(flag2);
  new module_10083.default(flag2);
  items[2] = new module_10243.default();
  new module_10243.default();
  items[3] = new module_10241.default();
  new module_10241.default();
  items[4] = new module_10244.default();
  new module_10244.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10083 = fn(_mod10083);
const module_10095 = fn(_mod10095);
const module_10241 = fn(_mod10241);
const module_10243 = fn(_mod10243);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const chrono = new require("module_10050").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10095.default();
items = [_default, , , , ];
const _default1 = new module_10083.default(true);
items[1] = _default1;
const _default2 = new module_10243.default();
items[2] = _default2;
const _default3 = new module_10241.default();
items[3] = _default3;
const _default4 = new module_10244.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10050").Chrono;

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
