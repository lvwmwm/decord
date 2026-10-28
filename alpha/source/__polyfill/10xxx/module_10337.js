// Module ID: 10337
// Function ID: 10338
// Dependencies: [10245, 10252, 10254, 10338, 10339, 10340, 10341, 10278, 10342, 10344, 10345, 10346, 10347, 10348, 10349, 10350, 10351, 10352, 10353, 10354, 10285]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10337
import _mod10278 from "module_10278" /* 10278 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10285 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import _mod10341 from "module_10341" /* 10341 */;
import _mod10342 from "module_10342" /* 10342 */;
import _mod10344 from "module_10344" /* 10344 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10346 from "module_10346" /* 10346 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;
import _mod10350 from "module_10350" /* 10350 */;
import _mod10351 from "module_10351" /* 10351 */;
import _mod10352 from "module_10352" /* 10352 */;
import _mod10353 from "module_10353" /* 10353 */;
import _mod10354 from "module_10354" /* 10354 */;

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
  items = [new module_10278.default(flag2), , , , , , , , , ];
  new module_10278.default(flag2);
  items[1] = new module_10342.default();
  new module_10342.default();
  items[2] = new module_10345.default();
  new module_10345.default();
  items[3] = new module_10346.default();
  new module_10346.default();
  items[4] = new module_10344.default();
  new module_10344.default();
  items[5] = new module_10349.default();
  new module_10349.default();
  items[6] = new module_10347.default();
  new module_10347.default();
  items[7] = new module_10348.default(flag);
  new module_10348.default(flag);
  items[8] = new module_10353.default(flag);
  new module_10353.default(flag);
  items[9] = new module_10354.default(flag);
  new module_10354.default(flag);
  items1 = [new module_10339.default(), ];
  new module_10339.default();
  items1[1] = new module_10338.default();
  new module_10338.default();
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
  const _default = new module_10340.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10341.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10350.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10346.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10352.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10351.default();
  unshift6(_default5);
  return tmp;
}
const module_10338 = fn(_mod10338);
const module_10339 = fn(_mod10339);
const module_10340 = fn(_mod10340);
const module_10341 = fn(_mod10341);
const module_10278 = fn(_mod10278);
const module_10342 = fn(_mod10342);
const module_10344 = fn(_mod10344);
const module_10345 = fn(_mod10345);
const module_10346 = fn(_mod10346);
const module_10347 = fn(_mod10347);
const module_10348 = fn(_mod10348);
const module_10349 = fn(_mod10349);
const module_10350 = fn(_mod10350);
const module_10351 = fn(_mod10351);
const module_10352 = fn(_mod10352);
const module_10353 = fn(_mod10353);
const module_10354 = fn(_mod10354);
const chrono = new require("module_10245").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10245").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10245").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
