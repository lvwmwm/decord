// Module ID: 11485
// Function ID: 11486
// Dependencies: [11400, 11358, 11365, 11367, 11486, 11469, 11471, 11472, 11473, 11474, 11487, 11488, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11485
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11469 from "module_11469" /* 11469 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11472 from "module_11472" /* 11472 */;
import _mod11473 from "module_11473" /* 11473 */;
import _mod11474 from "module_11474" /* 11474 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
import _mod11488 from "module_11488" /* 11488 */;
import { Chrono } from "module_11358" /* 11358 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11469.default(), , , , ];
  new module_11469.default();
  items[1] = new module_11472.default();
  new module_11472.default();
  items[2] = new module_11474.default();
  new module_11474.default();
  items[3] = new module_11473.default();
  new module_11473.default();
  items[4] = new module_11471.default();
  new module_11471.default();
  items1 = [new module_11487.default(), ];
  new module_11487.default();
  items1[1] = new module_11488.default();
  new module_11488.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11400.default));
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
  const _default = new module_11486.default();
  unshift(_default);
  return tmp;
}
const module_11400 = fn(_mod11400);
const module_11486 = fn(_mod11486);
const module_11469 = fn(_mod11469);
const module_11471 = fn(_mod11471);
const module_11472 = fn(_mod11472);
const module_11473 = fn(_mod11473);
const module_11474 = fn(_mod11474);
const module_11487 = fn(_mod11487);
const module_11488 = fn(_mod11488);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11486.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11486.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11358").Chrono(createConfiguration());
const Chrono_export = require("module_11358").Chrono;

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
