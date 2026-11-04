// Module ID: 10584
// Function ID: 10585
// Dependencies: [10501, 10508, 10510, 10534, 10585, 10587, 10588, 10589, 10590, 10591, 10592, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10584
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10585 from "module_10585" /* 10585 */;
import _mod10587 from "module_10587" /* 10587 */;
import _mod10588 from "module_10588" /* 10588 */;
import _mod10589 from "module_10589" /* 10589 */;
import _mod10590 from "module_10590" /* 10590 */;
import _mod10591 from "module_10591" /* 10591 */;
import _mod10592 from "module_10592" /* 10592 */;
import { Chrono } from "module_10501" /* 10501 */;

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
  items = [new module_10534.default(flag2), , , ];
  new module_10534.default(flag2);
  items[1] = new module_10585.default();
  new module_10585.default();
  items[2] = new module_10587.default();
  new module_10587.default();
  items[3] = new module_10590.default();
  new module_10590.default();
  items1 = [new module_10588.default(), ];
  new module_10588.default();
  items1[1] = new module_10589.default();
  new module_10589.default();
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
  const _default = new module_10591.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10592.default();
  push2(_default1);
  return tmp;
}
const module_10534 = fn(_mod10534);
const module_10585 = fn(_mod10585);
const module_10587 = fn(_mod10587);
const module_10588 = fn(_mod10588);
const module_10589 = fn(_mod10589);
const module_10590 = fn(_mod10590);
const module_10591 = fn(_mod10591);
const module_10592 = fn(_mod10592);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10591.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10592.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10501").Chrono(createConfiguration(true));
const Chrono_export = require("module_10501").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
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
