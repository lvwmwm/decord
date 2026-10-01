// Module ID: 10037
// Function ID: 10038
// Dependencies: [9891, 9898, 9900, 9924, 10038, 10040, 10041, 10042, 10043, 10044, 10045, 10046, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10037
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod10038 from "module_10038" /* 10038 */;
import _mod10040 from "module_10040" /* 10040 */;
import _mod10041 from "module_10041" /* 10041 */;
import _mod10042 from "module_10042" /* 10042 */;
import _mod10043 from "module_10043" /* 10043 */;
import _mod10044 from "module_10044" /* 10044 */;
import _mod10045 from "module_10045" /* 10045 */;
import _mod10046 from "module_10046" /* 10046 */;
import { Chrono } from "module_9891" /* 9891 */;

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
  items = [new module_9924.default(flag2), , , , ];
  new module_9924.default(flag2);
  items[1] = new module_10038.default();
  new module_10038.default();
  items[2] = new module_10040.default();
  new module_10040.default();
  items[3] = new module_10043.default();
  new module_10043.default();
  items[4] = new module_10046.default();
  new module_10046.default();
  items1 = [new module_10041.default(), ];
  new module_10041.default();
  items1[1] = new module_10042.default();
  new module_10042.default();
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
  const push = parsers.push;
  const _default = new module_10044.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10045.default();
  push2(_default1);
  return tmp;
}
const module_9924 = fn(_mod9924);
const module_10038 = fn(_mod10038);
const module_10040 = fn(_mod10040);
const module_10041 = fn(_mod10041);
const module_10042 = fn(_mod10042);
const module_10043 = fn(_mod10043);
const module_10044 = fn(_mod10044);
const module_10045 = fn(_mod10045);
const module_10046 = fn(_mod10046);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10044.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10045.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));
const Chrono_export = require("module_9891").Chrono;

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
