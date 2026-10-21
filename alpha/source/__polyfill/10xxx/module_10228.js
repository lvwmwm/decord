// Module ID: 10228
// Function ID: 10229
// Dependencies: [10169, 10176, 10178, 10229, 10230, 10202, 10231, 10232, 10233, 10234, 10236, 10237, 10238, 10239, 10240, 10209]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10228
import _mod10202 from "module_10202" /* 10202 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10209 */;
import _mod10229 from "module_10229" /* 10229 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10231 from "module_10231" /* 10231 */;
import _mod10232 from "module_10232" /* 10232 */;
import _mod10233 from "module_10233" /* 10233 */;
import _mod10234 from "module_10234" /* 10234 */;
import _mod10236 from "module_10236" /* 10236 */;
import _mod10237 from "module_10237" /* 10237 */;
import _mod10238 from "module_10238" /* 10238 */;
import _mod10239 from "module_10239" /* 10239 */;
import _mod10240 from "module_10240" /* 10240 */;
import { Chrono } from "module_10169" /* 10169 */;

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
  items = [new module_10202.default(flag2), , , , , , ];
  new module_10202.default(flag2);
  items[1] = new module_10237.default();
  new module_10237.default();
  items[2] = new module_10231.default();
  new module_10231.default();
  items[3] = new module_10236.default();
  new module_10236.default();
  items[4] = new module_10238.default();
  new module_10238.default();
  items[5] = new module_10239.default();
  new module_10239.default();
  items[6] = new module_10234.default();
  new module_10234.default();
  items1 = [new module_10232.default(), ];
  new module_10232.default();
  items1[1] = new module_10233.default();
  new module_10233.default();
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
  const _default = new module_10229.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10230.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10240.default();
  unshift3(_default2);
  return tmp;
}
const module_10229 = fn(_mod10229);
const module_10230 = fn(_mod10230);
const module_10202 = fn(_mod10202);
const module_10231 = fn(_mod10231);
const module_10232 = fn(_mod10232);
const module_10233 = fn(_mod10233);
const module_10234 = fn(_mod10234);
const module_10236 = fn(_mod10236);
const module_10237 = fn(_mod10237);
const module_10238 = fn(_mod10238);
const module_10239 = fn(_mod10239);
const module_10240 = fn(_mod10240);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10229.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10230.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10240.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10169").Chrono(createConfiguration(true));
const Chrono_export = require("module_10169").Chrono;

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
