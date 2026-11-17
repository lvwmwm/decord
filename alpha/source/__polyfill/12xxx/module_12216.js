// Module ID: 12216
// Function ID: 12217
// Dependencies: [12131, 12089, 12096, 12098, 12217, 12200, 12202, 12203, 12204, 12205, 12218, 12219, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12216
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12131 from "module_12131" /* 12131 */;
import _mod12200 from "module_12200" /* 12200 */;
import _mod12202 from "module_12202" /* 12202 */;
import _mod12203 from "module_12203" /* 12203 */;
import _mod12204 from "module_12204" /* 12204 */;
import _mod12205 from "module_12205" /* 12205 */;
import _mod12217 from "module_12217" /* 12217 */;
import _mod12218 from "module_12218" /* 12218 */;
import _mod12219 from "module_12219" /* 12219 */;
import { Chrono } from "module_12089" /* 12089 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_12200.default(), , , , ];
  new module_12200.default();
  items[1] = new module_12203.default();
  new module_12203.default();
  items[2] = new module_12205.default();
  new module_12205.default();
  items[3] = new module_12204.default();
  new module_12204.default();
  items[4] = new module_12202.default();
  new module_12202.default();
  items1 = [new module_12218.default(), ];
  new module_12218.default();
  items1[1] = new module_12219.default();
  new module_12219.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_12131.default));
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
  const _default = new module_12217.default();
  unshift(_default);
  return tmp;
}
const module_12131 = fn(_mod12131);
const module_12217 = fn(_mod12217);
const module_12200 = fn(_mod12200);
const module_12202 = fn(_mod12202);
const module_12203 = fn(_mod12203);
const module_12204 = fn(_mod12204);
const module_12205 = fn(_mod12205);
const module_12218 = fn(_mod12218);
const module_12219 = fn(_mod12219);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12217.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_12217.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_12089").Chrono(createConfiguration());
const Chrono_export = require("module_12089").Chrono;

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
