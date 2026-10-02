// Module ID: 10099
// Function ID: 10100
// Name: casual
// Dependencies: [10100, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10110, 10111, 10112, 10113, 10114, 10115, 9961, 10116, 10117, 9928, 9968]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10099 (casual)
import _mod9928 from "module_9928" /* 9928 */;
import _mod9961 from "module_9961" /* 9961 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9968 */;
import _mod10100 from "module_10100" /* 10100 */;
import _mod10102 from "module_10102" /* 10102 */;
import _mod10103 from "module_10103" /* 10103 */;
import _mod10104 from "module_10104" /* 10104 */;
import _mod10105 from "module_10105" /* 10105 */;
import _mod10106 from "module_10106" /* 10106 */;
import _mod10107 from "module_10107" /* 10107 */;
import _mod10108 from "module_10108" /* 10108 */;
import _mod10109 from "module_10109" /* 10109 */;
import _mod10110 from "module_10110" /* 10110 */;
import _mod10111 from "module_10111" /* 10111 */;
import _mod10112 from "module_10112" /* 10112 */;
import _mod10113 from "module_10113" /* 10113 */;
import _mod10114 from "module_10114" /* 10114 */;
import _mod10115 from "module_10115" /* 10115 */;
import _mod10116 from "module_10116" /* 10116 */;
import _mod10117 from "module_10117" /* 10117 */;

function createConfiguration(flag, arg1) {
  let items;
  let items1;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_9961.default(flag2), , , , , , , , , ];
  new module_9961.default(flag2);
  items[1] = new module_10100.default();
  new module_10100.default();
  items[2] = new module_10102.default();
  new module_10102.default();
  items[3] = new module_10103.default();
  new module_10103.default();
  items[4] = new module_10114.default();
  new module_10114.default();
  items[5] = new module_10105.default();
  new module_10105.default();
  items[6] = new module_10106.default();
  new module_10106.default();
  items[7] = new module_10107.default(flag);
  new module_10107.default(flag);
  items[8] = new module_10108.default(flag);
  new module_10108.default(flag);
  items[9] = new module_10109.default(flag);
  new module_10109.default(flag);
  items1 = [new module_10117.default(), , ];
  new module_10117.default();
  items1[1] = new module_10111.default();
  new module_10111.default();
  items1[2] = new module_10110.default();
  new module_10110.default();
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
    flag = false;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10112.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10113.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10104.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10115.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10116.default();
  unshift5(_default4);
  return tmp;
}
const module_10100 = fn(_mod10100);
const module_10102 = fn(_mod10102);
const module_10103 = fn(_mod10103);
const module_10104 = fn(_mod10104);
const module_10105 = fn(_mod10105);
const module_10106 = fn(_mod10106);
const module_10107 = fn(_mod10107);
const module_10108 = fn(_mod10108);
const module_10109 = fn(_mod10109);
const module_10110 = fn(_mod10110);
const module_10111 = fn(_mod10111);
const module_10112 = fn(_mod10112);
const module_10113 = fn(_mod10113);
const module_10114 = fn(_mod10114);
const module_10115 = fn(_mod10115);
const module_9961 = fn(_mod9961);
const module_10116 = fn(_mod10116);
const module_10117 = fn(_mod10117);
const Chrono = _mod9928.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10112.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10113.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10104.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10115.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10116.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod9928.Chrono(createConfiguration(true, false));
const chrono2 = new _mod9928.Chrono(createConfiguration(false, true));

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
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
