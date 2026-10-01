// Module ID: 10017
// Function ID: 10018
// Dependencies: [9933, 9891, 9898, 9900, 10008, 10009, 10011, 10012, 10013, 10014, 10015, 10016, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10017
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod10008 from "module_10008" /* 10008 */;
import _mod10009 from "module_10009" /* 10009 */;
import _mod10011 from "module_10011" /* 10011 */;
import _mod10012 from "module_10012" /* 10012 */;
import _mod10013 from "module_10013" /* 10013 */;
import _mod10014 from "module_10014" /* 10014 */;
import _mod10015 from "module_10015" /* 10015 */;
import _mod10016 from "module_10016" /* 10016 */;
import { Chrono } from "module_9891" /* 9891 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10009.default(), , , , ];
  new module_10009.default();
  items[1] = new module_10012.default();
  new module_10012.default();
  items[2] = new module_10014.default();
  new module_10014.default();
  items[3] = new module_10013.default();
  new module_10013.default();
  items[4] = new module_10011.default();
  new module_10011.default();
  items1 = [new module_10015.default(), ];
  new module_10015.default();
  items1[1] = new module_10016.default();
  new module_10016.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9933.default));
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
  const _default = new module_10008.default();
  unshift(_default);
  return tmp;
}
const module_9933 = fn(_mod9933);
const module_10008 = fn(_mod10008);
const module_10009 = fn(_mod10009);
const module_10011 = fn(_mod10011);
const module_10012 = fn(_mod10012);
const module_10013 = fn(_mod10013);
const module_10014 = fn(_mod10014);
const module_10015 = fn(_mod10015);
const module_10016 = fn(_mod10016);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10008.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10008.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9891").Chrono(createConfiguration());
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
