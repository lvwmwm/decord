// Module ID: 9883
// Function ID: 9884
// Dependencies: [9884, 9886, 9887, 9888, 9889, 9890, 9891, 9811, 9818, 9820, 9892, 9893, 9857, 9851]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9883
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9851 */;
import _mod9857 from "module_9857" /* 9857 */;
import _mod9884 from "module_9884" /* 9884 */;
import _mod9886 from "module_9886" /* 9886 */;
import _mod9887 from "module_9887" /* 9887 */;
import _mod9888 from "module_9888" /* 9888 */;
import _mod9889 from "module_9889" /* 9889 */;
import _mod9890 from "module_9890" /* 9890 */;
import _mod9891 from "module_9891" /* 9891 */;
import _mod9892 from "module_9892" /* 9892 */;
import _mod9893 from "module_9893" /* 9893 */;
import { Chrono } from "module_9811" /* 9811 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9884.default(), , , , ];
  new module_9884.default();
  items[1] = new module_9888.default();
  new module_9888.default();
  items[2] = new module_9893.default();
  new module_9893.default();
  items[3] = new module_9889.default();
  new module_9889.default();
  items[4] = new module_9890.default();
  new module_9890.default();
  items1 = [new module_9892.default(), , ];
  new module_9892.default();
  items1[1] = new module_9891.default();
  new module_9891.default();
  items1[2] = new module_9886.default();
  new module_9886.default();
  const result = includeCommonConfiguration(obj, flag);
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9887.default();
  unshift(_default);
  return tmp;
}
const module_9884 = fn(_mod9884);
const module_9886 = fn(_mod9886);
const module_9887 = fn(_mod9887);
const module_9888 = fn(_mod9888);
const module_9889 = fn(_mod9889);
const module_9890 = fn(_mod9890);
const module_9891 = fn(_mod9891);
const module_9892 = fn(_mod9892);
const module_9893 = fn(_mod9893);
const module_9857 = fn(_mod9857);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9887.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9811").Chrono(createConfiguration(true));
const Chrono_export = require("module_9811").Chrono;

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
