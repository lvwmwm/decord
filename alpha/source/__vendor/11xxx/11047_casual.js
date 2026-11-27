// Module ID: 11047
// Function ID: 11048
// Name: casual
// Dependencies: [11048, 11050, 11051, 11052, 11053, 11054, 11055, 11056, 11057, 11058, 11059, 11060, 11061, 11062, 11063, 10909, 11064, 11065, 10876, 10916]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11047 (casual)
import _mod10876 from "module_10876" /* 10876 */;
import _mod10909 from "module_10909" /* 10909 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10916 */;
import _mod11048 from "module_11048" /* 11048 */;
import _mod11050 from "module_11050" /* 11050 */;
import _mod11051 from "module_11051" /* 11051 */;
import _mod11052 from "module_11052" /* 11052 */;
import _mod11053 from "module_11053" /* 11053 */;
import _mod11054 from "module_11054" /* 11054 */;
import _mod11055 from "module_11055" /* 11055 */;
import _mod11056 from "module_11056" /* 11056 */;
import _mod11057 from "module_11057" /* 11057 */;
import _mod11058 from "module_11058" /* 11058 */;
import _mod11059 from "module_11059" /* 11059 */;
import _mod11060 from "module_11060" /* 11060 */;
import _mod11061 from "module_11061" /* 11061 */;
import _mod11062 from "module_11062" /* 11062 */;
import _mod11063 from "module_11063" /* 11063 */;
import _mod11064 from "module_11064" /* 11064 */;
import _mod11065 from "module_11065" /* 11065 */;

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
  items = [new module_10909.default(flag2), , , , , , , , , ];
  new module_10909.default(flag2);
  items[1] = new module_11048.default();
  new module_11048.default();
  items[2] = new module_11050.default();
  new module_11050.default();
  items[3] = new module_11051.default();
  new module_11051.default();
  items[4] = new module_11062.default();
  new module_11062.default();
  items[5] = new module_11053.default();
  new module_11053.default();
  items[6] = new module_11054.default();
  new module_11054.default();
  items[7] = new module_11055.default(flag);
  new module_11055.default(flag);
  items[8] = new module_11056.default(flag);
  new module_11056.default(flag);
  items[9] = new module_11057.default(flag);
  new module_11057.default(flag);
  items1 = [new module_11065.default(), , ];
  new module_11065.default();
  items1[1] = new module_11059.default();
  new module_11059.default();
  items1[2] = new module_11058.default();
  new module_11058.default();
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
  const _default = new module_11060.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11061.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11052.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11063.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11064.default();
  unshift5(_default4);
  return tmp;
}
const module_11048 = fn(_mod11048);
const module_11050 = fn(_mod11050);
const module_11051 = fn(_mod11051);
const module_11052 = fn(_mod11052);
const module_11053 = fn(_mod11053);
const module_11054 = fn(_mod11054);
const module_11055 = fn(_mod11055);
const module_11056 = fn(_mod11056);
const module_11057 = fn(_mod11057);
const module_11058 = fn(_mod11058);
const module_11059 = fn(_mod11059);
const module_11060 = fn(_mod11060);
const module_11061 = fn(_mod11061);
const module_11062 = fn(_mod11062);
const module_11063 = fn(_mod11063);
const module_10909 = fn(_mod10909);
const module_11064 = fn(_mod11064);
const module_11065 = fn(_mod11065);
const Chrono = _mod10876.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11060.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11061.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11052.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11063.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11064.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10876.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10876.Chrono(createConfiguration(false, true));

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
