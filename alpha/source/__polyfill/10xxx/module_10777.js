// Module ID: 10777
// Function ID: 10778
// Dependencies: [10730, 10737, 10739, 10763, 10775, 10778, 10779, 10781, 10782, 10783, 10784, 10785, 10786, 10787, 10788, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10777
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10775 from "module_10775" /* 10775 */;
import _mod10778 from "module_10778" /* 10778 */;
import _mod10779 from "module_10779" /* 10779 */;
import _mod10781 from "module_10781" /* 10781 */;
import _mod10782 from "module_10782" /* 10782 */;
import _mod10783 from "module_10783" /* 10783 */;
import _mod10784 from "module_10784" /* 10784 */;
import _mod10785 from "module_10785" /* 10785 */;
import _mod10786 from "module_10786" /* 10786 */;
import _mod10787 from "module_10787" /* 10787 */;
import _mod10788 from "module_10788" /* 10788 */;
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
  items = [new module_10775.default(), , , , , , ];
  new module_10775.default();
  items[1] = new module_10763.default(flag2);
  new module_10763.default(flag2);
  items[2] = new module_10778.default();
  new module_10778.default();
  items[3] = new module_10781.default();
  new module_10781.default();
  items[4] = new module_10786.default();
  new module_10786.default();
  items[5] = new module_10779.default();
  new module_10779.default();
  items[6] = new module_10788.default();
  new module_10788.default();
  items1 = [new module_10782.default(), ];
  new module_10782.default();
  items1[1] = new module_10783.default();
  new module_10783.default();
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
  const _default = new module_10785.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10784.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10787.default();
  unshift3(_default2);
  return tmp;
}
const module_10763 = fn(_mod10763);
const module_10775 = fn(_mod10775);
const module_10778 = fn(_mod10778);
const module_10779 = fn(_mod10779);
const module_10781 = fn(_mod10781);
const module_10782 = fn(_mod10782);
const module_10783 = fn(_mod10783);
const module_10784 = fn(_mod10784);
const module_10785 = fn(_mod10785);
const module_10786 = fn(_mod10786);
const module_10787 = fn(_mod10787);
const module_10788 = fn(_mod10788);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10785.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10784.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10787.default();
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
