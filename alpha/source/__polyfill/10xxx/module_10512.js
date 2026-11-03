// Module ID: 10512
// Function ID: 10513
// Dependencies: [10453, 10460, 10462, 10513, 10514, 10486, 10515, 10516, 10517, 10518, 10520, 10521, 10522, 10523, 10524, 10493]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10512
import _mod10486 from "module_10486" /* 10486 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10493 */;
import _mod10513 from "module_10513" /* 10513 */;
import _mod10514 from "module_10514" /* 10514 */;
import _mod10515 from "module_10515" /* 10515 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10517 from "module_10517" /* 10517 */;
import _mod10518 from "module_10518" /* 10518 */;
import _mod10520 from "module_10520" /* 10520 */;
import _mod10521 from "module_10521" /* 10521 */;
import _mod10522 from "module_10522" /* 10522 */;
import _mod10523 from "module_10523" /* 10523 */;
import _mod10524 from "module_10524" /* 10524 */;
import { Chrono } from "module_10453" /* 10453 */;

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
  items = [new module_10486.default(flag2), , , , , , ];
  new module_10486.default(flag2);
  items[1] = new module_10521.default();
  new module_10521.default();
  items[2] = new module_10515.default();
  new module_10515.default();
  items[3] = new module_10520.default();
  new module_10520.default();
  items[4] = new module_10522.default();
  new module_10522.default();
  items[5] = new module_10523.default();
  new module_10523.default();
  items[6] = new module_10518.default();
  new module_10518.default();
  items1 = [new module_10516.default(), ];
  new module_10516.default();
  items1[1] = new module_10517.default();
  new module_10517.default();
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
  const unshift = parsers.unshift;
  const _default = new module_10513.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10514.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10524.default();
  unshift3(_default2);
  return tmp;
}
const module_10513 = fn(_mod10513);
const module_10514 = fn(_mod10514);
const module_10486 = fn(_mod10486);
const module_10515 = fn(_mod10515);
const module_10516 = fn(_mod10516);
const module_10517 = fn(_mod10517);
const module_10518 = fn(_mod10518);
const module_10520 = fn(_mod10520);
const module_10521 = fn(_mod10521);
const module_10522 = fn(_mod10522);
const module_10523 = fn(_mod10523);
const module_10524 = fn(_mod10524);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10513.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10514.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10524.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration(true));
const Chrono_export = require("module_10453").Chrono;

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
