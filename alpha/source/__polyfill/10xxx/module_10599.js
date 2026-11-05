// Module ID: 10599
// Function ID: 10600
// Dependencies: [10507, 10514, 10516, 10600, 10601, 10602, 10603, 10540, 10604, 10606, 10607, 10608, 10609, 10610, 10611, 10612, 10613, 10614, 10615, 10616, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10599
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10600 from "module_10600" /* 10600 */;
import _mod10601 from "module_10601" /* 10601 */;
import _mod10602 from "module_10602" /* 10602 */;
import _mod10603 from "module_10603" /* 10603 */;
import _mod10604 from "module_10604" /* 10604 */;
import _mod10606 from "module_10606" /* 10606 */;
import _mod10607 from "module_10607" /* 10607 */;
import _mod10608 from "module_10608" /* 10608 */;
import _mod10609 from "module_10609" /* 10609 */;
import _mod10610 from "module_10610" /* 10610 */;
import _mod10611 from "module_10611" /* 10611 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10613 from "module_10613" /* 10613 */;
import _mod10614 from "module_10614" /* 10614 */;
import _mod10615 from "module_10615" /* 10615 */;
import _mod10616 from "module_10616" /* 10616 */;

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
  items = [new module_10540.default(flag2), , , , , , , , , ];
  new module_10540.default(flag2);
  items[1] = new module_10604.default();
  new module_10604.default();
  items[2] = new module_10607.default();
  new module_10607.default();
  items[3] = new module_10608.default();
  new module_10608.default();
  items[4] = new module_10606.default();
  new module_10606.default();
  items[5] = new module_10611.default();
  new module_10611.default();
  items[6] = new module_10609.default();
  new module_10609.default();
  items[7] = new module_10610.default(flag);
  new module_10610.default(flag);
  items[8] = new module_10615.default(flag);
  new module_10615.default(flag);
  items[9] = new module_10616.default(flag);
  new module_10616.default(flag);
  items1 = [new module_10601.default(), ];
  new module_10601.default();
  items1[1] = new module_10600.default();
  new module_10600.default();
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
  const _default = new module_10602.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10603.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10612.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10608.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10614.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10613.default();
  unshift6(_default5);
  return tmp;
}
const module_10600 = fn(_mod10600);
const module_10601 = fn(_mod10601);
const module_10602 = fn(_mod10602);
const module_10603 = fn(_mod10603);
const module_10540 = fn(_mod10540);
const module_10604 = fn(_mod10604);
const module_10606 = fn(_mod10606);
const module_10607 = fn(_mod10607);
const module_10608 = fn(_mod10608);
const module_10609 = fn(_mod10609);
const module_10610 = fn(_mod10610);
const module_10611 = fn(_mod10611);
const module_10612 = fn(_mod10612);
const module_10613 = fn(_mod10613);
const module_10614 = fn(_mod10614);
const module_10615 = fn(_mod10615);
const module_10616 = fn(_mod10616);
const chrono = new require("module_10507").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10507").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10507").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
