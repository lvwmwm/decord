// Module ID: 9938
// Function ID: 9939
// Dependencies: [9854, 9812, 9819, 9821, 9929, 9930, 9932, 9933, 9934, 9935, 9936, 9937, 9852]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9938
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9852 */;
import _mod9854 from "module_9854" /* 9854 */;
import _mod9929 from "module_9929" /* 9929 */;
import _mod9930 from "module_9930" /* 9930 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9934 from "module_9934" /* 9934 */;
import _mod9935 from "module_9935" /* 9935 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9937 from "module_9937" /* 9937 */;
import { Chrono } from "module_9812" /* 9812 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9930.default(), , , , ];
  new module_9930.default();
  items[1] = new module_9933.default();
  new module_9933.default();
  items[2] = new module_9935.default();
  new module_9935.default();
  items[3] = new module_9934.default();
  new module_9934.default();
  items[4] = new module_9932.default();
  new module_9932.default();
  items1 = [new module_9936.default(), ];
  new module_9936.default();
  items1[1] = new module_9937.default();
  new module_9937.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9854.default));
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
  const _default = new module_9929.default();
  unshift(_default);
  return tmp;
}
const module_9854 = fn(_mod9854);
const module_9929 = fn(_mod9929);
const module_9930 = fn(_mod9930);
const module_9932 = fn(_mod9932);
const module_9933 = fn(_mod9933);
const module_9934 = fn(_mod9934);
const module_9935 = fn(_mod9935);
const module_9936 = fn(_mod9936);
const module_9937 = fn(_mod9937);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9929.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9929.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_9812").Chrono(createConfiguration());
const Chrono_export = require("module_9812").Chrono;

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
