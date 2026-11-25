// Module ID: 10876
// Function ID: 10877
// Dependencies: [10829, 10836, 10838, 10862, 10874, 10877, 10878, 10880, 10881, 10882, 10883, 10884, 10885, 10886, 10887, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10876
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10874 from "module_10874" /* 10874 */;
import _mod10877 from "module_10877" /* 10877 */;
import _mod10878 from "module_10878" /* 10878 */;
import _mod10880 from "module_10880" /* 10880 */;
import _mod10881 from "module_10881" /* 10881 */;
import _mod10882 from "module_10882" /* 10882 */;
import _mod10883 from "module_10883" /* 10883 */;
import _mod10884 from "module_10884" /* 10884 */;
import _mod10885 from "module_10885" /* 10885 */;
import _mod10886 from "module_10886" /* 10886 */;
import _mod10887 from "module_10887" /* 10887 */;
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
  items = [new module_10874.default(), , , , , , ];
  new module_10874.default();
  items[1] = new module_10862.default(flag2);
  new module_10862.default(flag2);
  items[2] = new module_10877.default();
  new module_10877.default();
  items[3] = new module_10880.default();
  new module_10880.default();
  items[4] = new module_10885.default();
  new module_10885.default();
  items[5] = new module_10878.default();
  new module_10878.default();
  items[6] = new module_10887.default();
  new module_10887.default();
  items1 = [new module_10881.default(), ];
  new module_10881.default();
  items1[1] = new module_10882.default();
  new module_10882.default();
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
  const _default = new module_10884.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10883.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10886.default();
  unshift3(_default2);
  return tmp;
}
const module_10862 = fn(_mod10862);
const module_10874 = fn(_mod10874);
const module_10877 = fn(_mod10877);
const module_10878 = fn(_mod10878);
const module_10880 = fn(_mod10880);
const module_10881 = fn(_mod10881);
const module_10882 = fn(_mod10882);
const module_10883 = fn(_mod10883);
const module_10884 = fn(_mod10884);
const module_10885 = fn(_mod10885);
const module_10886 = fn(_mod10886);
const module_10887 = fn(_mod10887);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10884.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10883.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10886.default();
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
