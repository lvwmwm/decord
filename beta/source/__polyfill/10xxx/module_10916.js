// Module ID: 10916
// Function ID: 10917
// Dependencies: [10917, 10919, 10921, 10922, 10923, 10924, 10925, 10926, 10927, 10928, 10929, 10760, 10767, 10769, 10793, 10930, 10805, 10800]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10916
import _mod10793 from "module_10793" /* 10793 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10800 */;
import _mod10805 from "module_10805" /* 10805 */;
import _mod10917 from "module_10917" /* 10917 */;
import _mod10919 from "module_10919" /* 10919 */;
import _mod10921 from "module_10921" /* 10921 */;
import _mod10922 from "module_10922" /* 10922 */;
import _mod10923 from "module_10923" /* 10923 */;
import _mod10924 from "module_10924" /* 10924 */;
import _mod10925 from "module_10925" /* 10925 */;
import _mod10926 from "module_10926" /* 10926 */;
import _mod10927 from "module_10927" /* 10927 */;
import _mod10928 from "module_10928" /* 10928 */;
import _mod10929 from "module_10929" /* 10929 */;
import _mod10930 from "module_10930" /* 10930 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  const obj = { parsers: null, refiners: null };
  const items = [new _isNativeReflectConstruct.default(), , , , , , ];
  const _default = new _isNativeReflectConstruct.default();
  items[1] = new regExp.default(true);
  const _default1 = new regExp.default(true);
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  const _default4 = new _isNativeReflectConstruct.default();
  items[5] = new _isNativeReflectConstruct.default(flag);
  const _default5 = new _isNativeReflectConstruct.default(flag);
  items[6] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  const _default6 = new _isNativeReflectConstruct.default();
  const items1 = [new _isNativeReflectConstruct.default(), ];
  const _default7 = new _isNativeReflectConstruct.default();
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
  const tmp = createConfiguration(false);
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
  return tmp;
}
fn(_mod10917);
fn(_mod10919);
fn(_mod10921);
fn(_mod10922);
fn(_mod10923);
fn(_mod10924);
fn(_mod10925);
fn(_mod10926);
fn(_mod10927);
fn(_mod10928);
fn(_mod10929);
const regExp = fn(_mod10793);
fn(_mod10930);
const _isNativeReflectConstruct = fn(_mod10805);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_10760").Chrono;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingResult;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingComponents;
  }
};
const obj4 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ReferenceWithTimezone;
  }
};
const obj5 = {
  enumerable: true,
  get() {
    return require("Meridiem").Meridiem;
  }
};
const obj6 = {
  enumerable: true,
  get() {
    return require("Meridiem").Weekday;
  }
};
parsers1.unshift(new _isNativeReflectConstruct.default());
let parsers2 = configuration.parsers;
let _default1 = new _isNativeReflectConstruct.default();
parsers2.unshift(new _isNativeReflectConstruct.default());
let parsers3 = configuration.parsers;
let _default2 = new _isNativeReflectConstruct.default();
parsers3.unshift(new _isNativeReflectConstruct.default());
let parsers4 = configuration.parsers;
let _default3 = new _isNativeReflectConstruct.default();
parsers4.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("module_10760").Chrono(configuration);
const chrono1 = new require("module_10760").Chrono(createConfiguration(true));

export { createCasualConfiguration };
export { createConfiguration };
export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export const Chrono = require("module_10760").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
