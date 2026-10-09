// Module ID: 9917
// Function ID: 9918
// Dependencies: [9918, 9920, 9922, 9923, 9924, 9925, 9926, 9927, 9928, 9929, 9930, 9786, 9793, 9795, 9819, 9931, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9917
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9918 from "module_9918" /* 9918 */;
import _mod9920 from "module_9920" /* 9920 */;
import _mod9922 from "module_9922" /* 9922 */;
import _mod9923 from "module_9923" /* 9923 */;
import _mod9924 from "module_9924" /* 9924 */;
import _mod9925 from "module_9925" /* 9925 */;
import _mod9926 from "module_9926" /* 9926 */;
import _mod9927 from "module_9927" /* 9927 */;
import _mod9928 from "module_9928" /* 9928 */;
import _mod9929 from "module_9929" /* 9929 */;
import _mod9930 from "module_9930" /* 9930 */;
import _mod9931 from "module_9931" /* 9931 */;
import { Chrono } from "module_9786" /* 9786 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9819.default(true), , , , , ];
  new module_9819.default(true);
  items[1] = new module_9918.default();
  new module_9918.default();
  items[2] = new module_9920.default();
  new module_9920.default();
  items[3] = new module_9929.default();
  new module_9929.default();
  items[4] = new module_9923.default(flag);
  new module_9923.default(flag);
  items[5] = new module_9924.default();
  new module_9924.default();
  items1 = [new module_9926.default(), ];
  new module_9926.default();
  items1[1] = new module_9925.default();
  new module_9925.default();
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
  const _default = new module_9927.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9928.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9922.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9930.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9931.default();
  unshift5(_default4);
  return tmp;
}
const module_9918 = fn(_mod9918);
const module_9920 = fn(_mod9920);
const module_9922 = fn(_mod9922);
const module_9923 = fn(_mod9923);
const module_9924 = fn(_mod9924);
const module_9925 = fn(_mod9925);
const module_9926 = fn(_mod9926);
const module_9927 = fn(_mod9927);
const module_9928 = fn(_mod9928);
const module_9929 = fn(_mod9929);
const module_9930 = fn(_mod9930);
const module_9819 = fn(_mod9819);
const module_9931 = fn(_mod9931);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9927.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9928.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9922.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9930.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9931.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));
const Chrono_export = require("module_9786").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
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
