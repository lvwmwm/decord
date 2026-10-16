// Module ID: 10182
// Function ID: 10183
// Dependencies: [10183, 10185, 10187, 10188, 10189, 10190, 10191, 10192, 10193, 10194, 10195, 10051, 10058, 10060, 10084, 10196, 10091]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10182
import _mod10084 from "module_10084" /* 10084 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10183 from "module_10183" /* 10183 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10187 from "module_10187" /* 10187 */;
import _mod10188 from "module_10188" /* 10188 */;
import _mod10189 from "module_10189" /* 10189 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10192 from "module_10192" /* 10192 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import { Chrono } from "module_10051" /* 10051 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10084.default(true), , , , , ];
  new module_10084.default(true);
  items[1] = new module_10183.default();
  new module_10183.default();
  items[2] = new module_10185.default();
  new module_10185.default();
  items[3] = new module_10194.default();
  new module_10194.default();
  items[4] = new module_10188.default(flag);
  new module_10188.default(flag);
  items[5] = new module_10189.default();
  new module_10189.default();
  items1 = [new module_10191.default(), ];
  new module_10191.default();
  items1[1] = new module_10190.default();
  new module_10190.default();
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
  const _default = new module_10192.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10193.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10187.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10195.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10196.default();
  unshift5(_default4);
  return tmp;
}
const module_10183 = fn(_mod10183);
const module_10185 = fn(_mod10185);
const module_10187 = fn(_mod10187);
const module_10188 = fn(_mod10188);
const module_10189 = fn(_mod10189);
const module_10190 = fn(_mod10190);
const module_10191 = fn(_mod10191);
const module_10192 = fn(_mod10192);
const module_10193 = fn(_mod10193);
const module_10194 = fn(_mod10194);
const module_10195 = fn(_mod10195);
const module_10084 = fn(_mod10084);
const module_10196 = fn(_mod10196);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10192.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10193.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10187.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10195.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10196.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10051").Chrono(createConfiguration(true));
const Chrono_export = require("module_10051").Chrono;

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
