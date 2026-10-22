// Module ID: 10359
// Function ID: 10360
// Name: casual
// Dependencies: [10360, 10362, 10363, 10364, 10365, 10366, 10367, 10368, 10369, 10370, 10371, 10372, 10373, 10374, 10375, 10221, 10376, 10377, 10188, 10228]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10359 (casual)
import _mod10188 from "module_10188" /* 10188 */;
import _mod10221 from "module_10221" /* 10221 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10228 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10362 from "module_10362" /* 10362 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import _mod10367 from "module_10367" /* 10367 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10369 from "module_10369" /* 10369 */;
import _mod10370 from "module_10370" /* 10370 */;
import _mod10371 from "module_10371" /* 10371 */;
import _mod10372 from "module_10372" /* 10372 */;
import _mod10373 from "module_10373" /* 10373 */;
import _mod10374 from "module_10374" /* 10374 */;
import _mod10375 from "module_10375" /* 10375 */;
import _mod10376 from "module_10376" /* 10376 */;
import _mod10377 from "module_10377" /* 10377 */;

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
  items = [new module_10221.default(flag2), , , , , , , , , ];
  new module_10221.default(flag2);
  items[1] = new module_10360.default();
  new module_10360.default();
  items[2] = new module_10362.default();
  new module_10362.default();
  items[3] = new module_10363.default();
  new module_10363.default();
  items[4] = new module_10374.default();
  new module_10374.default();
  items[5] = new module_10365.default();
  new module_10365.default();
  items[6] = new module_10366.default();
  new module_10366.default();
  items[7] = new module_10367.default(flag);
  new module_10367.default(flag);
  items[8] = new module_10368.default(flag);
  new module_10368.default(flag);
  items[9] = new module_10369.default(flag);
  new module_10369.default(flag);
  items1 = [new module_10377.default(), , ];
  new module_10377.default();
  items1[1] = new module_10371.default();
  new module_10371.default();
  items1[2] = new module_10370.default();
  new module_10370.default();
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
  const _default = new module_10372.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10373.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10364.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10375.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10376.default();
  unshift5(_default4);
  return tmp;
}
const module_10360 = fn(_mod10360);
const module_10362 = fn(_mod10362);
const module_10363 = fn(_mod10363);
const module_10364 = fn(_mod10364);
const module_10365 = fn(_mod10365);
const module_10366 = fn(_mod10366);
const module_10367 = fn(_mod10367);
const module_10368 = fn(_mod10368);
const module_10369 = fn(_mod10369);
const module_10370 = fn(_mod10370);
const module_10371 = fn(_mod10371);
const module_10372 = fn(_mod10372);
const module_10373 = fn(_mod10373);
const module_10374 = fn(_mod10374);
const module_10375 = fn(_mod10375);
const module_10221 = fn(_mod10221);
const module_10376 = fn(_mod10376);
const module_10377 = fn(_mod10377);
const Chrono = _mod10188.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10372.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10373.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10364.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10375.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10376.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10188.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10188.Chrono(createConfiguration(false, true));

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
