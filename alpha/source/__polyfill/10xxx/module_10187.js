// Module ID: 10187
// Function ID: 10188
// Dependencies: [10140, 10147, 10149, 10173, 10185, 10188, 10189, 10191, 10192, 10193, 10194, 10195, 10196, 10197, 10198, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10187
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10188 from "module_10188" /* 10188 */;
import _mod10189 from "module_10189" /* 10189 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10192 from "module_10192" /* 10192 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import _mod10197 from "module_10197" /* 10197 */;
import _mod10198 from "module_10198" /* 10198 */;
import { Chrono } from "module_10140" /* 10140 */;

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
  items = [new module_10185.default(), , , , , , ];
  new module_10185.default();
  items[1] = new module_10173.default(flag2);
  new module_10173.default(flag2);
  items[2] = new module_10188.default();
  new module_10188.default();
  items[3] = new module_10191.default();
  new module_10191.default();
  items[4] = new module_10196.default();
  new module_10196.default();
  items[5] = new module_10189.default();
  new module_10189.default();
  items[6] = new module_10198.default();
  new module_10198.default();
  items1 = [new module_10192.default(), ];
  new module_10192.default();
  items1[1] = new module_10193.default();
  new module_10193.default();
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
  const _default = new module_10195.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10194.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10197.default();
  unshift3(_default2);
  return tmp;
}
const module_10173 = fn(_mod10173);
const module_10185 = fn(_mod10185);
const module_10188 = fn(_mod10188);
const module_10189 = fn(_mod10189);
const module_10191 = fn(_mod10191);
const module_10192 = fn(_mod10192);
const module_10193 = fn(_mod10193);
const module_10194 = fn(_mod10194);
const module_10195 = fn(_mod10195);
const module_10196 = fn(_mod10196);
const module_10197 = fn(_mod10197);
const module_10198 = fn(_mod10198);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10195.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10194.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10197.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10140").Chrono(createConfiguration(true));
const Chrono_export = require("module_10140").Chrono;

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
