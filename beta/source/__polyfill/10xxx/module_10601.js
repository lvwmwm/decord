// Module ID: 10601
// Function ID: 10602
// Dependencies: [10516, 10474, 10481, 10483, 10602, 10585, 10587, 10588, 10589, 10590, 10603, 10604, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10601
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10585 from "module_10585" /* 10585 */;
import _mod10587 from "module_10587" /* 10587 */;
import _mod10588 from "module_10588" /* 10588 */;
import _mod10589 from "module_10589" /* 10589 */;
import _mod10590 from "module_10590" /* 10590 */;
import _mod10602 from "module_10602" /* 10602 */;
import _mod10603 from "module_10603" /* 10603 */;
import _mod10604 from "module_10604" /* 10604 */;
import { Chrono } from "module_10474" /* 10474 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10585.default(), , , , ];
  new module_10585.default();
  items[1] = new module_10588.default();
  new module_10588.default();
  items[2] = new module_10590.default();
  new module_10590.default();
  items[3] = new module_10589.default();
  new module_10589.default();
  items[4] = new module_10587.default();
  new module_10587.default();
  items1 = [new module_10603.default(), ];
  new module_10603.default();
  items1[1] = new module_10604.default();
  new module_10604.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10516.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10602.default();
  unshift(_default);
  return tmp;
}
const module_10516 = fn(_mod10516);
const module_10602 = fn(_mod10602);
const module_10585 = fn(_mod10585);
const module_10587 = fn(_mod10587);
const module_10588 = fn(_mod10588);
const module_10589 = fn(_mod10589);
const module_10590 = fn(_mod10590);
const module_10603 = fn(_mod10603);
const module_10604 = fn(_mod10604);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10602.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10602.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10474").Chrono(createConfiguration());
const Chrono_export = require("module_10474").Chrono;

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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
