// Module ID: 10580
// Function ID: 10581
// Dependencies: [10495, 10453, 10460, 10462, 10581, 10564, 10566, 10567, 10568, 10569, 10582, 10583, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10580
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10566 from "module_10566" /* 10566 */;
import _mod10567 from "module_10567" /* 10567 */;
import _mod10568 from "module_10568" /* 10568 */;
import _mod10569 from "module_10569" /* 10569 */;
import _mod10581 from "module_10581" /* 10581 */;
import _mod10582 from "module_10582" /* 10582 */;
import _mod10583 from "module_10583" /* 10583 */;
import { Chrono } from "module_10453" /* 10453 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10564.default(), , , , ];
  new module_10564.default();
  items[1] = new module_10567.default();
  new module_10567.default();
  items[2] = new module_10569.default();
  new module_10569.default();
  items[3] = new module_10568.default();
  new module_10568.default();
  items[4] = new module_10566.default();
  new module_10566.default();
  items1 = [new module_10582.default(), ];
  new module_10582.default();
  items1[1] = new module_10583.default();
  new module_10583.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10495.default));
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
  const _default = new module_10581.default();
  unshift(_default);
  return tmp;
}
const module_10495 = fn(_mod10495);
const module_10581 = fn(_mod10581);
const module_10564 = fn(_mod10564);
const module_10566 = fn(_mod10566);
const module_10567 = fn(_mod10567);
const module_10568 = fn(_mod10568);
const module_10569 = fn(_mod10569);
const module_10582 = fn(_mod10582);
const module_10583 = fn(_mod10583);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10581.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10581.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10453").Chrono(createConfiguration());
const Chrono_export = require("module_10453").Chrono;

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
