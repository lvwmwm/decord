// Module ID: 10212
// Function ID: 10213
// Dependencies: [10213, 10215, 10216, 10217, 10218, 10219, 10220, 10140, 10147, 10149, 10221, 10222, 10186, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10212
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10186 from "module_10186" /* 10186 */;
import _mod10213 from "module_10213" /* 10213 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10216 from "module_10216" /* 10216 */;
import _mod10217 from "module_10217" /* 10217 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10219 from "module_10219" /* 10219 */;
import _mod10220 from "module_10220" /* 10220 */;
import _mod10221 from "module_10221" /* 10221 */;
import _mod10222 from "module_10222" /* 10222 */;
import { Chrono } from "module_10140" /* 10140 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10213.default(), , , , ];
  new module_10213.default();
  items[1] = new module_10217.default();
  new module_10217.default();
  items[2] = new module_10222.default();
  new module_10222.default();
  items[3] = new module_10218.default();
  new module_10218.default();
  items[4] = new module_10219.default();
  new module_10219.default();
  items1 = [new module_10221.default(), , ];
  new module_10221.default();
  items1[1] = new module_10220.default();
  new module_10220.default();
  items1[2] = new module_10215.default();
  new module_10215.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10186.default));
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
  const _default = new module_10216.default();
  unshift(_default);
  return tmp;
}
const module_10213 = fn(_mod10213);
const module_10215 = fn(_mod10215);
const module_10216 = fn(_mod10216);
const module_10217 = fn(_mod10217);
const module_10218 = fn(_mod10218);
const module_10219 = fn(_mod10219);
const module_10220 = fn(_mod10220);
const module_10221 = fn(_mod10221);
const module_10222 = fn(_mod10222);
const module_10186 = fn(_mod10186);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10216.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10140").Chrono(createConfiguration(true));
const Chrono_export = require("module_10140").Chrono;

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
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
