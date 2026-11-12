// Module ID: 11417
// Function ID: 11418
// Dependencies: [11358, 11365, 11367, 11418, 11419, 11391, 11420, 11421, 11422, 11423, 11425, 11426, 11427, 11428, 11429, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11417
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11418 from "module_11418" /* 11418 */;
import _mod11419 from "module_11419" /* 11419 */;
import _mod11420 from "module_11420" /* 11420 */;
import _mod11421 from "module_11421" /* 11421 */;
import _mod11422 from "module_11422" /* 11422 */;
import _mod11423 from "module_11423" /* 11423 */;
import _mod11425 from "module_11425" /* 11425 */;
import _mod11426 from "module_11426" /* 11426 */;
import _mod11427 from "module_11427" /* 11427 */;
import _mod11428 from "module_11428" /* 11428 */;
import _mod11429 from "module_11429" /* 11429 */;
import { Chrono } from "module_11358" /* 11358 */;

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
  items = [new module_11391.default(flag2), , , , , , ];
  new module_11391.default(flag2);
  items[1] = new module_11426.default();
  new module_11426.default();
  items[2] = new module_11420.default();
  new module_11420.default();
  items[3] = new module_11425.default();
  new module_11425.default();
  items[4] = new module_11427.default();
  new module_11427.default();
  items[5] = new module_11428.default();
  new module_11428.default();
  items[6] = new module_11423.default();
  new module_11423.default();
  items1 = [new module_11421.default(), ];
  new module_11421.default();
  items1[1] = new module_11422.default();
  new module_11422.default();
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
  const _default = new module_11418.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11419.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11429.default();
  unshift3(_default2);
  return tmp;
}
const module_11418 = fn(_mod11418);
const module_11419 = fn(_mod11419);
const module_11391 = fn(_mod11391);
const module_11420 = fn(_mod11420);
const module_11421 = fn(_mod11421);
const module_11422 = fn(_mod11422);
const module_11423 = fn(_mod11423);
const module_11425 = fn(_mod11425);
const module_11426 = fn(_mod11426);
const module_11427 = fn(_mod11427);
const module_11428 = fn(_mod11428);
const module_11429 = fn(_mod11429);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11418.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11419.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11429.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11358").Chrono(createConfiguration(true));
const Chrono_export = require("module_11358").Chrono;

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
