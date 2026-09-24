// Module ID: 10852
// Function ID: 10853
// Dependencies: [10760, 10767, 10769, 10853, 10854, 10855, 10856, 10793, 10857, 10859, 10860, 10861, 10862, 10863, 10864, 10865, 10866, 10867, 10868, 10869, 10800]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10852
import _mod10793 from "module_10793" /* 10793 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10800 */;
import _mod10853 from "module_10853" /* 10853 */;
import _mod10854 from "module_10854" /* 10854 */;
import _mod10855 from "module_10855" /* 10855 */;
import _mod10856 from "module_10856" /* 10856 */;
import _mod10857 from "module_10857" /* 10857 */;
import _mod10859 from "module_10859" /* 10859 */;
import _mod10860 from "module_10860" /* 10860 */;
import _mod10861 from "module_10861" /* 10861 */;
import _mod10862 from "module_10862" /* 10862 */;
import _mod10863 from "module_10863" /* 10863 */;
import _mod10864 from "module_10864" /* 10864 */;
import _mod10865 from "module_10865" /* 10865 */;
import _mod10866 from "module_10866" /* 10866 */;
import _mod10867 from "module_10867" /* 10867 */;
import _mod10868 from "module_10868" /* 10868 */;
import _mod10869 from "module_10869" /* 10869 */;

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
fn(_mod10853);
fn(_mod10854);
fn(_mod10855);
fn(_mod10856);
const regExp = fn(_mod10793);
fn(_mod10857);
fn(_mod10859);
fn(_mod10860);
fn(_mod10861);
fn(_mod10862);
fn(_mod10863);
fn(_mod10864);
fn(_mod10865);
fn(_mod10866);
fn(_mod10867);
fn(_mod10868);
const _isNativeReflectConstruct = fn(_mod10869);
const chrono = new require("module_10760").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10760").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10760").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
