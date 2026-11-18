// Module ID: 11463
// Function ID: 11464
// Dependencies: [11371, 11378, 11380, 11464, 11465, 11466, 11467, 11404, 11468, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11463
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11464 from "module_11464" /* 11464 */;
import _mod11465 from "module_11465" /* 11465 */;
import _mod11466 from "module_11466" /* 11466 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11468 from "module_11468" /* 11468 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11472 from "module_11472" /* 11472 */;
import _mod11473 from "module_11473" /* 11473 */;
import _mod11474 from "module_11474" /* 11474 */;
import _mod11475 from "module_11475" /* 11475 */;
import _mod11476 from "module_11476" /* 11476 */;
import _mod11477 from "module_11477" /* 11477 */;
import _mod11478 from "module_11478" /* 11478 */;
import _mod11479 from "module_11479" /* 11479 */;
import _mod11480 from "module_11480" /* 11480 */;

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
  items = [new module_11404.default(flag2), , , , , , , , , ];
  new module_11404.default(flag2);
  items[1] = new module_11468.default();
  new module_11468.default();
  items[2] = new module_11471.default();
  new module_11471.default();
  items[3] = new module_11472.default();
  new module_11472.default();
  items[4] = new module_11470.default();
  new module_11470.default();
  items[5] = new module_11475.default();
  new module_11475.default();
  items[6] = new module_11473.default();
  new module_11473.default();
  items[7] = new module_11474.default(flag);
  new module_11474.default(flag);
  items[8] = new module_11479.default(flag);
  new module_11479.default(flag);
  items[9] = new module_11480.default(flag);
  new module_11480.default(flag);
  items1 = [new module_11465.default(), ];
  new module_11465.default();
  items1[1] = new module_11464.default();
  new module_11464.default();
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
  const _default = new module_11466.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11467.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11476.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11472.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11478.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11477.default();
  unshift6(_default5);
  return tmp;
}
const module_11464 = fn(_mod11464);
const module_11465 = fn(_mod11465);
const module_11466 = fn(_mod11466);
const module_11467 = fn(_mod11467);
const module_11404 = fn(_mod11404);
const module_11468 = fn(_mod11468);
const module_11470 = fn(_mod11470);
const module_11471 = fn(_mod11471);
const module_11472 = fn(_mod11472);
const module_11473 = fn(_mod11473);
const module_11474 = fn(_mod11474);
const module_11475 = fn(_mod11475);
const module_11476 = fn(_mod11476);
const module_11477 = fn(_mod11477);
const module_11478 = fn(_mod11478);
const module_11479 = fn(_mod11479);
const module_11480 = fn(_mod11480);
const chrono = new require("module_11371").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11371").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11371").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
