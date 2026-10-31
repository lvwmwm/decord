// Module ID: 10415
// Function ID: 10416
// Dependencies: [10323, 10330, 10332, 10416, 10417, 10418, 10419, 10356, 10420, 10422, 10423, 10424, 10425, 10426, 10427, 10428, 10429, 10430, 10431, 10432, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10415
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10416 from "module_10416" /* 10416 */;
import _mod10417 from "module_10417" /* 10417 */;
import _mod10418 from "module_10418" /* 10418 */;
import _mod10419 from "module_10419" /* 10419 */;
import _mod10420 from "module_10420" /* 10420 */;
import _mod10422 from "module_10422" /* 10422 */;
import _mod10423 from "module_10423" /* 10423 */;
import _mod10424 from "module_10424" /* 10424 */;
import _mod10425 from "module_10425" /* 10425 */;
import _mod10426 from "module_10426" /* 10426 */;
import _mod10427 from "module_10427" /* 10427 */;
import _mod10428 from "module_10428" /* 10428 */;
import _mod10429 from "module_10429" /* 10429 */;
import _mod10430 from "module_10430" /* 10430 */;
import _mod10431 from "module_10431" /* 10431 */;
import _mod10432 from "module_10432" /* 10432 */;

const require = globalThis.__r;

function createConfiguration(flag) {
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
  items = [new module_10356.default(flag2), , , , , , , , , ];
  new module_10356.default(flag2);
  items[1] = new module_10420.default();
  new module_10420.default();
  items[2] = new module_10423.default();
  new module_10423.default();
  items[3] = new module_10424.default();
  new module_10424.default();
  items[4] = new module_10422.default();
  new module_10422.default();
  items[5] = new module_10427.default();
  new module_10427.default();
  items[6] = new module_10425.default();
  new module_10425.default();
  items[7] = new module_10426.default(flag);
  new module_10426.default(flag);
  items[8] = new module_10431.default(flag);
  new module_10431.default(flag);
  items[9] = new module_10432.default(flag);
  new module_10432.default(flag);
  items1 = [new module_10417.default(), ];
  new module_10417.default();
  items1[1] = new module_10416.default();
  new module_10416.default();
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
  const _default = new module_10418.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10419.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10428.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10424.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10430.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10429.default();
  unshift6(_default5);
  return tmp;
}
const module_10416 = fn(_mod10416);
const module_10417 = fn(_mod10417);
const module_10418 = fn(_mod10418);
const module_10419 = fn(_mod10419);
const module_10356 = fn(_mod10356);
const module_10420 = fn(_mod10420);
const module_10422 = fn(_mod10422);
const module_10423 = fn(_mod10423);
const module_10424 = fn(_mod10424);
const module_10425 = fn(_mod10425);
const module_10426 = fn(_mod10426);
const module_10427 = fn(_mod10427);
const module_10428 = fn(_mod10428);
const module_10429 = fn(_mod10429);
const module_10430 = fn(_mod10430);
const module_10431 = fn(_mod10431);
const module_10432 = fn(_mod10432);
const chrono = new require("module_10323").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10323").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10323").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
