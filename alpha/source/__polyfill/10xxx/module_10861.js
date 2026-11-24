// Module ID: 10861
// Function ID: 10862
// Dependencies: [10862, 10864, 10866, 10867, 10868, 10869, 10870, 10871, 10872, 10873, 10874, 10730, 10737, 10739, 10763, 10875, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10861
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10862 from "module_10862" /* 10862 */;
import _mod10864 from "module_10864" /* 10864 */;
import _mod10866 from "module_10866" /* 10866 */;
import _mod10867 from "module_10867" /* 10867 */;
import _mod10868 from "module_10868" /* 10868 */;
import _mod10869 from "module_10869" /* 10869 */;
import _mod10870 from "module_10870" /* 10870 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10872 from "module_10872" /* 10872 */;
import _mod10873 from "module_10873" /* 10873 */;
import _mod10874 from "module_10874" /* 10874 */;
import _mod10875 from "module_10875" /* 10875 */;
import { Chrono } from "module_10730" /* 10730 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10763.default(true), , , , , ];
  new module_10763.default(true);
  items[1] = new module_10862.default();
  new module_10862.default();
  items[2] = new module_10864.default();
  new module_10864.default();
  items[3] = new module_10873.default();
  new module_10873.default();
  items[4] = new module_10867.default(flag);
  new module_10867.default(flag);
  items[5] = new module_10868.default();
  new module_10868.default();
  items1 = [new module_10870.default(), ];
  new module_10870.default();
  items1[1] = new module_10869.default();
  new module_10869.default();
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
  const _default = new module_10871.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10872.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10866.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10874.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10875.default();
  unshift5(_default4);
  return tmp;
}
const module_10862 = fn(_mod10862);
const module_10864 = fn(_mod10864);
const module_10866 = fn(_mod10866);
const module_10867 = fn(_mod10867);
const module_10868 = fn(_mod10868);
const module_10869 = fn(_mod10869);
const module_10870 = fn(_mod10870);
const module_10871 = fn(_mod10871);
const module_10872 = fn(_mod10872);
const module_10873 = fn(_mod10873);
const module_10874 = fn(_mod10874);
const module_10763 = fn(_mod10763);
const module_10875 = fn(_mod10875);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10871.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10872.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10866.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10874.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10875.default();
unshift5(_default4);
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
