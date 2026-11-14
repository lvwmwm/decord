// Module ID: 11552
// Function ID: 11553
// Dependencies: [11467, 11425, 11432, 11434, 11553, 11536, 11538, 11539, 11540, 11541, 11554, 11555, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11552
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11536 from "module_11536" /* 11536 */;
import _mod11538 from "module_11538" /* 11538 */;
import _mod11539 from "module_11539" /* 11539 */;
import _mod11540 from "module_11540" /* 11540 */;
import _mod11541 from "module_11541" /* 11541 */;
import _mod11553 from "module_11553" /* 11553 */;
import _mod11554 from "module_11554" /* 11554 */;
import _mod11555 from "module_11555" /* 11555 */;
import { Chrono } from "module_11425" /* 11425 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11536.default(), , , , ];
  new module_11536.default();
  items[1] = new module_11539.default();
  new module_11539.default();
  items[2] = new module_11541.default();
  new module_11541.default();
  items[3] = new module_11540.default();
  new module_11540.default();
  items[4] = new module_11538.default();
  new module_11538.default();
  items1 = [new module_11554.default(), ];
  new module_11554.default();
  items1[1] = new module_11555.default();
  new module_11555.default();
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
  const _default = new module_11553.default();
  unshift(_default);
  return tmp;
}
const module_11467 = fn(_mod11467);
const module_11553 = fn(_mod11553);
const module_11536 = fn(_mod11536);
const module_11538 = fn(_mod11538);
const module_11539 = fn(_mod11539);
const module_11540 = fn(_mod11540);
const module_11541 = fn(_mod11541);
const module_11554 = fn(_mod11554);
const module_11555 = fn(_mod11555);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11553.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_11553.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
