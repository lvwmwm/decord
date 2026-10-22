// Module ID: 10273
// Function ID: 10274
// Dependencies: [10181, 10188, 10190, 10274, 10275, 10276, 10277, 10214, 10278, 10280, 10281, 10282, 10283, 10284, 10285, 10286, 10287, 10288, 10289, 10290, 10221]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10273
import _mod10214 from "module_10214" /* 10214 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
import _mod10274 from "module_10274" /* 10274 */;
import _mod10275 from "module_10275" /* 10275 */;
import _mod10276 from "module_10276" /* 10276 */;
import _mod10277 from "module_10277" /* 10277 */;
import _mod10278 from "module_10278" /* 10278 */;
import _mod10280 from "module_10280" /* 10280 */;
import _mod10281 from "module_10281" /* 10281 */;
import _mod10282 from "module_10282" /* 10282 */;
import _mod10283 from "module_10283" /* 10283 */;
import _mod10284 from "module_10284" /* 10284 */;
import _mod10285 from "module_10285" /* 10285 */;
import _mod10286 from "module_10286" /* 10286 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10288 from "module_10288" /* 10288 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;

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
  items = [new module_10214.default(flag2), , , , , , , , , ];
  new module_10214.default(flag2);
  items[1] = new module_10278.default();
  new module_10278.default();
  items[2] = new module_10281.default();
  new module_10281.default();
  items[3] = new module_10282.default();
  new module_10282.default();
  items[4] = new module_10280.default();
  new module_10280.default();
  items[5] = new module_10285.default();
  new module_10285.default();
  items[6] = new module_10283.default();
  new module_10283.default();
  items[7] = new module_10284.default(flag);
  new module_10284.default(flag);
  items[8] = new module_10289.default(flag);
  new module_10289.default(flag);
  items[9] = new module_10290.default(flag);
  new module_10290.default(flag);
  items1 = [new module_10275.default(), ];
  new module_10275.default();
  items1[1] = new module_10274.default();
  new module_10274.default();
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
  const _default = new module_10276.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10277.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10286.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10282.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10288.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10287.default();
  unshift6(_default5);
  return tmp;
}
const module_10274 = fn(_mod10274);
const module_10275 = fn(_mod10275);
const module_10276 = fn(_mod10276);
const module_10277 = fn(_mod10277);
const module_10214 = fn(_mod10214);
const module_10278 = fn(_mod10278);
const module_10280 = fn(_mod10280);
const module_10281 = fn(_mod10281);
const module_10282 = fn(_mod10282);
const module_10283 = fn(_mod10283);
const module_10284 = fn(_mod10284);
const module_10285 = fn(_mod10285);
const module_10286 = fn(_mod10286);
const module_10287 = fn(_mod10287);
const module_10288 = fn(_mod10288);
const module_10289 = fn(_mod10289);
const module_10290 = fn(_mod10290);
const chrono = new require("module_10181").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10181").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10181").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
