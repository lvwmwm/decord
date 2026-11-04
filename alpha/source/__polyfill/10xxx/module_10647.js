// Module ID: 10647
// Function ID: 10648
// Dependencies: [10501, 10508, 10510, 10534, 10648, 10650, 10651, 10652, 10653, 10654, 10655, 10656, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10647
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10648 from "module_10648" /* 10648 */;
import _mod10650 from "module_10650" /* 10650 */;
import _mod10651 from "module_10651" /* 10651 */;
import _mod10652 from "module_10652" /* 10652 */;
import _mod10653 from "module_10653" /* 10653 */;
import _mod10654 from "module_10654" /* 10654 */;
import _mod10655 from "module_10655" /* 10655 */;
import _mod10656 from "module_10656" /* 10656 */;
import { Chrono } from "module_10501" /* 10501 */;

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
  items = [new module_10534.default(flag2), , , , ];
  new module_10534.default(flag2);
  items[1] = new module_10648.default();
  new module_10648.default();
  items[2] = new module_10650.default();
  new module_10650.default();
  items[3] = new module_10653.default();
  new module_10653.default();
  items[4] = new module_10656.default();
  new module_10656.default();
  items1 = [new module_10651.default(), ];
  new module_10651.default();
  items1[1] = new module_10652.default();
  new module_10652.default();
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
  const _default = new module_10654.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10655.default();
  push2(_default1);
  return tmp;
}
const module_10534 = fn(_mod10534);
const module_10648 = fn(_mod10648);
const module_10650 = fn(_mod10650);
const module_10651 = fn(_mod10651);
const module_10652 = fn(_mod10652);
const module_10653 = fn(_mod10653);
const module_10654 = fn(_mod10654);
const module_10655 = fn(_mod10655);
const module_10656 = fn(_mod10656);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10654.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10655.default();
push2(_default1);
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
