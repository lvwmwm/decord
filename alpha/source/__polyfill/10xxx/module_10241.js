// Module ID: 10241
// Function ID: 10242
// Dependencies: [10157, 10115, 10122, 10124, 10232, 10233, 10235, 10236, 10237, 10238, 10239, 10240, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10241
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10232 from "module_10232" /* 10232 */;
import _mod10233 from "module_10233" /* 10233 */;
import _mod10235 from "module_10235" /* 10235 */;
import _mod10236 from "module_10236" /* 10236 */;
import _mod10237 from "module_10237" /* 10237 */;
import _mod10238 from "module_10238" /* 10238 */;
import _mod10239 from "module_10239" /* 10239 */;
import _mod10240 from "module_10240" /* 10240 */;
import { Chrono } from "module_10115" /* 10115 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10233.default(), , , , ];
  new module_10233.default();
  items[1] = new module_10236.default();
  new module_10236.default();
  items[2] = new module_10238.default();
  new module_10238.default();
  items[3] = new module_10237.default();
  new module_10237.default();
  items[4] = new module_10235.default();
  new module_10235.default();
  items1 = [new module_10239.default(), ];
  new module_10239.default();
  items1[1] = new module_10240.default();
  new module_10240.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10157.default));
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
  const _default = new module_10232.default();
  unshift(_default);
  return tmp;
}
const module_10157 = fn(_mod10157);
const module_10232 = fn(_mod10232);
const module_10233 = fn(_mod10233);
const module_10235 = fn(_mod10235);
const module_10236 = fn(_mod10236);
const module_10237 = fn(_mod10237);
const module_10238 = fn(_mod10238);
const module_10239 = fn(_mod10239);
const module_10240 = fn(_mod10240);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10232.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10232.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10115").Chrono(createConfiguration());
const Chrono_export = require("module_10115").Chrono;

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
