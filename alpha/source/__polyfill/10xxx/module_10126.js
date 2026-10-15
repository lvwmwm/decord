// Module ID: 10126
// Function ID: 10127
// Dependencies: [10034, 10041, 10043, 10127, 10128, 10129, 10130, 10067, 10131, 10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10141, 10142, 10143, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10126
import _mod10067 from "module_10067" /* 10067 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10127 from "module_10127" /* 10127 */;
import _mod10128 from "module_10128" /* 10128 */;
import _mod10129 from "module_10129" /* 10129 */;
import _mod10130 from "module_10130" /* 10130 */;
import _mod10131 from "module_10131" /* 10131 */;
import _mod10133 from "module_10133" /* 10133 */;
import _mod10134 from "module_10134" /* 10134 */;
import _mod10135 from "module_10135" /* 10135 */;
import _mod10136 from "module_10136" /* 10136 */;
import _mod10137 from "module_10137" /* 10137 */;
import _mod10138 from "module_10138" /* 10138 */;
import _mod10139 from "module_10139" /* 10139 */;
import _mod10140 from "module_10140" /* 10140 */;
import _mod10141 from "module_10141" /* 10141 */;
import _mod10142 from "module_10142" /* 10142 */;
import _mod10143 from "module_10143" /* 10143 */;

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
  items = [new module_10067.default(flag2), , , , , , , , , ];
  new module_10067.default(flag2);
  items[1] = new module_10131.default();
  new module_10131.default();
  items[2] = new module_10134.default();
  new module_10134.default();
  items[3] = new module_10135.default();
  new module_10135.default();
  items[4] = new module_10133.default();
  new module_10133.default();
  items[5] = new module_10138.default();
  new module_10138.default();
  items[6] = new module_10136.default();
  new module_10136.default();
  items[7] = new module_10137.default(flag);
  new module_10137.default(flag);
  items[8] = new module_10142.default(flag);
  new module_10142.default(flag);
  items[9] = new module_10143.default(flag);
  new module_10143.default(flag);
  items1 = [new module_10128.default(), ];
  new module_10128.default();
  items1[1] = new module_10127.default();
  new module_10127.default();
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
  const _default = new module_10129.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10130.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10139.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10135.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10141.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10140.default();
  unshift6(_default5);
  return tmp;
}
const module_10127 = fn(_mod10127);
const module_10128 = fn(_mod10128);
const module_10129 = fn(_mod10129);
const module_10130 = fn(_mod10130);
const module_10067 = fn(_mod10067);
const module_10131 = fn(_mod10131);
const module_10133 = fn(_mod10133);
const module_10134 = fn(_mod10134);
const module_10135 = fn(_mod10135);
const module_10136 = fn(_mod10136);
const module_10137 = fn(_mod10137);
const module_10138 = fn(_mod10138);
const module_10139 = fn(_mod10139);
const module_10140 = fn(_mod10140);
const module_10141 = fn(_mod10141);
const module_10142 = fn(_mod10142);
const module_10143 = fn(_mod10143);
const chrono = new require("module_10034").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10034").Chrono(createConfiguration(true));

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export const Chrono = require("module_10034").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
