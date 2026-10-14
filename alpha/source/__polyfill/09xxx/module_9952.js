// Module ID: 9952
// Function ID: 9953
// Dependencies: [9868, 9826, 9833, 9835, 9943, 9944, 9946, 9947, 9948, 9949, 9950, 9951, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9952
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9868 from "module_9868" /* 9868 */;
import _mod9943 from "module_9943" /* 9943 */;
import _mod9944 from "module_9944" /* 9944 */;
import _mod9946 from "module_9946" /* 9946 */;
import _mod9947 from "module_9947" /* 9947 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9949 from "module_9949" /* 9949 */;
import _mod9950 from "module_9950" /* 9950 */;
import _mod9951 from "module_9951" /* 9951 */;
import { Chrono } from "module_9826" /* 9826 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9944.default(), , , , ];
  new module_9944.default();
  items[1] = new module_9947.default();
  new module_9947.default();
  items[2] = new module_9949.default();
  new module_9949.default();
  items[3] = new module_9948.default();
  new module_9948.default();
  items[4] = new module_9946.default();
  new module_9946.default();
  items1 = [new module_9950.default(), ];
  new module_9950.default();
  items1[1] = new module_9951.default();
  new module_9951.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9868.default));
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
  const _default = new module_9943.default();
  unshift(_default);
  return tmp;
}
const module_9868 = fn(_mod9868);
const module_9943 = fn(_mod9943);
const module_9944 = fn(_mod9944);
const module_9946 = fn(_mod9946);
const module_9947 = fn(_mod9947);
const module_9948 = fn(_mod9948);
const module_9949 = fn(_mod9949);
const module_9950 = fn(_mod9950);
const module_9951 = fn(_mod9951);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9943.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9943.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9826").Chrono(createConfiguration());
const Chrono_export = require("module_9826").Chrono;

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
