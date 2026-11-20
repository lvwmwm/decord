// Module ID: 11437
// Function ID: 11438
// Dependencies: [11291, 11298, 11300, 11324, 11438, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11331]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11437
import _mod11324 from "module_11324" /* 11324 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11331 */;
import _mod11438 from "module_11438" /* 11438 */;
import _mod11440 from "module_11440" /* 11440 */;
import _mod11441 from "module_11441" /* 11441 */;
import _mod11442 from "module_11442" /* 11442 */;
import _mod11443 from "module_11443" /* 11443 */;
import _mod11444 from "module_11444" /* 11444 */;
import _mod11445 from "module_11445" /* 11445 */;
import _mod11446 from "module_11446" /* 11446 */;
import { Chrono } from "module_11291" /* 11291 */;

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
  items = [new module_11324.default(flag2), , , , ];
  new module_11324.default(flag2);
  items[1] = new module_11438.default();
  new module_11438.default();
  items[2] = new module_11440.default();
  new module_11440.default();
  items[3] = new module_11443.default();
  new module_11443.default();
  items[4] = new module_11446.default();
  new module_11446.default();
  items1 = [new module_11441.default(), ];
  new module_11441.default();
  items1[1] = new module_11442.default();
  new module_11442.default();
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
  const _default = new module_11444.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_11445.default();
  push2(_default1);
  return tmp;
}
const module_11324 = fn(_mod11324);
const module_11438 = fn(_mod11438);
const module_11440 = fn(_mod11440);
const module_11441 = fn(_mod11441);
const module_11442 = fn(_mod11442);
const module_11443 = fn(_mod11443);
const module_11444 = fn(_mod11444);
const module_11445 = fn(_mod11445);
const module_11446 = fn(_mod11446);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_11444.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_11445.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));
const Chrono_export = require("module_11291").Chrono;

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
