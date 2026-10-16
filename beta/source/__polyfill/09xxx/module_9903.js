// Module ID: 9903
// Function ID: 9904
// Dependencies: [9811, 9818, 9820, 9904, 9905, 9906, 9907, 9844, 9908, 9910, 9911, 9912, 9913, 9914, 9915, 9916, 9917, 9918, 9919, 9920, 9851]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9903
import _mod9844 from "module_9844" /* 9844 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9851 */;
import _mod9904 from "module_9904" /* 9904 */;
import _mod9905 from "module_9905" /* 9905 */;
import _mod9906 from "module_9906" /* 9906 */;
import _mod9907 from "module_9907" /* 9907 */;
import _mod9908 from "module_9908" /* 9908 */;
import _mod9910 from "module_9910" /* 9910 */;
import _mod9911 from "module_9911" /* 9911 */;
import _mod9912 from "module_9912" /* 9912 */;
import _mod9913 from "module_9913" /* 9913 */;
import _mod9914 from "module_9914" /* 9914 */;
import _mod9915 from "module_9915" /* 9915 */;
import _mod9916 from "module_9916" /* 9916 */;
import _mod9917 from "module_9917" /* 9917 */;
import _mod9918 from "module_9918" /* 9918 */;
import _mod9919 from "module_9919" /* 9919 */;
import _mod9920 from "module_9920" /* 9920 */;

const require = globalThis.__r;

function createConfiguration(flag) {
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
  items = [new module_9844.default(flag2), , , , , , , , , ];
  new module_9844.default(flag2);
  items[1] = new module_9908.default();
  new module_9908.default();
  items[2] = new module_9911.default();
  new module_9911.default();
  items[3] = new module_9912.default();
  new module_9912.default();
  items[4] = new module_9910.default();
  new module_9910.default();
  items[5] = new module_9915.default();
  new module_9915.default();
  items[6] = new module_9913.default();
  new module_9913.default();
  items[7] = new module_9914.default(flag);
  new module_9914.default(flag);
  items[8] = new module_9919.default(flag);
  new module_9919.default(flag);
  items[9] = new module_9920.default(flag);
  new module_9920.default(flag);
  items1 = [new module_9905.default(), ];
  new module_9905.default();
  items1[1] = new module_9904.default();
  new module_9904.default();
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
  const _default = new module_9906.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9907.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9916.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9912.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9918.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_9917.default();
  unshift6(_default5);
  return tmp;
}
const module_9904 = fn(_mod9904);
const module_9905 = fn(_mod9905);
const module_9906 = fn(_mod9906);
const module_9907 = fn(_mod9907);
const module_9844 = fn(_mod9844);
const module_9908 = fn(_mod9908);
const module_9910 = fn(_mod9910);
const module_9911 = fn(_mod9911);
const module_9912 = fn(_mod9912);
const module_9913 = fn(_mod9913);
const module_9914 = fn(_mod9914);
const module_9915 = fn(_mod9915);
const module_9916 = fn(_mod9916);
const module_9917 = fn(_mod9917);
const module_9918 = fn(_mod9918);
const module_9919 = fn(_mod9919);
const module_9920 = fn(_mod9920);
const chrono = new require("module_9811").Chrono(createCasualConfiguration());
const chrono1 = new require("module_9811").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9811").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
