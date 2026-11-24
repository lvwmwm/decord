// Module ID: 10886
// Function ID: 10887
// Dependencies: [10887, 10889, 10891, 10892, 10893, 10894, 10895, 10896, 10897, 10898, 10899, 10730, 10737, 10739, 10763, 10900, 10775, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10886
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10775 from "module_10775" /* 10775 */;
import _mod10887 from "module_10887" /* 10887 */;
import _mod10889 from "module_10889" /* 10889 */;
import _mod10891 from "module_10891" /* 10891 */;
import _mod10892 from "module_10892" /* 10892 */;
import _mod10893 from "module_10893" /* 10893 */;
import _mod10894 from "module_10894" /* 10894 */;
import _mod10895 from "module_10895" /* 10895 */;
import _mod10896 from "module_10896" /* 10896 */;
import _mod10897 from "module_10897" /* 10897 */;
import _mod10898 from "module_10898" /* 10898 */;
import _mod10899 from "module_10899" /* 10899 */;
import _mod10900 from "module_10900" /* 10900 */;
import { Chrono } from "module_10730" /* 10730 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10775.default(), , , , , , ];
  new module_10775.default();
  items[1] = new module_10763.default(true);
  new module_10763.default(true);
  items[2] = new module_10887.default();
  new module_10887.default();
  items[3] = new module_10889.default();
  new module_10889.default();
  items[4] = new module_10898.default();
  new module_10898.default();
  items[5] = new module_10892.default(flag);
  new module_10892.default(flag);
  items[6] = new module_10893.default();
  new module_10893.default();
  items1 = [new module_10895.default(), ];
  new module_10895.default();
  items1[1] = new module_10894.default();
  new module_10894.default();
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
  const _default = new module_10896.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10897.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10891.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10899.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10900.default();
  unshift5(_default4);
  return tmp;
}
const module_10887 = fn(_mod10887);
const module_10889 = fn(_mod10889);
const module_10891 = fn(_mod10891);
const module_10892 = fn(_mod10892);
const module_10893 = fn(_mod10893);
const module_10894 = fn(_mod10894);
const module_10895 = fn(_mod10895);
const module_10896 = fn(_mod10896);
const module_10897 = fn(_mod10897);
const module_10898 = fn(_mod10898);
const module_10899 = fn(_mod10899);
const module_10763 = fn(_mod10763);
const module_10900 = fn(_mod10900);
const module_10775 = fn(_mod10775);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10896.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10897.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10891.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10899.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10900.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10730").Chrono(createConfiguration(true));
const Chrono_export = require("module_10730").Chrono;

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
