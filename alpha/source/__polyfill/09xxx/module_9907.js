// Module ID: 9907
// Function ID: 9908
// Dependencies: [9815, 9822, 9824, 9908, 9909, 9910, 9911, 9848, 9912, 9914, 9915, 9916, 9917, 9918, 9919, 9920, 9921, 9922, 9923, 9924, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9907
import _mod9848 from "module_9848" /* 9848 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9908 from "module_9908" /* 9908 */;
import _mod9909 from "module_9909" /* 9909 */;
import _mod9910 from "module_9910" /* 9910 */;
import _mod9911 from "module_9911" /* 9911 */;
import _mod9912 from "module_9912" /* 9912 */;
import _mod9914 from "module_9914" /* 9914 */;
import _mod9915 from "module_9915" /* 9915 */;
import _mod9916 from "module_9916" /* 9916 */;
import _mod9917 from "module_9917" /* 9917 */;
import _mod9918 from "module_9918" /* 9918 */;
import _mod9919 from "module_9919" /* 9919 */;
import _mod9920 from "module_9920" /* 9920 */;
import _mod9921 from "module_9921" /* 9921 */;
import _mod9922 from "module_9922" /* 9922 */;
import _mod9923 from "module_9923" /* 9923 */;
import _mod9924 from "module_9924" /* 9924 */;

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
  items = [new module_9848.default(flag2), , , , , , , , , ];
  new module_9848.default(flag2);
  items[1] = new module_9912.default();
  new module_9912.default();
  items[2] = new module_9915.default();
  new module_9915.default();
  items[3] = new module_9916.default();
  new module_9916.default();
  items[4] = new module_9914.default();
  new module_9914.default();
  items[5] = new module_9919.default();
  new module_9919.default();
  items[6] = new module_9917.default();
  new module_9917.default();
  items[7] = new module_9918.default(flag);
  new module_9918.default(flag);
  items[8] = new module_9923.default(flag);
  new module_9923.default(flag);
  items[9] = new module_9924.default(flag);
  new module_9924.default(flag);
  items1 = [new module_9909.default(), ];
  new module_9909.default();
  items1[1] = new module_9908.default();
  new module_9908.default();
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
  const _default = new module_9910.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9911.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9920.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9916.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9922.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_9921.default();
  unshift6(_default5);
  return tmp;
}
const module_9908 = fn(_mod9908);
const module_9909 = fn(_mod9909);
const module_9910 = fn(_mod9910);
const module_9911 = fn(_mod9911);
const module_9848 = fn(_mod9848);
const module_9912 = fn(_mod9912);
const module_9914 = fn(_mod9914);
const module_9915 = fn(_mod9915);
const module_9916 = fn(_mod9916);
const module_9917 = fn(_mod9917);
const module_9918 = fn(_mod9918);
const module_9919 = fn(_mod9919);
const module_9920 = fn(_mod9920);
const module_9921 = fn(_mod9921);
const module_9922 = fn(_mod9922);
const module_9923 = fn(_mod9923);
const module_9924 = fn(_mod9924);
const chrono = new require("module_9815").Chrono(createCasualConfiguration());
const chrono1 = new require("module_9815").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9815").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
