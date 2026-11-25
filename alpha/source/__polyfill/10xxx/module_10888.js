// Module ID: 10888
// Function ID: 10889
// Dependencies: [10829, 10836, 10838, 10889, 10890, 10862, 10891, 10892, 10893, 10894, 10896, 10897, 10898, 10899, 10900, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10888
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10889 from "module_10889" /* 10889 */;
import _mod10890 from "module_10890" /* 10890 */;
import _mod10891 from "module_10891" /* 10891 */;
import _mod10892 from "module_10892" /* 10892 */;
import _mod10893 from "module_10893" /* 10893 */;
import _mod10894 from "module_10894" /* 10894 */;
import _mod10896 from "module_10896" /* 10896 */;
import _mod10897 from "module_10897" /* 10897 */;
import _mod10898 from "module_10898" /* 10898 */;
import _mod10899 from "module_10899" /* 10899 */;
import _mod10900 from "module_10900" /* 10900 */;
import { Chrono } from "module_10829" /* 10829 */;

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
  items = [new module_10862.default(flag2), , , , , , ];
  new module_10862.default(flag2);
  items[1] = new module_10897.default();
  new module_10897.default();
  items[2] = new module_10891.default();
  new module_10891.default();
  items[3] = new module_10896.default();
  new module_10896.default();
  items[4] = new module_10898.default();
  new module_10898.default();
  items[5] = new module_10899.default();
  new module_10899.default();
  items[6] = new module_10894.default();
  new module_10894.default();
  items1 = [new module_10892.default(), ];
  new module_10892.default();
  items1[1] = new module_10893.default();
  new module_10893.default();
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
  const _default = new module_10889.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10890.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10900.default();
  unshift3(_default2);
  return tmp;
}
const module_10889 = fn(_mod10889);
const module_10890 = fn(_mod10890);
const module_10862 = fn(_mod10862);
const module_10891 = fn(_mod10891);
const module_10892 = fn(_mod10892);
const module_10893 = fn(_mod10893);
const module_10894 = fn(_mod10894);
const module_10896 = fn(_mod10896);
const module_10897 = fn(_mod10897);
const module_10898 = fn(_mod10898);
const module_10899 = fn(_mod10899);
const module_10900 = fn(_mod10900);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10889.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10890.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10900.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10829").Chrono(createConfiguration(true));
const Chrono_export = require("module_10829").Chrono;

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
