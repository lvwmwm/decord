// Module ID: 9987
// Function ID: 9988
// Dependencies: [9928, 9935, 9937, 9988, 9989, 9961, 9990, 9991, 9992, 9993, 9995, 9996, 9997, 9998, 9999, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9987
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9988 from "module_9988" /* 9988 */;
import _mod9989 from "module_9989" /* 9989 */;
import _mod9990 from "module_9990" /* 9990 */;
import _mod9991 from "module_9991" /* 9991 */;
import _mod9992 from "module_9992" /* 9992 */;
import _mod9993 from "module_9993" /* 9993 */;
import _mod9995 from "module_9995" /* 9995 */;
import _mod9996 from "module_9996" /* 9996 */;
import _mod9997 from "module_9997" /* 9997 */;
import _mod9998 from "module_9998" /* 9998 */;
import _mod9999 from "module_9999" /* 9999 */;
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
  items = [new module_9961.default(flag2), , , , , , ];
  new module_9961.default(flag2);
  items[1] = new module_9996.default();
  new module_9996.default();
  items[2] = new module_9990.default();
  new module_9990.default();
  items[3] = new module_9995.default();
  new module_9995.default();
  items[4] = new module_9997.default();
  new module_9997.default();
  items[5] = new module_9998.default();
  new module_9998.default();
  items[6] = new module_9993.default();
  new module_9993.default();
  items1 = [new module_9991.default(), ];
  new module_9991.default();
  items1[1] = new module_9992.default();
  new module_9992.default();
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
  const _default = new module_9988.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9989.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9999.default();
  unshift3(_default2);
  return tmp;
}
const module_9988 = fn(_mod9988);
const module_9989 = fn(_mod9989);
const module_9961 = fn(_mod9961);
const module_9990 = fn(_mod9990);
const module_9991 = fn(_mod9991);
const module_9992 = fn(_mod9992);
const module_9993 = fn(_mod9993);
const module_9995 = fn(_mod9995);
const module_9996 = fn(_mod9996);
const module_9997 = fn(_mod9997);
const module_9998 = fn(_mod9998);
const module_9999 = fn(_mod9999);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9988.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9989.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9999.default();
unshift3(_default2);
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
