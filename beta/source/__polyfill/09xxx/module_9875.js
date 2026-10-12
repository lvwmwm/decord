// Module ID: 9875
// Function ID: 9876
// Dependencies: [9816, 9823, 9825, 9876, 9877, 9849, 9878, 9879, 9880, 9881, 9883, 9884, 9885, 9886, 9887, 9856]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9875
import _mod9849 from "module_9849" /* 9849 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9856 */;
import _mod9876 from "module_9876" /* 9876 */;
import _mod9877 from "module_9877" /* 9877 */;
import _mod9878 from "module_9878" /* 9878 */;
import _mod9879 from "module_9879" /* 9879 */;
import _mod9880 from "module_9880" /* 9880 */;
import _mod9881 from "module_9881" /* 9881 */;
import _mod9883 from "module_9883" /* 9883 */;
import _mod9884 from "module_9884" /* 9884 */;
import _mod9885 from "module_9885" /* 9885 */;
import _mod9886 from "module_9886" /* 9886 */;
import _mod9887 from "module_9887" /* 9887 */;
import { Chrono } from "module_9816" /* 9816 */;

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
  items = [new module_9849.default(flag2), , , , , , ];
  new module_9849.default(flag2);
  items[1] = new module_9884.default();
  new module_9884.default();
  items[2] = new module_9878.default();
  new module_9878.default();
  items[3] = new module_9883.default();
  new module_9883.default();
  items[4] = new module_9885.default();
  new module_9885.default();
  items[5] = new module_9886.default();
  new module_9886.default();
  items[6] = new module_9881.default();
  new module_9881.default();
  items1 = [new module_9879.default(), ];
  new module_9879.default();
  items1[1] = new module_9880.default();
  new module_9880.default();
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
  const _default = new module_9876.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9877.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9887.default();
  unshift3(_default2);
  return tmp;
}
const module_9876 = fn(_mod9876);
const module_9877 = fn(_mod9877);
const module_9849 = fn(_mod9849);
const module_9878 = fn(_mod9878);
const module_9879 = fn(_mod9879);
const module_9880 = fn(_mod9880);
const module_9881 = fn(_mod9881);
const module_9883 = fn(_mod9883);
const module_9884 = fn(_mod9884);
const module_9885 = fn(_mod9885);
const module_9886 = fn(_mod9886);
const module_9887 = fn(_mod9887);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9876.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9877.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9887.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9816").Chrono(createConfiguration(true));
const Chrono_export = require("module_9816").Chrono;

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
