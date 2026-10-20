// Module ID: 10212
// Function ID: 10213
// Dependencies: [10129, 10136, 10138, 10162, 10213, 10215, 10216, 10217, 10218, 10219, 10220, 10169]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10212
import _mod10162 from "module_10162" /* 10162 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10169 */;
import _mod10213 from "module_10213" /* 10213 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10216 from "module_10216" /* 10216 */;
import _mod10217 from "module_10217" /* 10217 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10219 from "module_10219" /* 10219 */;
import _mod10220 from "module_10220" /* 10220 */;
import { Chrono } from "module_10129" /* 10129 */;

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
  items = [new module_10162.default(flag2), , , ];
  new module_10162.default(flag2);
  items[1] = new module_10213.default();
  new module_10213.default();
  items[2] = new module_10215.default();
  new module_10215.default();
  items[3] = new module_10218.default();
  new module_10218.default();
  items1 = [new module_10216.default(), ];
  new module_10216.default();
  items1[1] = new module_10217.default();
  new module_10217.default();
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
  const push = parsers.push;
  const _default = new module_10219.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10220.default();
  push2(_default1);
  return tmp;
}
const module_10162 = fn(_mod10162);
const module_10213 = fn(_mod10213);
const module_10215 = fn(_mod10215);
const module_10216 = fn(_mod10216);
const module_10217 = fn(_mod10217);
const module_10218 = fn(_mod10218);
const module_10219 = fn(_mod10219);
const module_10220 = fn(_mod10220);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10219.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10220.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10129").Chrono(createConfiguration(true));
const Chrono_export = require("module_10129").Chrono;

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
