// Module ID: 10573
// Function ID: 10574
// Dependencies: [10574, 10576, 10577, 10578, 10579, 10580, 10581, 10501, 10508, 10510, 10582, 10583, 10547, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10573
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10547 from "module_10547" /* 10547 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10577 from "module_10577" /* 10577 */;
import _mod10578 from "module_10578" /* 10578 */;
import _mod10579 from "module_10579" /* 10579 */;
import _mod10580 from "module_10580" /* 10580 */;
import _mod10581 from "module_10581" /* 10581 */;
import _mod10582 from "module_10582" /* 10582 */;
import _mod10583 from "module_10583" /* 10583 */;
import { Chrono } from "module_10501" /* 10501 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10574.default(), , , , ];
  new module_10574.default();
  items[1] = new module_10578.default();
  new module_10578.default();
  items[2] = new module_10583.default();
  new module_10583.default();
  items[3] = new module_10579.default();
  new module_10579.default();
  items[4] = new module_10580.default();
  new module_10580.default();
  items1 = [new module_10582.default(), , ];
  new module_10582.default();
  items1[1] = new module_10581.default();
  new module_10581.default();
  items1[2] = new module_10576.default();
  new module_10576.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10547.default));
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
  const _default = new module_10577.default();
  unshift(_default);
  return tmp;
}
const module_10574 = fn(_mod10574);
const module_10576 = fn(_mod10576);
const module_10577 = fn(_mod10577);
const module_10578 = fn(_mod10578);
const module_10579 = fn(_mod10579);
const module_10580 = fn(_mod10580);
const module_10581 = fn(_mod10581);
const module_10582 = fn(_mod10582);
const module_10583 = fn(_mod10583);
const module_10547 = fn(_mod10547);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10577.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10501").Chrono(createConfiguration(true));
const Chrono_export = require("module_10501").Chrono;

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
