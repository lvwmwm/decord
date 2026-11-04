// Module ID: 10326
// Function ID: 10327
// Dependencies: [10243, 10250, 10252, 10276, 10327, 10329, 10330, 10331, 10332, 10333, 10334, 10283]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10326
import _mod10276 from "module_10276" /* 10276 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10329 from "module_10329" /* 10329 */;
import _mod10330 from "module_10330" /* 10330 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10332 from "module_10332" /* 10332 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import { Chrono } from "module_10243" /* 10243 */;

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
  items = [new module_10276.default(flag2), , , ];
  new module_10276.default(flag2);
  items[1] = new module_10327.default();
  new module_10327.default();
  items[2] = new module_10329.default();
  new module_10329.default();
  items[3] = new module_10332.default();
  new module_10332.default();
  items1 = [new module_10330.default(), ];
  new module_10330.default();
  items1[1] = new module_10331.default();
  new module_10331.default();
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
  const _default = new module_10333.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10334.default();
  push2(_default1);
  return tmp;
}
const module_10276 = fn(_mod10276);
const module_10327 = fn(_mod10327);
const module_10329 = fn(_mod10329);
const module_10330 = fn(_mod10330);
const module_10331 = fn(_mod10331);
const module_10332 = fn(_mod10332);
const module_10333 = fn(_mod10333);
const module_10334 = fn(_mod10334);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10333.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10334.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10243").Chrono(createConfiguration(true));
const Chrono_export = require("module_10243").Chrono;

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
