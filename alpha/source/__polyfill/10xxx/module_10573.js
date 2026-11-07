// Module ID: 10573
// Function ID: 10574
// Dependencies: [10574, 10576, 10578, 10579, 10580, 10581, 10582, 10583, 10584, 10585, 10586, 10442, 10449, 10451, 10475, 10587, 10482]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10573
import _mod10475 from "module_10475" /* 10475 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10482 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10578 from "module_10578" /* 10578 */;
import _mod10579 from "module_10579" /* 10579 */;
import _mod10580 from "module_10580" /* 10580 */;
import _mod10581 from "module_10581" /* 10581 */;
import _mod10582 from "module_10582" /* 10582 */;
import _mod10583 from "module_10583" /* 10583 */;
import _mod10584 from "module_10584" /* 10584 */;
import _mod10585 from "module_10585" /* 10585 */;
import _mod10586 from "module_10586" /* 10586 */;
import _mod10587 from "module_10587" /* 10587 */;
import { Chrono } from "module_10442" /* 10442 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10475.default(true), , , , , ];
  new module_10475.default(true);
  items[1] = new module_10574.default();
  new module_10574.default();
  items[2] = new module_10576.default();
  new module_10576.default();
  items[3] = new module_10585.default();
  new module_10585.default();
  items[4] = new module_10579.default(flag);
  new module_10579.default(flag);
  items[5] = new module_10580.default();
  new module_10580.default();
  items1 = [new module_10582.default(), ];
  new module_10582.default();
  items1[1] = new module_10581.default();
  new module_10581.default();
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10583.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10584.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10578.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10586.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10587.default();
  unshift5(_default4);
  return tmp;
}
const module_10574 = fn(_mod10574);
const module_10576 = fn(_mod10576);
const module_10578 = fn(_mod10578);
const module_10579 = fn(_mod10579);
const module_10580 = fn(_mod10580);
const module_10581 = fn(_mod10581);
const module_10582 = fn(_mod10582);
const module_10583 = fn(_mod10583);
const module_10584 = fn(_mod10584);
const module_10585 = fn(_mod10585);
const module_10586 = fn(_mod10586);
const module_10475 = fn(_mod10475);
const module_10587 = fn(_mod10587);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10583.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10584.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10578.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10586.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10587.default();
unshift5(_default4);
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
