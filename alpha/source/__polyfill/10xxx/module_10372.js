// Module ID: 10372
// Function ID: 10373
// Dependencies: [10287, 10245, 10252, 10254, 10373, 10356, 10358, 10359, 10360, 10361, 10374, 10375, 10285]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10372
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10285 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10361 from "module_10361" /* 10361 */;
import _mod10373 from "module_10373" /* 10373 */;
import _mod10374 from "module_10374" /* 10374 */;
import _mod10375 from "module_10375" /* 10375 */;
import { Chrono } from "module_10245" /* 10245 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10356.default(), , , , ];
  new module_10356.default();
  items[1] = new module_10359.default();
  new module_10359.default();
  items[2] = new module_10361.default();
  new module_10361.default();
  items[3] = new module_10360.default();
  new module_10360.default();
  items[4] = new module_10358.default();
  new module_10358.default();
  items1 = [new module_10374.default(), ];
  new module_10374.default();
  items1[1] = new module_10375.default();
  new module_10375.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10287.default));
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
  const _default = new module_10373.default();
  unshift(_default);
  return tmp;
}
const module_10287 = fn(_mod10287);
const module_10373 = fn(_mod10373);
const module_10356 = fn(_mod10356);
const module_10358 = fn(_mod10358);
const module_10359 = fn(_mod10359);
const module_10360 = fn(_mod10360);
const module_10361 = fn(_mod10361);
const module_10374 = fn(_mod10374);
const module_10375 = fn(_mod10375);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10373.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10373.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10245").Chrono(createConfiguration());
const Chrono_export = require("module_10245").Chrono;

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
