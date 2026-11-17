// Module ID: 12181
// Function ID: 12182
// Dependencies: [12089, 12096, 12098, 12182, 12183, 12184, 12185, 12122, 12186, 12188, 12189, 12190, 12191, 12192, 12193, 12194, 12195, 12196, 12197, 12198, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12181
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12182 from "module_12182" /* 12182 */;
import _mod12183 from "module_12183" /* 12183 */;
import _mod12184 from "module_12184" /* 12184 */;
import _mod12185 from "module_12185" /* 12185 */;
import _mod12186 from "module_12186" /* 12186 */;
import _mod12188 from "module_12188" /* 12188 */;
import _mod12189 from "module_12189" /* 12189 */;
import _mod12190 from "module_12190" /* 12190 */;
import _mod12191 from "module_12191" /* 12191 */;
import _mod12192 from "module_12192" /* 12192 */;
import _mod12193 from "module_12193" /* 12193 */;
import _mod12194 from "module_12194" /* 12194 */;
import _mod12195 from "module_12195" /* 12195 */;
import _mod12196 from "module_12196" /* 12196 */;
import _mod12197 from "module_12197" /* 12197 */;
import _mod12198 from "module_12198" /* 12198 */;

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
  items = [new module_12122.default(flag2), , , , , , , , , ];
  new module_12122.default(flag2);
  items[1] = new module_12186.default();
  new module_12186.default();
  items[2] = new module_12189.default();
  new module_12189.default();
  items[3] = new module_12190.default();
  new module_12190.default();
  items[4] = new module_12188.default();
  new module_12188.default();
  items[5] = new module_12193.default();
  new module_12193.default();
  items[6] = new module_12191.default();
  new module_12191.default();
  items[7] = new module_12192.default(flag);
  new module_12192.default(flag);
  items[8] = new module_12197.default(flag);
  new module_12197.default(flag);
  items[9] = new module_12198.default(flag);
  new module_12198.default(flag);
  items1 = [new module_12183.default(), ];
  new module_12183.default();
  items1[1] = new module_12182.default();
  new module_12182.default();
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
  const _default = new module_12184.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_12185.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_12194.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_12190.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_12196.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_12195.default();
  unshift6(_default5);
  return tmp;
}
const module_12182 = fn(_mod12182);
const module_12183 = fn(_mod12183);
const module_12184 = fn(_mod12184);
const module_12185 = fn(_mod12185);
const module_12122 = fn(_mod12122);
const module_12186 = fn(_mod12186);
const module_12188 = fn(_mod12188);
const module_12189 = fn(_mod12189);
const module_12190 = fn(_mod12190);
const module_12191 = fn(_mod12191);
const module_12192 = fn(_mod12192);
const module_12193 = fn(_mod12193);
const module_12194 = fn(_mod12194);
const module_12195 = fn(_mod12195);
const module_12196 = fn(_mod12196);
const module_12197 = fn(_mod12197);
const module_12198 = fn(_mod12198);
const chrono = new require("module_12089").Chrono(createCasualConfiguration());
const chrono1 = new require("module_12089").Chrono(createConfiguration(true));

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
export const Chrono = require("module_12089").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
