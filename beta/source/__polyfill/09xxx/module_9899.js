// Module ID: 9899
// Function ID: 9900
// Dependencies: [9816, 9823, 9825, 9849, 9900, 9902, 9903, 9904, 9905, 9906, 9907, 9856]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9899
import _mod9849 from "module_9849" /* 9849 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9856 */;
import _mod9900 from "module_9900" /* 9900 */;
import _mod9902 from "module_9902" /* 9902 */;
import _mod9903 from "module_9903" /* 9903 */;
import _mod9904 from "module_9904" /* 9904 */;
import _mod9905 from "module_9905" /* 9905 */;
import _mod9906 from "module_9906" /* 9906 */;
import _mod9907 from "module_9907" /* 9907 */;
import { Chrono } from "module_9816" /* 9816 */;

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
  items = [new module_9849.default(flag2), , , ];
  new module_9849.default(flag2);
  items[1] = new module_9900.default();
  new module_9900.default();
  items[2] = new module_9902.default();
  new module_9902.default();
  items[3] = new module_9905.default();
  new module_9905.default();
  items1 = [new module_9903.default(), ];
  new module_9903.default();
  items1[1] = new module_9904.default();
  new module_9904.default();
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
  const _default = new module_9906.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9907.default();
  push2(_default1);
  return tmp;
}
const module_9849 = fn(_mod9849);
const module_9900 = fn(_mod9900);
const module_9902 = fn(_mod9902);
const module_9903 = fn(_mod9903);
const module_9904 = fn(_mod9904);
const module_9905 = fn(_mod9905);
const module_9906 = fn(_mod9906);
const module_9907 = fn(_mod9907);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9906.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9907.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9816").Chrono(createConfiguration(true));
const Chrono_export = require("module_9816").Chrono;

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
