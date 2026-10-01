// Module ID: 9950
// Function ID: 9951
// Dependencies: [9891, 9898, 9900, 9951, 9952, 9924, 9953, 9954, 9955, 9956, 9958, 9959, 9960, 9961, 9962, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9950
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9951 from "module_9951" /* 9951 */;
import _mod9952 from "module_9952" /* 9952 */;
import _mod9953 from "module_9953" /* 9953 */;
import _mod9954 from "module_9954" /* 9954 */;
import _mod9955 from "module_9955" /* 9955 */;
import _mod9956 from "module_9956" /* 9956 */;
import _mod9958 from "module_9958" /* 9958 */;
import _mod9959 from "module_9959" /* 9959 */;
import _mod9960 from "module_9960" /* 9960 */;
import _mod9961 from "module_9961" /* 9961 */;
import _mod9962 from "module_9962" /* 9962 */;
import { Chrono } from "module_9891" /* 9891 */;

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
  items = [new module_9924.default(flag2), , , , , , ];
  new module_9924.default(flag2);
  items[1] = new module_9959.default();
  new module_9959.default();
  items[2] = new module_9953.default();
  new module_9953.default();
  items[3] = new module_9958.default();
  new module_9958.default();
  items[4] = new module_9960.default();
  new module_9960.default();
  items[5] = new module_9961.default();
  new module_9961.default();
  items[6] = new module_9956.default();
  new module_9956.default();
  items1 = [new module_9954.default(), ];
  new module_9954.default();
  items1[1] = new module_9955.default();
  new module_9955.default();
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
  const _default = new module_9951.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9952.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9962.default();
  unshift3(_default2);
  return tmp;
}
const module_9951 = fn(_mod9951);
const module_9952 = fn(_mod9952);
const module_9924 = fn(_mod9924);
const module_9953 = fn(_mod9953);
const module_9954 = fn(_mod9954);
const module_9955 = fn(_mod9955);
const module_9956 = fn(_mod9956);
const module_9958 = fn(_mod9958);
const module_9959 = fn(_mod9959);
const module_9960 = fn(_mod9960);
const module_9961 = fn(_mod9961);
const module_9962 = fn(_mod9962);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9951.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9952.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9962.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));
const Chrono_export = require("module_9891").Chrono;

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
