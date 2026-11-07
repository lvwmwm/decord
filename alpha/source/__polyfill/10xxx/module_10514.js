// Module ID: 10514
// Function ID: 10515
// Dependencies: [10515, 10517, 10518, 10519, 10520, 10521, 10522, 10442, 10449, 10451, 10523, 10524, 10488, 10482]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10514
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10488 from "module_10488" /* 10488 */;
import _mod10515 from "module_10515" /* 10515 */;
import _mod10517 from "module_10517" /* 10517 */;
import _mod10518 from "module_10518" /* 10518 */;
import _mod10519 from "module_10519" /* 10519 */;
import _mod10520 from "module_10520" /* 10520 */;
import _mod10521 from "module_10521" /* 10521 */;
import _mod10522 from "module_10522" /* 10522 */;
import _mod10523 from "module_10523" /* 10523 */;
import _mod10524 from "module_10524" /* 10524 */;
import { Chrono } from "module_10442" /* 10442 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10515.default(), , , , ];
  new module_10515.default();
  items[1] = new module_10519.default();
  new module_10519.default();
  items[2] = new module_10524.default();
  new module_10524.default();
  items[3] = new module_10520.default();
  new module_10520.default();
  items[4] = new module_10521.default();
  new module_10521.default();
  items1 = [new module_10523.default(), , ];
  new module_10523.default();
  items1[1] = new module_10522.default();
  new module_10522.default();
  items1[2] = new module_10517.default();
  new module_10517.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10488.default));
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10518.default();
  unshift(_default);
  return tmp;
}
const module_10515 = fn(_mod10515);
const module_10517 = fn(_mod10517);
const module_10518 = fn(_mod10518);
const module_10519 = fn(_mod10519);
const module_10520 = fn(_mod10520);
const module_10521 = fn(_mod10521);
const module_10522 = fn(_mod10522);
const module_10523 = fn(_mod10523);
const module_10524 = fn(_mod10524);
const module_10488 = fn(_mod10488);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10518.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10442").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
