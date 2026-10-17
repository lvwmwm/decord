// Module ID: 10207
// Function ID: 10208
// Dependencies: [10115, 10122, 10124, 10208, 10209, 10210, 10211, 10148, 10212, 10214, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10224, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10207
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10209 from "module_10209" /* 10209 */;
import _mod10210 from "module_10210" /* 10210 */;
import _mod10211 from "module_10211" /* 10211 */;
import _mod10212 from "module_10212" /* 10212 */;
import _mod10214 from "module_10214" /* 10214 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10216 from "module_10216" /* 10216 */;
import _mod10217 from "module_10217" /* 10217 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10219 from "module_10219" /* 10219 */;
import _mod10220 from "module_10220" /* 10220 */;
import _mod10221 from "module_10221" /* 10221 */;
import _mod10222 from "module_10222" /* 10222 */;
import _mod10223 from "module_10223" /* 10223 */;
import _mod10224 from "module_10224" /* 10224 */;

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
  items = [new module_10148.default(flag2), , , , , , , , , ];
  new module_10148.default(flag2);
  items[1] = new module_10212.default();
  new module_10212.default();
  items[2] = new module_10215.default();
  new module_10215.default();
  items[3] = new module_10216.default();
  new module_10216.default();
  items[4] = new module_10214.default();
  new module_10214.default();
  items[5] = new module_10219.default();
  new module_10219.default();
  items[6] = new module_10217.default();
  new module_10217.default();
  items[7] = new module_10218.default(flag);
  new module_10218.default(flag);
  items[8] = new module_10223.default(flag);
  new module_10223.default(flag);
  items[9] = new module_10224.default(flag);
  new module_10224.default(flag);
  items1 = [new module_10209.default(), ];
  new module_10209.default();
  items1[1] = new module_10208.default();
  new module_10208.default();
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
  const _default = new module_10210.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10211.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10220.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10216.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10222.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10221.default();
  unshift6(_default5);
  return tmp;
}
const module_10208 = fn(_mod10208);
const module_10209 = fn(_mod10209);
const module_10210 = fn(_mod10210);
const module_10211 = fn(_mod10211);
const module_10148 = fn(_mod10148);
const module_10212 = fn(_mod10212);
const module_10214 = fn(_mod10214);
const module_10215 = fn(_mod10215);
const module_10216 = fn(_mod10216);
const module_10217 = fn(_mod10217);
const module_10218 = fn(_mod10218);
const module_10219 = fn(_mod10219);
const module_10220 = fn(_mod10220);
const module_10221 = fn(_mod10221);
const module_10222 = fn(_mod10222);
const module_10223 = fn(_mod10223);
const module_10224 = fn(_mod10224);
const chrono = new require("module_10115").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10115").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10115").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
