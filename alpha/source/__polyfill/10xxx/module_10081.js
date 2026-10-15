// Module ID: 10081
// Function ID: 10082
// Dependencies: [10034, 10041, 10043, 10067, 10079, 10082, 10083, 10085, 10086, 10087, 10088, 10089, 10090, 10091, 10092, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10081
import _mod10067 from "module_10067" /* 10067 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10082 from "module_10082" /* 10082 */;
import _mod10083 from "module_10083" /* 10083 */;
import _mod10085 from "module_10085" /* 10085 */;
import _mod10086 from "module_10086" /* 10086 */;
import _mod10087 from "module_10087" /* 10087 */;
import _mod10088 from "module_10088" /* 10088 */;
import _mod10089 from "module_10089" /* 10089 */;
import _mod10090 from "module_10090" /* 10090 */;
import _mod10091 from "module_10091" /* 10091 */;
import _mod10092 from "module_10092" /* 10092 */;
import { Chrono } from "module_10034" /* 10034 */;

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
  items = [new module_10079.default(), , , , , , ];
  new module_10079.default();
  items[1] = new module_10067.default(flag2);
  new module_10067.default(flag2);
  items[2] = new module_10082.default();
  new module_10082.default();
  items[3] = new module_10085.default();
  new module_10085.default();
  items[4] = new module_10090.default();
  new module_10090.default();
  items[5] = new module_10083.default();
  new module_10083.default();
  items[6] = new module_10092.default();
  new module_10092.default();
  items1 = [new module_10086.default(), ];
  new module_10086.default();
  items1[1] = new module_10087.default();
  new module_10087.default();
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
  const _default = new module_10089.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10088.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10091.default();
  unshift3(_default2);
  return tmp;
}
const module_10067 = fn(_mod10067);
const module_10079 = fn(_mod10079);
const module_10082 = fn(_mod10082);
const module_10083 = fn(_mod10083);
const module_10085 = fn(_mod10085);
const module_10086 = fn(_mod10086);
const module_10087 = fn(_mod10087);
const module_10088 = fn(_mod10088);
const module_10089 = fn(_mod10089);
const module_10090 = fn(_mod10090);
const module_10091 = fn(_mod10091);
const module_10092 = fn(_mod10092);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10089.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10088.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10091.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10034").Chrono(createConfiguration(true));
const Chrono_export = require("module_10034").Chrono;

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
