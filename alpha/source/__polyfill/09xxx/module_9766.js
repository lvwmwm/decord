// Module ID: 9766
// Function ID: 9767
// Dependencies: [9767, 9774, 9776, 9768]
// Exports: parse, parseDate

// Module 9766
import _mod9768 from "module_9768" /* 9768 */;

const require = globalThis.__r;

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
const configuration = exports.configuration;
new fn(_mod9768).default();
const chrono = new require("module_9767").Chrono(configuration.createCasualConfiguration(false));
const configuration2 = exports.configuration;
const chrono1 = new require("module_9767").Chrono(configuration2.createConfiguration(true, false));
const configuration3 = exports.configuration;
const chrono2 = new require("module_9767").Chrono(configuration3.createCasualConfiguration(true));
const configuration_export = new fn(_mod9768).default();

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export const Chrono = require("module_9767").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export { configuration_export as configuration };
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
