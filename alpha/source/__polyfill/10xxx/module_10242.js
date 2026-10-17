// Module ID: 10242
// Function ID: 10243
// Dependencies: [10157, 10115, 10122, 10124, 10243, 10226, 10228, 10229, 10230, 10231, 10244, 10245, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10242
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10228 from "module_10228" /* 10228 */;
import _mod10229 from "module_10229" /* 10229 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10231 from "module_10231" /* 10231 */;
import _mod10243 from "module_10243" /* 10243 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import { Chrono } from "module_10115" /* 10115 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10226.default(), , , , ];
  new module_10226.default();
  items[1] = new module_10229.default();
  new module_10229.default();
  items[2] = new module_10231.default();
  new module_10231.default();
  items[3] = new module_10230.default();
  new module_10230.default();
  items[4] = new module_10228.default();
  new module_10228.default();
  items1 = [new module_10244.default(), ];
  new module_10244.default();
  items1[1] = new module_10245.default();
  new module_10245.default();
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
  const _default = new module_10243.default();
  unshift(_default);
  return tmp;
}
const module_10157 = fn(_mod10157);
const module_10243 = fn(_mod10243);
const module_10226 = fn(_mod10226);
const module_10228 = fn(_mod10228);
const module_10229 = fn(_mod10229);
const module_10230 = fn(_mod10230);
const module_10231 = fn(_mod10231);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10243.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10243.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
