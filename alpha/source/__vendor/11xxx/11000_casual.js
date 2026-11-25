// Module ID: 11000
// Function ID: 11001
// Name: casual
// Dependencies: [11001, 11003, 11004, 11005, 11006, 11007, 11008, 11009, 11010, 11011, 11012, 11013, 11014, 11015, 11016, 10862, 11017, 11018, 10829, 10869]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11000 (casual)
import _mod10829 from "module_10829" /* 10829 */;
import _mod10862 from "module_10862" /* 10862 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10869 */;
import _mod11001 from "module_11001" /* 11001 */;
import _mod11003 from "module_11003" /* 11003 */;
import _mod11004 from "module_11004" /* 11004 */;
import _mod11005 from "module_11005" /* 11005 */;
import _mod11006 from "module_11006" /* 11006 */;
import _mod11007 from "module_11007" /* 11007 */;
import _mod11008 from "module_11008" /* 11008 */;
import _mod11009 from "module_11009" /* 11009 */;
import _mod11010 from "module_11010" /* 11010 */;
import _mod11011 from "module_11011" /* 11011 */;
import _mod11012 from "module_11012" /* 11012 */;
import _mod11013 from "module_11013" /* 11013 */;
import _mod11014 from "module_11014" /* 11014 */;
import _mod11015 from "module_11015" /* 11015 */;
import _mod11016 from "module_11016" /* 11016 */;
import _mod11017 from "module_11017" /* 11017 */;
import _mod11018 from "module_11018" /* 11018 */;

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
  items = [new module_10862.default(flag2), , , , , , , , , ];
  new module_10862.default(flag2);
  items[1] = new module_11001.default();
  new module_11001.default();
  items[2] = new module_11003.default();
  new module_11003.default();
  items[3] = new module_11004.default();
  new module_11004.default();
  items[4] = new module_11015.default();
  new module_11015.default();
  items[5] = new module_11006.default();
  new module_11006.default();
  items[6] = new module_11007.default();
  new module_11007.default();
  items[7] = new module_11008.default(flag);
  new module_11008.default(flag);
  items[8] = new module_11009.default(flag);
  new module_11009.default(flag);
  items[9] = new module_11010.default(flag);
  new module_11010.default(flag);
  items1 = [new module_11018.default(), , ];
  new module_11018.default();
  items1[1] = new module_11012.default();
  new module_11012.default();
  items1[2] = new module_11011.default();
  new module_11011.default();
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
  const _default = new module_11013.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11014.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11005.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11016.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11017.default();
  unshift5(_default4);
  return tmp;
}
const module_11001 = fn(_mod11001);
const module_11003 = fn(_mod11003);
const module_11004 = fn(_mod11004);
const module_11005 = fn(_mod11005);
const module_11006 = fn(_mod11006);
const module_11007 = fn(_mod11007);
const module_11008 = fn(_mod11008);
const module_11009 = fn(_mod11009);
const module_11010 = fn(_mod11010);
const module_11011 = fn(_mod11011);
const module_11012 = fn(_mod11012);
const module_11013 = fn(_mod11013);
const module_11014 = fn(_mod11014);
const module_11015 = fn(_mod11015);
const module_11016 = fn(_mod11016);
const module_10862 = fn(_mod10862);
const module_11017 = fn(_mod11017);
const module_11018 = fn(_mod11018);
const Chrono = _mod10829.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11013.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11014.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11005.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11016.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11017.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10829.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10829.Chrono(createConfiguration(false, true));

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
