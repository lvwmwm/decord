// Module ID: 9963
// Function ID: 9964
// Dependencies: [9964, 9966, 9967, 9968, 9969, 9970, 9971, 9891, 9898, 9900, 9972, 9973, 9937, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9963
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9937 from "module_9937" /* 9937 */;
import _mod9964 from "module_9964" /* 9964 */;
import _mod9966 from "module_9966" /* 9966 */;
import _mod9967 from "module_9967" /* 9967 */;
import _mod9968 from "module_9968" /* 9968 */;
import _mod9969 from "module_9969" /* 9969 */;
import _mod9970 from "module_9970" /* 9970 */;
import _mod9971 from "module_9971" /* 9971 */;
import _mod9972 from "module_9972" /* 9972 */;
import _mod9973 from "module_9973" /* 9973 */;
import { Chrono } from "module_9891" /* 9891 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9964.default(), , , , ];
  new module_9964.default();
  items[1] = new module_9968.default();
  new module_9968.default();
  items[2] = new module_9973.default();
  new module_9973.default();
  items[3] = new module_9969.default();
  new module_9969.default();
  items[4] = new module_9970.default();
  new module_9970.default();
  items1 = [new module_9972.default(), , ];
  new module_9972.default();
  items1[1] = new module_9971.default();
  new module_9971.default();
  items1[2] = new module_9966.default();
  new module_9966.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9937.default));
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9967.default();
  unshift(_default);
  return tmp;
}
const module_9964 = fn(_mod9964);
const module_9966 = fn(_mod9966);
const module_9967 = fn(_mod9967);
const module_9968 = fn(_mod9968);
const module_9969 = fn(_mod9969);
const module_9970 = fn(_mod9970);
const module_9971 = fn(_mod9971);
const module_9972 = fn(_mod9972);
const module_9973 = fn(_mod9973);
const module_9937 = fn(_mod9937);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9967.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));
const Chrono_export = require("module_9891").Chrono;

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
