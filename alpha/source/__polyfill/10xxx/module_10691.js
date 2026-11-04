// Module ID: 10691
// Function ID: 10692
// Dependencies: [10501, 10508, 10510, 10534, 10546, 10692, 10694, 10695, 10696, 10541]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10691
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10546 from "module_10546" /* 10546 */;
import _mod10692 from "module_10692" /* 10692 */;
import _mod10694 from "module_10694" /* 10694 */;
import _mod10695 from "module_10695" /* 10695 */;
import _mod10696 from "module_10696" /* 10696 */;
import { Chrono } from "module_10501" /* 10501 */;

const require = globalThis.__r;

let items;
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
  let items;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10546.default(), , , , ];
  new module_10546.default();
  items[1] = new module_10534.default(flag);
  new module_10534.default(flag);
  items[2] = new module_10694.default();
  new module_10694.default();
  items[3] = new module_10692.default();
  new module_10692.default();
  items[4] = new module_10695.default();
  new module_10695.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10696.default();
  unshift(_default5);
  return result;
}
function createConfiguration(flag) {
  let items;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10546.default(), , , , ];
  new module_10546.default();
  items[1] = new module_10534.default(flag2);
  new module_10534.default(flag2);
  items[2] = new module_10694.default();
  new module_10694.default();
  items[3] = new module_10692.default();
  new module_10692.default();
  items[4] = new module_10695.default();
  new module_10695.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10534 = fn(_mod10534);
const module_10546 = fn(_mod10546);
const module_10692 = fn(_mod10692);
const module_10694 = fn(_mod10694);
const module_10695 = fn(_mod10695);
const module_10696 = fn(_mod10696);
const chrono = new require("module_10501").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10546.default();
items = [_default, , , , ];
const _default1 = new module_10534.default(true);
items[1] = _default1;
const _default2 = new module_10694.default();
items[2] = _default2;
const _default3 = new module_10692.default();
items[3] = _default3;
const _default4 = new module_10695.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10501").Chrono;

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
