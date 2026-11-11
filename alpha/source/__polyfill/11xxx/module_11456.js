// Module ID: 11456
// Function ID: 11457
// Dependencies: [11364, 11371, 11373, 11457, 11458, 11459, 11460, 11397, 11461, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11456
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11458 from "module_11458" /* 11458 */;
import _mod11459 from "module_11459" /* 11459 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11461 from "module_11461" /* 11461 */;
import _mod11463 from "module_11463" /* 11463 */;
import _mod11464 from "module_11464" /* 11464 */;
import _mod11465 from "module_11465" /* 11465 */;
import _mod11466 from "module_11466" /* 11466 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11468 from "module_11468" /* 11468 */;
import _mod11469 from "module_11469" /* 11469 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11472 from "module_11472" /* 11472 */;
import _mod11473 from "module_11473" /* 11473 */;

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
  items = [new module_11397.default(flag2), , , , , , , , , ];
  new module_11397.default(flag2);
  items[1] = new module_11461.default();
  new module_11461.default();
  items[2] = new module_11464.default();
  new module_11464.default();
  items[3] = new module_11465.default();
  new module_11465.default();
  items[4] = new module_11463.default();
  new module_11463.default();
  items[5] = new module_11468.default();
  new module_11468.default();
  items[6] = new module_11466.default();
  new module_11466.default();
  items[7] = new module_11467.default(flag);
  new module_11467.default(flag);
  items[8] = new module_11472.default(flag);
  new module_11472.default(flag);
  items[9] = new module_11473.default(flag);
  new module_11473.default(flag);
  items1 = [new module_11458.default(), ];
  new module_11458.default();
  items1[1] = new module_11457.default();
  new module_11457.default();
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
  const _default = new module_11459.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11460.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11469.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11465.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11471.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11470.default();
  unshift6(_default5);
  return tmp;
}
const module_11457 = fn(_mod11457);
const module_11458 = fn(_mod11458);
const module_11459 = fn(_mod11459);
const module_11460 = fn(_mod11460);
const module_11397 = fn(_mod11397);
const module_11461 = fn(_mod11461);
const module_11463 = fn(_mod11463);
const module_11464 = fn(_mod11464);
const module_11465 = fn(_mod11465);
const module_11466 = fn(_mod11466);
const module_11467 = fn(_mod11467);
const module_11468 = fn(_mod11468);
const module_11469 = fn(_mod11469);
const module_11470 = fn(_mod11470);
const module_11471 = fn(_mod11471);
const module_11472 = fn(_mod11472);
const module_11473 = fn(_mod11473);
const chrono = new require("module_11364").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11364").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11364").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
