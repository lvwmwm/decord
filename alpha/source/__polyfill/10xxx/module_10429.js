// Module ID: 10429
// Function ID: 10430
// Dependencies: [10345, 10303, 10310, 10312, 10420, 10421, 10423, 10424, 10425, 10426, 10427, 10428, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10429
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10420 from "module_10420" /* 10420 */;
import _mod10421 from "module_10421" /* 10421 */;
import _mod10423 from "module_10423" /* 10423 */;
import _mod10424 from "module_10424" /* 10424 */;
import _mod10425 from "module_10425" /* 10425 */;
import _mod10426 from "module_10426" /* 10426 */;
import _mod10427 from "module_10427" /* 10427 */;
import _mod10428 from "module_10428" /* 10428 */;
import { Chrono } from "module_10303" /* 10303 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10421.default(), , , , ];
  new module_10421.default();
  items[1] = new module_10424.default();
  new module_10424.default();
  items[2] = new module_10426.default();
  new module_10426.default();
  items[3] = new module_10425.default();
  new module_10425.default();
  items[4] = new module_10423.default();
  new module_10423.default();
  items1 = [new module_10427.default(), ];
  new module_10427.default();
  items1[1] = new module_10428.default();
  new module_10428.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10345.default));
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
  const _default = new module_10420.default();
  unshift(_default);
  return tmp;
}
const module_10345 = fn(_mod10345);
const module_10420 = fn(_mod10420);
const module_10421 = fn(_mod10421);
const module_10423 = fn(_mod10423);
const module_10424 = fn(_mod10424);
const module_10425 = fn(_mod10425);
const module_10426 = fn(_mod10426);
const module_10427 = fn(_mod10427);
const module_10428 = fn(_mod10428);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10420.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10420.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10303").Chrono(createConfiguration());
const Chrono_export = require("module_10303").Chrono;

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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
