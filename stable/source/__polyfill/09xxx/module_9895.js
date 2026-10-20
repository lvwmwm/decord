// Module ID: 9895
// Function ID: 9896
// Dependencies: [9812, 9819, 9821, 9845, 9896, 9898, 9899, 9900, 9901, 9902, 9903, 9852]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9895
import _mod9845 from "module_9845" /* 9845 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9852 */;
import _mod9896 from "module_9896" /* 9896 */;
import _mod9898 from "module_9898" /* 9898 */;
import _mod9899 from "module_9899" /* 9899 */;
import _mod9900 from "module_9900" /* 9900 */;
import _mod9901 from "module_9901" /* 9901 */;
import _mod9902 from "module_9902" /* 9902 */;
import _mod9903 from "module_9903" /* 9903 */;
import { Chrono } from "module_9812" /* 9812 */;

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
  items = [new module_9845.default(flag2), , , ];
  new module_9845.default(flag2);
  items[1] = new module_9896.default();
  new module_9896.default();
  items[2] = new module_9898.default();
  new module_9898.default();
  items[3] = new module_9901.default();
  new module_9901.default();
  items1 = [new module_9899.default(), ];
  new module_9899.default();
  items1[1] = new module_9900.default();
  new module_9900.default();
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
  const _default = new module_9902.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9903.default();
  push2(_default1);
  return tmp;
}
const module_9845 = fn(_mod9845);
const module_9896 = fn(_mod9896);
const module_9898 = fn(_mod9898);
const module_9899 = fn(_mod9899);
const module_9900 = fn(_mod9900);
const module_9901 = fn(_mod9901);
const module_9902 = fn(_mod9902);
const module_9903 = fn(_mod9903);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9902.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9903.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9812").Chrono(createConfiguration(true));
const Chrono_export = require("module_9812").Chrono;

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
