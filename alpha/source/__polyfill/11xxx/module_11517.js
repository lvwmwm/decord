// Module ID: 11517
// Function ID: 11518
// Dependencies: [11425, 11432, 11434, 11518, 11519, 11520, 11521, 11458, 11522, 11524, 11525, 11526, 11527, 11528, 11529, 11530, 11531, 11532, 11533, 11534, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11517
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11518 from "module_11518" /* 11518 */;
import _mod11519 from "module_11519" /* 11519 */;
import _mod11520 from "module_11520" /* 11520 */;
import _mod11521 from "module_11521" /* 11521 */;
import _mod11522 from "module_11522" /* 11522 */;
import _mod11524 from "module_11524" /* 11524 */;
import _mod11525 from "module_11525" /* 11525 */;
import _mod11526 from "module_11526" /* 11526 */;
import _mod11527 from "module_11527" /* 11527 */;
import _mod11528 from "module_11528" /* 11528 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11530 from "module_11530" /* 11530 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;

const require = globalThis.__r;

function createConfiguration(flag) {
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
  items = [new module_11458.default(flag2), , , , , , , , , ];
  new module_11458.default(flag2);
  items[1] = new module_11522.default();
  new module_11522.default();
  items[2] = new module_11525.default();
  new module_11525.default();
  items[3] = new module_11526.default();
  new module_11526.default();
  items[4] = new module_11524.default();
  new module_11524.default();
  items[5] = new module_11529.default();
  new module_11529.default();
  items[6] = new module_11527.default();
  new module_11527.default();
  items[7] = new module_11528.default(flag);
  new module_11528.default(flag);
  items[8] = new module_11533.default(flag);
  new module_11533.default(flag);
  items[9] = new module_11534.default(flag);
  new module_11534.default(flag);
  items1 = [new module_11519.default(), ];
  new module_11519.default();
  items1[1] = new module_11518.default();
  new module_11518.default();
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
  const _default = new module_11520.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11521.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11530.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11526.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11532.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11531.default();
  unshift6(_default5);
  return tmp;
}
const module_11518 = fn(_mod11518);
const module_11519 = fn(_mod11519);
const module_11520 = fn(_mod11520);
const module_11521 = fn(_mod11521);
const module_11458 = fn(_mod11458);
const module_11522 = fn(_mod11522);
const module_11524 = fn(_mod11524);
const module_11525 = fn(_mod11525);
const module_11526 = fn(_mod11526);
const module_11527 = fn(_mod11527);
const module_11528 = fn(_mod11528);
const module_11529 = fn(_mod11529);
const module_11530 = fn(_mod11530);
const module_11531 = fn(_mod11531);
const module_11532 = fn(_mod11532);
const module_11533 = fn(_mod11533);
const module_11534 = fn(_mod11534);
const chrono = new require("module_11425").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11425").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11425").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
