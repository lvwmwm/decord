// Module ID: 10901
// Function ID: 10902
// Name: casual
// Dependencies: [10902, 10904, 10905, 10906, 10907, 10908, 10909, 10910, 10911, 10912, 10913, 10914, 10915, 10916, 10917, 10763, 10918, 10919, 10730, 10770]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10901 (casual)
import _mod10730 from "module_10730" /* 10730 */;
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10770 */;
import _mod10902 from "module_10902" /* 10902 */;
import _mod10904 from "module_10904" /* 10904 */;
import _mod10905 from "module_10905" /* 10905 */;
import _mod10906 from "module_10906" /* 10906 */;
import _mod10907 from "module_10907" /* 10907 */;
import _mod10908 from "module_10908" /* 10908 */;
import _mod10909 from "module_10909" /* 10909 */;
import _mod10910 from "module_10910" /* 10910 */;
import _mod10911 from "module_10911" /* 10911 */;
import _mod10912 from "module_10912" /* 10912 */;
import _mod10913 from "module_10913" /* 10913 */;
import _mod10914 from "module_10914" /* 10914 */;
import _mod10915 from "module_10915" /* 10915 */;
import _mod10916 from "module_10916" /* 10916 */;
import _mod10917 from "module_10917" /* 10917 */;
import _mod10918 from "module_10918" /* 10918 */;
import _mod10919 from "module_10919" /* 10919 */;

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
  items = [new module_10763.default(flag2), , , , , , , , , ];
  new module_10763.default(flag2);
  items[1] = new module_10902.default();
  new module_10902.default();
  items[2] = new module_10904.default();
  new module_10904.default();
  items[3] = new module_10905.default();
  new module_10905.default();
  items[4] = new module_10916.default();
  new module_10916.default();
  items[5] = new module_10907.default();
  new module_10907.default();
  items[6] = new module_10908.default();
  new module_10908.default();
  items[7] = new module_10909.default(flag);
  new module_10909.default(flag);
  items[8] = new module_10910.default(flag);
  new module_10910.default(flag);
  items[9] = new module_10911.default(flag);
  new module_10911.default(flag);
  items1 = [new module_10919.default(), , ];
  new module_10919.default();
  items1[1] = new module_10913.default();
  new module_10913.default();
  items1[2] = new module_10912.default();
  new module_10912.default();
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
  const _default = new module_10914.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10915.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10906.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10917.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10918.default();
  unshift5(_default4);
  return tmp;
}
const module_10902 = fn(_mod10902);
const module_10904 = fn(_mod10904);
const module_10905 = fn(_mod10905);
const module_10906 = fn(_mod10906);
const module_10907 = fn(_mod10907);
const module_10908 = fn(_mod10908);
const module_10909 = fn(_mod10909);
const module_10910 = fn(_mod10910);
const module_10911 = fn(_mod10911);
const module_10912 = fn(_mod10912);
const module_10913 = fn(_mod10913);
const module_10914 = fn(_mod10914);
const module_10915 = fn(_mod10915);
const module_10916 = fn(_mod10916);
const module_10917 = fn(_mod10917);
const module_10763 = fn(_mod10763);
const module_10918 = fn(_mod10918);
const module_10919 = fn(_mod10919);
const Chrono = _mod10730.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10914.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10915.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10906.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10917.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10918.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10730.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10730.Chrono(createConfiguration(false, true));

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export { createCasualConfiguration };
export { createConfiguration };
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
