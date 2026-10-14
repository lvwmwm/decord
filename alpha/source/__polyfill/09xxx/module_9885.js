// Module ID: 9885
// Function ID: 9886
// Dependencies: [9826, 9833, 9835, 9886, 9887, 9859, 9888, 9889, 9890, 9891, 9893, 9894, 9895, 9896, 9897, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9885
import _mod9859 from "module_9859" /* 9859 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9886 from "module_9886" /* 9886 */;
import _mod9887 from "module_9887" /* 9887 */;
import _mod9888 from "module_9888" /* 9888 */;
import _mod9889 from "module_9889" /* 9889 */;
import _mod9890 from "module_9890" /* 9890 */;
import _mod9891 from "module_9891" /* 9891 */;
import _mod9893 from "module_9893" /* 9893 */;
import _mod9894 from "module_9894" /* 9894 */;
import _mod9895 from "module_9895" /* 9895 */;
import _mod9896 from "module_9896" /* 9896 */;
import _mod9897 from "module_9897" /* 9897 */;
import { Chrono } from "module_9826" /* 9826 */;

const require = globalThis.__r;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9859.default(flag2), , , , , , ];
  new module_9859.default(flag2);
  items[1] = new module_9894.default();
  new module_9894.default();
  items[2] = new module_9888.default();
  new module_9888.default();
  items[3] = new module_9893.default();
  new module_9893.default();
  items[4] = new module_9895.default();
  new module_9895.default();
  items[5] = new module_9896.default();
  new module_9896.default();
  items[6] = new module_9891.default();
  new module_9891.default();
  items1 = [new module_9889.default(), ];
  new module_9889.default();
  items1[1] = new module_9890.default();
  new module_9890.default();
  return includeCommonConfiguration(obj, flag);
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_9886.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9887.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9897.default();
  unshift3(_default2);
  return tmp;
}
const module_9886 = fn(_mod9886);
const module_9887 = fn(_mod9887);
const module_9859 = fn(_mod9859);
const module_9888 = fn(_mod9888);
const module_9889 = fn(_mod9889);
const module_9890 = fn(_mod9890);
const module_9891 = fn(_mod9891);
const module_9893 = fn(_mod9893);
const module_9894 = fn(_mod9894);
const module_9895 = fn(_mod9895);
const module_9896 = fn(_mod9896);
const module_9897 = fn(_mod9897);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9886.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9887.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9897.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9826").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
