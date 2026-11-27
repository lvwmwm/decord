// Module ID: 10948
// Function ID: 10949
// Dependencies: [10949, 10951, 10952, 10953, 10954, 10955, 10956, 10876, 10883, 10885, 10957, 10958, 10922, 10916]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10948
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod10922 from "module_10922" /* 10922 */;
import _mod10949 from "module_10949" /* 10949 */;
import _mod10951 from "module_10951" /* 10951 */;
import _mod10952 from "module_10952" /* 10952 */;
import _mod10953 from "module_10953" /* 10953 */;
import _mod10954 from "module_10954" /* 10954 */;
import _mod10955 from "module_10955" /* 10955 */;
import _mod10956 from "module_10956" /* 10956 */;
import _mod10957 from "module_10957" /* 10957 */;
import _mod10958 from "module_10958" /* 10958 */;
import { Chrono } from "module_10876" /* 10876 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10949.default(), , , , ];
  new module_10949.default();
  items[1] = new module_10953.default();
  new module_10953.default();
  items[2] = new module_10958.default();
  new module_10958.default();
  items[3] = new module_10954.default();
  new module_10954.default();
  items[4] = new module_10955.default();
  new module_10955.default();
  items1 = [new module_10957.default(), , ];
  new module_10957.default();
  items1[1] = new module_10956.default();
  new module_10956.default();
  items1[2] = new module_10951.default();
  new module_10951.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10922.default));
  return result;
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10952.default();
  unshift(_default);
  return tmp;
}
const module_10949 = fn(_mod10949);
const module_10951 = fn(_mod10951);
const module_10952 = fn(_mod10952);
const module_10953 = fn(_mod10953);
const module_10954 = fn(_mod10954);
const module_10955 = fn(_mod10955);
const module_10956 = fn(_mod10956);
const module_10957 = fn(_mod10957);
const module_10958 = fn(_mod10958);
const module_10922 = fn(_mod10922);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10952.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10876").Chrono(createConfiguration(true));
const Chrono_export = require("module_10876").Chrono;

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
