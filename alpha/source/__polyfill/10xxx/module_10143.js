// Module ID: 10143
// Function ID: 10144
// Dependencies: [10051, 10058, 10060, 10144, 10145, 10146, 10147, 10084, 10148, 10150, 10151, 10152, 10153, 10154, 10155, 10156, 10157, 10158, 10159, 10160, 10091]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10143
import _mod10084 from "module_10084" /* 10084 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10091 */;
import _mod10144 from "module_10144" /* 10144 */;
import _mod10145 from "module_10145" /* 10145 */;
import _mod10146 from "module_10146" /* 10146 */;
import _mod10147 from "module_10147" /* 10147 */;
import _mod10148 from "module_10148" /* 10148 */;
import _mod10150 from "module_10150" /* 10150 */;
import _mod10151 from "module_10151" /* 10151 */;
import _mod10152 from "module_10152" /* 10152 */;
import _mod10153 from "module_10153" /* 10153 */;
import _mod10154 from "module_10154" /* 10154 */;
import _mod10155 from "module_10155" /* 10155 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10158 from "module_10158" /* 10158 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10160 from "module_10160" /* 10160 */;

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
  items = [new module_10084.default(flag2), , , , , , , , , ];
  new module_10084.default(flag2);
  items[1] = new module_10148.default();
  new module_10148.default();
  items[2] = new module_10151.default();
  new module_10151.default();
  items[3] = new module_10152.default();
  new module_10152.default();
  items[4] = new module_10150.default();
  new module_10150.default();
  items[5] = new module_10155.default();
  new module_10155.default();
  items[6] = new module_10153.default();
  new module_10153.default();
  items[7] = new module_10154.default(flag);
  new module_10154.default(flag);
  items[8] = new module_10159.default(flag);
  new module_10159.default(flag);
  items[9] = new module_10160.default(flag);
  new module_10160.default(flag);
  items1 = [new module_10145.default(), ];
  new module_10145.default();
  items1[1] = new module_10144.default();
  new module_10144.default();
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
  const _default = new module_10146.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10147.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10156.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10152.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10158.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10157.default();
  unshift6(_default5);
  return tmp;
}
const module_10144 = fn(_mod10144);
const module_10145 = fn(_mod10145);
const module_10146 = fn(_mod10146);
const module_10147 = fn(_mod10147);
const module_10084 = fn(_mod10084);
const module_10148 = fn(_mod10148);
const module_10150 = fn(_mod10150);
const module_10151 = fn(_mod10151);
const module_10152 = fn(_mod10152);
const module_10153 = fn(_mod10153);
const module_10154 = fn(_mod10154);
const module_10155 = fn(_mod10155);
const module_10156 = fn(_mod10156);
const module_10157 = fn(_mod10157);
const module_10158 = fn(_mod10158);
const module_10159 = fn(_mod10159);
const module_10160 = fn(_mod10160);
const chrono = new require("module_10051").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10051").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10051").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
