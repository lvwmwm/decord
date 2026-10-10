// Module ID: 9941
// Function ID: 9942
// Dependencies: [9857, 9815, 9822, 9824, 9932, 9933, 9935, 9936, 9937, 9938, 9939, 9940, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9941
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9857 from "module_9857" /* 9857 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9935 from "module_9935" /* 9935 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9937 from "module_9937" /* 9937 */;
import _mod9938 from "module_9938" /* 9938 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import { Chrono } from "module_9815" /* 9815 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9933.default(), , , , ];
  new module_9933.default();
  items[1] = new module_9936.default();
  new module_9936.default();
  items[2] = new module_9938.default();
  new module_9938.default();
  items[3] = new module_9937.default();
  new module_9937.default();
  items[4] = new module_9935.default();
  new module_9935.default();
  items1 = [new module_9939.default(), ];
  new module_9939.default();
  items1[1] = new module_9940.default();
  new module_9940.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9857.default));
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
  const _default = new module_9932.default();
  unshift(_default);
  return tmp;
}
const module_9857 = fn(_mod9857);
const module_9932 = fn(_mod9932);
const module_9933 = fn(_mod9933);
const module_9935 = fn(_mod9935);
const module_9936 = fn(_mod9936);
const module_9937 = fn(_mod9937);
const module_9938 = fn(_mod9938);
const module_9939 = fn(_mod9939);
const module_9940 = fn(_mod9940);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9932.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9932.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9815").Chrono(createConfiguration());
const Chrono_export = require("module_9815").Chrono;

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
