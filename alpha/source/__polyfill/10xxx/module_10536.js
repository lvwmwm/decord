// Module ID: 10536
// Function ID: 10537
// Dependencies: [10453, 10460, 10462, 10486, 10537, 10539, 10540, 10541, 10542, 10543, 10544, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10536
import _mod10486 from "module_10486" /* 10486 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10539 from "module_10539" /* 10539 */;
import _mod10540 from "module_10540" /* 10540 */;
import _mod10541 from "module_10541" /* 10541 */;
import _mod10542 from "module_10542" /* 10542 */;
import _mod10543 from "module_10543" /* 10543 */;
import _mod10544 from "module_10544" /* 10544 */;
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
  items = [new module_10486.default(flag2), , , ];
  new module_10486.default(flag2);
  items[1] = new module_10537.default();
  new module_10537.default();
  items[2] = new module_10539.default();
  new module_10539.default();
  items[3] = new module_10542.default();
  new module_10542.default();
  items1 = [new module_10540.default(), ];
  new module_10540.default();
  items1[1] = new module_10541.default();
  new module_10541.default();
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
  const _default = new module_10543.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10544.default();
  push2(_default1);
  return tmp;
}
const module_10486 = fn(_mod10486);
const module_10537 = fn(_mod10537);
const module_10539 = fn(_mod10539);
const module_10540 = fn(_mod10540);
const module_10541 = fn(_mod10541);
const module_10542 = fn(_mod10542);
const module_10543 = fn(_mod10543);
const module_10544 = fn(_mod10544);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10543.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10544.default();
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
