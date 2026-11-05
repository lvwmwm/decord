// Module ID: 10638
// Function ID: 10639
// Dependencies: [10639, 10641, 10643, 10644, 10645, 10646, 10647, 10648, 10649, 10650, 10651, 10507, 10514, 10516, 10540, 10652, 10547]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10638
import _mod10540 from "module_10540" /* 10540 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10547 */;
import _mod10639 from "module_10639" /* 10639 */;
import _mod10641 from "module_10641" /* 10641 */;
import _mod10643 from "module_10643" /* 10643 */;
import _mod10644 from "module_10644" /* 10644 */;
import _mod10645 from "module_10645" /* 10645 */;
import _mod10646 from "module_10646" /* 10646 */;
import _mod10647 from "module_10647" /* 10647 */;
import _mod10648 from "module_10648" /* 10648 */;
import _mod10649 from "module_10649" /* 10649 */;
import _mod10650 from "module_10650" /* 10650 */;
import _mod10651 from "module_10651" /* 10651 */;
import _mod10652 from "module_10652" /* 10652 */;
import { Chrono } from "module_10507" /* 10507 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10540.default(true), , , , , ];
  new module_10540.default(true);
  items[1] = new module_10639.default();
  new module_10639.default();
  items[2] = new module_10641.default();
  new module_10641.default();
  items[3] = new module_10650.default();
  new module_10650.default();
  items[4] = new module_10644.default(flag);
  new module_10644.default(flag);
  items[5] = new module_10645.default();
  new module_10645.default();
  items1 = [new module_10647.default(), ];
  new module_10647.default();
  items1[1] = new module_10646.default();
  new module_10646.default();
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10648.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10649.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10643.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10651.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10652.default();
  unshift5(_default4);
  return tmp;
}
const module_10639 = fn(_mod10639);
const module_10641 = fn(_mod10641);
const module_10643 = fn(_mod10643);
const module_10644 = fn(_mod10644);
const module_10645 = fn(_mod10645);
const module_10646 = fn(_mod10646);
const module_10647 = fn(_mod10647);
const module_10648 = fn(_mod10648);
const module_10649 = fn(_mod10649);
const module_10650 = fn(_mod10650);
const module_10651 = fn(_mod10651);
const module_10540 = fn(_mod10540);
const module_10652 = fn(_mod10652);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10648.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10649.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10643.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10651.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10652.default();
unshift5(_default4);
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
