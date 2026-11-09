// Module ID: 10569
// Function ID: 10570
// Dependencies: [10484, 10442, 10449, 10451, 10570, 10553, 10555, 10556, 10557, 10558, 10571, 10572, 10482]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10569
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10484 from "module_10484" /* 10484 */;
import _mod10553 from "module_10553" /* 10553 */;
import _mod10555 from "module_10555" /* 10555 */;
import _mod10556 from "module_10556" /* 10556 */;
import _mod10557 from "module_10557" /* 10557 */;
import _mod10558 from "module_10558" /* 10558 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10572 from "module_10572" /* 10572 */;
import { Chrono } from "module_10442" /* 10442 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10553.default(), , , , ];
  new module_10553.default();
  items[1] = new module_10556.default();
  new module_10556.default();
  items[2] = new module_10558.default();
  new module_10558.default();
  items[3] = new module_10557.default();
  new module_10557.default();
  items[4] = new module_10555.default();
  new module_10555.default();
  items1 = [new module_10571.default(), ];
  new module_10571.default();
  items1[1] = new module_10572.default();
  new module_10572.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10484.default));
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
  const _default = new module_10570.default();
  unshift(_default);
  return tmp;
}
const module_10484 = fn(_mod10484);
const module_10570 = fn(_mod10570);
const module_10553 = fn(_mod10553);
const module_10555 = fn(_mod10555);
const module_10556 = fn(_mod10556);
const module_10557 = fn(_mod10557);
const module_10558 = fn(_mod10558);
const module_10571 = fn(_mod10571);
const module_10572 = fn(_mod10572);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10570.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10570.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10442").Chrono(createConfiguration());
const Chrono_export = require("module_10442").Chrono;

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
