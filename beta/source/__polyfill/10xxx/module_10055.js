// Module ID: 10055
// Function ID: 10056
// Dependencies: [9970, 9928, 9935, 9937, 10056, 10039, 10041, 10042, 10043, 10044, 10057, 10058, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10055
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9970 from "module_9970" /* 9970 */;
import _mod10039 from "module_10039" /* 10039 */;
import _mod10041 from "module_10041" /* 10041 */;
import _mod10042 from "module_10042" /* 10042 */;
import _mod10043 from "module_10043" /* 10043 */;
import _mod10044 from "module_10044" /* 10044 */;
import _mod10056 from "module_10056" /* 10056 */;
import _mod10057 from "module_10057" /* 10057 */;
import _mod10058 from "module_10058" /* 10058 */;
import { Chrono } from "module_9928" /* 9928 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10039.default(), , , , ];
  new module_10039.default();
  items[1] = new module_10042.default();
  new module_10042.default();
  items[2] = new module_10044.default();
  new module_10044.default();
  items[3] = new module_10043.default();
  new module_10043.default();
  items[4] = new module_10041.default();
  new module_10041.default();
  items1 = [new module_10057.default(), ];
  new module_10057.default();
  items1[1] = new module_10058.default();
  new module_10058.default();
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
  const _default = new module_10056.default();
  unshift(_default);
  return tmp;
}
const module_9970 = fn(_mod9970);
const module_10056 = fn(_mod10056);
const module_10039 = fn(_mod10039);
const module_10041 = fn(_mod10041);
const module_10042 = fn(_mod10042);
const module_10043 = fn(_mod10043);
const module_10044 = fn(_mod10044);
const module_10057 = fn(_mod10057);
const module_10058 = fn(_mod10058);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10056.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10056.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
