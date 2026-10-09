// Module ID: 9878
// Function ID: 9879
// Dependencies: [9786, 9793, 9795, 9879, 9880, 9881, 9882, 9819, 9883, 9885, 9886, 9887, 9888, 9889, 9890, 9891, 9892, 9893, 9894, 9895, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9878
import _mod9819 from "module_9819" /* 9819 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9879 from "module_9879" /* 9879 */;
import _mod9880 from "module_9880" /* 9880 */;
import _mod9881 from "module_9881" /* 9881 */;
import _mod9882 from "module_9882" /* 9882 */;
import _mod9883 from "module_9883" /* 9883 */;
import _mod9885 from "module_9885" /* 9885 */;
import _mod9886 from "module_9886" /* 9886 */;
import _mod9887 from "module_9887" /* 9887 */;
import _mod9888 from "module_9888" /* 9888 */;
import _mod9889 from "module_9889" /* 9889 */;
import _mod9890 from "module_9890" /* 9890 */;
import _mod9891 from "module_9891" /* 9891 */;
import _mod9892 from "module_9892" /* 9892 */;
import _mod9893 from "module_9893" /* 9893 */;
import _mod9894 from "module_9894" /* 9894 */;
import _mod9895 from "module_9895" /* 9895 */;

const require = globalThis.__r;

function createConfiguration(flag) {
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
  items = [new module_9819.default(flag2), , , , , , , , , ];
  new module_9819.default(flag2);
  items[1] = new module_9883.default();
  new module_9883.default();
  items[2] = new module_9886.default();
  new module_9886.default();
  items[3] = new module_9887.default();
  new module_9887.default();
  items[4] = new module_9885.default();
  new module_9885.default();
  items[5] = new module_9890.default();
  new module_9890.default();
  items[6] = new module_9888.default();
  new module_9888.default();
  items[7] = new module_9889.default(flag);
  new module_9889.default(flag);
  items[8] = new module_9894.default(flag);
  new module_9894.default(flag);
  items[9] = new module_9895.default(flag);
  new module_9895.default(flag);
  items1 = [new module_9880.default(), ];
  new module_9880.default();
  items1[1] = new module_9879.default();
  new module_9879.default();
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
  const _default = new module_9881.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9882.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9891.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9887.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9893.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_9892.default();
  unshift6(_default5);
  return tmp;
}
const module_9879 = fn(_mod9879);
const module_9880 = fn(_mod9880);
const module_9881 = fn(_mod9881);
const module_9882 = fn(_mod9882);
const module_9819 = fn(_mod9819);
const module_9883 = fn(_mod9883);
const module_9885 = fn(_mod9885);
const module_9886 = fn(_mod9886);
const module_9887 = fn(_mod9887);
const module_9888 = fn(_mod9888);
const module_9889 = fn(_mod9889);
const module_9890 = fn(_mod9890);
const module_9891 = fn(_mod9891);
const module_9892 = fn(_mod9892);
const module_9893 = fn(_mod9893);
const module_9894 = fn(_mod9894);
const module_9895 = fn(_mod9895);
const chrono = new require("module_9786").Chrono(createCasualConfiguration());
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9786").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
