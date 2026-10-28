// Module ID: 10304
// Function ID: 10305
// Dependencies: [10245, 10252, 10254, 10305, 10306, 10278, 10307, 10308, 10309, 10310, 10312, 10313, 10314, 10315, 10316, 10285]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10304
import _mod10278 from "module_10278" /* 10278 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10285 */;
import _mod10305 from "module_10305" /* 10305 */;
import _mod10306 from "module_10306" /* 10306 */;
import _mod10307 from "module_10307" /* 10307 */;
import _mod10308 from "module_10308" /* 10308 */;
import _mod10309 from "module_10309" /* 10309 */;
import _mod10310 from "module_10310" /* 10310 */;
import _mod10312 from "module_10312" /* 10312 */;
import _mod10313 from "module_10313" /* 10313 */;
import _mod10314 from "module_10314" /* 10314 */;
import _mod10315 from "module_10315" /* 10315 */;
import _mod10316 from "module_10316" /* 10316 */;
import { Chrono } from "module_10245" /* 10245 */;

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
  items = [new module_10278.default(flag2), , , , , , ];
  new module_10278.default(flag2);
  items[1] = new module_10313.default();
  new module_10313.default();
  items[2] = new module_10307.default();
  new module_10307.default();
  items[3] = new module_10312.default();
  new module_10312.default();
  items[4] = new module_10314.default();
  new module_10314.default();
  items[5] = new module_10315.default();
  new module_10315.default();
  items[6] = new module_10310.default();
  new module_10310.default();
  items1 = [new module_10308.default(), ];
  new module_10308.default();
  items1[1] = new module_10309.default();
  new module_10309.default();
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
  const _default = new module_10305.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10306.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10316.default();
  unshift3(_default2);
  return tmp;
}
const module_10305 = fn(_mod10305);
const module_10306 = fn(_mod10306);
const module_10278 = fn(_mod10278);
const module_10307 = fn(_mod10307);
const module_10308 = fn(_mod10308);
const module_10309 = fn(_mod10309);
const module_10310 = fn(_mod10310);
const module_10312 = fn(_mod10312);
const module_10313 = fn(_mod10313);
const module_10314 = fn(_mod10314);
const module_10315 = fn(_mod10315);
const module_10316 = fn(_mod10316);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10305.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10306.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10316.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10245").Chrono(createConfiguration(true));
const Chrono_export = require("module_10245").Chrono;

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
