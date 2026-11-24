// Module ID: 10876
// Function ID: 10877
// Dependencies: [10730, 10737, 10739, 10763, 10877, 10879, 10880, 10881, 10882, 10883, 10884, 10885, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10876
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10877 from "module_10877" /* 10877 */;
import _mod10879 from "module_10879" /* 10879 */;
import _mod10880 from "module_10880" /* 10880 */;
import _mod10881 from "module_10881" /* 10881 */;
import _mod10882 from "module_10882" /* 10882 */;
import _mod10883 from "module_10883" /* 10883 */;
import _mod10884 from "module_10884" /* 10884 */;
import _mod10885 from "module_10885" /* 10885 */;
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
  items = [new module_10763.default(flag2), , , , ];
  new module_10763.default(flag2);
  items[1] = new module_10877.default();
  new module_10877.default();
  items[2] = new module_10879.default();
  new module_10879.default();
  items[3] = new module_10882.default();
  new module_10882.default();
  items[4] = new module_10885.default();
  new module_10885.default();
  items1 = [new module_10880.default(), ];
  new module_10880.default();
  items1[1] = new module_10881.default();
  new module_10881.default();
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
  const _default = new module_10883.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10884.default();
  push2(_default1);
  return tmp;
}
const module_10763 = fn(_mod10763);
const module_10877 = fn(_mod10877);
const module_10879 = fn(_mod10879);
const module_10880 = fn(_mod10880);
const module_10881 = fn(_mod10881);
const module_10882 = fn(_mod10882);
const module_10883 = fn(_mod10883);
const module_10884 = fn(_mod10884);
const module_10885 = fn(_mod10885);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10883.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10884.default();
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
