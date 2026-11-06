// Module ID: 10605
// Function ID: 10606
// Dependencies: [10459, 10466, 10468, 10492, 10606, 10608, 10609, 10610, 10611, 10612, 10613, 10614, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10605
import _mod10492 from "module_10492" /* 10492 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10606 from "module_10606" /* 10606 */;
import _mod10608 from "module_10608" /* 10608 */;
import _mod10609 from "module_10609" /* 10609 */;
import _mod10610 from "module_10610" /* 10610 */;
import _mod10611 from "module_10611" /* 10611 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10613 from "module_10613" /* 10613 */;
import _mod10614 from "module_10614" /* 10614 */;
import { Chrono } from "module_10459" /* 10459 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10492.default(flag2), , , , ];
  new module_10492.default(flag2);
  items[1] = new module_10606.default();
  new module_10606.default();
  items[2] = new module_10608.default();
  new module_10608.default();
  items[3] = new module_10611.default();
  new module_10611.default();
  items[4] = new module_10614.default();
  new module_10614.default();
  items1 = [new module_10609.default(), ];
  new module_10609.default();
  items1[1] = new module_10610.default();
  new module_10610.default();
  return includeCommonConfiguration(obj, flag);
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const push = parsers.push;
  const _default = new module_10612.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10613.default();
  push2(_default1);
  return tmp;
}
const module_10492 = fn(_mod10492);
const module_10606 = fn(_mod10606);
const module_10608 = fn(_mod10608);
const module_10609 = fn(_mod10609);
const module_10610 = fn(_mod10610);
const module_10611 = fn(_mod10611);
const module_10612 = fn(_mod10612);
const module_10613 = fn(_mod10613);
const module_10614 = fn(_mod10614);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10612.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10613.default();
push2(_default1);
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
