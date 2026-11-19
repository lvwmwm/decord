// Module ID: 11441
// Function ID: 11442
// Dependencies: [11349, 11356, 11358, 11442, 11443, 11444, 11445, 11382, 11446, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11441
import _mod11382 from "module_11382" /* 11382 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11442 from "module_11442" /* 11442 */;
import _mod11443 from "module_11443" /* 11443 */;
import _mod11444 from "module_11444" /* 11444 */;
import _mod11445 from "module_11445" /* 11445 */;
import _mod11446 from "module_11446" /* 11446 */;
import _mod11448 from "module_11448" /* 11448 */;
import _mod11449 from "module_11449" /* 11449 */;
import _mod11450 from "module_11450" /* 11450 */;
import _mod11451 from "module_11451" /* 11451 */;
import _mod11452 from "module_11452" /* 11452 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11454 from "module_11454" /* 11454 */;
import _mod11455 from "module_11455" /* 11455 */;
import _mod11456 from "module_11456" /* 11456 */;
import _mod11457 from "module_11457" /* 11457 */;
import _mod11458 from "module_11458" /* 11458 */;

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
  items = [new module_11382.default(flag2), , , , , , , , , ];
  new module_11382.default(flag2);
  items[1] = new module_11446.default();
  new module_11446.default();
  items[2] = new module_11449.default();
  new module_11449.default();
  items[3] = new module_11450.default();
  new module_11450.default();
  items[4] = new module_11448.default();
  new module_11448.default();
  items[5] = new module_11453.default();
  new module_11453.default();
  items[6] = new module_11451.default();
  new module_11451.default();
  items[7] = new module_11452.default(flag);
  new module_11452.default(flag);
  items[8] = new module_11457.default(flag);
  new module_11457.default(flag);
  items[9] = new module_11458.default(flag);
  new module_11458.default(flag);
  items1 = [new module_11443.default(), ];
  new module_11443.default();
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
  const unshift = parsers.unshift;
  const _default = new module_11444.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11445.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11454.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11450.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11456.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_11455.default();
  unshift6(_default5);
  return tmp;
}
const module_11442 = fn(_mod11442);
const module_11443 = fn(_mod11443);
const module_11444 = fn(_mod11444);
const module_11445 = fn(_mod11445);
const module_11382 = fn(_mod11382);
const module_11446 = fn(_mod11446);
const module_11448 = fn(_mod11448);
const module_11449 = fn(_mod11449);
const module_11450 = fn(_mod11450);
const module_11451 = fn(_mod11451);
const module_11452 = fn(_mod11452);
const module_11453 = fn(_mod11453);
const module_11454 = fn(_mod11454);
const module_11455 = fn(_mod11455);
const module_11456 = fn(_mod11456);
const module_11457 = fn(_mod11457);
const module_11458 = fn(_mod11458);
const chrono = new require("module_11349").Chrono(createCasualConfiguration());
const chrono1 = new require("module_11349").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11349").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
