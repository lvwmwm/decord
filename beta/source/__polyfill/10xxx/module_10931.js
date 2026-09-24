// Module ID: 10931
// Function ID: 10932
// Dependencies: [10932, 10934, 10935, 10936, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 10944, 10945, 10946, 10947, 10793, 10948, 10949, 10760, 10800]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10931
import _mod10760 from "module_10760" /* 10760 */;
import _mod10793 from "module_10793" /* 10793 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10800 */;
import _mod10932 from "module_10932" /* 10932 */;
import _mod10934 from "module_10934" /* 10934 */;
import _mod10935 from "module_10935" /* 10935 */;
import _mod10936 from "module_10936" /* 10936 */;
import _mod10937 from "module_10937" /* 10937 */;
import _mod10938 from "module_10938" /* 10938 */;
import _mod10939 from "module_10939" /* 10939 */;
import _mod10940 from "module_10940" /* 10940 */;
import _mod10941 from "module_10941" /* 10941 */;
import _mod10942 from "module_10942" /* 10942 */;
import _mod10943 from "module_10943" /* 10943 */;
import _mod10944 from "module_10944" /* 10944 */;
import _mod10945 from "module_10945" /* 10945 */;
import _mod10946 from "module_10946" /* 10946 */;
import _mod10947 from "module_10947" /* 10947 */;
import _mod10948 from "module_10948" /* 10948 */;
import _mod10949 from "module_10949" /* 10949 */;

function createConfiguration(flag, arg1) {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
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
  const items1 = [new _isNativeReflectConstruct.default(), , ];
  const _default10 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  const _default11 = new _isNativeReflectConstruct.default();
  items1[2] = new _isNativeReflectConstruct.default();
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
    flag = false;
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
  return tmp;
}
fn(_mod10932);
fn(_mod10934);
fn(_mod10935);
fn(_mod10936);
fn(_mod10937);
fn(_mod10938);
fn(_mod10939);
fn(_mod10940);
fn(_mod10941);
fn(_mod10942);
fn(_mod10943);
fn(_mod10944);
fn(_mod10945);
fn(_mod10946);
fn(_mod10947);
const regExp = fn(_mod10793);
fn(_mod10948);
const _isNativeReflectConstruct = fn(_mod10949);
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
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
const chrono = new _mod10760.Chrono(configuration);
const chrono1 = new _mod10760.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10760.Chrono(createConfiguration(false, true));

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
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
