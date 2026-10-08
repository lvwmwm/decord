// Module ID: 9957
// Function ID: 9958
// Dependencies: [9767, 9774, 9776, 9800, 9812, 9958, 9960, 9961, 9962, 9807]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 9957
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9812 from "module_9812" /* 9812 */;
import _mod9958 from "module_9958" /* 9958 */;
import _mod9960 from "module_9960" /* 9960 */;
import _mod9961 from "module_9961" /* 9961 */;
import _mod9962 from "module_9962" /* 9962 */;
import { Chrono } from "module_9767" /* 9767 */;

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
  items = [new module_9812.default(), , , , ];
  new module_9812.default();
  items[1] = new module_9800.default(flag);
  new module_9800.default(flag);
  items[2] = new module_9960.default();
  new module_9960.default();
  items[3] = new module_9958.default();
  new module_9958.default();
  items[4] = new module_9961.default();
  new module_9961.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_9962.default();
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
  items = [new module_9812.default(), , , , ];
  new module_9812.default();
  items[1] = new module_9800.default(flag2);
  new module_9800.default(flag2);
  items[2] = new module_9960.default();
  new module_9960.default();
  items[3] = new module_9958.default();
  new module_9958.default();
  items[4] = new module_9961.default();
  new module_9961.default();
  return includeCommonConfiguration(obj, flag);
}
const module_9800 = fn(_mod9800);
const module_9812 = fn(_mod9812);
const module_9958 = fn(_mod9958);
const module_9960 = fn(_mod9960);
const module_9961 = fn(_mod9961);
const module_9962 = fn(_mod9962);
const chrono = new require("module_9767").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_9812.default();
items = [_default, , , , ];
const _default1 = new module_9800.default(true);
items[1] = _default1;
const _default2 = new module_9960.default();
items[2] = _default2;
const _default3 = new module_9958.default();
items[3] = _default3;
const _default4 = new module_9961.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_9767").Chrono;

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
