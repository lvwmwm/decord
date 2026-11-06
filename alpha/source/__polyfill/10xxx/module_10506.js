// Module ID: 10506
// Function ID: 10507
// Dependencies: [10459, 10466, 10468, 10492, 10504, 10507, 10508, 10510, 10511, 10512, 10513, 10514, 10515, 10516, 10517, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10506
import _mod10492 from "module_10492" /* 10492 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10507 from "module_10507" /* 10507 */;
import _mod10508 from "module_10508" /* 10508 */;
import _mod10510 from "module_10510" /* 10510 */;
import _mod10511 from "module_10511" /* 10511 */;
import _mod10512 from "module_10512" /* 10512 */;
import _mod10513 from "module_10513" /* 10513 */;
import _mod10514 from "module_10514" /* 10514 */;
import _mod10515 from "module_10515" /* 10515 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10517 from "module_10517" /* 10517 */;
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
  items = [new module_10504.default(), , , , , , ];
  new module_10504.default();
  items[1] = new module_10492.default(flag2);
  new module_10492.default(flag2);
  items[2] = new module_10507.default();
  new module_10507.default();
  items[3] = new module_10510.default();
  new module_10510.default();
  items[4] = new module_10515.default();
  new module_10515.default();
  items[5] = new module_10508.default();
  new module_10508.default();
  items[6] = new module_10517.default();
  new module_10517.default();
  items1 = [new module_10511.default(), ];
  new module_10511.default();
  items1[1] = new module_10512.default();
  new module_10512.default();
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
  const unshift = parsers.unshift;
  const _default = new module_10514.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10513.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10516.default();
  unshift3(_default2);
  return tmp;
}
const module_10492 = fn(_mod10492);
const module_10504 = fn(_mod10504);
const module_10507 = fn(_mod10507);
const module_10508 = fn(_mod10508);
const module_10510 = fn(_mod10510);
const module_10511 = fn(_mod10511);
const module_10512 = fn(_mod10512);
const module_10513 = fn(_mod10513);
const module_10514 = fn(_mod10514);
const module_10515 = fn(_mod10515);
const module_10516 = fn(_mod10516);
const module_10517 = fn(_mod10517);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10514.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10513.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10516.default();
unshift3(_default2);
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
