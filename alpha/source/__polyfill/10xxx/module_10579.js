// Module ID: 10579
// Function ID: 10580
// Dependencies: [10495, 10453, 10460, 10462, 10570, 10571, 10573, 10574, 10575, 10576, 10577, 10578, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10579
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10573 from "module_10573" /* 10573 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10575 from "module_10575" /* 10575 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10577 from "module_10577" /* 10577 */;
import _mod10578 from "module_10578" /* 10578 */;
import { Chrono } from "module_10453" /* 10453 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10571.default(), , , , ];
  new module_10571.default();
  items[1] = new module_10574.default();
  new module_10574.default();
  items[2] = new module_10576.default();
  new module_10576.default();
  items[3] = new module_10575.default();
  new module_10575.default();
  items[4] = new module_10573.default();
  new module_10573.default();
  items1 = [new module_10577.default(), ];
  new module_10577.default();
  items1[1] = new module_10578.default();
  new module_10578.default();
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
  const _default = new module_10570.default();
  unshift(_default);
  return tmp;
}
const module_10495 = fn(_mod10495);
const module_10570 = fn(_mod10570);
const module_10571 = fn(_mod10571);
const module_10573 = fn(_mod10573);
const module_10574 = fn(_mod10574);
const module_10575 = fn(_mod10575);
const module_10576 = fn(_mod10576);
const module_10577 = fn(_mod10577);
const module_10578 = fn(_mod10578);
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
