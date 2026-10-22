// Module ID: 10308
// Function ID: 10309
// Dependencies: [10223, 10181, 10188, 10190, 10309, 10292, 10294, 10295, 10296, 10297, 10310, 10311, 10221]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10308
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
import _mod10223 from "module_10223" /* 10223 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import _mod10296 from "module_10296" /* 10296 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10309 from "module_10309" /* 10309 */;
import _mod10310 from "module_10310" /* 10310 */;
import _mod10311 from "module_10311" /* 10311 */;
import { Chrono } from "module_10181" /* 10181 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10292.default(), , , , ];
  new module_10292.default();
  items[1] = new module_10295.default();
  new module_10295.default();
  items[2] = new module_10297.default();
  new module_10297.default();
  items[3] = new module_10296.default();
  new module_10296.default();
  items[4] = new module_10294.default();
  new module_10294.default();
  items1 = [new module_10310.default(), ];
  new module_10310.default();
  items1[1] = new module_10311.default();
  new module_10311.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10223.default));
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
  const _default = new module_10309.default();
  unshift(_default);
  return tmp;
}
const module_10223 = fn(_mod10223);
const module_10309 = fn(_mod10309);
const module_10292 = fn(_mod10292);
const module_10294 = fn(_mod10294);
const module_10295 = fn(_mod10295);
const module_10296 = fn(_mod10296);
const module_10297 = fn(_mod10297);
const module_10310 = fn(_mod10310);
const module_10311 = fn(_mod10311);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10309.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10309.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10181").Chrono(createConfiguration());
const Chrono_export = require("module_10181").Chrono;

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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
