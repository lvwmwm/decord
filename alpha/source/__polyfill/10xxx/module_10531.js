// Module ID: 10531
// Function ID: 10532
// Dependencies: [10532, 10534, 10535, 10536, 10537, 10538, 10539, 10459, 10466, 10468, 10540, 10541, 10505, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10531
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10532 from "module_10532" /* 10532 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10535 from "module_10535" /* 10535 */;
import _mod10536 from "module_10536" /* 10536 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10538 from "module_10538" /* 10538 */;
import _mod10539 from "module_10539" /* 10539 */;
import _mod10540 from "module_10540" /* 10540 */;
import _mod10541 from "module_10541" /* 10541 */;
import { Chrono } from "module_10459" /* 10459 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10532.default(), , , , ];
  new module_10532.default();
  items[1] = new module_10536.default();
  new module_10536.default();
  items[2] = new module_10541.default();
  new module_10541.default();
  items[3] = new module_10537.default();
  new module_10537.default();
  items[4] = new module_10538.default();
  new module_10538.default();
  items1 = [new module_10540.default(), , ];
  new module_10540.default();
  items1[1] = new module_10539.default();
  new module_10539.default();
  items1[2] = new module_10534.default();
  new module_10534.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10505.default));
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
  const _default = new module_10535.default();
  unshift(_default);
  return tmp;
}
const module_10532 = fn(_mod10532);
const module_10534 = fn(_mod10534);
const module_10535 = fn(_mod10535);
const module_10536 = fn(_mod10536);
const module_10537 = fn(_mod10537);
const module_10538 = fn(_mod10538);
const module_10539 = fn(_mod10539);
const module_10540 = fn(_mod10540);
const module_10541 = fn(_mod10541);
const module_10505 = fn(_mod10505);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10535.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10459").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
