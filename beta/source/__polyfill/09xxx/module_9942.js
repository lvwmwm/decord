// Module ID: 9942
// Function ID: 9943
// Dependencies: [9858, 9816, 9823, 9825, 9933, 9934, 9936, 9937, 9938, 9939, 9940, 9941, 9856]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9942
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9856 */;
import _mod9858 from "module_9858" /* 9858 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9934 from "module_9934" /* 9934 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9937 from "module_9937" /* 9937 */;
import _mod9938 from "module_9938" /* 9938 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9941 from "module_9941" /* 9941 */;
import { Chrono } from "module_9816" /* 9816 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9934.default(), , , , ];
  new module_9934.default();
  items[1] = new module_9937.default();
  new module_9937.default();
  items[2] = new module_9939.default();
  new module_9939.default();
  items[3] = new module_9938.default();
  new module_9938.default();
  items[4] = new module_9936.default();
  new module_9936.default();
  items1 = [new module_9940.default(), ];
  new module_9940.default();
  items1[1] = new module_9941.default();
  new module_9941.default();
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
  const _default = new module_9933.default();
  unshift(_default);
  return tmp;
}
const module_9858 = fn(_mod9858);
const module_9933 = fn(_mod9933);
const module_9934 = fn(_mod9934);
const module_9936 = fn(_mod9936);
const module_9937 = fn(_mod9937);
const module_9938 = fn(_mod9938);
const module_9939 = fn(_mod9939);
const module_9940 = fn(_mod9940);
const module_9941 = fn(_mod9941);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9933.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9933.default();
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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
