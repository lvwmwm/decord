// Module ID: 11463
// Function ID: 11464
// Dependencies: [11416, 11423, 11425, 11449, 11461, 11464, 11465, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11463
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11461 from "module_11461" /* 11461 */;
import _mod11464 from "module_11464" /* 11464 */;
import _mod11465 from "module_11465" /* 11465 */;
import _mod11467 from "module_11467" /* 11467 */;
import _mod11468 from "module_11468" /* 11468 */;
import _mod11469 from "module_11469" /* 11469 */;
import _mod11470 from "module_11470" /* 11470 */;
import _mod11471 from "module_11471" /* 11471 */;
import _mod11472 from "module_11472" /* 11472 */;
import _mod11473 from "module_11473" /* 11473 */;
import _mod11474 from "module_11474" /* 11474 */;
import { Chrono } from "module_11416" /* 11416 */;

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
  items = [new module_11461.default(), , , , , , ];
  new module_11461.default();
  items[1] = new module_11449.default(flag2);
  new module_11449.default(flag2);
  items[2] = new module_11464.default();
  new module_11464.default();
  items[3] = new module_11467.default();
  new module_11467.default();
  items[4] = new module_11472.default();
  new module_11472.default();
  items[5] = new module_11465.default();
  new module_11465.default();
  items[6] = new module_11474.default();
  new module_11474.default();
  items1 = [new module_11468.default(), ];
  new module_11468.default();
  items1[1] = new module_11469.default();
  new module_11469.default();
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
  const _default = new module_11471.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11470.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11473.default();
  unshift3(_default2);
  return tmp;
}
const module_11449 = fn(_mod11449);
const module_11461 = fn(_mod11461);
const module_11464 = fn(_mod11464);
const module_11465 = fn(_mod11465);
const module_11467 = fn(_mod11467);
const module_11468 = fn(_mod11468);
const module_11469 = fn(_mod11469);
const module_11470 = fn(_mod11470);
const module_11471 = fn(_mod11471);
const module_11472 = fn(_mod11472);
const module_11473 = fn(_mod11473);
const module_11474 = fn(_mod11474);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11471.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11470.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11473.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11416").Chrono(createConfiguration(true));
const Chrono_export = require("module_11416").Chrono;

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
