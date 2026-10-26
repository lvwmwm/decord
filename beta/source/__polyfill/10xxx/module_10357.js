// Module ID: 10357
// Function ID: 10358
// Dependencies: [10211, 10218, 10220, 10244, 10358, 10360, 10361, 10362, 10363, 10364, 10365, 10366, 10251]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10357
import _mod10244 from "module_10244" /* 10244 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10251 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10361 from "module_10361" /* 10361 */;
import _mod10362 from "module_10362" /* 10362 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import { Chrono } from "module_10211" /* 10211 */;

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
  items = [new module_10244.default(flag2), , , , ];
  new module_10244.default(flag2);
  items[1] = new module_10358.default();
  new module_10358.default();
  items[2] = new module_10360.default();
  new module_10360.default();
  items[3] = new module_10363.default();
  new module_10363.default();
  items[4] = new module_10366.default();
  new module_10366.default();
  items1 = [new module_10361.default(), ];
  new module_10361.default();
  items1[1] = new module_10362.default();
  new module_10362.default();
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
  const _default = new module_10364.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10365.default();
  push2(_default1);
  return tmp;
}
const module_10244 = fn(_mod10244);
const module_10358 = fn(_mod10358);
const module_10360 = fn(_mod10360);
const module_10361 = fn(_mod10361);
const module_10362 = fn(_mod10362);
const module_10363 = fn(_mod10363);
const module_10364 = fn(_mod10364);
const module_10365 = fn(_mod10365);
const module_10366 = fn(_mod10366);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10364.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10365.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10211").Chrono(createConfiguration(true));
const Chrono_export = require("module_10211").Chrono;

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
