// Module ID: 11430
// Function ID: 11431
// Dependencies: [11371, 11378, 11380, 11431, 11432, 11404, 11433, 11434, 11435, 11436, 11438, 11439, 11440, 11441, 11442, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11430
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11431 from "module_11431" /* 11431 */;
import _mod11432 from "module_11432" /* 11432 */;
import _mod11433 from "module_11433" /* 11433 */;
import _mod11434 from "module_11434" /* 11434 */;
import _mod11435 from "module_11435" /* 11435 */;
import _mod11436 from "module_11436" /* 11436 */;
import _mod11438 from "module_11438" /* 11438 */;
import _mod11439 from "module_11439" /* 11439 */;
import _mod11440 from "module_11440" /* 11440 */;
import _mod11441 from "module_11441" /* 11441 */;
import _mod11442 from "module_11442" /* 11442 */;
import { Chrono } from "module_11371" /* 11371 */;

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
  items = [new module_11404.default(flag2), , , , , , ];
  new module_11404.default(flag2);
  items[1] = new module_11439.default();
  new module_11439.default();
  items[2] = new module_11433.default();
  new module_11433.default();
  items[3] = new module_11438.default();
  new module_11438.default();
  items[4] = new module_11440.default();
  new module_11440.default();
  items[5] = new module_11441.default();
  new module_11441.default();
  items[6] = new module_11436.default();
  new module_11436.default();
  items1 = [new module_11434.default(), ];
  new module_11434.default();
  items1[1] = new module_11435.default();
  new module_11435.default();
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
  const _default = new module_11431.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11432.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11442.default();
  unshift3(_default2);
  return tmp;
}
const module_11431 = fn(_mod11431);
const module_11432 = fn(_mod11432);
const module_11404 = fn(_mod11404);
const module_11433 = fn(_mod11433);
const module_11434 = fn(_mod11434);
const module_11435 = fn(_mod11435);
const module_11436 = fn(_mod11436);
const module_11438 = fn(_mod11438);
const module_11439 = fn(_mod11439);
const module_11440 = fn(_mod11440);
const module_11441 = fn(_mod11441);
const module_11442 = fn(_mod11442);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11431.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11432.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11442.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11371").Chrono(createConfiguration(true));
const Chrono_export = require("module_11371").Chrono;

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
