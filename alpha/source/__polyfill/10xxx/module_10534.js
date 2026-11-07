// Module ID: 10534
// Function ID: 10535
// Dependencies: [10442, 10449, 10451, 10535, 10536, 10537, 10538, 10475, 10539, 10541, 10542, 10543, 10544, 10545, 10546, 10547, 10548, 10549, 10550, 10551, 10482]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10534
import _mod10475 from "module_10475" /* 10475 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10535 from "module_10535" /* 10535 */;
import _mod10536 from "module_10536" /* 10536 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10538 from "module_10538" /* 10538 */;
import _mod10539 from "module_10539" /* 10539 */;
import _mod10541 from "module_10541" /* 10541 */;
import _mod10542 from "module_10542" /* 10542 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10544 from "module_10544" /* 10544 */;
import _mod10545 from "module_10545" /* 10545 */;
import _mod10546 from "module_10546" /* 10546 */;
import _mod10547 from "module_10547" /* 10547 */;
import _mod10548 from "module_10548" /* 10548 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10550 from "module_10550" /* 10550 */;
import _mod10551 from "module_10551" /* 10551 */;

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
  items = [new module_10475.default(flag2), , , , , , , , , ];
  new module_10475.default(flag2);
  items[1] = new module_10539.default();
  new module_10539.default();
  items[2] = new module_10542.default();
  new module_10542.default();
  items[3] = new module_10543.default();
  new module_10543.default();
  items[4] = new module_10541.default();
  new module_10541.default();
  items[5] = new module_10546.default();
  new module_10546.default();
  items[6] = new module_10544.default();
  new module_10544.default();
  items[7] = new module_10545.default(flag);
  new module_10545.default(flag);
  items[8] = new module_10550.default(flag);
  new module_10550.default(flag);
  items[9] = new module_10551.default(flag);
  new module_10551.default(flag);
  items1 = [new module_10536.default(), ];
  new module_10536.default();
  items1[1] = new module_10535.default();
  new module_10535.default();
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
  const _default = new module_10537.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10538.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10547.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10543.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10549.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10548.default();
  unshift6(_default5);
  return tmp;
}
const module_10535 = fn(_mod10535);
const module_10536 = fn(_mod10536);
const module_10537 = fn(_mod10537);
const module_10538 = fn(_mod10538);
const module_10475 = fn(_mod10475);
const module_10539 = fn(_mod10539);
const module_10541 = fn(_mod10541);
const module_10542 = fn(_mod10542);
const module_10543 = fn(_mod10543);
const module_10544 = fn(_mod10544);
const module_10545 = fn(_mod10545);
const module_10546 = fn(_mod10546);
const module_10547 = fn(_mod10547);
const module_10548 = fn(_mod10548);
const module_10549 = fn(_mod10549);
const module_10550 = fn(_mod10550);
const module_10551 = fn(_mod10551);
const chrono = new require("module_10442").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10442").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10442").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
