// Module ID: 11424
// Function ID: 11425
// Dependencies: [11425, 11432, 11434, 11426]
// Exports: parse, parseDate

// Module 11424
import _mod11426 from "module_11426" /* 11426 */;

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
new fn(_mod11426).default();
const chrono = new require("module_11425").Chrono(configuration.createCasualConfiguration(false));
const configuration2 = exports.configuration;
const chrono1 = new require("module_11425").Chrono(configuration2.createConfiguration(true, false));
const configuration3 = exports.configuration;
const chrono2 = new require("module_11425").Chrono(configuration3.createCasualConfiguration(true));
const configuration_export = new fn(_mod11426).default();

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export const Chrono = require("module_11425").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export { configuration_export as configuration };
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
