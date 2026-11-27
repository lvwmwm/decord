// Module ID: 10968
// Function ID: 10969
// Dependencies: [10876, 10883, 10885, 10969, 10970, 10971, 10972, 10909, 10973, 10975, 10976, 10977, 10978, 10979, 10980, 10981, 10982, 10983, 10984, 10985, 10916]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10968
import _mod10909 from "module_10909" /* 10909 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod10969 from "module_10969" /* 10969 */;
import _mod10970 from "module_10970" /* 10970 */;
import _mod10971 from "module_10971" /* 10971 */;
import _mod10972 from "module_10972" /* 10972 */;
import _mod10973 from "module_10973" /* 10973 */;
import _mod10975 from "module_10975" /* 10975 */;
import _mod10976 from "module_10976" /* 10976 */;
import _mod10977 from "module_10977" /* 10977 */;
import _mod10978 from "module_10978" /* 10978 */;
import _mod10979 from "module_10979" /* 10979 */;
import _mod10980 from "module_10980" /* 10980 */;
import _mod10981 from "module_10981" /* 10981 */;
import _mod10982 from "module_10982" /* 10982 */;
import _mod10983 from "module_10983" /* 10983 */;
import _mod10984 from "module_10984" /* 10984 */;
import _mod10985 from "module_10985" /* 10985 */;

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
  items = [new module_10909.default(flag2), , , , , , , , , ];
  new module_10909.default(flag2);
  items[1] = new module_10973.default();
  new module_10973.default();
  items[2] = new module_10976.default();
  new module_10976.default();
  items[3] = new module_10977.default();
  new module_10977.default();
  items[4] = new module_10975.default();
  new module_10975.default();
  items[5] = new module_10980.default();
  new module_10980.default();
  items[6] = new module_10978.default();
  new module_10978.default();
  items[7] = new module_10979.default(flag);
  new module_10979.default(flag);
  items[8] = new module_10984.default(flag);
  new module_10984.default(flag);
  items[9] = new module_10985.default(flag);
  new module_10985.default(flag);
  items1 = [new module_10970.default(), ];
  new module_10970.default();
  items1[1] = new module_10969.default();
  new module_10969.default();
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
  const _default = new module_10971.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10972.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10981.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10977.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10983.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10982.default();
  unshift6(_default5);
  return tmp;
}
const module_10969 = fn(_mod10969);
const module_10970 = fn(_mod10970);
const module_10971 = fn(_mod10971);
const module_10972 = fn(_mod10972);
const module_10909 = fn(_mod10909);
const module_10973 = fn(_mod10973);
const module_10975 = fn(_mod10975);
const module_10976 = fn(_mod10976);
const module_10977 = fn(_mod10977);
const module_10978 = fn(_mod10978);
const module_10979 = fn(_mod10979);
const module_10980 = fn(_mod10980);
const module_10981 = fn(_mod10981);
const module_10982 = fn(_mod10982);
const module_10983 = fn(_mod10983);
const module_10984 = fn(_mod10984);
const module_10985 = fn(_mod10985);
const chrono = new require("module_10876").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10876").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10876").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
