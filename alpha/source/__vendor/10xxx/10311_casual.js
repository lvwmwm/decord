// Module ID: 10311
// Function ID: 10312
// Name: casual
// Dependencies: [10312, 10314, 10315, 10316, 10317, 10318, 10319, 10320, 10321, 10322, 10323, 10324, 10325, 10326, 10327, 10173, 10328, 10329, 10140, 10180]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10311 (casual)
import _mod10140 from "module_10140" /* 10140 */;
import _mod10173 from "module_10173" /* 10173 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10180 */;
import _mod10312 from "module_10312" /* 10312 */;
import _mod10314 from "module_10314" /* 10314 */;
import _mod10315 from "module_10315" /* 10315 */;
import _mod10316 from "module_10316" /* 10316 */;
import _mod10317 from "module_10317" /* 10317 */;
import _mod10318 from "module_10318" /* 10318 */;
import _mod10319 from "module_10319" /* 10319 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10321 from "module_10321" /* 10321 */;
import _mod10322 from "module_10322" /* 10322 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10325 from "module_10325" /* 10325 */;
import _mod10326 from "module_10326" /* 10326 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10328 from "module_10328" /* 10328 */;
import _mod10329 from "module_10329" /* 10329 */;

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
  items = [new module_10173.default(flag2), , , , , , , , , ];
  new module_10173.default(flag2);
  items[1] = new module_10312.default();
  new module_10312.default();
  items[2] = new module_10314.default();
  new module_10314.default();
  items[3] = new module_10315.default();
  new module_10315.default();
  items[4] = new module_10326.default();
  new module_10326.default();
  items[5] = new module_10317.default();
  new module_10317.default();
  items[6] = new module_10318.default();
  new module_10318.default();
  items[7] = new module_10319.default(flag);
  new module_10319.default(flag);
  items[8] = new module_10320.default(flag);
  new module_10320.default(flag);
  items[9] = new module_10321.default(flag);
  new module_10321.default(flag);
  items1 = [new module_10329.default(), , ];
  new module_10329.default();
  items1[1] = new module_10323.default();
  new module_10323.default();
  items1[2] = new module_10322.default();
  new module_10322.default();
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
  const _default = new module_10324.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10325.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10316.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10327.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10328.default();
  unshift5(_default4);
  return tmp;
}
const module_10312 = fn(_mod10312);
const module_10314 = fn(_mod10314);
const module_10315 = fn(_mod10315);
const module_10316 = fn(_mod10316);
const module_10317 = fn(_mod10317);
const module_10318 = fn(_mod10318);
const module_10319 = fn(_mod10319);
const module_10320 = fn(_mod10320);
const module_10321 = fn(_mod10321);
const module_10322 = fn(_mod10322);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);
const module_10325 = fn(_mod10325);
const module_10326 = fn(_mod10326);
const module_10327 = fn(_mod10327);
const module_10173 = fn(_mod10173);
const module_10328 = fn(_mod10328);
const module_10329 = fn(_mod10329);
const Chrono = _mod10140.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10324.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10325.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10316.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10327.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10328.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10140.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10140.Chrono(createConfiguration(false, true));

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
