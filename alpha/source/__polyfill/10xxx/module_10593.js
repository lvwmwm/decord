// Module ID: 10593
// Function ID: 10594
// Dependencies: [10501, 10508, 10510, 10594, 10595, 10596, 10597, 10534, 10598, 10600, 10601, 10602, 10603, 10604, 10605, 10606, 10607, 10608, 10609, 10610, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10593
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10594 from "module_10594" /* 10594 */;
import _mod10595 from "module_10595" /* 10595 */;
import _mod10596 from "module_10596" /* 10596 */;
import _mod10597 from "module_10597" /* 10597 */;
import _mod10598 from "module_10598" /* 10598 */;
import _mod10600 from "module_10600" /* 10600 */;
import _mod10601 from "module_10601" /* 10601 */;
import _mod10602 from "module_10602" /* 10602 */;
import _mod10603 from "module_10603" /* 10603 */;
import _mod10604 from "module_10604" /* 10604 */;
import _mod10605 from "module_10605" /* 10605 */;
import _mod10606 from "module_10606" /* 10606 */;
import _mod10607 from "module_10607" /* 10607 */;
import _mod10608 from "module_10608" /* 10608 */;
import _mod10609 from "module_10609" /* 10609 */;
import _mod10610 from "module_10610" /* 10610 */;

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
  items = [new module_10534.default(flag2), , , , , , , , , ];
  new module_10534.default(flag2);
  items[1] = new module_10598.default();
  new module_10598.default();
  items[2] = new module_10601.default();
  new module_10601.default();
  items[3] = new module_10602.default();
  new module_10602.default();
  items[4] = new module_10600.default();
  new module_10600.default();
  items[5] = new module_10605.default();
  new module_10605.default();
  items[6] = new module_10603.default();
  new module_10603.default();
  items[7] = new module_10604.default(flag);
  new module_10604.default(flag);
  items[8] = new module_10609.default(flag);
  new module_10609.default(flag);
  items[9] = new module_10610.default(flag);
  new module_10610.default(flag);
  items1 = [new module_10595.default(), ];
  new module_10595.default();
  items1[1] = new module_10594.default();
  new module_10594.default();
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
  const _default = new module_10596.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10597.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10606.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10602.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10608.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10607.default();
  unshift6(_default5);
  return tmp;
}
const module_10594 = fn(_mod10594);
const module_10595 = fn(_mod10595);
const module_10596 = fn(_mod10596);
const module_10597 = fn(_mod10597);
const module_10534 = fn(_mod10534);
const module_10598 = fn(_mod10598);
const module_10600 = fn(_mod10600);
const module_10601 = fn(_mod10601);
const module_10602 = fn(_mod10602);
const module_10603 = fn(_mod10603);
const module_10604 = fn(_mod10604);
const module_10605 = fn(_mod10605);
const module_10606 = fn(_mod10606);
const module_10607 = fn(_mod10607);
const module_10608 = fn(_mod10608);
const module_10609 = fn(_mod10609);
const module_10610 = fn(_mod10610);
const chrono = new require("module_10501").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10501").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10501").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
