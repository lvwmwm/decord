// Module ID: 10337
// Function ID: 10338
// Dependencies: [10253, 10211, 10218, 10220, 10328, 10329, 10331, 10332, 10333, 10334, 10335, 10336, 10251]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10337
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10251 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10328 from "module_10328" /* 10328 */;
import _mod10329 from "module_10329" /* 10329 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10332 from "module_10332" /* 10332 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10336 from "module_10336" /* 10336 */;
import { Chrono } from "module_10211" /* 10211 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10329.default(), , , , ];
  new module_10329.default();
  items[1] = new module_10332.default();
  new module_10332.default();
  items[2] = new module_10334.default();
  new module_10334.default();
  items[3] = new module_10333.default();
  new module_10333.default();
  items[4] = new module_10331.default();
  new module_10331.default();
  items1 = [new module_10335.default(), ];
  new module_10335.default();
  items1[1] = new module_10336.default();
  new module_10336.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10253.default));
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
  const _default = new module_10328.default();
  unshift(_default);
  return tmp;
}
const module_10253 = fn(_mod10253);
const module_10328 = fn(_mod10328);
const module_10329 = fn(_mod10329);
const module_10331 = fn(_mod10331);
const module_10332 = fn(_mod10332);
const module_10333 = fn(_mod10333);
const module_10334 = fn(_mod10334);
const module_10335 = fn(_mod10335);
const module_10336 = fn(_mod10336);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10328.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10328.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10211").Chrono(createConfiguration());
const Chrono_export = require("module_10211").Chrono;

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
