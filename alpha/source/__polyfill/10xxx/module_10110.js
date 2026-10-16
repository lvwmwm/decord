// Module ID: 10110
// Function ID: 10111
// Dependencies: [10051, 10058, 10060, 10111, 10112, 10084, 10113, 10114, 10115, 10116, 10118, 10119, 10120, 10121, 10122, 10091]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10110
import _mod10084 from "module_10084" /* 10084 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10111 from "module_10111" /* 10111 */;
import _mod10112 from "module_10112" /* 10112 */;
import _mod10113 from "module_10113" /* 10113 */;
import _mod10114 from "module_10114" /* 10114 */;
import _mod10115 from "module_10115" /* 10115 */;
import _mod10116 from "module_10116" /* 10116 */;
import _mod10118 from "module_10118" /* 10118 */;
import _mod10119 from "module_10119" /* 10119 */;
import _mod10120 from "module_10120" /* 10120 */;
import _mod10121 from "module_10121" /* 10121 */;
import _mod10122 from "module_10122" /* 10122 */;
import { Chrono } from "module_10051" /* 10051 */;

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
  items = [new module_10084.default(flag2), , , , , , ];
  new module_10084.default(flag2);
  items[1] = new module_10119.default();
  new module_10119.default();
  items[2] = new module_10113.default();
  new module_10113.default();
  items[3] = new module_10118.default();
  new module_10118.default();
  items[4] = new module_10120.default();
  new module_10120.default();
  items[5] = new module_10121.default();
  new module_10121.default();
  items[6] = new module_10116.default();
  new module_10116.default();
  items1 = [new module_10114.default(), ];
  new module_10114.default();
  items1[1] = new module_10115.default();
  new module_10115.default();
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
  const _default = new module_10111.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10112.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10122.default();
  unshift3(_default2);
  return tmp;
}
const module_10111 = fn(_mod10111);
const module_10112 = fn(_mod10112);
const module_10084 = fn(_mod10084);
const module_10113 = fn(_mod10113);
const module_10114 = fn(_mod10114);
const module_10115 = fn(_mod10115);
const module_10116 = fn(_mod10116);
const module_10118 = fn(_mod10118);
const module_10119 = fn(_mod10119);
const module_10120 = fn(_mod10120);
const module_10121 = fn(_mod10121);
const module_10122 = fn(_mod10122);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10111.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10112.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10122.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10051").Chrono(createConfiguration(true));
const Chrono_export = require("module_10051").Chrono;

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
