// Module ID: 10054
// Function ID: 10055
// Dependencies: [9970, 9928, 9935, 9937, 10045, 10046, 10048, 10049, 10050, 10051, 10052, 10053, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10054
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9970 from "module_9970" /* 9970 */;
import _mod10045 from "module_10045" /* 10045 */;
import _mod10046 from "module_10046" /* 10046 */;
import _mod10048 from "module_10048" /* 10048 */;
import _mod10049 from "module_10049" /* 10049 */;
import _mod10050 from "module_10050" /* 10050 */;
import _mod10051 from "module_10051" /* 10051 */;
import _mod10052 from "module_10052" /* 10052 */;
import _mod10053 from "module_10053" /* 10053 */;
import { Chrono } from "module_9928" /* 9928 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10046.default(), , , , ];
  new module_10046.default();
  items[1] = new module_10049.default();
  new module_10049.default();
  items[2] = new module_10051.default();
  new module_10051.default();
  items[3] = new module_10050.default();
  new module_10050.default();
  items[4] = new module_10048.default();
  new module_10048.default();
  items1 = [new module_10052.default(), ];
  new module_10052.default();
  items1[1] = new module_10053.default();
  new module_10053.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9970.default));
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
  const _default = new module_10045.default();
  unshift(_default);
  return tmp;
}
const module_9970 = fn(_mod9970);
const module_10045 = fn(_mod10045);
const module_10046 = fn(_mod10046);
const module_10048 = fn(_mod10048);
const module_10049 = fn(_mod10049);
const module_10050 = fn(_mod10050);
const module_10051 = fn(_mod10051);
const module_10052 = fn(_mod10052);
const module_10053 = fn(_mod10053);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10045.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10045.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9928").Chrono(createConfiguration());
const Chrono_export = require("module_9928").Chrono;

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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
