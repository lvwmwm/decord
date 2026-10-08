// Module ID: 9859
// Function ID: 9860
// Dependencies: [9767, 9774, 9776, 9860, 9861, 9862, 9863, 9800, 9864, 9866, 9867, 9868, 9869, 9870, 9871, 9872, 9873, 9874, 9875, 9876, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9859
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9860 from "module_9860" /* 9860 */;
import _mod9861 from "module_9861" /* 9861 */;
import _mod9862 from "module_9862" /* 9862 */;
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
import _mod9874 from "module_9874" /* 9874 */;
import _mod9875 from "module_9875" /* 9875 */;
import _mod9876 from "module_9876" /* 9876 */;

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
  items = [new module_9800.default(flag2), , , , , , , , , ];
  new module_9800.default(flag2);
  items[1] = new module_9864.default();
  new module_9864.default();
  items[2] = new module_9867.default();
  new module_9867.default();
  items[3] = new module_9868.default();
  new module_9868.default();
  items[4] = new module_9866.default();
  new module_9866.default();
  items[5] = new module_9871.default();
  new module_9871.default();
  items[6] = new module_9869.default();
  new module_9869.default();
  items[7] = new module_9870.default(flag);
  new module_9870.default(flag);
  items[8] = new module_9875.default(flag);
  new module_9875.default(flag);
  items[9] = new module_9876.default(flag);
  new module_9876.default(flag);
  items1 = [new module_9861.default(), ];
  new module_9861.default();
  items1[1] = new module_9860.default();
  new module_9860.default();
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
  const _default = new module_9862.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9863.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9872.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9868.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9874.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_9873.default();
  unshift6(_default5);
  return tmp;
}
const module_9860 = fn(_mod9860);
const module_9861 = fn(_mod9861);
const module_9862 = fn(_mod9862);
const module_9863 = fn(_mod9863);
const module_9800 = fn(_mod9800);
const module_9864 = fn(_mod9864);
const module_9866 = fn(_mod9866);
const module_9867 = fn(_mod9867);
const module_9868 = fn(_mod9868);
const module_9869 = fn(_mod9869);
const module_9870 = fn(_mod9870);
const module_9871 = fn(_mod9871);
const module_9872 = fn(_mod9872);
const module_9873 = fn(_mod9873);
const module_9874 = fn(_mod9874);
const module_9875 = fn(_mod9875);
const module_9876 = fn(_mod9876);
const chrono = new require("module_9767").Chrono(createCasualConfiguration());
const chrono1 = new require("module_9767").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9767").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
