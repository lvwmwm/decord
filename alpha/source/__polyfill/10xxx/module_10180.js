// Module ID: 10180
// Function ID: 10181
// Dependencies: [10034, 10041, 10043, 10067, 10181, 10183, 10184, 10185, 10186, 10187, 10188, 10189, 10074]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10180
import _mod10067 from "module_10067" /* 10067 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10074 */;
import _mod10181 from "module_10181" /* 10181 */;
import _mod10183 from "module_10183" /* 10183 */;
import _mod10184 from "module_10184" /* 10184 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10186 from "module_10186" /* 10186 */;
import _mod10187 from "module_10187" /* 10187 */;
import _mod10188 from "module_10188" /* 10188 */;
import _mod10189 from "module_10189" /* 10189 */;
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
  items = [new module_10067.default(flag2), , , , ];
  new module_10067.default(flag2);
  items[1] = new module_10181.default();
  new module_10181.default();
  items[2] = new module_10183.default();
  new module_10183.default();
  items[3] = new module_10186.default();
  new module_10186.default();
  items[4] = new module_10189.default();
  new module_10189.default();
  items1 = [new module_10184.default(), ];
  new module_10184.default();
  items1[1] = new module_10185.default();
  new module_10185.default();
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
  const _default = new module_10187.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10188.default();
  push2(_default1);
  return tmp;
}
const module_10067 = fn(_mod10067);
const module_10181 = fn(_mod10181);
const module_10183 = fn(_mod10183);
const module_10184 = fn(_mod10184);
const module_10185 = fn(_mod10185);
const module_10186 = fn(_mod10186);
const module_10187 = fn(_mod10187);
const module_10188 = fn(_mod10188);
const module_10189 = fn(_mod10189);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10187.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10188.default();
push2(_default1);
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
