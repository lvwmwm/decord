// Module ID: 10336
// Function ID: 10337
// Dependencies: [10252, 10210, 10217, 10219, 10327, 10328, 10330, 10331, 10332, 10333, 10334, 10335, 10250]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10336
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10250 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10328 from "module_10328" /* 10328 */;
import _mod10330 from "module_10330" /* 10330 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10332 from "module_10332" /* 10332 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import _mod10335 from "module_10335" /* 10335 */;
import { Chrono } from "module_10210" /* 10210 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10328.default(), , , , ];
  new module_10328.default();
  items[1] = new module_10331.default();
  new module_10331.default();
  items[2] = new module_10333.default();
  new module_10333.default();
  items[3] = new module_10332.default();
  new module_10332.default();
  items[4] = new module_10330.default();
  new module_10330.default();
  items1 = [new module_10334.default(), ];
  new module_10334.default();
  items1[1] = new module_10335.default();
  new module_10335.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10252.default));
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
  const _default = new module_10327.default();
  unshift(_default);
  return tmp;
}
const module_10252 = fn(_mod10252);
const module_10327 = fn(_mod10327);
const module_10328 = fn(_mod10328);
const module_10330 = fn(_mod10330);
const module_10331 = fn(_mod10331);
const module_10332 = fn(_mod10332);
const module_10333 = fn(_mod10333);
const module_10334 = fn(_mod10334);
const module_10335 = fn(_mod10335);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10327.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10327.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10210").Chrono(createConfiguration());
const Chrono_export = require("module_10210").Chrono;

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
