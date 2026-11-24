// Module ID: 10813
// Function ID: 10814
// Dependencies: [10730, 10737, 10739, 10763, 10814, 10816, 10817, 10818, 10819, 10820, 10821, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10813
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10814 from "module_10814" /* 10814 */;
import _mod10816 from "module_10816" /* 10816 */;
import _mod10817 from "module_10817" /* 10817 */;
import _mod10818 from "module_10818" /* 10818 */;
import _mod10819 from "module_10819" /* 10819 */;
import _mod10820 from "module_10820" /* 10820 */;
import _mod10821 from "module_10821" /* 10821 */;
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
  items = [new module_10763.default(flag2), , , ];
  new module_10763.default(flag2);
  items[1] = new module_10814.default();
  new module_10814.default();
  items[2] = new module_10816.default();
  new module_10816.default();
  items[3] = new module_10819.default();
  new module_10819.default();
  items1 = [new module_10817.default(), ];
  new module_10817.default();
  items1[1] = new module_10818.default();
  new module_10818.default();
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
  const push = parsers.push;
  const _default = new module_10820.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10821.default();
  push2(_default1);
  return tmp;
}
const module_10763 = fn(_mod10763);
const module_10814 = fn(_mod10814);
const module_10816 = fn(_mod10816);
const module_10817 = fn(_mod10817);
const module_10818 = fn(_mod10818);
const module_10819 = fn(_mod10819);
const module_10820 = fn(_mod10820);
const module_10821 = fn(_mod10821);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10820.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10821.default();
push2(_default1);
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
