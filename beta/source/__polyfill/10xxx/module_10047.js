// Module ID: 10047
// Function ID: 10048
// Dependencies: [10048, 10050, 10052, 10053, 10054, 10055, 10056, 10057, 10058, 10059, 10060, 9891, 9898, 9900, 9924, 10061, 9936, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10047
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod10048 from "module_10048" /* 10048 */;
import _mod10050 from "module_10050" /* 10050 */;
import _mod10052 from "module_10052" /* 10052 */;
import _mod10053 from "module_10053" /* 10053 */;
import _mod10054 from "module_10054" /* 10054 */;
import _mod10055 from "module_10055" /* 10055 */;
import _mod10056 from "module_10056" /* 10056 */;
import _mod10057 from "module_10057" /* 10057 */;
import _mod10058 from "module_10058" /* 10058 */;
import _mod10059 from "module_10059" /* 10059 */;
import _mod10060 from "module_10060" /* 10060 */;
import _mod10061 from "module_10061" /* 10061 */;
import { Chrono } from "module_9891" /* 9891 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9936.default(), , , , , , ];
  new module_9936.default();
  items[1] = new module_9924.default(true);
  new module_9924.default(true);
  items[2] = new module_10048.default();
  new module_10048.default();
  items[3] = new module_10050.default();
  new module_10050.default();
  items[4] = new module_10059.default();
  new module_10059.default();
  items[5] = new module_10053.default(flag);
  new module_10053.default(flag);
  items[6] = new module_10054.default();
  new module_10054.default();
  items1 = [new module_10056.default(), ];
  new module_10056.default();
  items1[1] = new module_10055.default();
  new module_10055.default();
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
  const _default = new module_10057.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10058.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10052.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10060.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10061.default();
  unshift5(_default4);
  return tmp;
}
const module_10048 = fn(_mod10048);
const module_10050 = fn(_mod10050);
const module_10052 = fn(_mod10052);
const module_10053 = fn(_mod10053);
const module_10054 = fn(_mod10054);
const module_10055 = fn(_mod10055);
const module_10056 = fn(_mod10056);
const module_10057 = fn(_mod10057);
const module_10058 = fn(_mod10058);
const module_10059 = fn(_mod10059);
const module_10060 = fn(_mod10060);
const module_9924 = fn(_mod9924);
const module_10061 = fn(_mod10061);
const module_9936 = fn(_mod9936);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10057.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10058.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10052.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10060.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10061.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));
const Chrono_export = require("module_9891").Chrono;

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
