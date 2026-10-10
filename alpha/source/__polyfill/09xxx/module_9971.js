// Module ID: 9971
// Function ID: 9972
// Dependencies: [9972, 9974, 9976, 9977, 9978, 9979, 9980, 9981, 9982, 9983, 9984, 9815, 9822, 9824, 9848, 9985, 9860, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9971
import _mod9848 from "module_9848" /* 9848 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9860 from "module_9860" /* 9860 */;
import _mod9972 from "module_9972" /* 9972 */;
import _mod9974 from "module_9974" /* 9974 */;
import _mod9976 from "module_9976" /* 9976 */;
import _mod9977 from "module_9977" /* 9977 */;
import _mod9978 from "module_9978" /* 9978 */;
import _mod9979 from "module_9979" /* 9979 */;
import _mod9980 from "module_9980" /* 9980 */;
import _mod9981 from "module_9981" /* 9981 */;
import _mod9982 from "module_9982" /* 9982 */;
import _mod9983 from "module_9983" /* 9983 */;
import _mod9984 from "module_9984" /* 9984 */;
import _mod9985 from "module_9985" /* 9985 */;
import { Chrono } from "module_9815" /* 9815 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9860.default(), , , , , , ];
  new module_9860.default();
  items[1] = new module_9848.default(true);
  new module_9848.default(true);
  items[2] = new module_9972.default();
  new module_9972.default();
  items[3] = new module_9974.default();
  new module_9974.default();
  items[4] = new module_9983.default();
  new module_9983.default();
  items[5] = new module_9977.default(flag);
  new module_9977.default(flag);
  items[6] = new module_9978.default();
  new module_9978.default();
  items1 = [new module_9980.default(), ];
  new module_9980.default();
  items1[1] = new module_9979.default();
  new module_9979.default();
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
  const _default = new module_9981.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9982.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9976.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9984.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9985.default();
  unshift5(_default4);
  return tmp;
}
const module_9972 = fn(_mod9972);
const module_9974 = fn(_mod9974);
const module_9976 = fn(_mod9976);
const module_9977 = fn(_mod9977);
const module_9978 = fn(_mod9978);
const module_9979 = fn(_mod9979);
const module_9980 = fn(_mod9980);
const module_9981 = fn(_mod9981);
const module_9982 = fn(_mod9982);
const module_9983 = fn(_mod9983);
const module_9984 = fn(_mod9984);
const module_9848 = fn(_mod9848);
const module_9985 = fn(_mod9985);
const module_9860 = fn(_mod9860);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9981.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9982.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9976.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9984.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9985.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9815").Chrono(createConfiguration(true));
const Chrono_export = require("module_9815").Chrono;

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
