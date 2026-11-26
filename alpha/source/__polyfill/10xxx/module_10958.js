// Module ID: 10958
// Function ID: 10959
// Dependencies: [10875, 10882, 10884, 10908, 10959, 10961, 10962, 10963, 10964, 10965, 10966, 10915]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10958
import _mod10908 from "module_10908" /* 10908 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10915 */;
import _mod10959 from "module_10959" /* 10959 */;
import _mod10961 from "module_10961" /* 10961 */;
import _mod10962 from "module_10962" /* 10962 */;
import _mod10963 from "module_10963" /* 10963 */;
import _mod10964 from "module_10964" /* 10964 */;
import _mod10965 from "module_10965" /* 10965 */;
import _mod10966 from "module_10966" /* 10966 */;
import { Chrono } from "module_10875" /* 10875 */;

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
  items = [new module_10908.default(flag2), , , ];
  new module_10908.default(flag2);
  items[1] = new module_10959.default();
  new module_10959.default();
  items[2] = new module_10961.default();
  new module_10961.default();
  items[3] = new module_10964.default();
  new module_10964.default();
  items1 = [new module_10962.default(), ];
  new module_10962.default();
  items1[1] = new module_10963.default();
  new module_10963.default();
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
  const _default = new module_10965.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10966.default();
  push2(_default1);
  return tmp;
}
const module_10908 = fn(_mod10908);
const module_10959 = fn(_mod10959);
const module_10961 = fn(_mod10961);
const module_10962 = fn(_mod10962);
const module_10963 = fn(_mod10963);
const module_10964 = fn(_mod10964);
const module_10965 = fn(_mod10965);
const module_10966 = fn(_mod10966);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10965.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10966.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10875").Chrono(createConfiguration(true));
const Chrono_export = require("module_10875").Chrono;

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
