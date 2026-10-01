// Module ID: 10062
// Function ID: 10063
// Name: casual
// Dependencies: [10063, 10065, 10066, 10067, 10068, 10069, 10070, 10071, 10072, 10073, 10074, 10075, 10076, 10077, 10078, 9924, 10079, 10080, 9891, 9931]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10062 (casual)
import _mod9891 from "module_9891" /* 9891 */;
import _mod9924 from "module_9924" /* 9924 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9931 */;
import _mod10063 from "module_10063" /* 10063 */;
import _mod10065 from "module_10065" /* 10065 */;
import _mod10066 from "module_10066" /* 10066 */;
import _mod10067 from "module_10067" /* 10067 */;
import _mod10068 from "module_10068" /* 10068 */;
import _mod10069 from "module_10069" /* 10069 */;
import _mod10070 from "module_10070" /* 10070 */;
import _mod10071 from "module_10071" /* 10071 */;
import _mod10072 from "module_10072" /* 10072 */;
import _mod10073 from "module_10073" /* 10073 */;
import _mod10074 from "module_10074" /* 10074 */;
import _mod10075 from "module_10075" /* 10075 */;
import _mod10076 from "module_10076" /* 10076 */;
import _mod10077 from "module_10077" /* 10077 */;
import _mod10078 from "module_10078" /* 10078 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10080 from "module_10080" /* 10080 */;

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
  items = [new module_9924.default(flag2), , , , , , , , , ];
  new module_9924.default(flag2);
  items[1] = new module_10063.default();
  new module_10063.default();
  items[2] = new module_10065.default();
  new module_10065.default();
  items[3] = new module_10066.default();
  new module_10066.default();
  items[4] = new module_10077.default();
  new module_10077.default();
  items[5] = new module_10068.default();
  new module_10068.default();
  items[6] = new module_10069.default();
  new module_10069.default();
  items[7] = new module_10070.default(flag);
  new module_10070.default(flag);
  items[8] = new module_10071.default(flag);
  new module_10071.default(flag);
  items[9] = new module_10072.default(flag);
  new module_10072.default(flag);
  items1 = [new module_10080.default(), , ];
  new module_10080.default();
  items1[1] = new module_10074.default();
  new module_10074.default();
  items1[2] = new module_10073.default();
  new module_10073.default();
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
  const _default = new module_10075.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10076.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10067.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10078.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10079.default();
  unshift5(_default4);
  return tmp;
}
const module_10063 = fn(_mod10063);
const module_10065 = fn(_mod10065);
const module_10066 = fn(_mod10066);
const module_10067 = fn(_mod10067);
const module_10068 = fn(_mod10068);
const module_10069 = fn(_mod10069);
const module_10070 = fn(_mod10070);
const module_10071 = fn(_mod10071);
const module_10072 = fn(_mod10072);
const module_10073 = fn(_mod10073);
const module_10074 = fn(_mod10074);
const module_10075 = fn(_mod10075);
const module_10076 = fn(_mod10076);
const module_10077 = fn(_mod10077);
const module_10078 = fn(_mod10078);
const module_9924 = fn(_mod9924);
const module_10079 = fn(_mod10079);
const module_10080 = fn(_mod10080);
const Chrono = _mod9891.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10075.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10076.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10067.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10078.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10079.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod9891.Chrono(createConfiguration(true, false));
const chrono2 = new _mod9891.Chrono(createConfiguration(false, true));

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
