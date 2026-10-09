// Module ID: 9932
// Function ID: 9933
// Dependencies: [9786, 9793, 9795, 9819, 9933, 9935, 9936, 9937, 9938, 9939, 9940, 9941, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9932
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9935 from "module_9935" /* 9935 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9937 from "module_9937" /* 9937 */;
import _mod9938 from "module_9938" /* 9938 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9941 from "module_9941" /* 9941 */;
import { Chrono } from "module_9786" /* 9786 */;

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
  items = [new module_9819.default(flag2), , , , ];
  new module_9819.default(flag2);
  items[1] = new module_9933.default();
  new module_9933.default();
  items[2] = new module_9935.default();
  new module_9935.default();
  items[3] = new module_9938.default();
  new module_9938.default();
  items[4] = new module_9941.default();
  new module_9941.default();
  items1 = [new module_9936.default(), ];
  new module_9936.default();
  items1[1] = new module_9937.default();
  new module_9937.default();
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
  const _default = new module_9939.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_9940.default();
  push2(_default1);
  return tmp;
}
const module_9819 = fn(_mod9819);
const module_9933 = fn(_mod9933);
const module_9935 = fn(_mod9935);
const module_9936 = fn(_mod9936);
const module_9937 = fn(_mod9937);
const module_9938 = fn(_mod9938);
const module_9939 = fn(_mod9939);
const module_9940 = fn(_mod9940);
const module_9941 = fn(_mod9941);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_9939.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_9940.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));
const Chrono_export = require("module_9786").Chrono;

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
