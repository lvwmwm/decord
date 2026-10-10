// Module ID: 9862
// Function ID: 9863
// Dependencies: [9815, 9822, 9824, 9848, 9860, 9863, 9864, 9866, 9867, 9868, 9869, 9870, 9871, 9872, 9873, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9862
import _mod9848 from "module_9848" /* 9848 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9860 from "module_9860" /* 9860 */;
import _mod9863 from "module_9863" /* 9863 */;
import _mod9864 from "module_9864" /* 9864 */;
import _mod9866 from "module_9866" /* 9866 */;
import _mod9867 from "module_9867" /* 9867 */;
import _mod9868 from "module_9868" /* 9868 */;
import _mod9869 from "module_9869" /* 9869 */;
import _mod9870 from "module_9870" /* 9870 */;
import _mod9871 from "module_9871" /* 9871 */;
import _mod9872 from "module_9872" /* 9872 */;
import _mod9873 from "module_9873" /* 9873 */;
import { Chrono } from "module_9815" /* 9815 */;

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
  items = [new module_9860.default(), , , , , , ];
  new module_9860.default();
  items[1] = new module_9848.default(flag2);
  new module_9848.default(flag2);
  items[2] = new module_9863.default();
  new module_9863.default();
  items[3] = new module_9866.default();
  new module_9866.default();
  items[4] = new module_9871.default();
  new module_9871.default();
  items[5] = new module_9864.default();
  new module_9864.default();
  items[6] = new module_9873.default();
  new module_9873.default();
  items1 = [new module_9867.default(), ];
  new module_9867.default();
  items1[1] = new module_9868.default();
  new module_9868.default();
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
  const _default = new module_9870.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9869.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9872.default();
  unshift3(_default2);
  return tmp;
}
const module_9848 = fn(_mod9848);
const module_9860 = fn(_mod9860);
const module_9863 = fn(_mod9863);
const module_9864 = fn(_mod9864);
const module_9866 = fn(_mod9866);
const module_9867 = fn(_mod9867);
const module_9868 = fn(_mod9868);
const module_9869 = fn(_mod9869);
const module_9870 = fn(_mod9870);
const module_9871 = fn(_mod9871);
const module_9872 = fn(_mod9872);
const module_9873 = fn(_mod9873);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9870.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9869.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9872.default();
unshift3(_default2);
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
