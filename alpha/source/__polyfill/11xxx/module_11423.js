// Module ID: 11423
// Function ID: 11424
// Dependencies: [11364, 11371, 11373, 11424, 11425, 11397, 11426, 11427, 11428, 11429, 11431, 11432, 11433, 11434, 11435, 11404]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11423
import _mod11397 from "module_11397" /* 11397 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11404 */;
import _mod11424 from "module_11424" /* 11424 */;
import _mod11425 from "module_11425" /* 11425 */;
import _mod11426 from "module_11426" /* 11426 */;
import _mod11427 from "module_11427" /* 11427 */;
import _mod11428 from "module_11428" /* 11428 */;
import _mod11429 from "module_11429" /* 11429 */;
import _mod11431 from "module_11431" /* 11431 */;
import _mod11432 from "module_11432" /* 11432 */;
import _mod11433 from "module_11433" /* 11433 */;
import _mod11434 from "module_11434" /* 11434 */;
import _mod11435 from "module_11435" /* 11435 */;
import { Chrono } from "module_11364" /* 11364 */;

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
  items = [new module_11397.default(flag2), , , , , , ];
  new module_11397.default(flag2);
  items[1] = new module_11432.default();
  new module_11432.default();
  items[2] = new module_11426.default();
  new module_11426.default();
  items[3] = new module_11431.default();
  new module_11431.default();
  items[4] = new module_11433.default();
  new module_11433.default();
  items[5] = new module_11434.default();
  new module_11434.default();
  items[6] = new module_11429.default();
  new module_11429.default();
  items1 = [new module_11427.default(), ];
  new module_11427.default();
  items1[1] = new module_11428.default();
  new module_11428.default();
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
  const _default = new module_11424.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11425.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11435.default();
  unshift3(_default2);
  return tmp;
}
const module_11424 = fn(_mod11424);
const module_11425 = fn(_mod11425);
const module_11397 = fn(_mod11397);
const module_11426 = fn(_mod11426);
const module_11427 = fn(_mod11427);
const module_11428 = fn(_mod11428);
const module_11429 = fn(_mod11429);
const module_11431 = fn(_mod11431);
const module_11432 = fn(_mod11432);
const module_11433 = fn(_mod11433);
const module_11434 = fn(_mod11434);
const module_11435 = fn(_mod11435);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11424.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11425.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11435.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_11364").Chrono(createConfiguration(true));
const Chrono_export = require("module_11364").Chrono;

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
