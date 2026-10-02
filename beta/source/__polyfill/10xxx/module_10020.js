// Module ID: 10020
// Function ID: 10021
// Dependencies: [9928, 9935, 9937, 10021, 10022, 10023, 10024, 9961, 10025, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10035, 10036, 10037, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10020
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod10021 from "module_10021" /* 10021 */;
import _mod10022 from "module_10022" /* 10022 */;
import _mod10023 from "module_10023" /* 10023 */;
import _mod10024 from "module_10024" /* 10024 */;
import _mod10025 from "module_10025" /* 10025 */;
import _mod10027 from "module_10027" /* 10027 */;
import _mod10028 from "module_10028" /* 10028 */;
import _mod10029 from "module_10029" /* 10029 */;
import _mod10030 from "module_10030" /* 10030 */;
import _mod10031 from "module_10031" /* 10031 */;
import _mod10032 from "module_10032" /* 10032 */;
import _mod10033 from "module_10033" /* 10033 */;
import _mod10034 from "module_10034" /* 10034 */;
import _mod10035 from "module_10035" /* 10035 */;
import _mod10036 from "module_10036" /* 10036 */;
import _mod10037 from "module_10037" /* 10037 */;

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
  items = [new module_9961.default(flag2), , , , , , , , , ];
  new module_9961.default(flag2);
  items[1] = new module_10025.default();
  new module_10025.default();
  items[2] = new module_10028.default();
  new module_10028.default();
  items[3] = new module_10029.default();
  new module_10029.default();
  items[4] = new module_10027.default();
  new module_10027.default();
  items[5] = new module_10032.default();
  new module_10032.default();
  items[6] = new module_10030.default();
  new module_10030.default();
  items[7] = new module_10031.default(flag);
  new module_10031.default(flag);
  items[8] = new module_10036.default(flag);
  new module_10036.default(flag);
  items[9] = new module_10037.default(flag);
  new module_10037.default(flag);
  items1 = [new module_10022.default(), ];
  new module_10022.default();
  items1[1] = new module_10021.default();
  new module_10021.default();
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
  const _default = new module_10023.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10024.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10033.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10029.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10035.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10034.default();
  unshift6(_default5);
  return tmp;
}
const module_10021 = fn(_mod10021);
const module_10022 = fn(_mod10022);
const module_10023 = fn(_mod10023);
const module_10024 = fn(_mod10024);
const module_9961 = fn(_mod9961);
const module_10025 = fn(_mod10025);
const module_10027 = fn(_mod10027);
const module_10028 = fn(_mod10028);
const module_10029 = fn(_mod10029);
const module_10030 = fn(_mod10030);
const module_10031 = fn(_mod10031);
const module_10032 = fn(_mod10032);
const module_10033 = fn(_mod10033);
const module_10034 = fn(_mod10034);
const module_10035 = fn(_mod10035);
const module_10036 = fn(_mod10036);
const module_10037 = fn(_mod10037);
const chrono = new require("module_9928").Chrono(createCasualConfiguration());
const chrono1 = new require("module_9928").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9928").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
