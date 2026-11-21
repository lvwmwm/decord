// Module ID: 11542
// Function ID: 11543
// Dependencies: [11543, 11545, 11547, 11548, 11549, 11550, 11551, 11552, 11553, 11554, 11555, 11411, 11418, 11420, 11444, 11556, 11451]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11542
import _mod11444 from "module_11444" /* 11444 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11451 */;
import _mod11543 from "module_11543" /* 11543 */;
import _mod11545 from "module_11545" /* 11545 */;
import _mod11547 from "module_11547" /* 11547 */;
import _mod11548 from "module_11548" /* 11548 */;
import _mod11549 from "module_11549" /* 11549 */;
import _mod11550 from "module_11550" /* 11550 */;
import _mod11551 from "module_11551" /* 11551 */;
import _mod11552 from "module_11552" /* 11552 */;
import _mod11553 from "module_11553" /* 11553 */;
import _mod11554 from "module_11554" /* 11554 */;
import _mod11555 from "module_11555" /* 11555 */;
import _mod11556 from "module_11556" /* 11556 */;
import { Chrono } from "module_11411" /* 11411 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_11444.default(true), , , , , ];
  new module_11444.default(true);
  items[1] = new module_11543.default();
  new module_11543.default();
  items[2] = new module_11545.default();
  new module_11545.default();
  items[3] = new module_11554.default();
  new module_11554.default();
  items[4] = new module_11548.default(flag);
  new module_11548.default(flag);
  items[5] = new module_11549.default();
  new module_11549.default();
  items1 = [new module_11551.default(), ];
  new module_11551.default();
  items1[1] = new module_11550.default();
  new module_11550.default();
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
  const _default = new module_11552.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11553.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11547.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11555.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11556.default();
  unshift5(_default4);
  return tmp;
}
const module_11543 = fn(_mod11543);
const module_11545 = fn(_mod11545);
const module_11547 = fn(_mod11547);
const module_11548 = fn(_mod11548);
const module_11549 = fn(_mod11549);
const module_11550 = fn(_mod11550);
const module_11551 = fn(_mod11551);
const module_11552 = fn(_mod11552);
const module_11553 = fn(_mod11553);
const module_11554 = fn(_mod11554);
const module_11555 = fn(_mod11555);
const module_11444 = fn(_mod11444);
const module_11556 = fn(_mod11556);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11552.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11553.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11547.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11555.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11556.default();
unshift5(_default4);
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
