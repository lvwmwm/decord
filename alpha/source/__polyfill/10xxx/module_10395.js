// Module ID: 10395
// Function ID: 10396
// Dependencies: [10303, 10310, 10312, 10396, 10397, 10398, 10399, 10336, 10400, 10402, 10403, 10404, 10405, 10406, 10407, 10408, 10409, 10410, 10411, 10412, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10395
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10396 from "module_10396" /* 10396 */;
import _mod10397 from "module_10397" /* 10397 */;
import _mod10398 from "module_10398" /* 10398 */;
import _mod10399 from "module_10399" /* 10399 */;
import _mod10400 from "module_10400" /* 10400 */;
import _mod10402 from "module_10402" /* 10402 */;
import _mod10403 from "module_10403" /* 10403 */;
import _mod10404 from "module_10404" /* 10404 */;
import _mod10405 from "module_10405" /* 10405 */;
import _mod10406 from "module_10406" /* 10406 */;
import _mod10407 from "module_10407" /* 10407 */;
import _mod10408 from "module_10408" /* 10408 */;
import _mod10409 from "module_10409" /* 10409 */;
import _mod10410 from "module_10410" /* 10410 */;
import _mod10411 from "module_10411" /* 10411 */;
import _mod10412 from "module_10412" /* 10412 */;

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
  items = [new module_10336.default(flag2), , , , , , , , , ];
  new module_10336.default(flag2);
  items[1] = new module_10400.default();
  new module_10400.default();
  items[2] = new module_10403.default();
  new module_10403.default();
  items[3] = new module_10404.default();
  new module_10404.default();
  items[4] = new module_10402.default();
  new module_10402.default();
  items[5] = new module_10407.default();
  new module_10407.default();
  items[6] = new module_10405.default();
  new module_10405.default();
  items[7] = new module_10406.default(flag);
  new module_10406.default(flag);
  items[8] = new module_10411.default(flag);
  new module_10411.default(flag);
  items[9] = new module_10412.default(flag);
  new module_10412.default(flag);
  items1 = [new module_10397.default(), ];
  new module_10397.default();
  items1[1] = new module_10396.default();
  new module_10396.default();
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
  const _default = new module_10398.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10399.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10408.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10404.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10410.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10409.default();
  unshift6(_default5);
  return tmp;
}
const module_10396 = fn(_mod10396);
const module_10397 = fn(_mod10397);
const module_10398 = fn(_mod10398);
const module_10399 = fn(_mod10399);
const module_10336 = fn(_mod10336);
const module_10400 = fn(_mod10400);
const module_10402 = fn(_mod10402);
const module_10403 = fn(_mod10403);
const module_10404 = fn(_mod10404);
const module_10405 = fn(_mod10405);
const module_10406 = fn(_mod10406);
const module_10407 = fn(_mod10407);
const module_10408 = fn(_mod10408);
const module_10409 = fn(_mod10409);
const module_10410 = fn(_mod10410);
const module_10411 = fn(_mod10411);
const module_10412 = fn(_mod10412);
const chrono = new require("module_10303").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10303").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10303").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
