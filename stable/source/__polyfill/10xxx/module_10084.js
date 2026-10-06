// Module ID: 10084
// Function ID: 10085
// Dependencies: [10085, 10087, 10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 9928, 9935, 9937, 9961, 10098, 9973, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10084
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9973 from "module_9973" /* 9973 */;
import _mod10085 from "module_10085" /* 10085 */;
import _mod10087 from "module_10087" /* 10087 */;
import _mod10089 from "module_10089" /* 10089 */;
import _mod10090 from "module_10090" /* 10090 */;
import _mod10091 from "module_10091" /* 10091 */;
import _mod10092 from "module_10092" /* 10092 */;
import _mod10093 from "module_10093" /* 10093 */;
import _mod10094 from "module_10094" /* 10094 */;
import _mod10095 from "module_10095" /* 10095 */;
import _mod10096 from "module_10096" /* 10096 */;
import _mod10097 from "module_10097" /* 10097 */;
import _mod10098 from "module_10098" /* 10098 */;
import { Chrono } from "module_9928" /* 9928 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9973.default(), , , , , , ];
  new module_9973.default();
  items[1] = new module_9961.default(true);
  new module_9961.default(true);
  items[2] = new module_10085.default();
  new module_10085.default();
  items[3] = new module_10087.default();
  new module_10087.default();
  items[4] = new module_10096.default();
  new module_10096.default();
  items[5] = new module_10090.default(flag);
  new module_10090.default(flag);
  items[6] = new module_10091.default();
  new module_10091.default();
  items1 = [new module_10093.default(), ];
  new module_10093.default();
  items1[1] = new module_10092.default();
  new module_10092.default();
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
  const _default = new module_10094.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10095.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10089.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10097.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10098.default();
  unshift5(_default4);
  return tmp;
}
const module_10085 = fn(_mod10085);
const module_10087 = fn(_mod10087);
const module_10089 = fn(_mod10089);
const module_10090 = fn(_mod10090);
const module_10091 = fn(_mod10091);
const module_10092 = fn(_mod10092);
const module_10093 = fn(_mod10093);
const module_10094 = fn(_mod10094);
const module_10095 = fn(_mod10095);
const module_10096 = fn(_mod10096);
const module_10097 = fn(_mod10097);
const module_9961 = fn(_mod9961);
const module_10098 = fn(_mod10098);
const module_9973 = fn(_mod9973);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10094.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10095.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10089.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10097.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10098.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9928").Chrono(createConfiguration(true));
const Chrono_export = require("module_9928").Chrono;

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
