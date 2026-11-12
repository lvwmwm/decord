// Module ID: 11450
// Function ID: 11451
// Dependencies: [11358, 11365, 11367, 11451, 11452, 11453, 11454, 11391, 11455, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11450
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11451 from "module_11451" /* 11451 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11454 from "module_11454" /* 11454 */;
import _mod11455 from "module_11455" /* 11455 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11458 from "module_11458" /* 11458 */;
import _mod11459 from "module_11459" /* 11459 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11461 from "module_11461" /* 11461 */;
import _mod11462 from "module_11462" /* 11462 */;
import _mod11463 from "module_11463" /* 11463 */;
import _mod11464 from "module_11464" /* 11464 */;
import _mod11465 from "module_11465" /* 11465 */;
import _mod11466 from "module_11466" /* 11466 */;
import _mod11467 from "module_11467" /* 11467 */;

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
  items = [new module_11391.default(flag2), , , , , , , , , ];
  new module_11391.default(flag2);
  items[1] = new module_11455.default();
  new module_11455.default();
  items[2] = new module_11458.default();
  new module_11458.default();
  items[3] = new module_11459.default();
  new module_11459.default();
  items[4] = new module_11457.default();
  new module_11457.default();
  items[5] = new module_11462.default();
  new module_11462.default();
  items[6] = new module_11460.default();
  new module_11460.default();
  items[7] = new module_11461.default(flag);
  new module_11461.default(flag);
  items[8] = new module_11466.default(flag);
  new module_11466.default(flag);
  items[9] = new module_11467.default(flag);
  new module_11467.default(flag);
  items1 = [new module_11452.default(), ];
  new module_11452.default();
  items1[1] = new module_11451.default();
  new module_11451.default();
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
  const _default = new module_11453.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11454.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11463.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11459.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11465.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11464.default();
  unshift6(_default5);
  return tmp;
}
const module_11451 = fn(_mod11451);
const module_11452 = fn(_mod11452);
const module_11453 = fn(_mod11453);
const module_11454 = fn(_mod11454);
const module_11391 = fn(_mod11391);
const module_11455 = fn(_mod11455);
const module_11457 = fn(_mod11457);
const module_11458 = fn(_mod11458);
const module_11459 = fn(_mod11459);
const module_11460 = fn(_mod11460);
const module_11461 = fn(_mod11461);
const module_11462 = fn(_mod11462);
const module_11463 = fn(_mod11463);
const module_11464 = fn(_mod11464);
const module_11465 = fn(_mod11465);
const module_11466 = fn(_mod11466);
const module_11467 = fn(_mod11467);
const chrono = new require("module_11358").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11358").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11358").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
