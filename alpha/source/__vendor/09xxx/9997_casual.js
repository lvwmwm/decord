// Module ID: 9997
// Function ID: 9998
// Name: casual
// Dependencies: [9998, 10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011, 10012, 10013, 9859, 10014, 10015, 9826, 9866]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9997 (casual)
import _mod9826 from "module_9826" /* 9826 */;
import _mod9859 from "module_9859" /* 9859 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9866 */;
import _mod9998 from "module_9998" /* 9998 */;
import _mod10000 from "module_10000" /* 10000 */;
import _mod10001 from "module_10001" /* 10001 */;
import _mod10002 from "module_10002" /* 10002 */;
import _mod10003 from "module_10003" /* 10003 */;
import _mod10004 from "module_10004" /* 10004 */;
import _mod10005 from "module_10005" /* 10005 */;
import _mod10006 from "module_10006" /* 10006 */;
import _mod10007 from "module_10007" /* 10007 */;
import _mod10008 from "module_10008" /* 10008 */;
import _mod10009 from "module_10009" /* 10009 */;
import _mod10010 from "module_10010" /* 10010 */;
import _mod10011 from "module_10011" /* 10011 */;
import _mod10012 from "module_10012" /* 10012 */;
import _mod10013 from "module_10013" /* 10013 */;
import _mod10014 from "module_10014" /* 10014 */;
import _mod10015 from "module_10015" /* 10015 */;

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
  items = [new module_9859.default(flag2), , , , , , , , , ];
  new module_9859.default(flag2);
  items[1] = new module_9998.default();
  new module_9998.default();
  items[2] = new module_10000.default();
  new module_10000.default();
  items[3] = new module_10001.default();
  new module_10001.default();
  items[4] = new module_10012.default();
  new module_10012.default();
  items[5] = new module_10003.default();
  new module_10003.default();
  items[6] = new module_10004.default();
  new module_10004.default();
  items[7] = new module_10005.default(flag);
  new module_10005.default(flag);
  items[8] = new module_10006.default(flag);
  new module_10006.default(flag);
  items[9] = new module_10007.default(flag);
  new module_10007.default(flag);
  items1 = [new module_10015.default(), , ];
  new module_10015.default();
  items1[1] = new module_10009.default();
  new module_10009.default();
  items1[2] = new module_10008.default();
  new module_10008.default();
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
  const _default = new module_10010.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10011.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10002.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10013.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10014.default();
  unshift5(_default4);
  return tmp;
}
const module_9998 = fn(_mod9998);
const module_10000 = fn(_mod10000);
const module_10001 = fn(_mod10001);
const module_10002 = fn(_mod10002);
const module_10003 = fn(_mod10003);
const module_10004 = fn(_mod10004);
const module_10005 = fn(_mod10005);
const module_10006 = fn(_mod10006);
const module_10007 = fn(_mod10007);
const module_10008 = fn(_mod10008);
const module_10009 = fn(_mod10009);
const module_10010 = fn(_mod10010);
const module_10011 = fn(_mod10011);
const module_10012 = fn(_mod10012);
const module_10013 = fn(_mod10013);
const module_9859 = fn(_mod9859);
const module_10014 = fn(_mod10014);
const module_10015 = fn(_mod10015);
const Chrono = _mod9826.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10010.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10011.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10002.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10013.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10014.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod9826.Chrono(createConfiguration(true, false));
const chrono2 = new _mod9826.Chrono(createConfiguration(false, true));

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
