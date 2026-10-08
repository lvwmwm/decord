// Module ID: 9923
// Function ID: 9924
// Dependencies: [9924, 9926, 9928, 9929, 9930, 9931, 9932, 9933, 9934, 9935, 9936, 9767, 9774, 9776, 9800, 9937, 9812, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9923
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9812 from "module_9812" /* 9812 */;
import _mod9924 from "module_9924" /* 9924 */;
import _mod9926 from "module_9926" /* 9926 */;
import _mod9928 from "module_9928" /* 9928 */;
import _mod9929 from "module_9929" /* 9929 */;
import _mod9930 from "module_9930" /* 9930 */;
import _mod9931 from "module_9931" /* 9931 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9934 from "module_9934" /* 9934 */;
import _mod9935 from "module_9935" /* 9935 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9937 from "module_9937" /* 9937 */;
import { Chrono } from "module_9767" /* 9767 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9812.default(), , , , , , ];
  new module_9812.default();
  items[1] = new module_9800.default(true);
  new module_9800.default(true);
  items[2] = new module_9924.default();
  new module_9924.default();
  items[3] = new module_9926.default();
  new module_9926.default();
  items[4] = new module_9935.default();
  new module_9935.default();
  items[5] = new module_9929.default(flag);
  new module_9929.default(flag);
  items[6] = new module_9930.default();
  new module_9930.default();
  items1 = [new module_9932.default(), ];
  new module_9932.default();
  items1[1] = new module_9931.default();
  new module_9931.default();
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
  const _default = new module_9933.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9934.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9928.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9936.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9937.default();
  unshift5(_default4);
  return tmp;
}
const module_9924 = fn(_mod9924);
const module_9926 = fn(_mod9926);
const module_9928 = fn(_mod9928);
const module_9929 = fn(_mod9929);
const module_9930 = fn(_mod9930);
const module_9931 = fn(_mod9931);
const module_9932 = fn(_mod9932);
const module_9933 = fn(_mod9933);
const module_9934 = fn(_mod9934);
const module_9935 = fn(_mod9935);
const module_9936 = fn(_mod9936);
const module_9800 = fn(_mod9800);
const module_9937 = fn(_mod9937);
const module_9812 = fn(_mod9812);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9933.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9934.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9928.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9936.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9937.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9767").Chrono(createConfiguration(true));
const Chrono_export = require("module_9767").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
