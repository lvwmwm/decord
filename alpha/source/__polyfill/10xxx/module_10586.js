// Module ID: 10586
// Function ID: 10587
// Dependencies: [10501, 10459, 10466, 10468, 10587, 10570, 10572, 10573, 10574, 10575, 10588, 10589, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10586
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10572 from "module_10572" /* 10572 */;
import _mod10573 from "module_10573" /* 10573 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10575 from "module_10575" /* 10575 */;
import _mod10587 from "module_10587" /* 10587 */;
import _mod10588 from "module_10588" /* 10588 */;
import _mod10589 from "module_10589" /* 10589 */;
import { Chrono } from "module_10459" /* 10459 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10570.default(), , , , ];
  new module_10570.default();
  items[1] = new module_10573.default();
  new module_10573.default();
  items[2] = new module_10575.default();
  new module_10575.default();
  items[3] = new module_10574.default();
  new module_10574.default();
  items[4] = new module_10572.default();
  new module_10572.default();
  items1 = [new module_10588.default(), ];
  new module_10588.default();
  items1[1] = new module_10589.default();
  new module_10589.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10501.default));
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
  const _default = new module_10587.default();
  unshift(_default);
  return tmp;
}
const module_10501 = fn(_mod10501);
const module_10587 = fn(_mod10587);
const module_10570 = fn(_mod10570);
const module_10572 = fn(_mod10572);
const module_10573 = fn(_mod10573);
const module_10574 = fn(_mod10574);
const module_10575 = fn(_mod10575);
const module_10588 = fn(_mod10588);
const module_10589 = fn(_mod10589);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10587.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10587.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10459").Chrono(createConfiguration());
const Chrono_export = require("module_10459").Chrono;

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
