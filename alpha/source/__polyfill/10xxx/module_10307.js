// Module ID: 10307
// Function ID: 10308
// Dependencies: [10223, 10181, 10188, 10190, 10298, 10299, 10301, 10302, 10303, 10304, 10305, 10306, 10221]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10307
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
import _mod10223 from "module_10223" /* 10223 */;
import _mod10298 from "module_10298" /* 10298 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10302 from "module_10302" /* 10302 */;
import _mod10303 from "module_10303" /* 10303 */;
import _mod10304 from "module_10304" /* 10304 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10306 from "module_10306" /* 10306 */;
import { Chrono } from "module_10181" /* 10181 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10299.default(), , , , ];
  new module_10299.default();
  items[1] = new module_10302.default();
  new module_10302.default();
  items[2] = new module_10304.default();
  new module_10304.default();
  items[3] = new module_10303.default();
  new module_10303.default();
  items[4] = new module_10301.default();
  new module_10301.default();
  items1 = [new module_10305.default(), ];
  new module_10305.default();
  items1[1] = new module_10306.default();
  new module_10306.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10223.default));
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
  const _default = new module_10298.default();
  unshift(_default);
  return tmp;
}
const module_10223 = fn(_mod10223);
const module_10298 = fn(_mod10298);
const module_10299 = fn(_mod10299);
const module_10301 = fn(_mod10301);
const module_10302 = fn(_mod10302);
const module_10303 = fn(_mod10303);
const module_10304 = fn(_mod10304);
const module_10305 = fn(_mod10305);
const module_10306 = fn(_mod10306);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10298.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10298.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10181").Chrono(createConfiguration());
const Chrono_export = require("module_10181").Chrono;

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
