// Module ID: 10856
// Function ID: 10857
// Dependencies: [10772, 10730, 10737, 10739, 10847, 10848, 10850, 10851, 10852, 10853, 10854, 10855, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10856
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10772 from "module_10772" /* 10772 */;
import _mod10847 from "module_10847" /* 10847 */;
import _mod10848 from "module_10848" /* 10848 */;
import _mod10850 from "module_10850" /* 10850 */;
import _mod10851 from "module_10851" /* 10851 */;
import _mod10852 from "module_10852" /* 10852 */;
import _mod10853 from "module_10853" /* 10853 */;
import _mod10854 from "module_10854" /* 10854 */;
import _mod10855 from "module_10855" /* 10855 */;
import { Chrono } from "module_10730" /* 10730 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10848.default(), , , , ];
  new module_10848.default();
  items[1] = new module_10851.default();
  new module_10851.default();
  items[2] = new module_10853.default();
  new module_10853.default();
  items[3] = new module_10852.default();
  new module_10852.default();
  items[4] = new module_10850.default();
  new module_10850.default();
  items1 = [new module_10854.default(), ];
  new module_10854.default();
  items1[1] = new module_10855.default();
  new module_10855.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10772.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10847.default();
  unshift(_default);
  return tmp;
}
const module_10772 = fn(_mod10772);
const module_10847 = fn(_mod10847);
const module_10848 = fn(_mod10848);
const module_10850 = fn(_mod10850);
const module_10851 = fn(_mod10851);
const module_10852 = fn(_mod10852);
const module_10853 = fn(_mod10853);
const module_10854 = fn(_mod10854);
const module_10855 = fn(_mod10855);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10847.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10847.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10730").Chrono(createConfiguration());
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
