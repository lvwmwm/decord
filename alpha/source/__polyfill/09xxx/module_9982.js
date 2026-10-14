// Module ID: 9982
// Function ID: 9983
// Dependencies: [9983, 9985, 9987, 9988, 9989, 9990, 9991, 9992, 9993, 9994, 9995, 9826, 9833, 9835, 9859, 9996, 9871, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9982
import _mod9859 from "module_9859" /* 9859 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9871 from "module_9871" /* 9871 */;
import _mod9983 from "module_9983" /* 9983 */;
import _mod9985 from "module_9985" /* 9985 */;
import _mod9987 from "module_9987" /* 9987 */;
import _mod9988 from "module_9988" /* 9988 */;
import _mod9989 from "module_9989" /* 9989 */;
import _mod9990 from "module_9990" /* 9990 */;
import _mod9991 from "module_9991" /* 9991 */;
import _mod9992 from "module_9992" /* 9992 */;
import _mod9993 from "module_9993" /* 9993 */;
import _mod9994 from "module_9994" /* 9994 */;
import _mod9995 from "module_9995" /* 9995 */;
import _mod9996 from "module_9996" /* 9996 */;
import { Chrono } from "module_9826" /* 9826 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9871.default(), , , , , , ];
  new module_9871.default();
  items[1] = new module_9859.default(true);
  new module_9859.default(true);
  items[2] = new module_9983.default();
  new module_9983.default();
  items[3] = new module_9985.default();
  new module_9985.default();
  items[4] = new module_9994.default();
  new module_9994.default();
  items[5] = new module_9988.default(flag);
  new module_9988.default(flag);
  items[6] = new module_9989.default();
  new module_9989.default();
  items1 = [new module_9991.default(), ];
  new module_9991.default();
  items1[1] = new module_9990.default();
  new module_9990.default();
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
  const _default = new module_9992.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9993.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9987.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9995.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9996.default();
  unshift5(_default4);
  return tmp;
}
const module_9983 = fn(_mod9983);
const module_9985 = fn(_mod9985);
const module_9987 = fn(_mod9987);
const module_9988 = fn(_mod9988);
const module_9989 = fn(_mod9989);
const module_9990 = fn(_mod9990);
const module_9991 = fn(_mod9991);
const module_9992 = fn(_mod9992);
const module_9993 = fn(_mod9993);
const module_9994 = fn(_mod9994);
const module_9995 = fn(_mod9995);
const module_9859 = fn(_mod9859);
const module_9996 = fn(_mod9996);
const module_9871 = fn(_mod9871);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9992.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9993.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9987.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9995.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9996.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9826").Chrono(createConfiguration(true));
const Chrono_export = require("module_9826").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
