// Module ID: 10822
// Function ID: 10823
// Dependencies: [10730, 10737, 10739, 10823, 10824, 10825, 10826, 10763, 10827, 10829, 10830, 10831, 10832, 10833, 10834, 10835, 10836, 10837, 10838, 10839, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10822
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10823 from "module_10823" /* 10823 */;
import _mod10824 from "module_10824" /* 10824 */;
import _mod10825 from "module_10825" /* 10825 */;
import _mod10826 from "module_10826" /* 10826 */;
import _mod10827 from "module_10827" /* 10827 */;
import _mod10829 from "module_10829" /* 10829 */;
import _mod10830 from "module_10830" /* 10830 */;
import _mod10831 from "module_10831" /* 10831 */;
import _mod10832 from "module_10832" /* 10832 */;
import _mod10833 from "module_10833" /* 10833 */;
import _mod10834 from "module_10834" /* 10834 */;
import _mod10835 from "module_10835" /* 10835 */;
import _mod10836 from "module_10836" /* 10836 */;
import _mod10837 from "module_10837" /* 10837 */;
import _mod10838 from "module_10838" /* 10838 */;
import _mod10839 from "module_10839" /* 10839 */;

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
  items = [new module_10763.default(flag2), , , , , , , , , ];
  new module_10763.default(flag2);
  items[1] = new module_10827.default();
  new module_10827.default();
  items[2] = new module_10830.default();
  new module_10830.default();
  items[3] = new module_10831.default();
  new module_10831.default();
  items[4] = new module_10829.default();
  new module_10829.default();
  items[5] = new module_10834.default();
  new module_10834.default();
  items[6] = new module_10832.default();
  new module_10832.default();
  items[7] = new module_10833.default(flag);
  new module_10833.default(flag);
  items[8] = new module_10838.default(flag);
  new module_10838.default(flag);
  items[9] = new module_10839.default(flag);
  new module_10839.default(flag);
  items1 = [new module_10824.default(), ];
  new module_10824.default();
  items1[1] = new module_10823.default();
  new module_10823.default();
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
  const _default = new module_10825.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10826.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10835.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10831.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10837.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10836.default();
  unshift6(_default5);
  return tmp;
}
const module_10823 = fn(_mod10823);
const module_10824 = fn(_mod10824);
const module_10825 = fn(_mod10825);
const module_10826 = fn(_mod10826);
const module_10763 = fn(_mod10763);
const module_10827 = fn(_mod10827);
const module_10829 = fn(_mod10829);
const module_10830 = fn(_mod10830);
const module_10831 = fn(_mod10831);
const module_10832 = fn(_mod10832);
const module_10833 = fn(_mod10833);
const module_10834 = fn(_mod10834);
const module_10835 = fn(_mod10835);
const module_10836 = fn(_mod10836);
const module_10837 = fn(_mod10837);
const module_10838 = fn(_mod10838);
const module_10839 = fn(_mod10839);
const chrono = new require("module_10730").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10730").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10730").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
