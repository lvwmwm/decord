// Module ID: 10566
// Function ID: 10567
// Dependencies: [10507, 10514, 10516, 10567, 10568, 10540, 10569, 10570, 10571, 10572, 10574, 10575, 10576, 10577, 10578, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10566
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10567 from "module_10567" /* 10567 */;
import _mod10568 from "module_10568" /* 10568 */;
import _mod10569 from "module_10569" /* 10569 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10572 from "module_10572" /* 10572 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10575 from "module_10575" /* 10575 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10577 from "module_10577" /* 10577 */;
import _mod10578 from "module_10578" /* 10578 */;
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
  items = [new module_10540.default(flag2), , , , , , ];
  new module_10540.default(flag2);
  items[1] = new module_10575.default();
  new module_10575.default();
  items[2] = new module_10569.default();
  new module_10569.default();
  items[3] = new module_10574.default();
  new module_10574.default();
  items[4] = new module_10576.default();
  new module_10576.default();
  items[5] = new module_10577.default();
  new module_10577.default();
  items[6] = new module_10572.default();
  new module_10572.default();
  items1 = [new module_10570.default(), ];
  new module_10570.default();
  items1[1] = new module_10571.default();
  new module_10571.default();
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
  const _default = new module_10567.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10568.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10578.default();
  unshift3(_default2);
  return tmp;
}
const module_10567 = fn(_mod10567);
const module_10568 = fn(_mod10568);
const module_10540 = fn(_mod10540);
const module_10569 = fn(_mod10569);
const module_10570 = fn(_mod10570);
const module_10571 = fn(_mod10571);
const module_10572 = fn(_mod10572);
const module_10574 = fn(_mod10574);
const module_10575 = fn(_mod10575);
const module_10576 = fn(_mod10576);
const module_10577 = fn(_mod10577);
const module_10578 = fn(_mod10578);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10567.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10568.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10578.default();
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
