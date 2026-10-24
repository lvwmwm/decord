// Module ID: 10303
// Function ID: 10304
// Dependencies: [10211, 10218, 10220, 10304, 10305, 10306, 10307, 10244, 10308, 10310, 10311, 10312, 10313, 10314, 10315, 10316, 10317, 10318, 10319, 10320, 10251]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10303
import _mod10244 from "module_10244" /* 10244 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10251 */;
import _mod10304 from "module_10304" /* 10304 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10306 from "module_10306" /* 10306 */;
import _mod10307 from "module_10307" /* 10307 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10310 from "module_10310" /* 10310 */;
import _mod10311 from "module_10311" /* 10311 */;
import _mod10312 from "module_10312" /* 10312 */;
import _mod10313 from "module_10313" /* 10313 */;
import _mod10314 from "module_10314" /* 10314 */;
import _mod10315 from "module_10315" /* 10315 */;
import _mod10316 from "module_10316" /* 10316 */;
import _mod10317 from "module_10317" /* 10317 */;
import _mod10318 from "module_10318" /* 10318 */;
import _mod10319 from "module_10319" /* 10319 */;
import _mod10320 from "module_10320" /* 10320 */;

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
  items = [new module_10244.default(flag2), , , , , , , , , ];
  new module_10244.default(flag2);
  items[1] = new module_10308.default();
  new module_10308.default();
  items[2] = new module_10311.default();
  new module_10311.default();
  items[3] = new module_10312.default();
  new module_10312.default();
  items[4] = new module_10310.default();
  new module_10310.default();
  items[5] = new module_10315.default();
  new module_10315.default();
  items[6] = new module_10313.default();
  new module_10313.default();
  items[7] = new module_10314.default(flag);
  new module_10314.default(flag);
  items[8] = new module_10319.default(flag);
  new module_10319.default(flag);
  items[9] = new module_10320.default(flag);
  new module_10320.default(flag);
  items1 = [new module_10305.default(), ];
  new module_10305.default();
  items1[1] = new module_10304.default();
  new module_10304.default();
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
  const _default = new module_10306.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10307.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10316.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10312.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10318.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10317.default();
  unshift6(_default5);
  return tmp;
}
const module_10304 = fn(_mod10304);
const module_10305 = fn(_mod10305);
const module_10306 = fn(_mod10306);
const module_10307 = fn(_mod10307);
const module_10244 = fn(_mod10244);
const module_10308 = fn(_mod10308);
const module_10310 = fn(_mod10310);
const module_10311 = fn(_mod10311);
const module_10312 = fn(_mod10312);
const module_10313 = fn(_mod10313);
const module_10314 = fn(_mod10314);
const module_10315 = fn(_mod10315);
const module_10316 = fn(_mod10316);
const module_10317 = fn(_mod10317);
const module_10318 = fn(_mod10318);
const module_10319 = fn(_mod10319);
const module_10320 = fn(_mod10320);
const chrono = new require("module_10211").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10211").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10211").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
