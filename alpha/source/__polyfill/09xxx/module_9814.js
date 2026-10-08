// Module ID: 9814
// Function ID: 9815
// Dependencies: [9767, 9774, 9776, 9800, 9812, 9815, 9816, 9818, 9819, 9820, 9821, 9822, 9823, 9824, 9825, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9814
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9812 from "module_9812" /* 9812 */;
import _mod9815 from "module_9815" /* 9815 */;
import _mod9816 from "module_9816" /* 9816 */;
import _mod9818 from "module_9818" /* 9818 */;
import _mod9819 from "module_9819" /* 9819 */;
import _mod9820 from "module_9820" /* 9820 */;
import _mod9821 from "module_9821" /* 9821 */;
import _mod9822 from "module_9822" /* 9822 */;
import _mod9823 from "module_9823" /* 9823 */;
import _mod9824 from "module_9824" /* 9824 */;
import _mod9825 from "module_9825" /* 9825 */;
import { Chrono } from "module_9767" /* 9767 */;

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
  items = [new module_9812.default(), , , , , , ];
  new module_9812.default();
  items[1] = new module_9800.default(flag2);
  new module_9800.default(flag2);
  items[2] = new module_9815.default();
  new module_9815.default();
  items[3] = new module_9818.default();
  new module_9818.default();
  items[4] = new module_9823.default();
  new module_9823.default();
  items[5] = new module_9816.default();
  new module_9816.default();
  items[6] = new module_9825.default();
  new module_9825.default();
  items1 = [new module_9819.default(), ];
  new module_9819.default();
  items1[1] = new module_9820.default();
  new module_9820.default();
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
  const _default = new module_9822.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9821.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9824.default();
  unshift3(_default2);
  return tmp;
}
const module_9800 = fn(_mod9800);
const module_9812 = fn(_mod9812);
const module_9815 = fn(_mod9815);
const module_9816 = fn(_mod9816);
const module_9818 = fn(_mod9818);
const module_9819 = fn(_mod9819);
const module_9820 = fn(_mod9820);
const module_9821 = fn(_mod9821);
const module_9822 = fn(_mod9822);
const module_9823 = fn(_mod9823);
const module_9824 = fn(_mod9824);
const module_9825 = fn(_mod9825);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9822.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9821.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9824.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9767").Chrono(createConfiguration(true));
const Chrono_export = require("module_9767").Chrono;

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
