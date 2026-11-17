// Module ID: 12235
// Function ID: 12236
// Dependencies: [12089, 12096, 12098, 12122, 12236, 12238, 12239, 12240, 12241, 12242, 12243, 12244, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12235
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12236 from "module_12236" /* 12236 */;
import _mod12238 from "module_12238" /* 12238 */;
import _mod12239 from "module_12239" /* 12239 */;
import _mod12240 from "module_12240" /* 12240 */;
import _mod12241 from "module_12241" /* 12241 */;
import _mod12242 from "module_12242" /* 12242 */;
import _mod12243 from "module_12243" /* 12243 */;
import _mod12244 from "module_12244" /* 12244 */;
import { Chrono } from "module_12089" /* 12089 */;

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
  items = [new module_12122.default(flag2), , , , ];
  new module_12122.default(flag2);
  items[1] = new module_12236.default();
  new module_12236.default();
  items[2] = new module_12238.default();
  new module_12238.default();
  items[3] = new module_12241.default();
  new module_12241.default();
  items[4] = new module_12244.default();
  new module_12244.default();
  items1 = [new module_12239.default(), ];
  new module_12239.default();
  items1[1] = new module_12240.default();
  new module_12240.default();
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
  const _default = new module_12242.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_12243.default();
  push2(_default1);
  return tmp;
}
const module_12122 = fn(_mod12122);
const module_12236 = fn(_mod12236);
const module_12238 = fn(_mod12238);
const module_12239 = fn(_mod12239);
const module_12240 = fn(_mod12240);
const module_12241 = fn(_mod12241);
const module_12242 = fn(_mod12242);
const module_12243 = fn(_mod12243);
const module_12244 = fn(_mod12244);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_12242.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_12243.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_12089").Chrono(createConfiguration(true));
const Chrono_export = require("module_12089").Chrono;

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
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
