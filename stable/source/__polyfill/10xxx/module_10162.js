// Module ID: 10162
// Function ID: 10163
// Dependencies: [10115, 10122, 10124, 10148, 10160, 10163, 10164, 10166, 10167, 10168, 10169, 10170, 10171, 10172, 10173, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10162
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10163 from "module_10163" /* 10163 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10166 from "module_10166" /* 10166 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10168 from "module_10168" /* 10168 */;
import _mod10169 from "module_10169" /* 10169 */;
import _mod10170 from "module_10170" /* 10170 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import { Chrono } from "module_10115" /* 10115 */;

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
  items = [new module_10160.default(), , , , , , ];
  new module_10160.default();
  items[1] = new module_10148.default(flag2);
  new module_10148.default(flag2);
  items[2] = new module_10163.default();
  new module_10163.default();
  items[3] = new module_10166.default();
  new module_10166.default();
  items[4] = new module_10171.default();
  new module_10171.default();
  items[5] = new module_10164.default();
  new module_10164.default();
  items[6] = new module_10173.default();
  new module_10173.default();
  items1 = [new module_10167.default(), ];
  new module_10167.default();
  items1[1] = new module_10168.default();
  new module_10168.default();
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
  const _default = new module_10170.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10169.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10172.default();
  unshift3(_default2);
  return tmp;
}
const module_10148 = fn(_mod10148);
const module_10160 = fn(_mod10160);
const module_10163 = fn(_mod10163);
const module_10164 = fn(_mod10164);
const module_10166 = fn(_mod10166);
const module_10167 = fn(_mod10167);
const module_10168 = fn(_mod10168);
const module_10169 = fn(_mod10169);
const module_10170 = fn(_mod10170);
const module_10171 = fn(_mod10171);
const module_10172 = fn(_mod10172);
const module_10173 = fn(_mod10173);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10170.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10169.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10172.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10115").Chrono(createConfiguration(true));
const Chrono_export = require("module_10115").Chrono;

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
