// Module ID: 10371
// Function ID: 10372
// Dependencies: [10287, 10245, 10252, 10254, 10362, 10363, 10365, 10366, 10367, 10368, 10369, 10370, 10285]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10371
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10285 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10362 from "module_10362" /* 10362 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import _mod10367 from "module_10367" /* 10367 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10369 from "module_10369" /* 10369 */;
import _mod10370 from "module_10370" /* 10370 */;
import { Chrono } from "module_10245" /* 10245 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10363.default(), , , , ];
  new module_10363.default();
  items[1] = new module_10366.default();
  new module_10366.default();
  items[2] = new module_10368.default();
  new module_10368.default();
  items[3] = new module_10367.default();
  new module_10367.default();
  items[4] = new module_10365.default();
  new module_10365.default();
  items1 = [new module_10369.default(), ];
  new module_10369.default();
  items1[1] = new module_10370.default();
  new module_10370.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10287.default));
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
  const _default = new module_10362.default();
  unshift(_default);
  return tmp;
}
const module_10287 = fn(_mod10287);
const module_10362 = fn(_mod10362);
const module_10363 = fn(_mod10363);
const module_10365 = fn(_mod10365);
const module_10366 = fn(_mod10366);
const module_10367 = fn(_mod10367);
const module_10368 = fn(_mod10368);
const module_10369 = fn(_mod10369);
const module_10370 = fn(_mod10370);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10362.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10362.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10245").Chrono(createConfiguration());
const Chrono_export = require("module_10245").Chrono;

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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
