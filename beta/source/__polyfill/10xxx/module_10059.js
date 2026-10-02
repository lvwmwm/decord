// Module ID: 10059
// Function ID: 10060
// Dependencies: [10060, 10062, 10064, 10065, 10066, 10067, 10068, 10069, 10070, 10071, 10072, 9928, 9935, 9937, 9961, 10073, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10059
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod10060 from "module_10060" /* 10060 */;
import _mod10062 from "module_10062" /* 10062 */;
import _mod10064 from "module_10064" /* 10064 */;
import _mod10065 from "module_10065" /* 10065 */;
import _mod10066 from "module_10066" /* 10066 */;
import _mod10067 from "module_10067" /* 10067 */;
import _mod10068 from "module_10068" /* 10068 */;
import _mod10069 from "module_10069" /* 10069 */;
import _mod10070 from "module_10070" /* 10070 */;
import _mod10071 from "module_10071" /* 10071 */;
import _mod10072 from "module_10072" /* 10072 */;
import _mod10073 from "module_10073" /* 10073 */;
import { Chrono } from "module_9928" /* 9928 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9961.default(true), , , , , ];
  new module_9961.default(true);
  items[1] = new module_10060.default();
  new module_10060.default();
  items[2] = new module_10062.default();
  new module_10062.default();
  items[3] = new module_10071.default();
  new module_10071.default();
  items[4] = new module_10065.default(flag);
  new module_10065.default(flag);
  items[5] = new module_10066.default();
  new module_10066.default();
  items1 = [new module_10068.default(), ];
  new module_10068.default();
  items1[1] = new module_10067.default();
  new module_10067.default();
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
  const _default = new module_10069.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10070.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10064.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10072.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10073.default();
  unshift5(_default4);
  return tmp;
}
const module_10060 = fn(_mod10060);
const module_10062 = fn(_mod10062);
const module_10064 = fn(_mod10064);
const module_10065 = fn(_mod10065);
const module_10066 = fn(_mod10066);
const module_10067 = fn(_mod10067);
const module_10068 = fn(_mod10068);
const module_10069 = fn(_mod10069);
const module_10070 = fn(_mod10070);
const module_10071 = fn(_mod10071);
const module_10072 = fn(_mod10072);
const module_9961 = fn(_mod9961);
const module_10073 = fn(_mod10073);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10069.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10070.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10064.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10072.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10073.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9928").Chrono(createConfiguration(true));
const Chrono_export = require("module_9928").Chrono;

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
