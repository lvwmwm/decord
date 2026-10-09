// Module ID: 9942
// Function ID: 9943
// Dependencies: [9943, 9945, 9947, 9948, 9949, 9950, 9951, 9952, 9953, 9954, 9955, 9786, 9793, 9795, 9819, 9956, 9831, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9942
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9831 from "module_9831" /* 9831 */;
import _mod9943 from "module_9943" /* 9943 */;
import _mod9945 from "module_9945" /* 9945 */;
import _mod9947 from "module_9947" /* 9947 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9949 from "module_9949" /* 9949 */;
import _mod9950 from "module_9950" /* 9950 */;
import _mod9951 from "module_9951" /* 9951 */;
import _mod9952 from "module_9952" /* 9952 */;
import _mod9953 from "module_9953" /* 9953 */;
import _mod9954 from "module_9954" /* 9954 */;
import _mod9955 from "module_9955" /* 9955 */;
import _mod9956 from "module_9956" /* 9956 */;
import { Chrono } from "module_9786" /* 9786 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9831.default(), , , , , , ];
  new module_9831.default();
  items[1] = new module_9819.default(true);
  new module_9819.default(true);
  items[2] = new module_9943.default();
  new module_9943.default();
  items[3] = new module_9945.default();
  new module_9945.default();
  items[4] = new module_9954.default();
  new module_9954.default();
  items[5] = new module_9948.default(flag);
  new module_9948.default(flag);
  items[6] = new module_9949.default();
  new module_9949.default();
  items1 = [new module_9951.default(), ];
  new module_9951.default();
  items1[1] = new module_9950.default();
  new module_9950.default();
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
  const _default = new module_9952.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9953.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9947.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9955.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9956.default();
  unshift5(_default4);
  return tmp;
}
const module_9943 = fn(_mod9943);
const module_9945 = fn(_mod9945);
const module_9947 = fn(_mod9947);
const module_9948 = fn(_mod9948);
const module_9949 = fn(_mod9949);
const module_9950 = fn(_mod9950);
const module_9951 = fn(_mod9951);
const module_9952 = fn(_mod9952);
const module_9953 = fn(_mod9953);
const module_9954 = fn(_mod9954);
const module_9955 = fn(_mod9955);
const module_9819 = fn(_mod9819);
const module_9956 = fn(_mod9956);
const module_9831 = fn(_mod9831);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9952.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9953.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9947.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9955.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9956.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));
const Chrono_export = require("module_9786").Chrono;

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
