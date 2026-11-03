// Module ID: 10599
// Function ID: 10600
// Dependencies: [10453, 10460, 10462, 10486, 10600, 10602, 10603, 10604, 10605, 10606, 10607, 10608, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10599
import _mod10486 from "module_10486" /* 10486 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10600 from "module_10600" /* 10600 */;
import _mod10602 from "module_10602" /* 10602 */;
import _mod10603 from "module_10603" /* 10603 */;
import _mod10604 from "module_10604" /* 10604 */;
import _mod10605 from "module_10605" /* 10605 */;
import _mod10606 from "module_10606" /* 10606 */;
import _mod10607 from "module_10607" /* 10607 */;
import _mod10608 from "module_10608" /* 10608 */;
import { Chrono } from "module_10453" /* 10453 */;

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
  items = [new module_10486.default(flag2), , , , ];
  new module_10486.default(flag2);
  items[1] = new module_10600.default();
  new module_10600.default();
  items[2] = new module_10602.default();
  new module_10602.default();
  items[3] = new module_10605.default();
  new module_10605.default();
  items[4] = new module_10608.default();
  new module_10608.default();
  items1 = [new module_10603.default(), ];
  new module_10603.default();
  items1[1] = new module_10604.default();
  new module_10604.default();
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
  const push = parsers.push;
  const _default = new module_10606.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10607.default();
  push2(_default1);
  return tmp;
}
const module_10486 = fn(_mod10486);
const module_10600 = fn(_mod10600);
const module_10602 = fn(_mod10602);
const module_10603 = fn(_mod10603);
const module_10604 = fn(_mod10604);
const module_10605 = fn(_mod10605);
const module_10606 = fn(_mod10606);
const module_10607 = fn(_mod10607);
const module_10608 = fn(_mod10608);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10606.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10607.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration(true));
const Chrono_export = require("module_10453").Chrono;

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
