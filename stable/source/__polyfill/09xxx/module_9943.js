// Module ID: 9943
// Function ID: 9944
// Dependencies: [9944, 9946, 9948, 9949, 9950, 9951, 9952, 9953, 9954, 9955, 9956, 9812, 9819, 9821, 9845, 9957, 9852]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9943
import _mod9845 from "module_9845" /* 9845 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9852 */;
import _mod9944 from "module_9944" /* 9944 */;
import _mod9946 from "module_9946" /* 9946 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9949 from "module_9949" /* 9949 */;
import _mod9950 from "module_9950" /* 9950 */;
import _mod9951 from "module_9951" /* 9951 */;
import _mod9952 from "module_9952" /* 9952 */;
import _mod9953 from "module_9953" /* 9953 */;
import _mod9954 from "module_9954" /* 9954 */;
import _mod9955 from "module_9955" /* 9955 */;
import _mod9956 from "module_9956" /* 9956 */;
import _mod9957 from "module_9957" /* 9957 */;
import { Chrono } from "module_9812" /* 9812 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9845.default(true), , , , , ];
  new module_9845.default(true);
  items[1] = new module_9944.default();
  new module_9944.default();
  items[2] = new module_9946.default();
  new module_9946.default();
  items[3] = new module_9955.default();
  new module_9955.default();
  items[4] = new module_9949.default(flag);
  new module_9949.default(flag);
  items[5] = new module_9950.default();
  new module_9950.default();
  items1 = [new module_9952.default(), ];
  new module_9952.default();
  items1[1] = new module_9951.default();
  new module_9951.default();
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
  const _default = new module_9953.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9954.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9948.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9956.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9957.default();
  unshift5(_default4);
  return tmp;
}
const module_9944 = fn(_mod9944);
const module_9946 = fn(_mod9946);
const module_9948 = fn(_mod9948);
const module_9949 = fn(_mod9949);
const module_9950 = fn(_mod9950);
const module_9951 = fn(_mod9951);
const module_9952 = fn(_mod9952);
const module_9953 = fn(_mod9953);
const module_9954 = fn(_mod9954);
const module_9955 = fn(_mod9955);
const module_9956 = fn(_mod9956);
const module_9845 = fn(_mod9845);
const module_9957 = fn(_mod9957);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9953.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9954.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9948.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9956.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9957.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9812").Chrono(createConfiguration(true));
const Chrono_export = require("module_9812").Chrono;

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
