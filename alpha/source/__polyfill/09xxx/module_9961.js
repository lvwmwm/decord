// Module ID: 9961
// Function ID: 9962
// Dependencies: [9815, 9822, 9824, 9848, 9962, 9964, 9965, 9966, 9967, 9968, 9969, 9970, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9961
import _mod9848 from "module_9848" /* 9848 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9962 from "module_9962" /* 9962 */;
import _mod9964 from "module_9964" /* 9964 */;
import _mod9965 from "module_9965" /* 9965 */;
import _mod9966 from "module_9966" /* 9966 */;
import _mod9967 from "module_9967" /* 9967 */;
import _mod9968 from "module_9968" /* 9968 */;
import _mod9969 from "module_9969" /* 9969 */;
import _mod9970 from "module_9970" /* 9970 */;
import { Chrono } from "module_9815" /* 9815 */;

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
  items = [new module_9848.default(flag2), , , , ];
  new module_9848.default(flag2);
  items[1] = new module_9962.default();
  new module_9962.default();
  items[2] = new module_9964.default();
  new module_9964.default();
  items[3] = new module_9967.default();
  new module_9967.default();
  items[4] = new module_9970.default();
  new module_9970.default();
  items1 = [new module_9965.default(), ];
  new module_9965.default();
  items1[1] = new module_9966.default();
  new module_9966.default();
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
  const _default = new module_9968.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9969.default();
  push2(_default1);
  return tmp;
}
const module_9848 = fn(_mod9848);
const module_9962 = fn(_mod9962);
const module_9964 = fn(_mod9964);
const module_9965 = fn(_mod9965);
const module_9966 = fn(_mod9966);
const module_9967 = fn(_mod9967);
const module_9968 = fn(_mod9968);
const module_9969 = fn(_mod9969);
const module_9970 = fn(_mod9970);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9968.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9969.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9815").Chrono(createConfiguration(true));
const Chrono_export = require("module_9815").Chrono;

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
