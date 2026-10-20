// Module ID: 10286
// Function ID: 10287
// Dependencies: [10140, 10147, 10149, 10173, 10287, 10289, 10290, 10291, 10292, 10293, 10294, 10295, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10286
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10293 from "module_10293" /* 10293 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import { Chrono } from "module_10140" /* 10140 */;

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
  items = [new module_10173.default(flag2), , , , ];
  new module_10173.default(flag2);
  items[1] = new module_10287.default();
  new module_10287.default();
  items[2] = new module_10289.default();
  new module_10289.default();
  items[3] = new module_10292.default();
  new module_10292.default();
  items[4] = new module_10295.default();
  new module_10295.default();
  items1 = [new module_10290.default(), ];
  new module_10290.default();
  items1[1] = new module_10291.default();
  new module_10291.default();
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
  const push = parsers.push;
  const _default = new module_10293.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10294.default();
  push2(_default1);
  return tmp;
}
const module_10173 = fn(_mod10173);
const module_10287 = fn(_mod10287);
const module_10289 = fn(_mod10289);
const module_10290 = fn(_mod10290);
const module_10291 = fn(_mod10291);
const module_10292 = fn(_mod10292);
const module_10293 = fn(_mod10293);
const module_10294 = fn(_mod10294);
const module_10295 = fn(_mod10295);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10293.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10294.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10140").Chrono(createConfiguration(true));
const Chrono_export = require("module_10140").Chrono;

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
