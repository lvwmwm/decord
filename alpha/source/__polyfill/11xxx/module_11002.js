// Module ID: 11002
// Function ID: 11003
// Dependencies: [10918, 10876, 10883, 10885, 10993, 10994, 10996, 10997, 10998, 10999, 11000, 11001, 10916]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11002
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod10918 from "module_10918" /* 10918 */;
import _mod10993 from "module_10993" /* 10993 */;
import _mod10994 from "module_10994" /* 10994 */;
import _mod10996 from "module_10996" /* 10996 */;
import _mod10997 from "module_10997" /* 10997 */;
import _mod10998 from "module_10998" /* 10998 */;
import _mod10999 from "module_10999" /* 10999 */;
import _mod11000 from "module_11000" /* 11000 */;
import _mod11001 from "module_11001" /* 11001 */;
import { Chrono } from "module_10876" /* 10876 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10994.default(), , , , ];
  new module_10994.default();
  items[1] = new module_10997.default();
  new module_10997.default();
  items[2] = new module_10999.default();
  new module_10999.default();
  items[3] = new module_10998.default();
  new module_10998.default();
  items[4] = new module_10996.default();
  new module_10996.default();
  items1 = [new module_11000.default(), ];
  new module_11000.default();
  items1[1] = new module_11001.default();
  new module_11001.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10918.default));
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
  const _default = new module_10993.default();
  unshift(_default);
  return tmp;
}
const module_10918 = fn(_mod10918);
const module_10993 = fn(_mod10993);
const module_10994 = fn(_mod10994);
const module_10996 = fn(_mod10996);
const module_10997 = fn(_mod10997);
const module_10998 = fn(_mod10998);
const module_10999 = fn(_mod10999);
const module_11000 = fn(_mod11000);
const module_11001 = fn(_mod11001);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10993.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10993.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10876").Chrono(createConfiguration());
const Chrono_export = require("module_10876").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
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
