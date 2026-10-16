// Module ID: 10133
// Function ID: 10134
// Dependencies: [10050, 10057, 10059, 10083, 10134, 10136, 10137, 10138, 10139, 10140, 10141, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10133
import _mod10083 from "module_10083" /* 10083 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10134 from "module_10134" /* 10134 */;
import _mod10136 from "module_10136" /* 10136 */;
import _mod10137 from "module_10137" /* 10137 */;
import _mod10138 from "module_10138" /* 10138 */;
import _mod10139 from "module_10139" /* 10139 */;
import _mod10140 from "module_10140" /* 10140 */;
import _mod10141 from "module_10141" /* 10141 */;
import { Chrono } from "module_10050" /* 10050 */;

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
  items = [new module_10083.default(flag2), , , ];
  new module_10083.default(flag2);
  items[1] = new module_10134.default();
  new module_10134.default();
  items[2] = new module_10136.default();
  new module_10136.default();
  items[3] = new module_10139.default();
  new module_10139.default();
  items1 = [new module_10137.default(), ];
  new module_10137.default();
  items1[1] = new module_10138.default();
  new module_10138.default();
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
  const _default = new module_10140.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10141.default();
  push2(_default1);
  return tmp;
}
const module_10083 = fn(_mod10083);
const module_10134 = fn(_mod10134);
const module_10136 = fn(_mod10136);
const module_10137 = fn(_mod10137);
const module_10138 = fn(_mod10138);
const module_10139 = fn(_mod10139);
const module_10140 = fn(_mod10140);
const module_10141 = fn(_mod10141);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10140.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10141.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10050").Chrono(createConfiguration(true));
const Chrono_export = require("module_10050").Chrono;

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
