// Module ID: 10574
// Function ID: 10575
// Dependencies: [10490, 10448, 10455, 10457, 10565, 10566, 10568, 10569, 10570, 10571, 10572, 10573, 10488]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10574
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10565 from "module_10565" /* 10565 */;
import _mod10566 from "module_10566" /* 10566 */;
import _mod10568 from "module_10568" /* 10568 */;
import _mod10569 from "module_10569" /* 10569 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10572 from "module_10572" /* 10572 */;
import _mod10573 from "module_10573" /* 10573 */;
import { Chrono } from "module_10448" /* 10448 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10566.default(), , , , ];
  new module_10566.default();
  items[1] = new module_10569.default();
  new module_10569.default();
  items[2] = new module_10571.default();
  new module_10571.default();
  items[3] = new module_10570.default();
  new module_10570.default();
  items[4] = new module_10568.default();
  new module_10568.default();
  items1 = [new module_10572.default(), ];
  new module_10572.default();
  items1[1] = new module_10573.default();
  new module_10573.default();
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
  const _default = new module_10565.default();
  unshift(_default);
  return tmp;
}
const module_10490 = fn(_mod10490);
const module_10565 = fn(_mod10565);
const module_10566 = fn(_mod10566);
const module_10568 = fn(_mod10568);
const module_10569 = fn(_mod10569);
const module_10570 = fn(_mod10570);
const module_10571 = fn(_mod10571);
const module_10572 = fn(_mod10572);
const module_10573 = fn(_mod10573);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10565.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10565.default();
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
