// Module ID: 11587
// Function ID: 11588
// Name: casual
// Dependencies: [11588, 11590, 11591, 11592, 11593, 11594, 11595, 11596, 11597, 11598, 11599, 11600, 11601, 11602, 11603, 11449, 11604, 11605, 11416, 11456]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11587 (casual)
import _mod11416 from "module_11416" /* 11416 */;
import _mod11449 from "module_11449" /* 11449 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11456 */;
import _mod11588 from "module_11588" /* 11588 */;
import _mod11590 from "module_11590" /* 11590 */;
import _mod11591 from "module_11591" /* 11591 */;
import _mod11592 from "module_11592" /* 11592 */;
import _mod11593 from "module_11593" /* 11593 */;
import _mod11594 from "module_11594" /* 11594 */;
import _mod11595 from "module_11595" /* 11595 */;
import _mod11596 from "module_11596" /* 11596 */;
import _mod11597 from "module_11597" /* 11597 */;
import _mod11598 from "module_11598" /* 11598 */;
import _mod11599 from "module_11599" /* 11599 */;
import _mod11600 from "module_11600" /* 11600 */;
import _mod11601 from "module_11601" /* 11601 */;
import _mod11602 from "module_11602" /* 11602 */;
import _mod11603 from "module_11603" /* 11603 */;
import _mod11604 from "module_11604" /* 11604 */;
import _mod11605 from "module_11605" /* 11605 */;

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
  items = [new module_11449.default(flag2), , , , , , , , , ];
  new module_11449.default(flag2);
  items[1] = new module_11588.default();
  new module_11588.default();
  items[2] = new module_11590.default();
  new module_11590.default();
  items[3] = new module_11591.default();
  new module_11591.default();
  items[4] = new module_11602.default();
  new module_11602.default();
  items[5] = new module_11593.default();
  new module_11593.default();
  items[6] = new module_11594.default();
  new module_11594.default();
  items[7] = new module_11595.default(flag);
  new module_11595.default(flag);
  items[8] = new module_11596.default(flag);
  new module_11596.default(flag);
  items[9] = new module_11597.default(flag);
  new module_11597.default(flag);
  items1 = [new module_11605.default(), , ];
  new module_11605.default();
  items1[1] = new module_11599.default();
  new module_11599.default();
  items1[2] = new module_11598.default();
  new module_11598.default();
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
  const _default = new module_11600.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11601.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11592.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11603.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11604.default();
  unshift5(_default4);
  return tmp;
}
const module_11588 = fn(_mod11588);
const module_11590 = fn(_mod11590);
const module_11591 = fn(_mod11591);
const module_11592 = fn(_mod11592);
const module_11593 = fn(_mod11593);
const module_11594 = fn(_mod11594);
const module_11595 = fn(_mod11595);
const module_11596 = fn(_mod11596);
const module_11597 = fn(_mod11597);
const module_11598 = fn(_mod11598);
const module_11599 = fn(_mod11599);
const module_11600 = fn(_mod11600);
const module_11601 = fn(_mod11601);
const module_11602 = fn(_mod11602);
const module_11603 = fn(_mod11603);
const module_11449 = fn(_mod11449);
const module_11604 = fn(_mod11604);
const module_11605 = fn(_mod11605);
const Chrono = _mod11416.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11600.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11601.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11592.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11603.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11604.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod11416.Chrono(createConfiguration(true, false));
const chrono2 = new _mod11416.Chrono(createConfiguration(false, true));

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
