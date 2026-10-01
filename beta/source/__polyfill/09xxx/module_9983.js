// Module ID: 9983
// Function ID: 9984
// Dependencies: [9891, 9898, 9900, 9984, 9985, 9986, 9987, 9924, 9988, 9990, 9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999, 10000, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9983
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9984 from "module_9984" /* 9984 */;
import _mod9985 from "module_9985" /* 9985 */;
import _mod9986 from "module_9986" /* 9986 */;
import _mod9987 from "module_9987" /* 9987 */;
import _mod9988 from "module_9988" /* 9988 */;
import _mod9990 from "module_9990" /* 9990 */;
import _mod9991 from "module_9991" /* 9991 */;
import _mod9992 from "module_9992" /* 9992 */;
import _mod9993 from "module_9993" /* 9993 */;
import _mod9994 from "module_9994" /* 9994 */;
import _mod9995 from "module_9995" /* 9995 */;
import _mod9996 from "module_9996" /* 9996 */;
import _mod9997 from "module_9997" /* 9997 */;
import _mod9998 from "module_9998" /* 9998 */;
import _mod9999 from "module_9999" /* 9999 */;
import _mod10000 from "module_10000" /* 10000 */;

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
  items = [new module_9924.default(flag2), , , , , , , , , ];
  new module_9924.default(flag2);
  items[1] = new module_9988.default();
  new module_9988.default();
  items[2] = new module_9991.default();
  new module_9991.default();
  items[3] = new module_9992.default();
  new module_9992.default();
  items[4] = new module_9990.default();
  new module_9990.default();
  items[5] = new module_9995.default();
  new module_9995.default();
  items[6] = new module_9993.default();
  new module_9993.default();
  items[7] = new module_9994.default(flag);
  new module_9994.default(flag);
  items[8] = new module_9999.default(flag);
  new module_9999.default(flag);
  items[9] = new module_10000.default(flag);
  new module_10000.default(flag);
  items1 = [new module_9985.default(), ];
  new module_9985.default();
  items1[1] = new module_9984.default();
  new module_9984.default();
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
  const _default = new module_9986.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9987.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9996.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9992.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9998.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_9997.default();
  unshift6(_default5);
  return tmp;
}
const module_9984 = fn(_mod9984);
const module_9985 = fn(_mod9985);
const module_9986 = fn(_mod9986);
const module_9987 = fn(_mod9987);
const module_9924 = fn(_mod9924);
const module_9988 = fn(_mod9988);
const module_9990 = fn(_mod9990);
const module_9991 = fn(_mod9991);
const module_9992 = fn(_mod9992);
const module_9993 = fn(_mod9993);
const module_9994 = fn(_mod9994);
const module_9995 = fn(_mod9995);
const module_9996 = fn(_mod9996);
const module_9997 = fn(_mod9997);
const module_9998 = fn(_mod9998);
const module_9999 = fn(_mod9999);
const module_10000 = fn(_mod10000);
const chrono = new require("module_9891").Chrono(createCasualConfiguration());
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9891").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
