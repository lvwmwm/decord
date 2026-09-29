// Module ID: 10816
// Function ID: 10817
// Dependencies: [10724, 10731, 10733, 10817, 10818, 10819, 10820, 10757, 10821, 10823, 10824, 10825, 10826, 10827, 10828, 10829, 10830, 10831, 10832, 10833, 10764]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10816
import _mod10757 from "module_10757" /* 10757 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10764 */;
import _mod10817 from "module_10817" /* 10817 */;
import _mod10818 from "module_10818" /* 10818 */;
import _mod10819 from "module_10819" /* 10819 */;
import _mod10820 from "module_10820" /* 10820 */;
import _mod10821 from "module_10821" /* 10821 */;
import _mod10823 from "module_10823" /* 10823 */;
import _mod10824 from "module_10824" /* 10824 */;
import _mod10825 from "module_10825" /* 10825 */;
import _mod10826 from "module_10826" /* 10826 */;
import _mod10827 from "module_10827" /* 10827 */;
import _mod10828 from "module_10828" /* 10828 */;
import _mod10829 from "module_10829" /* 10829 */;
import _mod10830 from "module_10830" /* 10830 */;
import _mod10831 from "module_10831" /* 10831 */;
import _mod10832 from "module_10832" /* 10832 */;
import _mod10833 from "module_10833" /* 10833 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new regExp.default(flag2), , , , , , , , , ];
  const _default = new regExp.default(flag2);
  items[1] = new _isNativeReflectConstruct.default();
  const _default1 = new _isNativeReflectConstruct.default();
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  const _default4 = new _isNativeReflectConstruct.default();
  items[5] = new _isNativeReflectConstruct.default();
  const _default5 = new _isNativeReflectConstruct.default();
  items[6] = new _isNativeReflectConstruct.default();
  const _default6 = new _isNativeReflectConstruct.default();
  items[7] = new _isNativeReflectConstruct.default(flag);
  const _default7 = new _isNativeReflectConstruct.default(flag);
  items[8] = new _isNativeReflectConstruct.default(flag);
  const _default8 = new _isNativeReflectConstruct.default(flag);
  items[9] = new _isNativeReflectConstruct.default(flag);
  obj.parsers = items;
  const _default9 = new _isNativeReflectConstruct.default(flag);
  const items1 = [new _isNativeReflectConstruct.default(), ];
  const _default10 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  obj.refiners = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
function createCasualConfiguration() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  const parsers1 = tmp.parsers;
  const _default = new _isNativeReflectConstruct.default();
  parsers1.unshift(new _isNativeReflectConstruct.default());
  const parsers2 = tmp.parsers;
  const _default1 = new _isNativeReflectConstruct.default();
  parsers2.unshift(new _isNativeReflectConstruct.default());
  const parsers3 = tmp.parsers;
  const _default2 = new _isNativeReflectConstruct.default();
  parsers3.unshift(new _isNativeReflectConstruct.default());
  const parsers4 = tmp.parsers;
  const _default3 = new _isNativeReflectConstruct.default();
  parsers4.unshift(new _isNativeReflectConstruct.default());
  const parsers5 = tmp.parsers;
  const _default4 = new _isNativeReflectConstruct.default();
  parsers5.unshift(new _isNativeReflectConstruct.default());
  return tmp;
}
fn(_mod10817);
fn(_mod10818);
fn(_mod10819);
fn(_mod10820);
const regExp = fn(_mod10757);
fn(_mod10821);
fn(_mod10823);
fn(_mod10824);
fn(_mod10825);
fn(_mod10826);
fn(_mod10827);
fn(_mod10828);
fn(_mod10829);
fn(_mod10830);
fn(_mod10831);
fn(_mod10832);
const _isNativeReflectConstruct = fn(_mod10833);
const chrono = new require("module_10724").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10724").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10724").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
