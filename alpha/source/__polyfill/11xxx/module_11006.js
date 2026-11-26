// Module ID: 11006
// Function ID: 11007
// Dependencies: [11007, 11009, 11011, 11012, 11013, 11014, 11015, 11016, 11017, 11018, 11019, 10875, 10882, 10884, 10908, 11020, 10915]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11006
import _mod10908 from "module_10908" /* 10908 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10915 */;
import _mod11007 from "module_11007" /* 11007 */;
import _mod11009 from "module_11009" /* 11009 */;
import _mod11011 from "module_11011" /* 11011 */;
import _mod11012 from "module_11012" /* 11012 */;
import _mod11013 from "module_11013" /* 11013 */;
import _mod11014 from "module_11014" /* 11014 */;
import _mod11015 from "module_11015" /* 11015 */;
import _mod11016 from "module_11016" /* 11016 */;
import _mod11017 from "module_11017" /* 11017 */;
import _mod11018 from "module_11018" /* 11018 */;
import _mod11019 from "module_11019" /* 11019 */;
import _mod11020 from "module_11020" /* 11020 */;
import { Chrono } from "module_10875" /* 10875 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10908.default(true), , , , , ];
  new module_10908.default(true);
  items[1] = new module_11007.default();
  new module_11007.default();
  items[2] = new module_11009.default();
  new module_11009.default();
  items[3] = new module_11018.default();
  new module_11018.default();
  items[4] = new module_11012.default(flag);
  new module_11012.default(flag);
  items[5] = new module_11013.default();
  new module_11013.default();
  items1 = [new module_11015.default(), ];
  new module_11015.default();
  items1[1] = new module_11014.default();
  new module_11014.default();
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
  const _default = new module_11016.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11017.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11011.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11019.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11020.default();
  unshift5(_default4);
  return tmp;
}
const module_11007 = fn(_mod11007);
const module_11009 = fn(_mod11009);
const module_11011 = fn(_mod11011);
const module_11012 = fn(_mod11012);
const module_11013 = fn(_mod11013);
const module_11014 = fn(_mod11014);
const module_11015 = fn(_mod11015);
const module_11016 = fn(_mod11016);
const module_11017 = fn(_mod11017);
const module_11018 = fn(_mod11018);
const module_11019 = fn(_mod11019);
const module_10908 = fn(_mod10908);
const module_11020 = fn(_mod11020);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11016.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11017.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11011.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11019.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11020.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10875").Chrono(createConfiguration(true));
const Chrono_export = require("module_10875").Chrono;

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
