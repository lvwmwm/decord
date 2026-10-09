// Module ID: 9858
// Function ID: 9859
// Dependencies: [9859, 9861, 9862, 9863, 9864, 9865, 9866, 9786, 9793, 9795, 9867, 9868, 9832, 9826]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9858
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9826 */;
import _mod9832 from "module_9832" /* 9832 */;
import _mod9859 from "module_9859" /* 9859 */;
import _mod9861 from "module_9861" /* 9861 */;
import _mod9862 from "module_9862" /* 9862 */;
import _mod9863 from "module_9863" /* 9863 */;
import _mod9864 from "module_9864" /* 9864 */;
import _mod9865 from "module_9865" /* 9865 */;
import _mod9866 from "module_9866" /* 9866 */;
import _mod9867 from "module_9867" /* 9867 */;
import _mod9868 from "module_9868" /* 9868 */;
import { Chrono } from "module_9786" /* 9786 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9859.default(), , , , ];
  new module_9859.default();
  items[1] = new module_9863.default();
  new module_9863.default();
  items[2] = new module_9868.default();
  new module_9868.default();
  items[3] = new module_9864.default();
  new module_9864.default();
  items[4] = new module_9865.default();
  new module_9865.default();
  items1 = [new module_9867.default(), , ];
  new module_9867.default();
  items1[1] = new module_9866.default();
  new module_9866.default();
  items1[2] = new module_9861.default();
  new module_9861.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_9832.default));
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
  const _default = new module_9862.default();
  unshift(_default);
  return tmp;
}
const module_9859 = fn(_mod9859);
const module_9861 = fn(_mod9861);
const module_9862 = fn(_mod9862);
const module_9863 = fn(_mod9863);
const module_9864 = fn(_mod9864);
const module_9865 = fn(_mod9865);
const module_9866 = fn(_mod9866);
const module_9867 = fn(_mod9867);
const module_9868 = fn(_mod9868);
const module_9832 = fn(_mod9832);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9862.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));
const Chrono_export = require("module_9786").Chrono;

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
