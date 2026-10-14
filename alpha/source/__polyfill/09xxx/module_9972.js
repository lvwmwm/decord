// Module ID: 9972
// Function ID: 9973
// Dependencies: [9826, 9833, 9835, 9859, 9973, 9975, 9976, 9977, 9978, 9979, 9980, 9981, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9972
import _mod9859 from "module_9859" /* 9859 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9973 from "module_9973" /* 9973 */;
import _mod9975 from "module_9975" /* 9975 */;
import _mod9976 from "module_9976" /* 9976 */;
import _mod9977 from "module_9977" /* 9977 */;
import _mod9978 from "module_9978" /* 9978 */;
import _mod9979 from "module_9979" /* 9979 */;
import _mod9980 from "module_9980" /* 9980 */;
import _mod9981 from "module_9981" /* 9981 */;
import { Chrono } from "module_9826" /* 9826 */;

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
  items = [new module_9859.default(flag2), , , , ];
  new module_9859.default(flag2);
  items[1] = new module_9973.default();
  new module_9973.default();
  items[2] = new module_9975.default();
  new module_9975.default();
  items[3] = new module_9978.default();
  new module_9978.default();
  items[4] = new module_9981.default();
  new module_9981.default();
  items1 = [new module_9976.default(), ];
  new module_9976.default();
  items1[1] = new module_9977.default();
  new module_9977.default();
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
  const _default = new module_9979.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9980.default();
  push2(_default1);
  return tmp;
}
const module_9859 = fn(_mod9859);
const module_9973 = fn(_mod9973);
const module_9975 = fn(_mod9975);
const module_9976 = fn(_mod9976);
const module_9977 = fn(_mod9977);
const module_9978 = fn(_mod9978);
const module_9979 = fn(_mod9979);
const module_9980 = fn(_mod9980);
const module_9981 = fn(_mod9981);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9979.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9980.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9826").Chrono(createConfiguration(true));
const Chrono_export = require("module_9826").Chrono;

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
