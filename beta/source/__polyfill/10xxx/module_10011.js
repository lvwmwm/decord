// Module ID: 10011
// Function ID: 10012
// Dependencies: [9928, 9935, 9937, 9961, 10012, 10014, 10015, 10016, 10017, 10018, 10019, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10011
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod10012 from "module_10012" /* 10012 */;
import _mod10014 from "module_10014" /* 10014 */;
import _mod10015 from "module_10015" /* 10015 */;
import _mod10016 from "module_10016" /* 10016 */;
import _mod10017 from "module_10017" /* 10017 */;
import _mod10018 from "module_10018" /* 10018 */;
import _mod10019 from "module_10019" /* 10019 */;
import { Chrono } from "module_9928" /* 9928 */;

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
  items = [new module_9961.default(flag2), , , ];
  new module_9961.default(flag2);
  items[1] = new module_10012.default();
  new module_10012.default();
  items[2] = new module_10014.default();
  new module_10014.default();
  items[3] = new module_10017.default();
  new module_10017.default();
  items1 = [new module_10015.default(), ];
  new module_10015.default();
  items1[1] = new module_10016.default();
  new module_10016.default();
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
  const _default = new module_10018.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10019.default();
  push2(_default1);
  return tmp;
}
const module_9961 = fn(_mod9961);
const module_10012 = fn(_mod10012);
const module_10014 = fn(_mod10014);
const module_10015 = fn(_mod10015);
const module_10016 = fn(_mod10016);
const module_10017 = fn(_mod10017);
const module_10018 = fn(_mod10018);
const module_10019 = fn(_mod10019);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10018.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10019.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9928").Chrono(createConfiguration(true));
const Chrono_export = require("module_9928").Chrono;

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
