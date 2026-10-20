// Module ID: 10256
// Function ID: 10257
// Dependencies: [10171, 10129, 10136, 10138, 10257, 10240, 10242, 10243, 10244, 10245, 10258, 10259, 10169]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10256
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10169 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10240 from "module_10240" /* 10240 */;
import _mod10242 from "module_10242" /* 10242 */;
import _mod10243 from "module_10243" /* 10243 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
import { Chrono } from "module_10129" /* 10129 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10240.default(), , , , ];
  new module_10240.default();
  items[1] = new module_10243.default();
  new module_10243.default();
  items[2] = new module_10245.default();
  new module_10245.default();
  items[3] = new module_10244.default();
  new module_10244.default();
  items[4] = new module_10242.default();
  new module_10242.default();
  items1 = [new module_10258.default(), ];
  new module_10258.default();
  items1[1] = new module_10259.default();
  new module_10259.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10171.default));
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
  const _default = new module_10257.default();
  unshift(_default);
  return tmp;
}
const module_10171 = fn(_mod10171);
const module_10257 = fn(_mod10257);
const module_10240 = fn(_mod10240);
const module_10242 = fn(_mod10242);
const module_10243 = fn(_mod10243);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const module_10258 = fn(_mod10258);
const module_10259 = fn(_mod10259);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10257.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10257.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10129").Chrono(createConfiguration());
const Chrono_export = require("module_10129").Chrono;

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
