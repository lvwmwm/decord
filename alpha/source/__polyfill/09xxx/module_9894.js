// Module ID: 9894
// Function ID: 9895
// Dependencies: [9809, 9767, 9774, 9776, 9895, 9878, 9880, 9881, 9882, 9883, 9896, 9897, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9894
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9809 from "module_9809" /* 9809 */;
import _mod9878 from "module_9878" /* 9878 */;
import _mod9880 from "module_9880" /* 9880 */;
import _mod9881 from "module_9881" /* 9881 */;
import _mod9882 from "module_9882" /* 9882 */;
import _mod9883 from "module_9883" /* 9883 */;
import _mod9895 from "module_9895" /* 9895 */;
import _mod9896 from "module_9896" /* 9896 */;
import _mod9897 from "module_9897" /* 9897 */;
import { Chrono } from "module_9767" /* 9767 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9878.default(), , , , ];
  new module_9878.default();
  items[1] = new module_9881.default();
  new module_9881.default();
  items[2] = new module_9883.default();
  new module_9883.default();
  items[3] = new module_9882.default();
  new module_9882.default();
  items[4] = new module_9880.default();
  new module_9880.default();
  items1 = [new module_9896.default(), ];
  new module_9896.default();
  items1[1] = new module_9897.default();
  new module_9897.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9809.default));
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
  const _default = new module_9895.default();
  unshift(_default);
  return tmp;
}
const module_9809 = fn(_mod9809);
const module_9895 = fn(_mod9895);
const module_9878 = fn(_mod9878);
const module_9880 = fn(_mod9880);
const module_9881 = fn(_mod9881);
const module_9882 = fn(_mod9882);
const module_9883 = fn(_mod9883);
const module_9896 = fn(_mod9896);
const module_9897 = fn(_mod9897);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9895.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9895.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9767").Chrono(createConfiguration());
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
