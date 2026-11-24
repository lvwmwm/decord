// Module ID: 10789
// Function ID: 10790
// Dependencies: [10730, 10737, 10739, 10790, 10791, 10763, 10792, 10793, 10794, 10795, 10797, 10798, 10799, 10800, 10801, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10789
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10790 from "module_10790" /* 10790 */;
import _mod10791 from "module_10791" /* 10791 */;
import _mod10792 from "module_10792" /* 10792 */;
import _mod10793 from "module_10793" /* 10793 */;
import _mod10794 from "module_10794" /* 10794 */;
import _mod10795 from "module_10795" /* 10795 */;
import _mod10797 from "module_10797" /* 10797 */;
import _mod10798 from "module_10798" /* 10798 */;
import _mod10799 from "module_10799" /* 10799 */;
import _mod10800 from "module_10800" /* 10800 */;
import _mod10801 from "module_10801" /* 10801 */;
import { Chrono } from "module_10730" /* 10730 */;

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
  items = [new module_10763.default(flag2), , , , , , ];
  new module_10763.default(flag2);
  items[1] = new module_10798.default();
  new module_10798.default();
  items[2] = new module_10792.default();
  new module_10792.default();
  items[3] = new module_10797.default();
  new module_10797.default();
  items[4] = new module_10799.default();
  new module_10799.default();
  items[5] = new module_10800.default();
  new module_10800.default();
  items[6] = new module_10795.default();
  new module_10795.default();
  items1 = [new module_10793.default(), ];
  new module_10793.default();
  items1[1] = new module_10794.default();
  new module_10794.default();
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
  const _default = new module_10790.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10791.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10801.default();
  unshift3(_default2);
  return tmp;
}
const module_10790 = fn(_mod10790);
const module_10791 = fn(_mod10791);
const module_10763 = fn(_mod10763);
const module_10792 = fn(_mod10792);
const module_10793 = fn(_mod10793);
const module_10794 = fn(_mod10794);
const module_10795 = fn(_mod10795);
const module_10797 = fn(_mod10797);
const module_10798 = fn(_mod10798);
const module_10799 = fn(_mod10799);
const module_10800 = fn(_mod10800);
const module_10801 = fn(_mod10801);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10790.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10791.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10801.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10730").Chrono(createConfiguration(true));
const Chrono_export = require("module_10730").Chrono;

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
