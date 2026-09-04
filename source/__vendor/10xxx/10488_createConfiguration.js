// Module ID: 10488
// Function ID: 10489
// Name: createConfiguration
// Dependencies: [10489, 10491, 10493, 10494, 10495, 10496, 10497, 10498, 10499, 10500, 10501, 10357, 10364, 10366, 10390, 10502, 10397]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10488 (createConfiguration)
import regExp from "regExp" /* 10390 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10397 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10489 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 10491 */;
import _isNativeReflectConstruct4 from "_isNativeReflectConstruct" /* 10493 */;
import _isNativeReflectConstruct5 from "_isNativeReflectConstruct" /* 10494 */;
import _isNativeReflectConstruct6 from "_isNativeReflectConstruct" /* 10495 */;
import _isNativeReflectConstruct7 from "_isNativeReflectConstruct" /* 10496 */;
import _isNativeReflectConstruct8 from "_isNativeReflectConstruct" /* 10497 */;
import _isNativeReflectConstruct9 from "_isNativeReflectConstruct" /* 10498 */;
import _isNativeReflectConstruct10 from "_isNativeReflectConstruct" /* 10499 */;
import _isNativeReflectConstruct11 from "_isNativeReflectConstruct" /* 10500 */;
import _isNativeReflectConstruct12 from "_isNativeReflectConstruct" /* 10501 */;
import _isNativeReflectConstruct13 from "_isNativeReflectConstruct" /* 10502 */;

function createConfiguration(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new mod8.default(true), , , , , ];
  const _default = new mod8.default(true);
  items[1] = new mod.default();
  const _default1 = new mod.default();
  items[2] = new mod2.default();
  const _default2 = new mod2.default();
  items[3] = new mod7.default();
  const _default3 = new mod7.default();
  items[4] = new mod3.default(flag);
  const _default4 = new mod3.default(flag);
  items[5] = new mod4.default();
  obj[0] = items;
  const _default5 = new mod4.default();
  const items1 = [new mod6.default(), ];
  const _default6 = new mod6.default();
  items1[1] = new mod5.default();
  obj[1] = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
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
let closure_3 = fn(_isNativeReflectConstruct2);
let closure_4 = fn(_isNativeReflectConstruct3);
let _isNativeReflectConstruct = fn(_isNativeReflectConstruct4);
let closure_6 = fn(_isNativeReflectConstruct5);
let closure_7 = fn(_isNativeReflectConstruct6);
let closure_8 = fn(_isNativeReflectConstruct7);
let closure_9 = fn(_isNativeReflectConstruct8);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct9);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct10);
let closure_12 = fn(_isNativeReflectConstruct11);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct12);
let closure_14 = fn(regExp);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct13);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
const obj1 = {
  enumerable: true,
  get() {
    return require(10364) /* ReferenceWithTimezone */.ReferenceWithTimezone;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require(10366).Meridiem;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require(10366).Weekday;
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
const chrono = new require("Chrono").Chrono(configuration);
const chrono1 = new require("Chrono").Chrono(createConfiguration(true));

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
export const Chrono = require(10364) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = require(10364) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = require(10364) /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = require(10364) /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require(10366).Meridiem;
export const Weekday = require(10366).Weekday;
export const casual = chrono;
export const strict = chrono1;
