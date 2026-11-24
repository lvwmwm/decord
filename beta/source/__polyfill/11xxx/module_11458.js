// Module ID: 11458
// Function ID: 11459
// Dependencies: [11411, 11418, 11420, 11444, 11456, 11459, 11460, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11458
import _mod11444 from "module_11444" /* 11444 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11456 from "module_11456" /* 11456 */;
import _mod11459 from "module_11459" /* 11459 */;
import _mod11460 from "module_11460" /* 11460 */;
import _mod11462 from "module_11462" /* 11462 */;
import _mod11463 from "module_11463" /* 11463 */;
import _mod11464 from "module_11464" /* 11464 */;
import _mod11465 from "module_11465" /* 11465 */;
import _mod11466 from "module_11466" /* 11466 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11468 from "module_11468" /* 11468 */;
import _mod11469 from "module_11469" /* 11469 */;
import { Chrono } from "module_11411" /* 11411 */;

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
  items = [new module_11456.default(), , , , , , ];
  new module_11456.default();
  items[1] = new module_11444.default(flag2);
  new module_11444.default(flag2);
  items[2] = new module_11459.default();
  new module_11459.default();
  items[3] = new module_11462.default();
  new module_11462.default();
  items[4] = new module_11467.default();
  new module_11467.default();
  items[5] = new module_11460.default();
  new module_11460.default();
  items[6] = new module_11469.default();
  new module_11469.default();
  items1 = [new module_11463.default(), ];
  new module_11463.default();
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
  const _default1 = new module_11465.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11468.default();
  unshift3(_default2);
  return tmp;
}
const module_11444 = fn(_mod11444);
const module_11456 = fn(_mod11456);
const module_11459 = fn(_mod11459);
const module_11460 = fn(_mod11460);
const module_11462 = fn(_mod11462);
const module_11463 = fn(_mod11463);
const module_11464 = fn(_mod11464);
const module_11465 = fn(_mod11465);
const module_11466 = fn(_mod11466);
const module_11467 = fn(_mod11467);
const module_11468 = fn(_mod11468);
const module_11469 = fn(_mod11469);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11466.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11465.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11468.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11411").Chrono(createConfiguration(true));
const Chrono_export = require("module_11411").Chrono;

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
