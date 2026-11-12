// Module ID: 11529
// Function ID: 11530
// Name: casual
// Dependencies: [11530, 11532, 11533, 11534, 11535, 11536, 11537, 11538, 11539, 11540, 11541, 11542, 11543, 11544, 11545, 11391, 11546, 11547, 11358, 11398]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11529 (casual)
import _mod11358 from "module_11358" /* 11358 */;
import _mod11391 from "module_11391" /* 11391 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11398 */;
import _mod11530 from "module_11530" /* 11530 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;
import _mod11535 from "module_11535" /* 11535 */;
import _mod11536 from "module_11536" /* 11536 */;
import _mod11537 from "module_11537" /* 11537 */;
import _mod11538 from "module_11538" /* 11538 */;
import _mod11539 from "module_11539" /* 11539 */;
import _mod11540 from "module_11540" /* 11540 */;
import _mod11541 from "module_11541" /* 11541 */;
import _mod11542 from "module_11542" /* 11542 */;
import _mod11543 from "module_11543" /* 11543 */;
import _mod11544 from "module_11544" /* 11544 */;
import _mod11545 from "module_11545" /* 11545 */;
import _mod11546 from "module_11546" /* 11546 */;
import _mod11547 from "module_11547" /* 11547 */;

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
  items = [new module_11391.default(flag2), , , , , , , , , ];
  new module_11391.default(flag2);
  items[1] = new module_11530.default();
  new module_11530.default();
  items[2] = new module_11532.default();
  new module_11532.default();
  items[3] = new module_11533.default();
  new module_11533.default();
  items[4] = new module_11544.default();
  new module_11544.default();
  items[5] = new module_11535.default();
  new module_11535.default();
  items[6] = new module_11536.default();
  new module_11536.default();
  items[7] = new module_11537.default(flag);
  new module_11537.default(flag);
  items[8] = new module_11538.default(flag);
  new module_11538.default(flag);
  items[9] = new module_11539.default(flag);
  new module_11539.default(flag);
  items1 = [new module_11547.default(), , ];
  new module_11547.default();
  items1[1] = new module_11541.default();
  new module_11541.default();
  items1[2] = new module_11540.default();
  new module_11540.default();
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
  const _default = new module_11542.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11543.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11534.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11545.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11546.default();
  unshift5(_default4);
  return tmp;
}
const module_11530 = fn(_mod11530);
const module_11532 = fn(_mod11532);
const module_11533 = fn(_mod11533);
const module_11534 = fn(_mod11534);
const module_11535 = fn(_mod11535);
const module_11536 = fn(_mod11536);
const module_11537 = fn(_mod11537);
const module_11538 = fn(_mod11538);
const module_11539 = fn(_mod11539);
const module_11540 = fn(_mod11540);
const module_11541 = fn(_mod11541);
const module_11542 = fn(_mod11542);
const module_11543 = fn(_mod11543);
const module_11544 = fn(_mod11544);
const module_11545 = fn(_mod11545);
const module_11391 = fn(_mod11391);
const module_11546 = fn(_mod11546);
const module_11547 = fn(_mod11547);
const Chrono = _mod11358.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11542.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11543.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11534.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11545.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11546.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod11358.Chrono(createConfiguration(true, false));
const chrono2 = new _mod11358.Chrono(createConfiguration(false, true));

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
