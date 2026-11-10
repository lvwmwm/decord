// Module ID: 10575
// Function ID: 10576
// Dependencies: [10490, 10448, 10455, 10457, 10576, 10559, 10561, 10562, 10563, 10564, 10577, 10578, 10488]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10575
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10559 from "module_10559" /* 10559 */;
import _mod10561 from "module_10561" /* 10561 */;
import _mod10562 from "module_10562" /* 10562 */;
import _mod10563 from "module_10563" /* 10563 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10577 from "module_10577" /* 10577 */;
import _mod10578 from "module_10578" /* 10578 */;
import { Chrono } from "module_10448" /* 10448 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10559.default(), , , , ];
  new module_10559.default();
  items[1] = new module_10562.default();
  new module_10562.default();
  items[2] = new module_10564.default();
  new module_10564.default();
  items[3] = new module_10563.default();
  new module_10563.default();
  items[4] = new module_10561.default();
  new module_10561.default();
  items1 = [new module_10577.default(), ];
  new module_10577.default();
  items1[1] = new module_10578.default();
  new module_10578.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10490.default));
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
  const _default = new module_10576.default();
  unshift(_default);
  return tmp;
}
const module_10490 = fn(_mod10490);
const module_10576 = fn(_mod10576);
const module_10559 = fn(_mod10559);
const module_10561 = fn(_mod10561);
const module_10562 = fn(_mod10562);
const module_10563 = fn(_mod10563);
const module_10564 = fn(_mod10564);
const module_10577 = fn(_mod10577);
const module_10578 = fn(_mod10578);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10576.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10576.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10448").Chrono(createConfiguration());
const Chrono_export = require("module_10448").Chrono;

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
