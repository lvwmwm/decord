// Module ID: 10975
// Function ID: 10976
// Dependencies: [10829, 10836, 10838, 10862, 10976, 10978, 10979, 10980, 10981, 10982, 10983, 10984, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10975
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10976 from "module_10976" /* 10976 */;
import _mod10978 from "module_10978" /* 10978 */;
import _mod10979 from "module_10979" /* 10979 */;
import _mod10980 from "module_10980" /* 10980 */;
import _mod10981 from "module_10981" /* 10981 */;
import _mod10982 from "module_10982" /* 10982 */;
import _mod10983 from "module_10983" /* 10983 */;
import _mod10984 from "module_10984" /* 10984 */;
import { Chrono } from "module_10829" /* 10829 */;

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
  items = [new module_10862.default(flag2), , , , ];
  new module_10862.default(flag2);
  items[1] = new module_10976.default();
  new module_10976.default();
  items[2] = new module_10978.default();
  new module_10978.default();
  items[3] = new module_10981.default();
  new module_10981.default();
  items[4] = new module_10984.default();
  new module_10984.default();
  items1 = [new module_10979.default(), ];
  new module_10979.default();
  items1[1] = new module_10980.default();
  new module_10980.default();
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
  const push = parsers.push;
  const _default = new module_10982.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10983.default();
  push2(_default1);
  return tmp;
}
const module_10862 = fn(_mod10862);
const module_10976 = fn(_mod10976);
const module_10978 = fn(_mod10978);
const module_10979 = fn(_mod10979);
const module_10980 = fn(_mod10980);
const module_10981 = fn(_mod10981);
const module_10982 = fn(_mod10982);
const module_10983 = fn(_mod10983);
const module_10984 = fn(_mod10984);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10982.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10983.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10829").Chrono(createConfiguration(true));
const Chrono_export = require("module_10829").Chrono;

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
