// Module ID: 9887
// Function ID: 9888
// Dependencies: [9888, 9890, 9891, 9892, 9893, 9894, 9895, 9815, 9822, 9824, 9896, 9897, 9861, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9887
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9861 from "module_9861" /* 9861 */;
import _mod9888 from "module_9888" /* 9888 */;
import _mod9890 from "module_9890" /* 9890 */;
import _mod9891 from "module_9891" /* 9891 */;
import _mod9892 from "module_9892" /* 9892 */;
import _mod9893 from "module_9893" /* 9893 */;
import _mod9894 from "module_9894" /* 9894 */;
import _mod9895 from "module_9895" /* 9895 */;
import _mod9896 from "module_9896" /* 9896 */;
import _mod9897 from "module_9897" /* 9897 */;
import { Chrono } from "module_9815" /* 9815 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9888.default(), , , , ];
  new module_9888.default();
  items[1] = new module_9892.default();
  new module_9892.default();
  items[2] = new module_9897.default();
  new module_9897.default();
  items[3] = new module_9893.default();
  new module_9893.default();
  items[4] = new module_9894.default();
  new module_9894.default();
  items1 = [new module_9896.default(), , ];
  new module_9896.default();
  items1[1] = new module_9895.default();
  new module_9895.default();
  items1[2] = new module_9890.default();
  new module_9890.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9861.default));
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
  const _default = new module_9891.default();
  unshift(_default);
  return tmp;
}
const module_9888 = fn(_mod9888);
const module_9890 = fn(_mod9890);
const module_9891 = fn(_mod9891);
const module_9892 = fn(_mod9892);
const module_9893 = fn(_mod9893);
const module_9894 = fn(_mod9894);
const module_9895 = fn(_mod9895);
const module_9896 = fn(_mod9896);
const module_9897 = fn(_mod9897);
const module_9861 = fn(_mod9861);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9891.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9815").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
