// Module ID: 10260
// Function ID: 10261
// Dependencies: [10261, 10263, 10264, 10265, 10266, 10267, 10268, 10188, 10195, 10197, 10269, 10270, 10234, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10260
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10234 from "module_10234" /* 10234 */;
import _mod10261 from "module_10261" /* 10261 */;
import _mod10263 from "module_10263" /* 10263 */;
import _mod10264 from "module_10264" /* 10264 */;
import _mod10265 from "module_10265" /* 10265 */;
import _mod10266 from "module_10266" /* 10266 */;
import _mod10267 from "module_10267" /* 10267 */;
import _mod10268 from "module_10268" /* 10268 */;
import _mod10269 from "module_10269" /* 10269 */;
import _mod10270 from "module_10270" /* 10270 */;
import { Chrono } from "module_10188" /* 10188 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10261.default(), , , , ];
  new module_10261.default();
  items[1] = new module_10265.default();
  new module_10265.default();
  items[2] = new module_10270.default();
  new module_10270.default();
  items[3] = new module_10266.default();
  new module_10266.default();
  items[4] = new module_10267.default();
  new module_10267.default();
  items1 = [new module_10269.default(), , ];
  new module_10269.default();
  items1[1] = new module_10268.default();
  new module_10268.default();
  items1[2] = new module_10263.default();
  new module_10263.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10234.default));
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10264.default();
  unshift(_default);
  return tmp;
}
const module_10261 = fn(_mod10261);
const module_10263 = fn(_mod10263);
const module_10264 = fn(_mod10264);
const module_10265 = fn(_mod10265);
const module_10266 = fn(_mod10266);
const module_10267 = fn(_mod10267);
const module_10268 = fn(_mod10268);
const module_10269 = fn(_mod10269);
const module_10270 = fn(_mod10270);
const module_10234 = fn(_mod10234);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10264.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10188").Chrono(createConfiguration(true));
const Chrono_export = require("module_10188").Chrono;

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
