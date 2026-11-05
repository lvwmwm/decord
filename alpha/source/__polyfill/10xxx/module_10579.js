// Module ID: 10579
// Function ID: 10580
// Dependencies: [10580, 10582, 10583, 10584, 10585, 10586, 10587, 10507, 10514, 10516, 10588, 10589, 10553, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10579
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10553 from "module_10553" /* 10553 */;
import _mod10580 from "module_10580" /* 10580 */;
import _mod10582 from "module_10582" /* 10582 */;
import _mod10583 from "module_10583" /* 10583 */;
import _mod10584 from "module_10584" /* 10584 */;
import _mod10585 from "module_10585" /* 10585 */;
import _mod10586 from "module_10586" /* 10586 */;
import _mod10587 from "module_10587" /* 10587 */;
import _mod10588 from "module_10588" /* 10588 */;
import _mod10589 from "module_10589" /* 10589 */;
import { Chrono } from "module_10507" /* 10507 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10580.default(), , , , ];
  new module_10580.default();
  items[1] = new module_10584.default();
  new module_10584.default();
  items[2] = new module_10589.default();
  new module_10589.default();
  items[3] = new module_10585.default();
  new module_10585.default();
  items[4] = new module_10586.default();
  new module_10586.default();
  items1 = [new module_10588.default(), , ];
  new module_10588.default();
  items1[1] = new module_10587.default();
  new module_10587.default();
  items1[2] = new module_10582.default();
  new module_10582.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10553.default));
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
  const _default = new module_10583.default();
  unshift(_default);
  return tmp;
}
const module_10580 = fn(_mod10580);
const module_10582 = fn(_mod10582);
const module_10583 = fn(_mod10583);
const module_10584 = fn(_mod10584);
const module_10585 = fn(_mod10585);
const module_10586 = fn(_mod10586);
const module_10587 = fn(_mod10587);
const module_10588 = fn(_mod10588);
const module_10589 = fn(_mod10589);
const module_10553 = fn(_mod10553);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10583.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10507").Chrono(createConfiguration(true));
const Chrono_export = require("module_10507").Chrono;

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
