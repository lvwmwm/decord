// Module ID: 9953
// Function ID: 9954
// Dependencies: [9868, 9826, 9833, 9835, 9954, 9937, 9939, 9940, 9941, 9942, 9955, 9956, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9953
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9868 from "module_9868" /* 9868 */;
import _mod9937 from "module_9937" /* 9937 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9941 from "module_9941" /* 9941 */;
import _mod9942 from "module_9942" /* 9942 */;
import _mod9954 from "module_9954" /* 9954 */;
import _mod9955 from "module_9955" /* 9955 */;
import _mod9956 from "module_9956" /* 9956 */;
import { Chrono } from "module_9826" /* 9826 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9937.default(), , , , ];
  new module_9937.default();
  items[1] = new module_9940.default();
  new module_9940.default();
  items[2] = new module_9942.default();
  new module_9942.default();
  items[3] = new module_9941.default();
  new module_9941.default();
  items[4] = new module_9939.default();
  new module_9939.default();
  items1 = [new module_9955.default(), ];
  new module_9955.default();
  items1[1] = new module_9956.default();
  new module_9956.default();
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
  const _default = new module_9954.default();
  unshift(_default);
  return tmp;
}
const module_9868 = fn(_mod9868);
const module_9954 = fn(_mod9954);
const module_9937 = fn(_mod9937);
const module_9939 = fn(_mod9939);
const module_9940 = fn(_mod9940);
const module_9941 = fn(_mod9941);
const module_9942 = fn(_mod9942);
const module_9955 = fn(_mod9955);
const module_9956 = fn(_mod9956);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9954.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_9954.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
