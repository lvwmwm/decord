// Module ID: 9986
// Function ID: 9987
// Name: casual
// Dependencies: [9987, 9989, 9990, 9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999, 10000, 10001, 10002, 9848, 10003, 10004, 9815, 9855]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9986 (casual)
import _mod9815 from "module_9815" /* 9815 */;
import _mod9848 from "module_9848" /* 9848 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9855 */;
import _mod9987 from "module_9987" /* 9987 */;
import _mod9989 from "module_9989" /* 9989 */;
import _mod9990 from "module_9990" /* 9990 */;
import _mod9991 from "module_9991" /* 9991 */;
import _mod9992 from "module_9992" /* 9992 */;
import _mod9993 from "module_9993" /* 9993 */;
import _mod9994 from "module_9994" /* 9994 */;
import _mod9995 from "module_9995" /* 9995 */;
import _mod9996 from "module_9996" /* 9996 */;
import _mod9997 from "module_9997" /* 9997 */;
import _mod9998 from "module_9998" /* 9998 */;
import _mod9999 from "module_9999" /* 9999 */;
import _mod10000 from "module_10000" /* 10000 */;
import _mod10001 from "module_10001" /* 10001 */;
import _mod10002 from "module_10002" /* 10002 */;
import _mod10003 from "module_10003" /* 10003 */;
import _mod10004 from "module_10004" /* 10004 */;

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
  items = [new module_9848.default(flag2), , , , , , , , , ];
  new module_9848.default(flag2);
  items[1] = new module_9987.default();
  new module_9987.default();
  items[2] = new module_9989.default();
  new module_9989.default();
  items[3] = new module_9990.default();
  new module_9990.default();
  items[4] = new module_10001.default();
  new module_10001.default();
  items[5] = new module_9992.default();
  new module_9992.default();
  items[6] = new module_9993.default();
  new module_9993.default();
  items[7] = new module_9994.default(flag);
  new module_9994.default(flag);
  items[8] = new module_9995.default(flag);
  new module_9995.default(flag);
  items[9] = new module_9996.default(flag);
  new module_9996.default(flag);
  items1 = [new module_10004.default(), , ];
  new module_10004.default();
  items1[1] = new module_9998.default();
  new module_9998.default();
  items1[2] = new module_9997.default();
  new module_9997.default();
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
  const _default = new module_9999.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10000.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9991.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10002.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10003.default();
  unshift5(_default4);
  return tmp;
}
const module_9987 = fn(_mod9987);
const module_9989 = fn(_mod9989);
const module_9990 = fn(_mod9990);
const module_9991 = fn(_mod9991);
const module_9992 = fn(_mod9992);
const module_9993 = fn(_mod9993);
const module_9994 = fn(_mod9994);
const module_9995 = fn(_mod9995);
const module_9996 = fn(_mod9996);
const module_9997 = fn(_mod9997);
const module_9998 = fn(_mod9998);
const module_9999 = fn(_mod9999);
const module_10000 = fn(_mod10000);
const module_10001 = fn(_mod10001);
const module_10002 = fn(_mod10002);
const module_9848 = fn(_mod9848);
const module_10003 = fn(_mod10003);
const module_10004 = fn(_mod10004);
const Chrono = _mod9815.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9999.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10000.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9991.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10002.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10003.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod9815.Chrono(createConfiguration(true, false));
const chrono2 = new _mod9815.Chrono(createConfiguration(false, true));

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
