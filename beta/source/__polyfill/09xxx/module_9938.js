// Module ID: 9938
// Function ID: 9939
// Dependencies: [9891, 9898, 9900, 9924, 9936, 9939, 9940, 9942, 9943, 9944, 9945, 9946, 9947, 9948, 9949, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9938
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9940 from "module_9940" /* 9940 */;
import _mod9942 from "module_9942" /* 9942 */;
import _mod9943 from "module_9943" /* 9943 */;
import _mod9944 from "module_9944" /* 9944 */;
import _mod9945 from "module_9945" /* 9945 */;
import _mod9946 from "module_9946" /* 9946 */;
import _mod9947 from "module_9947" /* 9947 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9949 from "module_9949" /* 9949 */;
import { Chrono } from "module_9891" /* 9891 */;

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
  items = [new module_9936.default(), , , , , , ];
  new module_9936.default();
  items[1] = new module_9924.default(flag2);
  new module_9924.default(flag2);
  items[2] = new module_9939.default();
  new module_9939.default();
  items[3] = new module_9942.default();
  new module_9942.default();
  items[4] = new module_9947.default();
  new module_9947.default();
  items[5] = new module_9940.default();
  new module_9940.default();
  items[6] = new module_9949.default();
  new module_9949.default();
  items1 = [new module_9943.default(), ];
  new module_9943.default();
  items1[1] = new module_9944.default();
  new module_9944.default();
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
  const _default = new module_9946.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9945.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9948.default();
  unshift3(_default2);
  return tmp;
}
const module_9924 = fn(_mod9924);
const module_9936 = fn(_mod9936);
const module_9939 = fn(_mod9939);
const module_9940 = fn(_mod9940);
const module_9942 = fn(_mod9942);
const module_9943 = fn(_mod9943);
const module_9944 = fn(_mod9944);
const module_9945 = fn(_mod9945);
const module_9946 = fn(_mod9946);
const module_9947 = fn(_mod9947);
const module_9948 = fn(_mod9948);
const module_9949 = fn(_mod9949);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9946.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9945.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9948.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));
const Chrono_export = require("module_9891").Chrono;

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
