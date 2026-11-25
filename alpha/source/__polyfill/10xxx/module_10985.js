// Module ID: 10985
// Function ID: 10986
// Dependencies: [10986, 10988, 10990, 10991, 10992, 10993, 10994, 10995, 10996, 10997, 10998, 10829, 10836, 10838, 10862, 10999, 10874, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10985
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10874 from "module_10874" /* 10874 */;
import _mod10986 from "module_10986" /* 10986 */;
import _mod10988 from "module_10988" /* 10988 */;
import _mod10990 from "module_10990" /* 10990 */;
import _mod10991 from "module_10991" /* 10991 */;
import _mod10992 from "module_10992" /* 10992 */;
import _mod10993 from "module_10993" /* 10993 */;
import _mod10994 from "module_10994" /* 10994 */;
import _mod10995 from "module_10995" /* 10995 */;
import _mod10996 from "module_10996" /* 10996 */;
import _mod10997 from "module_10997" /* 10997 */;
import _mod10998 from "module_10998" /* 10998 */;
import _mod10999 from "module_10999" /* 10999 */;
import { Chrono } from "module_10829" /* 10829 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10874.default(), , , , , , ];
  new module_10874.default();
  items[1] = new module_10862.default(true);
  new module_10862.default(true);
  items[2] = new module_10986.default();
  new module_10986.default();
  items[3] = new module_10988.default();
  new module_10988.default();
  items[4] = new module_10997.default();
  new module_10997.default();
  items[5] = new module_10991.default(flag);
  new module_10991.default(flag);
  items[6] = new module_10992.default();
  new module_10992.default();
  items1 = [new module_10994.default(), ];
  new module_10994.default();
  items1[1] = new module_10993.default();
  new module_10993.default();
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
  const _default = new module_10995.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10996.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10990.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10998.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10999.default();
  unshift5(_default4);
  return tmp;
}
const module_10986 = fn(_mod10986);
const module_10988 = fn(_mod10988);
const module_10990 = fn(_mod10990);
const module_10991 = fn(_mod10991);
const module_10992 = fn(_mod10992);
const module_10993 = fn(_mod10993);
const module_10994 = fn(_mod10994);
const module_10995 = fn(_mod10995);
const module_10996 = fn(_mod10996);
const module_10997 = fn(_mod10997);
const module_10998 = fn(_mod10998);
const module_10862 = fn(_mod10862);
const module_10999 = fn(_mod10999);
const module_10874 = fn(_mod10874);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10995.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10996.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10990.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10998.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10999.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10829").Chrono(createConfiguration(true));
const Chrono_export = require("module_10829").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
