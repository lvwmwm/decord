// Module ID: 10165
// Function ID: 10166
// Dependencies: [10166, 10168, 10170, 10171, 10172, 10173, 10174, 10175, 10176, 10177, 10178, 10034, 10041, 10043, 10067, 10179, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10165
import _mod10067 from "module_10067" /* 10067 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10166 from "module_10166" /* 10166 */;
import _mod10168 from "module_10168" /* 10168 */;
import _mod10170 from "module_10170" /* 10170 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10176 from "module_10176" /* 10176 */;
import _mod10177 from "module_10177" /* 10177 */;
import _mod10178 from "module_10178" /* 10178 */;
import _mod10179 from "module_10179" /* 10179 */;
import { Chrono } from "module_10034" /* 10034 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10067.default(true), , , , , ];
  new module_10067.default(true);
  items[1] = new module_10166.default();
  new module_10166.default();
  items[2] = new module_10168.default();
  new module_10168.default();
  items[3] = new module_10177.default();
  new module_10177.default();
  items[4] = new module_10171.default(flag);
  new module_10171.default(flag);
  items[5] = new module_10172.default();
  new module_10172.default();
  items1 = [new module_10174.default(), ];
  new module_10174.default();
  items1[1] = new module_10173.default();
  new module_10173.default();
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
  const _default = new module_10175.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10176.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10170.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10178.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10179.default();
  unshift5(_default4);
  return tmp;
}
const module_10166 = fn(_mod10166);
const module_10168 = fn(_mod10168);
const module_10170 = fn(_mod10170);
const module_10171 = fn(_mod10171);
const module_10172 = fn(_mod10172);
const module_10173 = fn(_mod10173);
const module_10174 = fn(_mod10174);
const module_10175 = fn(_mod10175);
const module_10176 = fn(_mod10176);
const module_10177 = fn(_mod10177);
const module_10178 = fn(_mod10178);
const module_10067 = fn(_mod10067);
const module_10179 = fn(_mod10179);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10175.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10176.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10170.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10178.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10179.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10034").Chrono(createConfiguration(true));
const Chrono_export = require("module_10034").Chrono;

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
