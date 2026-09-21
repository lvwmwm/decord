// Module ID: 10796
// Function ID: 10797
// Dependencies: [10797, 10799, 10800, 10801, 10802, 10803, 10804, 10724, 10731, 10733, 10805, 10806, 10770, 10764]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10796
import includeCommonConfiguration from "includeCommonConfiguration" /* 10764 */;
import _mod10770 from "module_10770" /* 10770 */;
import JPStandardParser2 from "JPStandardParser" /* 10797 */;
import _mod10799 from "module_10799" /* 10799 */;
import _mod10800 from "module_10800" /* 10800 */;
import _mod10801 from "module_10801" /* 10801 */;
import _mod10802 from "module_10802" /* 10802 */;
import _mod10803 from "module_10803" /* 10803 */;
import _mod10804 from "module_10804" /* 10804 */;
import _mod10805 from "module_10805" /* 10805 */;
import _mod10806 from "module_10806" /* 10806 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new JPStandardParser.default(), , , , ];
  const _default = new JPStandardParser.default();
  items[1] = new regExp.default();
  const _default1 = new regExp.default();
  items[2] = new regExp.default();
  const _default2 = new regExp.default();
  items[3] = new regExp.default();
  const _default3 = new regExp.default();
  items[4] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  const _default4 = new _isNativeReflectConstruct.default();
  const items1 = [new _isNativeReflectConstruct.default(), , ];
  const _default5 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  const _default6 = new _isNativeReflectConstruct.default();
  items1[2] = new _isNativeReflectConstruct.default();
  obj.refiners = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof _isNativeReflectConstruct.default));
  return result;
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  parsers.unshift(new module_10800.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10799);
const module_10800 = fn(_mod10800);
fn(_mod10801);
fn(_mod10802);
fn(_mod10803);
fn(_mod10804);
fn(_mod10805);
const regExp = fn(_mod10806);
const _isNativeReflectConstruct = fn(_mod10770);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10800.default());
const chrono = new require("module_10724").Chrono(configuration);
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
