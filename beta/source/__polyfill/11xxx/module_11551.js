// Module ID: 11551
// Function ID: 11552
// Dependencies: [11467, 11425, 11432, 11434, 11542, 11543, 11545, 11546, 11547, 11548, 11549, 11550, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11551
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11542 from "module_11542" /* 11542 */;
import _mod11543 from "module_11543" /* 11543 */;
import _mod11545 from "module_11545" /* 11545 */;
import _mod11546 from "module_11546" /* 11546 */;
import _mod11547 from "module_11547" /* 11547 */;
import _mod11548 from "module_11548" /* 11548 */;
import _mod11549 from "module_11549" /* 11549 */;
import _mod11550 from "module_11550" /* 11550 */;
import { Chrono } from "module_11425" /* 11425 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11543.default(), , , , ];
  new module_11543.default();
  items[1] = new module_11546.default();
  new module_11546.default();
  items[2] = new module_11548.default();
  new module_11548.default();
  items[3] = new module_11547.default();
  new module_11547.default();
  items[4] = new module_11545.default();
  new module_11545.default();
  items1 = [new module_11549.default(), ];
  new module_11549.default();
  items1[1] = new module_11550.default();
  new module_11550.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_11467.default));
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
  const _default = new module_11542.default();
  unshift(_default);
  return tmp;
}
const module_11467 = fn(_mod11467);
const module_11542 = fn(_mod11542);
const module_11543 = fn(_mod11543);
const module_11545 = fn(_mod11545);
const module_11546 = fn(_mod11546);
const module_11547 = fn(_mod11547);
const module_11548 = fn(_mod11548);
const module_11549 = fn(_mod11549);
const module_11550 = fn(_mod11550);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11542.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11542.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_11425").Chrono(createConfiguration());
const Chrono_export = require("module_11425").Chrono;

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
