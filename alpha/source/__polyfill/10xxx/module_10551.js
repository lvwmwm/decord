// Module ID: 10551
// Function ID: 10552
// Dependencies: [10459, 10466, 10468, 10552, 10553, 10554, 10555, 10492, 10556, 10558, 10559, 10560, 10561, 10562, 10563, 10564, 10565, 10566, 10567, 10568, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10551
import _mod10492 from "module_10492" /* 10492 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10553 from "module_10553" /* 10553 */;
import _mod10554 from "module_10554" /* 10554 */;
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
import _mod10566 from "module_10566" /* 10566 */;
import _mod10567 from "module_10567" /* 10567 */;
import _mod10568 from "module_10568" /* 10568 */;

const require = globalThis.__r;

function createConfiguration(flag) {
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
  items = [new module_10492.default(flag2), , , , , , , , , ];
  new module_10492.default(flag2);
  items[1] = new module_10556.default();
  new module_10556.default();
  items[2] = new module_10559.default();
  new module_10559.default();
  items[3] = new module_10560.default();
  new module_10560.default();
  items[4] = new module_10558.default();
  new module_10558.default();
  items[5] = new module_10563.default();
  new module_10563.default();
  items[6] = new module_10561.default();
  new module_10561.default();
  items[7] = new module_10562.default(flag);
  new module_10562.default(flag);
  items[8] = new module_10567.default(flag);
  new module_10567.default(flag);
  items[9] = new module_10568.default(flag);
  new module_10568.default(flag);
  items1 = [new module_10553.default(), ];
  new module_10553.default();
  items1[1] = new module_10552.default();
  new module_10552.default();
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
  const _default = new module_10554.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10555.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10564.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10560.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10566.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10565.default();
  unshift6(_default5);
  return tmp;
}
const module_10552 = fn(_mod10552);
const module_10553 = fn(_mod10553);
const module_10554 = fn(_mod10554);
const module_10555 = fn(_mod10555);
const module_10492 = fn(_mod10492);
const module_10556 = fn(_mod10556);
const module_10558 = fn(_mod10558);
const module_10559 = fn(_mod10559);
const module_10560 = fn(_mod10560);
const module_10561 = fn(_mod10561);
const module_10562 = fn(_mod10562);
const module_10563 = fn(_mod10563);
const module_10564 = fn(_mod10564);
const module_10565 = fn(_mod10565);
const module_10566 = fn(_mod10566);
const module_10567 = fn(_mod10567);
const module_10568 = fn(_mod10568);
const chrono = new require("module_10459").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10459").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10459").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
