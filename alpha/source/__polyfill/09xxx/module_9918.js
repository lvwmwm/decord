// Module ID: 9918
// Function ID: 9919
// Dependencies: [9826, 9833, 9835, 9919, 9920, 9921, 9922, 9859, 9923, 9925, 9926, 9927, 9928, 9929, 9930, 9931, 9932, 9933, 9934, 9935, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9918
import _mod9859 from "module_9859" /* 9859 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9919 from "module_9919" /* 9919 */;
import _mod9920 from "module_9920" /* 9920 */;
import _mod9921 from "module_9921" /* 9921 */;
import _mod9922 from "module_9922" /* 9922 */;
import _mod9923 from "module_9923" /* 9923 */;
import _mod9925 from "module_9925" /* 9925 */;
import _mod9926 from "module_9926" /* 9926 */;
import _mod9927 from "module_9927" /* 9927 */;
import _mod9928 from "module_9928" /* 9928 */;
import _mod9929 from "module_9929" /* 9929 */;
import _mod9930 from "module_9930" /* 9930 */;
import _mod9931 from "module_9931" /* 9931 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9934 from "module_9934" /* 9934 */;
import _mod9935 from "module_9935" /* 9935 */;

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
  items = [new module_9859.default(flag2), , , , , , , , , ];
  new module_9859.default(flag2);
  items[1] = new module_9923.default();
  new module_9923.default();
  items[2] = new module_9926.default();
  new module_9926.default();
  items[3] = new module_9927.default();
  new module_9927.default();
  items[4] = new module_9925.default();
  new module_9925.default();
  items[5] = new module_9930.default();
  new module_9930.default();
  items[6] = new module_9928.default();
  new module_9928.default();
  items[7] = new module_9929.default(flag);
  new module_9929.default(flag);
  items[8] = new module_9934.default(flag);
  new module_9934.default(flag);
  items[9] = new module_9935.default(flag);
  new module_9935.default(flag);
  items1 = [new module_9920.default(), ];
  new module_9920.default();
  items1[1] = new module_9919.default();
  new module_9919.default();
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
  const _default = new module_9921.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9922.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9931.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9927.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9933.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_9932.default();
  unshift6(_default5);
  return tmp;
}
const module_9919 = fn(_mod9919);
const module_9920 = fn(_mod9920);
const module_9921 = fn(_mod9921);
const module_9922 = fn(_mod9922);
const module_9859 = fn(_mod9859);
const module_9923 = fn(_mod9923);
const module_9925 = fn(_mod9925);
const module_9926 = fn(_mod9926);
const module_9927 = fn(_mod9927);
const module_9928 = fn(_mod9928);
const module_9929 = fn(_mod9929);
const module_9930 = fn(_mod9930);
const module_9931 = fn(_mod9931);
const module_9932 = fn(_mod9932);
const module_9933 = fn(_mod9933);
const module_9934 = fn(_mod9934);
const module_9935 = fn(_mod9935);
const chrono = new require("module_9826").Chrono(createCasualConfiguration());
const chrono1 = new require("module_9826").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9826").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
