// Module ID: 10177
// Function ID: 10178
// Dependencies: [10093, 10051, 10058, 10060, 10168, 10169, 10171, 10172, 10173, 10174, 10175, 10176, 10091]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10177
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10093 from "module_10093" /* 10093 */;
import _mod10168 from "module_10168" /* 10168 */;
import _mod10169 from "module_10169" /* 10169 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10176 from "module_10176" /* 10176 */;
import { Chrono } from "module_10051" /* 10051 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10169.default(), , , , ];
  new module_10169.default();
  items[1] = new module_10172.default();
  new module_10172.default();
  items[2] = new module_10174.default();
  new module_10174.default();
  items[3] = new module_10173.default();
  new module_10173.default();
  items[4] = new module_10171.default();
  new module_10171.default();
  items1 = [new module_10175.default(), ];
  new module_10175.default();
  items1[1] = new module_10176.default();
  new module_10176.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10093.default));
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
  const _default = new module_10168.default();
  unshift(_default);
  return tmp;
}
const module_10093 = fn(_mod10093);
const module_10168 = fn(_mod10168);
const module_10169 = fn(_mod10169);
const module_10171 = fn(_mod10171);
const module_10172 = fn(_mod10172);
const module_10173 = fn(_mod10173);
const module_10174 = fn(_mod10174);
const module_10175 = fn(_mod10175);
const module_10176 = fn(_mod10176);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10168.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10168.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10051").Chrono(createConfiguration());
const Chrono_export = require("module_10051").Chrono;

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
