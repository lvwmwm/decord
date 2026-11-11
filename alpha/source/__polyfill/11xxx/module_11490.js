// Module ID: 11490
// Function ID: 11491
// Dependencies: [11406, 11364, 11371, 11373, 11481, 11482, 11484, 11485, 11486, 11487, 11488, 11489, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11490
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11481 from "module_11481" /* 11481 */;
import _mod11482 from "module_11482" /* 11482 */;
import _mod11484 from "module_11484" /* 11484 */;
import _mod11485 from "module_11485" /* 11485 */;
import _mod11486 from "module_11486" /* 11486 */;
import _mod11487 from "module_11487" /* 11487 */;
import _mod11488 from "module_11488" /* 11488 */;
import _mod11489 from "module_11489" /* 11489 */;
import { Chrono } from "module_11364" /* 11364 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11482.default(), , , , ];
  new module_11482.default();
  items[1] = new module_11485.default();
  new module_11485.default();
  items[2] = new module_11487.default();
  new module_11487.default();
  items[3] = new module_11486.default();
  new module_11486.default();
  items[4] = new module_11484.default();
  new module_11484.default();
  items1 = [new module_11488.default(), ];
  new module_11488.default();
  items1[1] = new module_11489.default();
  new module_11489.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11406.default));
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
  const _default = new module_11481.default();
  unshift(_default);
  return tmp;
}
const module_11406 = fn(_mod11406);
const module_11481 = fn(_mod11481);
const module_11482 = fn(_mod11482);
const module_11484 = fn(_mod11484);
const module_11485 = fn(_mod11485);
const module_11486 = fn(_mod11486);
const module_11487 = fn(_mod11487);
const module_11488 = fn(_mod11488);
const module_11489 = fn(_mod11489);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11481.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11481.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11364").Chrono(createConfiguration());
const Chrono_export = require("module_11364").Chrono;

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
