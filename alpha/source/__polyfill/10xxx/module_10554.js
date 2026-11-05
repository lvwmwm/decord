// Module ID: 10554
// Function ID: 10555
// Dependencies: [10507, 10514, 10516, 10540, 10552, 10555, 10556, 10558, 10559, 10560, 10561, 10562, 10563, 10564, 10565, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10554
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10555 from "module_10555" /* 10555 */;
import _mod10556 from "module_10556" /* 10556 */;
import _mod10558 from "module_10558" /* 10558 */;
import _mod10559 from "module_10559" /* 10559 */;
import _mod10560 from "module_10560" /* 10560 */;
import _mod10561 from "module_10561" /* 10561 */;
import _mod10562 from "module_10562" /* 10562 */;
import _mod10563 from "module_10563" /* 10563 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10565 from "module_10565" /* 10565 */;
import { Chrono } from "module_10507" /* 10507 */;

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
  items = [new module_10552.default(), , , , , , ];
  new module_10552.default();
  items[1] = new module_10540.default(flag2);
  new module_10540.default(flag2);
  items[2] = new module_10555.default();
  new module_10555.default();
  items[3] = new module_10558.default();
  new module_10558.default();
  items[4] = new module_10563.default();
  new module_10563.default();
  items[5] = new module_10556.default();
  new module_10556.default();
  items[6] = new module_10565.default();
  new module_10565.default();
  items1 = [new module_10559.default(), ];
  new module_10559.default();
  items1[1] = new module_10560.default();
  new module_10560.default();
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
  const _default = new module_10562.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10561.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10564.default();
  unshift3(_default2);
  return tmp;
}
const module_10540 = fn(_mod10540);
const module_10552 = fn(_mod10552);
const module_10555 = fn(_mod10555);
const module_10556 = fn(_mod10556);
const module_10558 = fn(_mod10558);
const module_10559 = fn(_mod10559);
const module_10560 = fn(_mod10560);
const module_10561 = fn(_mod10561);
const module_10562 = fn(_mod10562);
const module_10563 = fn(_mod10563);
const module_10564 = fn(_mod10564);
const module_10565 = fn(_mod10565);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10562.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10561.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10564.default();
unshift3(_default2);
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
