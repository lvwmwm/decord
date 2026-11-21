// Module ID: 11538
// Function ID: 11539
// Dependencies: [11453, 11411, 11418, 11420, 11539, 11522, 11524, 11525, 11526, 11527, 11540, 11541, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11538
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11522 from "module_11522" /* 11522 */;
import _mod11524 from "module_11524" /* 11524 */;
import _mod11525 from "module_11525" /* 11525 */;
import _mod11526 from "module_11526" /* 11526 */;
import _mod11527 from "module_11527" /* 11527 */;
import _mod11539 from "module_11539" /* 11539 */;
import _mod11540 from "module_11540" /* 11540 */;
import _mod11541 from "module_11541" /* 11541 */;
import { Chrono } from "module_11411" /* 11411 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11522.default(), , , , ];
  new module_11522.default();
  items[1] = new module_11525.default();
  new module_11525.default();
  items[2] = new module_11527.default();
  new module_11527.default();
  items[3] = new module_11526.default();
  new module_11526.default();
  items[4] = new module_11524.default();
  new module_11524.default();
  items1 = [new module_11540.default(), ];
  new module_11540.default();
  items1[1] = new module_11541.default();
  new module_11541.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11453.default));
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
  const _default = new module_11539.default();
  unshift(_default);
  return tmp;
}
const module_11453 = fn(_mod11453);
const module_11539 = fn(_mod11539);
const module_11522 = fn(_mod11522);
const module_11524 = fn(_mod11524);
const module_11525 = fn(_mod11525);
const module_11526 = fn(_mod11526);
const module_11527 = fn(_mod11527);
const module_11540 = fn(_mod11540);
const module_11541 = fn(_mod11541);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11539.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11539.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11411").Chrono(createConfiguration());
const Chrono_export = require("module_11411").Chrono;

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
