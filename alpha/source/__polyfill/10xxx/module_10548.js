// Module ID: 10548
// Function ID: 10549
// Dependencies: [10501, 10508, 10510, 10534, 10546, 10549, 10550, 10552, 10553, 10554, 10555, 10556, 10557, 10558, 10559, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10548
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10546 from "module_10546" /* 10546 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10550 from "module_10550" /* 10550 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10553 from "module_10553" /* 10553 */;
import _mod10554 from "module_10554" /* 10554 */;
import _mod10555 from "module_10555" /* 10555 */;
import _mod10556 from "module_10556" /* 10556 */;
import _mod10557 from "module_10557" /* 10557 */;
import _mod10558 from "module_10558" /* 10558 */;
import _mod10559 from "module_10559" /* 10559 */;
import { Chrono } from "module_10501" /* 10501 */;

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
  items = [new module_10546.default(), , , , , , ];
  new module_10546.default();
  items[1] = new module_10534.default(flag2);
  new module_10534.default(flag2);
  items[2] = new module_10549.default();
  new module_10549.default();
  items[3] = new module_10552.default();
  new module_10552.default();
  items[4] = new module_10557.default();
  new module_10557.default();
  items[5] = new module_10550.default();
  new module_10550.default();
  items[6] = new module_10559.default();
  new module_10559.default();
  items1 = [new module_10553.default(), ];
  new module_10553.default();
  items1[1] = new module_10554.default();
  new module_10554.default();
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
  const _default = new module_10556.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10555.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10558.default();
  unshift3(_default2);
  return tmp;
}
const module_10534 = fn(_mod10534);
const module_10546 = fn(_mod10546);
const module_10549 = fn(_mod10549);
const module_10550 = fn(_mod10550);
const module_10552 = fn(_mod10552);
const module_10553 = fn(_mod10553);
const module_10554 = fn(_mod10554);
const module_10555 = fn(_mod10555);
const module_10556 = fn(_mod10556);
const module_10557 = fn(_mod10557);
const module_10558 = fn(_mod10558);
const module_10559 = fn(_mod10559);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10556.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10555.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10558.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10501").Chrono(createConfiguration(true));
const Chrono_export = require("module_10501").Chrono;

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
