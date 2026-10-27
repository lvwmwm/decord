// Module ID: 10384
// Function ID: 10385
// Name: casual
// Dependencies: [10385, 10387, 10388, 10389, 10390, 10391, 10392, 10393, 10394, 10395, 10396, 10397, 10398, 10399, 10400, 10246, 10401, 10402, 10213, 10253]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10384 (casual)
import _mod10213 from "module_10213" /* 10213 */;
import _mod10246 from "module_10246" /* 10246 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10253 */;
import _mod10385 from "module_10385" /* 10385 */;
import _mod10387 from "module_10387" /* 10387 */;
import _mod10388 from "module_10388" /* 10388 */;
import _mod10389 from "module_10389" /* 10389 */;
import _mod10390 from "module_10390" /* 10390 */;
import _mod10391 from "module_10391" /* 10391 */;
import _mod10392 from "module_10392" /* 10392 */;
import _mod10393 from "module_10393" /* 10393 */;
import _mod10394 from "module_10394" /* 10394 */;
import _mod10395 from "module_10395" /* 10395 */;
import _mod10396 from "module_10396" /* 10396 */;
import _mod10397 from "module_10397" /* 10397 */;
import _mod10398 from "module_10398" /* 10398 */;
import _mod10399 from "module_10399" /* 10399 */;
import _mod10400 from "module_10400" /* 10400 */;
import _mod10401 from "module_10401" /* 10401 */;
import _mod10402 from "module_10402" /* 10402 */;

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
  items = [new module_10246.default(flag2), , , , , , , , , ];
  new module_10246.default(flag2);
  items[1] = new module_10385.default();
  new module_10385.default();
  items[2] = new module_10387.default();
  new module_10387.default();
  items[3] = new module_10388.default();
  new module_10388.default();
  items[4] = new module_10399.default();
  new module_10399.default();
  items[5] = new module_10390.default();
  new module_10390.default();
  items[6] = new module_10391.default();
  new module_10391.default();
  items[7] = new module_10392.default(flag);
  new module_10392.default(flag);
  items[8] = new module_10393.default(flag);
  new module_10393.default(flag);
  items[9] = new module_10394.default(flag);
  new module_10394.default(flag);
  items1 = [new module_10402.default(), , ];
  new module_10402.default();
  items1[1] = new module_10396.default();
  new module_10396.default();
  items1[2] = new module_10395.default();
  new module_10395.default();
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
  const _default = new module_10397.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10398.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10389.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10400.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10401.default();
  unshift5(_default4);
  return tmp;
}
const module_10385 = fn(_mod10385);
const module_10387 = fn(_mod10387);
const module_10388 = fn(_mod10388);
const module_10389 = fn(_mod10389);
const module_10390 = fn(_mod10390);
const module_10391 = fn(_mod10391);
const module_10392 = fn(_mod10392);
const module_10393 = fn(_mod10393);
const module_10394 = fn(_mod10394);
const module_10395 = fn(_mod10395);
const module_10396 = fn(_mod10396);
const module_10397 = fn(_mod10397);
const module_10398 = fn(_mod10398);
const module_10399 = fn(_mod10399);
const module_10400 = fn(_mod10400);
const module_10246 = fn(_mod10246);
const module_10401 = fn(_mod10401);
const module_10402 = fn(_mod10402);
const Chrono = _mod10213.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10397.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10398.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10389.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10400.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10401.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10213.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10213.Chrono(createConfiguration(false, true));

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
