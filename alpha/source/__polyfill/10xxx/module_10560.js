// Module ID: 10560
// Function ID: 10561
// Dependencies: [10501, 10508, 10510, 10561, 10562, 10534, 10563, 10564, 10565, 10566, 10568, 10569, 10570, 10571, 10572, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10560
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10561 from "module_10561" /* 10561 */;
import _mod10562 from "module_10562" /* 10562 */;
import _mod10563 from "module_10563" /* 10563 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10565 from "module_10565" /* 10565 */;
import _mod10566 from "module_10566" /* 10566 */;
import _mod10568 from "module_10568" /* 10568 */;
import _mod10569 from "module_10569" /* 10569 */;
import _mod10570 from "module_10570" /* 10570 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10572 from "module_10572" /* 10572 */;
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
  items = [new module_10534.default(flag2), , , , , , ];
  new module_10534.default(flag2);
  items[1] = new module_10569.default();
  new module_10569.default();
  items[2] = new module_10563.default();
  new module_10563.default();
  items[3] = new module_10568.default();
  new module_10568.default();
  items[4] = new module_10570.default();
  new module_10570.default();
  items[5] = new module_10571.default();
  new module_10571.default();
  items[6] = new module_10566.default();
  new module_10566.default();
  items1 = [new module_10564.default(), ];
  new module_10564.default();
  items1[1] = new module_10565.default();
  new module_10565.default();
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
  const _default = new module_10561.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10562.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10572.default();
  unshift3(_default2);
  return tmp;
}
const module_10561 = fn(_mod10561);
const module_10562 = fn(_mod10562);
const module_10534 = fn(_mod10534);
const module_10563 = fn(_mod10563);
const module_10564 = fn(_mod10564);
const module_10565 = fn(_mod10565);
const module_10566 = fn(_mod10566);
const module_10568 = fn(_mod10568);
const module_10569 = fn(_mod10569);
const module_10570 = fn(_mod10570);
const module_10571 = fn(_mod10571);
const module_10572 = fn(_mod10572);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10561.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10562.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10572.default();
unshift3(_default2);
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
