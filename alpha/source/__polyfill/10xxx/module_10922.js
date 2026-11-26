// Module ID: 10922
// Function ID: 10923
// Dependencies: [10875, 10882, 10884, 10908, 10920, 10923, 10924, 10926, 10927, 10928, 10929, 10930, 10931, 10932, 10933, 10915]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10922
import _mod10908 from "module_10908" /* 10908 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10915 */;
import _mod10920 from "module_10920" /* 10920 */;
import _mod10923 from "module_10923" /* 10923 */;
import _mod10924 from "module_10924" /* 10924 */;
import _mod10926 from "module_10926" /* 10926 */;
import _mod10927 from "module_10927" /* 10927 */;
import _mod10928 from "module_10928" /* 10928 */;
import _mod10929 from "module_10929" /* 10929 */;
import _mod10930 from "module_10930" /* 10930 */;
import _mod10931 from "module_10931" /* 10931 */;
import _mod10932 from "module_10932" /* 10932 */;
import _mod10933 from "module_10933" /* 10933 */;
import { Chrono } from "module_10875" /* 10875 */;

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
  items = [new module_10920.default(), , , , , , ];
  new module_10920.default();
  items[1] = new module_10908.default(flag2);
  new module_10908.default(flag2);
  items[2] = new module_10923.default();
  new module_10923.default();
  items[3] = new module_10926.default();
  new module_10926.default();
  items[4] = new module_10931.default();
  new module_10931.default();
  items[5] = new module_10924.default();
  new module_10924.default();
  items[6] = new module_10933.default();
  new module_10933.default();
  items1 = [new module_10927.default(), ];
  new module_10927.default();
  items1[1] = new module_10928.default();
  new module_10928.default();
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
  const _default = new module_10930.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10929.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10932.default();
  unshift3(_default2);
  return tmp;
}
const module_10908 = fn(_mod10908);
const module_10920 = fn(_mod10920);
const module_10923 = fn(_mod10923);
const module_10924 = fn(_mod10924);
const module_10926 = fn(_mod10926);
const module_10927 = fn(_mod10927);
const module_10928 = fn(_mod10928);
const module_10929 = fn(_mod10929);
const module_10930 = fn(_mod10930);
const module_10931 = fn(_mod10931);
const module_10932 = fn(_mod10932);
const module_10933 = fn(_mod10933);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10930.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10929.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10932.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10875").Chrono(createConfiguration(true));
const Chrono_export = require("module_10875").Chrono;

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
