// Module ID: 11596
// Function ID: 11597
// Name: casual
// Dependencies: [11597, 11599, 11600, 11601, 11602, 11603, 11604, 11605, 11606, 11607, 11608, 11609, 11610, 11611, 11612, 11458, 11613, 11614, 11425, 11465]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11596 (casual)
import _mod11425 from "module_11425" /* 11425 */;
import _mod11458 from "module_11458" /* 11458 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11465 */;
import _mod11597 from "module_11597" /* 11597 */;
import _mod11599 from "module_11599" /* 11599 */;
import _mod11600 from "module_11600" /* 11600 */;
import _mod11601 from "module_11601" /* 11601 */;
import _mod11602 from "module_11602" /* 11602 */;
import _mod11603 from "module_11603" /* 11603 */;
import _mod11604 from "module_11604" /* 11604 */;
import _mod11605 from "module_11605" /* 11605 */;
import _mod11606 from "module_11606" /* 11606 */;
import _mod11607 from "module_11607" /* 11607 */;
import _mod11608 from "module_11608" /* 11608 */;
import _mod11609 from "module_11609" /* 11609 */;
import _mod11610 from "module_11610" /* 11610 */;
import _mod11611 from "module_11611" /* 11611 */;
import _mod11612 from "module_11612" /* 11612 */;
import _mod11613 from "module_11613" /* 11613 */;
import _mod11614 from "module_11614" /* 11614 */;

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
  items = [new module_11458.default(flag2), , , , , , , , , ];
  new module_11458.default(flag2);
  items[1] = new module_11597.default();
  new module_11597.default();
  items[2] = new module_11599.default();
  new module_11599.default();
  items[3] = new module_11600.default();
  new module_11600.default();
  items[4] = new module_11611.default();
  new module_11611.default();
  items[5] = new module_11602.default();
  new module_11602.default();
  items[6] = new module_11603.default();
  new module_11603.default();
  items[7] = new module_11604.default(flag);
  new module_11604.default(flag);
  items[8] = new module_11605.default(flag);
  new module_11605.default(flag);
  items[9] = new module_11606.default(flag);
  new module_11606.default(flag);
  items1 = [new module_11614.default(), , ];
  new module_11614.default();
  items1[1] = new module_11608.default();
  new module_11608.default();
  items1[2] = new module_11607.default();
  new module_11607.default();
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
  const _default = new module_11609.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11610.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11601.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11612.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11613.default();
  unshift5(_default4);
  return tmp;
}
const module_11597 = fn(_mod11597);
const module_11599 = fn(_mod11599);
const module_11600 = fn(_mod11600);
const module_11601 = fn(_mod11601);
const module_11602 = fn(_mod11602);
const module_11603 = fn(_mod11603);
const module_11604 = fn(_mod11604);
const module_11605 = fn(_mod11605);
const module_11606 = fn(_mod11606);
const module_11607 = fn(_mod11607);
const module_11608 = fn(_mod11608);
const module_11609 = fn(_mod11609);
const module_11610 = fn(_mod11610);
const module_11611 = fn(_mod11611);
const module_11612 = fn(_mod11612);
const module_11458 = fn(_mod11458);
const module_11613 = fn(_mod11613);
const module_11614 = fn(_mod11614);
const Chrono = _mod11425.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11609.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11610.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11601.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11612.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11613.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod11425.Chrono(createConfiguration(true, false));
const chrono2 = new _mod11425.Chrono(createConfiguration(false, true));

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
