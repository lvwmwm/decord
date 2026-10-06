// Module ID: 10074
// Function ID: 10075
// Dependencies: [9928, 9935, 9937, 9961, 10075, 10077, 10078, 10079, 10080, 10081, 10082, 10083, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10074
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod10075 from "module_10075" /* 10075 */;
import _mod10077 from "module_10077" /* 10077 */;
import _mod10078 from "module_10078" /* 10078 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10080 from "module_10080" /* 10080 */;
import _mod10081 from "module_10081" /* 10081 */;
import _mod10082 from "module_10082" /* 10082 */;
import _mod10083 from "module_10083" /* 10083 */;
import { Chrono } from "module_9928" /* 9928 */;

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
  items = [new module_9961.default(flag2), , , , ];
  new module_9961.default(flag2);
  items[1] = new module_10075.default();
  new module_10075.default();
  items[2] = new module_10077.default();
  new module_10077.default();
  items[3] = new module_10080.default();
  new module_10080.default();
  items[4] = new module_10083.default();
  new module_10083.default();
  items1 = [new module_10078.default(), ];
  new module_10078.default();
  items1[1] = new module_10079.default();
  new module_10079.default();
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
  const _default = new module_10081.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10082.default();
  push2(_default1);
  return tmp;
}
const module_9961 = fn(_mod9961);
const module_10075 = fn(_mod10075);
const module_10077 = fn(_mod10077);
const module_10078 = fn(_mod10078);
const module_10079 = fn(_mod10079);
const module_10080 = fn(_mod10080);
const module_10081 = fn(_mod10081);
const module_10082 = fn(_mod10082);
const module_10083 = fn(_mod10083);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10081.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10082.default();
push2(_default1);
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
