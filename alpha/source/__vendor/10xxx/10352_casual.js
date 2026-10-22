// Module ID: 10352
// Function ID: 10353
// Name: casual
// Dependencies: [10353, 10355, 10356, 10357, 10358, 10359, 10360, 10361, 10362, 10363, 10364, 10365, 10366, 10367, 10368, 10214, 10369, 10370, 10181, 10221]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10352 (casual)
import _mod10181 from "module_10181" /* 10181 */;
import _mod10214 from "module_10214" /* 10214 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10221 */;
import _mod10353 from "module_10353" /* 10353 */;
import _mod10355 from "module_10355" /* 10355 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10357 from "module_10357" /* 10357 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10361 from "module_10361" /* 10361 */;
import _mod10362 from "module_10362" /* 10362 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import _mod10367 from "module_10367" /* 10367 */;
import _mod10368 from "module_10368" /* 10368 */;
import _mod10369 from "module_10369" /* 10369 */;
import _mod10370 from "module_10370" /* 10370 */;

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
  items = [new module_10214.default(flag2), , , , , , , , , ];
  new module_10214.default(flag2);
  items[1] = new module_10353.default();
  new module_10353.default();
  items[2] = new module_10355.default();
  new module_10355.default();
  items[3] = new module_10356.default();
  new module_10356.default();
  items[4] = new module_10367.default();
  new module_10367.default();
  items[5] = new module_10358.default();
  new module_10358.default();
  items[6] = new module_10359.default();
  new module_10359.default();
  items[7] = new module_10360.default(flag);
  new module_10360.default(flag);
  items[8] = new module_10361.default(flag);
  new module_10361.default(flag);
  items[9] = new module_10362.default(flag);
  new module_10362.default(flag);
  items1 = [new module_10370.default(), , ];
  new module_10370.default();
  items1[1] = new module_10364.default();
  new module_10364.default();
  items1[2] = new module_10363.default();
  new module_10363.default();
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
  const _default = new module_10365.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10366.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10357.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10368.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10369.default();
  unshift5(_default4);
  return tmp;
}
const module_10353 = fn(_mod10353);
const module_10355 = fn(_mod10355);
const module_10356 = fn(_mod10356);
const module_10357 = fn(_mod10357);
const module_10358 = fn(_mod10358);
const module_10359 = fn(_mod10359);
const module_10360 = fn(_mod10360);
const module_10361 = fn(_mod10361);
const module_10362 = fn(_mod10362);
const module_10363 = fn(_mod10363);
const module_10364 = fn(_mod10364);
const module_10365 = fn(_mod10365);
const module_10366 = fn(_mod10366);
const module_10367 = fn(_mod10367);
const module_10368 = fn(_mod10368);
const module_10214 = fn(_mod10214);
const module_10369 = fn(_mod10369);
const module_10370 = fn(_mod10370);
const Chrono = _mod10181.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10365.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10366.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10357.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10368.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10369.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10181.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10181.Chrono(createConfiguration(false, true));

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
