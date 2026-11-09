// Module ID: 10489
// Function ID: 10490
// Dependencies: [10442, 10449, 10451, 10475, 10487, 10490, 10491, 10493, 10494, 10495, 10496, 10497, 10498, 10499, 10500, 10482]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10489
import _mod10475 from "module_10475" /* 10475 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10494 from "module_10494" /* 10494 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10499 from "module_10499" /* 10499 */;
import _mod10500 from "module_10500" /* 10500 */;
import { Chrono } from "module_10442" /* 10442 */;

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
  items = [new module_10487.default(), , , , , , ];
  new module_10487.default();
  items[1] = new module_10475.default(flag2);
  new module_10475.default(flag2);
  items[2] = new module_10490.default();
  new module_10490.default();
  items[3] = new module_10493.default();
  new module_10493.default();
  items[4] = new module_10498.default();
  new module_10498.default();
  items[5] = new module_10491.default();
  new module_10491.default();
  items[6] = new module_10500.default();
  new module_10500.default();
  items1 = [new module_10494.default(), ];
  new module_10494.default();
  items1[1] = new module_10495.default();
  new module_10495.default();
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
  const _default = new module_10497.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10496.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10499.default();
  unshift3(_default2);
  return tmp;
}
const module_10475 = fn(_mod10475);
const module_10487 = fn(_mod10487);
const module_10490 = fn(_mod10490);
const module_10491 = fn(_mod10491);
const module_10493 = fn(_mod10493);
const module_10494 = fn(_mod10494);
const module_10495 = fn(_mod10495);
const module_10496 = fn(_mod10496);
const module_10497 = fn(_mod10497);
const module_10498 = fn(_mod10498);
const module_10499 = fn(_mod10499);
const module_10500 = fn(_mod10500);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10497.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10496.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10499.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10442").Chrono(createConfiguration(true));
const Chrono_export = require("module_10442").Chrono;

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
