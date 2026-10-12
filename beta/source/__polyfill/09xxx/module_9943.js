// Module ID: 9943
// Function ID: 9944
// Dependencies: [9858, 9816, 9823, 9825, 9944, 9927, 9929, 9930, 9931, 9932, 9945, 9946, 9856]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9943
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9856 */;
import _mod9858 from "module_9858" /* 9858 */;
import _mod9927 from "module_9927" /* 9927 */;
import _mod9929 from "module_9929" /* 9929 */;
import _mod9930 from "module_9930" /* 9930 */;
import _mod9931 from "module_9931" /* 9931 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9944 from "module_9944" /* 9944 */;
import _mod9945 from "module_9945" /* 9945 */;
import _mod9946 from "module_9946" /* 9946 */;
import { Chrono } from "module_9816" /* 9816 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9927.default(), , , , ];
  new module_9927.default();
  items[1] = new module_9930.default();
  new module_9930.default();
  items[2] = new module_9932.default();
  new module_9932.default();
  items[3] = new module_9931.default();
  new module_9931.default();
  items[4] = new module_9929.default();
  new module_9929.default();
  items1 = [new module_9945.default(), ];
  new module_9945.default();
  items1[1] = new module_9946.default();
  new module_9946.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9858.default));
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
  const _default = new module_9944.default();
  unshift(_default);
  return tmp;
}
const module_9858 = fn(_mod9858);
const module_9944 = fn(_mod9944);
const module_9927 = fn(_mod9927);
const module_9929 = fn(_mod9929);
const module_9930 = fn(_mod9930);
const module_9931 = fn(_mod9931);
const module_9932 = fn(_mod9932);
const module_9945 = fn(_mod9945);
const module_9946 = fn(_mod9946);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9944.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9944.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9816").Chrono(createConfiguration());
const Chrono_export = require("module_9816").Chrono;

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
