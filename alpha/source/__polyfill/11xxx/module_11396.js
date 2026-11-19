// Module ID: 11396
// Function ID: 11397
// Dependencies: [11349, 11356, 11358, 11382, 11394, 11397, 11398, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11396
import _mod11382 from "module_11382" /* 11382 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11394 from "module_11394" /* 11394 */;
import _mod11397 from "module_11397" /* 11397 */;
import _mod11398 from "module_11398" /* 11398 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11401 from "module_11401" /* 11401 */;
import _mod11402 from "module_11402" /* 11402 */;
import _mod11403 from "module_11403" /* 11403 */;
import _mod11404 from "module_11404" /* 11404 */;
import _mod11405 from "module_11405" /* 11405 */;
import _mod11406 from "module_11406" /* 11406 */;
import _mod11407 from "module_11407" /* 11407 */;
import { Chrono } from "module_11349" /* 11349 */;

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
  items = [new module_11394.default(), , , , , , ];
  new module_11394.default();
  items[1] = new module_11382.default(flag2);
  new module_11382.default(flag2);
  items[2] = new module_11397.default();
  new module_11397.default();
  items[3] = new module_11400.default();
  new module_11400.default();
  items[4] = new module_11405.default();
  new module_11405.default();
  items[5] = new module_11398.default();
  new module_11398.default();
  items[6] = new module_11407.default();
  new module_11407.default();
  items1 = [new module_11401.default(), ];
  new module_11401.default();
  items1[1] = new module_11402.default();
  new module_11402.default();
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
  const _default = new module_11404.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11403.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11406.default();
  unshift3(_default2);
  return tmp;
}
const module_11382 = fn(_mod11382);
const module_11394 = fn(_mod11394);
const module_11397 = fn(_mod11397);
const module_11398 = fn(_mod11398);
const module_11400 = fn(_mod11400);
const module_11401 = fn(_mod11401);
const module_11402 = fn(_mod11402);
const module_11403 = fn(_mod11403);
const module_11404 = fn(_mod11404);
const module_11405 = fn(_mod11405);
const module_11406 = fn(_mod11406);
const module_11407 = fn(_mod11407);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11404.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11403.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11406.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11349").Chrono(createConfiguration(true));
const Chrono_export = require("module_11349").Chrono;

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
