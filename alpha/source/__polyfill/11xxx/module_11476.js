// Module ID: 11476
// Function ID: 11477
// Dependencies: [11391, 11349, 11356, 11358, 11477, 11460, 11462, 11463, 11464, 11465, 11478, 11479, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11476
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11462 from "module_11462" /* 11462 */;
import _mod11463 from "module_11463" /* 11463 */;
import _mod11464 from "module_11464" /* 11464 */;
import _mod11465 from "module_11465" /* 11465 */;
import _mod11477 from "module_11477" /* 11477 */;
import _mod11478 from "module_11478" /* 11478 */;
import _mod11479 from "module_11479" /* 11479 */;
import { Chrono } from "module_11349" /* 11349 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11460.default(), , , , ];
  new module_11460.default();
  items[1] = new module_11463.default();
  new module_11463.default();
  items[2] = new module_11465.default();
  new module_11465.default();
  items[3] = new module_11464.default();
  new module_11464.default();
  items[4] = new module_11462.default();
  new module_11462.default();
  items1 = [new module_11478.default(), ];
  new module_11478.default();
  items1[1] = new module_11479.default();
  new module_11479.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11391.default));
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
  const _default = new module_11477.default();
  unshift(_default);
  return tmp;
}
const module_11391 = fn(_mod11391);
const module_11477 = fn(_mod11477);
const module_11460 = fn(_mod11460);
const module_11462 = fn(_mod11462);
const module_11463 = fn(_mod11463);
const module_11464 = fn(_mod11464);
const module_11465 = fn(_mod11465);
const module_11478 = fn(_mod11478);
const module_11479 = fn(_mod11479);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11477.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11477.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11349").Chrono(createConfiguration());
const Chrono_export = require("module_11349").Chrono;

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
