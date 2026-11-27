// Module ID: 11003
// Function ID: 11004
// Dependencies: [10918, 10876, 10883, 10885, 11004, 10987, 10989, 10990, 10991, 10992, 11005, 11006, 10916]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11003
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod10918 from "module_10918" /* 10918 */;
import _mod10987 from "module_10987" /* 10987 */;
import _mod10989 from "module_10989" /* 10989 */;
import _mod10990 from "module_10990" /* 10990 */;
import _mod10991 from "module_10991" /* 10991 */;
import _mod10992 from "module_10992" /* 10992 */;
import _mod11004 from "module_11004" /* 11004 */;
import _mod11005 from "module_11005" /* 11005 */;
import _mod11006 from "module_11006" /* 11006 */;
import { Chrono } from "module_10876" /* 10876 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10987.default(), , , , ];
  new module_10987.default();
  items[1] = new module_10990.default();
  new module_10990.default();
  items[2] = new module_10992.default();
  new module_10992.default();
  items[3] = new module_10991.default();
  new module_10991.default();
  items[4] = new module_10989.default();
  new module_10989.default();
  items1 = [new module_11005.default(), ];
  new module_11005.default();
  items1[1] = new module_11006.default();
  new module_11006.default();
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
  const _default = new module_11004.default();
  unshift(_default);
  return tmp;
}
const module_10918 = fn(_mod10918);
const module_11004 = fn(_mod11004);
const module_10987 = fn(_mod10987);
const module_10989 = fn(_mod10989);
const module_10990 = fn(_mod10990);
const module_10991 = fn(_mod10991);
const module_10992 = fn(_mod10992);
const module_11005 = fn(_mod11005);
const module_11006 = fn(_mod11006);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11004.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11004.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
