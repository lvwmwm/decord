// Module ID: 11562
// Function ID: 11563
// Dependencies: [11416, 11423, 11425, 11449, 11563, 11565, 11566, 11567, 11568, 11569, 11570, 11571, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11562
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11563 from "module_11563" /* 11563 */;
import _mod11565 from "module_11565" /* 11565 */;
import _mod11566 from "module_11566" /* 11566 */;
import _mod11567 from "module_11567" /* 11567 */;
import _mod11568 from "module_11568" /* 11568 */;
import _mod11569 from "module_11569" /* 11569 */;
import _mod11570 from "module_11570" /* 11570 */;
import _mod11571 from "module_11571" /* 11571 */;
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
  items = [new module_11449.default(flag2), , , , ];
  new module_11449.default(flag2);
  items[1] = new module_11563.default();
  new module_11563.default();
  items[2] = new module_11565.default();
  new module_11565.default();
  items[3] = new module_11568.default();
  new module_11568.default();
  items[4] = new module_11571.default();
  new module_11571.default();
  items1 = [new module_11566.default(), ];
  new module_11566.default();
  items1[1] = new module_11567.default();
  new module_11567.default();
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
  const _default = new module_11569.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11570.default();
  push2(_default1);
  return tmp;
}
const module_11449 = fn(_mod11449);
const module_11563 = fn(_mod11563);
const module_11565 = fn(_mod11565);
const module_11566 = fn(_mod11566);
const module_11567 = fn(_mod11567);
const module_11568 = fn(_mod11568);
const module_11569 = fn(_mod11569);
const module_11570 = fn(_mod11570);
const module_11571 = fn(_mod11571);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11569.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11570.default();
push2(_default1);
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
