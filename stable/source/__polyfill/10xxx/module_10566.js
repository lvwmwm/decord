// Module ID: 10566
// Function ID: 10567
// Dependencies: [10474, 10481, 10483, 10567, 10568, 10569, 10570, 10507, 10571, 10573, 10574, 10575, 10576, 10577, 10578, 10579, 10580, 10581, 10582, 10583, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10566
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10567 from "module_10567" /* 10567 */;
import _mod10568 from "module_10568" /* 10568 */;
import _mod10569 from "module_10569" /* 10569 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10573 from "module_10573" /* 10573 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10575 from "module_10575" /* 10575 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10577 from "module_10577" /* 10577 */;
import _mod10578 from "module_10578" /* 10578 */;
import _mod10579 from "module_10579" /* 10579 */;
import _mod10580 from "module_10580" /* 10580 */;
import _mod10581 from "module_10581" /* 10581 */;
import _mod10582 from "module_10582" /* 10582 */;
import _mod10583 from "module_10583" /* 10583 */;

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
  items = [new module_10507.default(flag2), , , , , , , , , ];
  new module_10507.default(flag2);
  items[1] = new module_10571.default();
  new module_10571.default();
  items[2] = new module_10574.default();
  new module_10574.default();
  items[3] = new module_10575.default();
  new module_10575.default();
  items[4] = new module_10573.default();
  new module_10573.default();
  items[5] = new module_10578.default();
  new module_10578.default();
  items[6] = new module_10576.default();
  new module_10576.default();
  items[7] = new module_10577.default(flag);
  new module_10577.default(flag);
  items[8] = new module_10582.default(flag);
  new module_10582.default(flag);
  items[9] = new module_10583.default(flag);
  new module_10583.default(flag);
  items1 = [new module_10568.default(), ];
  new module_10568.default();
  items1[1] = new module_10567.default();
  new module_10567.default();
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
  const _default = new module_10569.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10570.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10579.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10575.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10581.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10580.default();
  unshift6(_default5);
  return tmp;
}
const module_10567 = fn(_mod10567);
const module_10568 = fn(_mod10568);
const module_10569 = fn(_mod10569);
const module_10570 = fn(_mod10570);
const module_10507 = fn(_mod10507);
const module_10571 = fn(_mod10571);
const module_10573 = fn(_mod10573);
const module_10574 = fn(_mod10574);
const module_10575 = fn(_mod10575);
const module_10576 = fn(_mod10576);
const module_10577 = fn(_mod10577);
const module_10578 = fn(_mod10578);
const module_10579 = fn(_mod10579);
const module_10580 = fn(_mod10580);
const module_10581 = fn(_mod10581);
const module_10582 = fn(_mod10582);
const module_10583 = fn(_mod10583);
const chrono = new require("module_10474").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10474").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10474").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
