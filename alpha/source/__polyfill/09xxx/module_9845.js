// Module ID: 9845
// Function ID: 9846
// Dependencies: [9786, 9793, 9795, 9846, 9847, 9819, 9848, 9849, 9850, 9851, 9853, 9854, 9855, 9856, 9857, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9845
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9846 from "module_9846" /* 9846 */;
import _mod9847 from "module_9847" /* 9847 */;
import _mod9848 from "module_9848" /* 9848 */;
import _mod9849 from "module_9849" /* 9849 */;
import _mod9850 from "module_9850" /* 9850 */;
import _mod9851 from "module_9851" /* 9851 */;
import _mod9853 from "module_9853" /* 9853 */;
import _mod9854 from "module_9854" /* 9854 */;
import _mod9855 from "module_9855" /* 9855 */;
import _mod9856 from "module_9856" /* 9856 */;
import _mod9857 from "module_9857" /* 9857 */;
import { Chrono } from "module_9786" /* 9786 */;

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
  items = [new module_9819.default(flag2), , , , , , ];
  new module_9819.default(flag2);
  items[1] = new module_9854.default();
  new module_9854.default();
  items[2] = new module_9848.default();
  new module_9848.default();
  items[3] = new module_9853.default();
  new module_9853.default();
  items[4] = new module_9855.default();
  new module_9855.default();
  items[5] = new module_9856.default();
  new module_9856.default();
  items[6] = new module_9851.default();
  new module_9851.default();
  items1 = [new module_9849.default(), ];
  new module_9849.default();
  items1[1] = new module_9850.default();
  new module_9850.default();
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
  const _default = new module_9846.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9847.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9857.default();
  unshift3(_default2);
  return tmp;
}
const module_9846 = fn(_mod9846);
const module_9847 = fn(_mod9847);
const module_9819 = fn(_mod9819);
const module_9848 = fn(_mod9848);
const module_9849 = fn(_mod9849);
const module_9850 = fn(_mod9850);
const module_9851 = fn(_mod9851);
const module_9853 = fn(_mod9853);
const module_9854 = fn(_mod9854);
const module_9855 = fn(_mod9855);
const module_9856 = fn(_mod9856);
const module_9857 = fn(_mod9857);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9846.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9847.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9857.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));
const Chrono_export = require("module_9786").Chrono;

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
