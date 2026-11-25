// Module ID: 10960
// Function ID: 10961
// Dependencies: [10961, 10963, 10965, 10966, 10967, 10968, 10969, 10970, 10971, 10972, 10973, 10829, 10836, 10838, 10862, 10974, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10960
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod10961 from "module_10961" /* 10961 */;
import _mod10963 from "module_10963" /* 10963 */;
import _mod10965 from "module_10965" /* 10965 */;
import _mod10966 from "module_10966" /* 10966 */;
import _mod10967 from "module_10967" /* 10967 */;
import _mod10968 from "module_10968" /* 10968 */;
import _mod10969 from "module_10969" /* 10969 */;
import _mod10970 from "module_10970" /* 10970 */;
import _mod10971 from "module_10971" /* 10971 */;
import _mod10972 from "module_10972" /* 10972 */;
import _mod10973 from "module_10973" /* 10973 */;
import _mod10974 from "module_10974" /* 10974 */;
import { Chrono } from "module_10829" /* 10829 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10862.default(true), , , , , ];
  new module_10862.default(true);
  items[1] = new module_10961.default();
  new module_10961.default();
  items[2] = new module_10963.default();
  new module_10963.default();
  items[3] = new module_10972.default();
  new module_10972.default();
  items[4] = new module_10966.default(flag);
  new module_10966.default(flag);
  items[5] = new module_10967.default();
  new module_10967.default();
  items1 = [new module_10969.default(), ];
  new module_10969.default();
  items1[1] = new module_10968.default();
  new module_10968.default();
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10970.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10971.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10965.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10973.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10974.default();
  unshift5(_default4);
  return tmp;
}
const module_10961 = fn(_mod10961);
const module_10963 = fn(_mod10963);
const module_10965 = fn(_mod10965);
const module_10966 = fn(_mod10966);
const module_10967 = fn(_mod10967);
const module_10968 = fn(_mod10968);
const module_10969 = fn(_mod10969);
const module_10970 = fn(_mod10970);
const module_10971 = fn(_mod10971);
const module_10972 = fn(_mod10972);
const module_10973 = fn(_mod10973);
const module_10862 = fn(_mod10862);
const module_10974 = fn(_mod10974);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10970.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10971.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10965.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10973.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10974.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10829").Chrono(createConfiguration(true));
const Chrono_export = require("module_10829").Chrono;

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
