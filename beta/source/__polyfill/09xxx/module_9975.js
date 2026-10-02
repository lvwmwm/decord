// Module ID: 9975
// Function ID: 9976
// Dependencies: [9928, 9935, 9937, 9961, 9973, 9976, 9977, 9979, 9980, 9981, 9982, 9983, 9984, 9985, 9986, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9975
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod9973 from "module_9973" /* 9973 */;
import _mod9976 from "module_9976" /* 9976 */;
import _mod9977 from "module_9977" /* 9977 */;
import _mod9979 from "module_9979" /* 9979 */;
import _mod9980 from "module_9980" /* 9980 */;
import _mod9981 from "module_9981" /* 9981 */;
import _mod9982 from "module_9982" /* 9982 */;
import _mod9983 from "module_9983" /* 9983 */;
import _mod9984 from "module_9984" /* 9984 */;
import _mod9985 from "module_9985" /* 9985 */;
import _mod9986 from "module_9986" /* 9986 */;
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
  items = [new module_9973.default(), , , , , , ];
  new module_9973.default();
  items[1] = new module_9961.default(flag2);
  new module_9961.default(flag2);
  items[2] = new module_9976.default();
  new module_9976.default();
  items[3] = new module_9979.default();
  new module_9979.default();
  items[4] = new module_9984.default();
  new module_9984.default();
  items[5] = new module_9977.default();
  new module_9977.default();
  items[6] = new module_9986.default();
  new module_9986.default();
  items1 = [new module_9980.default(), ];
  new module_9980.default();
  items1[1] = new module_9981.default();
  new module_9981.default();
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
  const _default = new module_9983.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9982.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9985.default();
  unshift3(_default2);
  return tmp;
}
const module_9961 = fn(_mod9961);
const module_9973 = fn(_mod9973);
const module_9976 = fn(_mod9976);
const module_9977 = fn(_mod9977);
const module_9979 = fn(_mod9979);
const module_9980 = fn(_mod9980);
const module_9981 = fn(_mod9981);
const module_9982 = fn(_mod9982);
const module_9983 = fn(_mod9983);
const module_9984 = fn(_mod9984);
const module_9985 = fn(_mod9985);
const module_9986 = fn(_mod9986);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9983.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9982.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9985.default();
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
