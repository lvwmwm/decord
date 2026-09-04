// Module ID: 10356
// Function ID: 10357
// Name: Chrono
// Dependencies: [10357, 10364, 10366, 10358]
// Exports: parse, parseDate

// Module 10356 (Chrono)
import ENDefaultConfiguration from "ENDefaultConfiguration" /* 10358 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const configuration = exports.configuration;
const chrono = new require("Chrono").Chrono(configuration.createCasualConfiguration(false));
const configuration2 = exports.configuration;
const chrono1 = new require("Chrono").Chrono(configuration2.createConfiguration(true, false));
const configuration3 = exports.configuration;
const chrono2 = new require("Chrono").Chrono(configuration3.createCasualConfiguration(true));

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export const Chrono = require(10364) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = require(10364) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = require(10364) /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = require(10364) /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require(10366).Meridiem;
export const Weekday = require(10366).Weekday;
export const configuration = new fn(ENDefaultConfiguration).default();
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
