// Module ID: 11520
// Function ID: 11521
// Name: casual
// Dependencies: [11521, 11523, 11524, 11525, 11526, 11527, 11528, 11529, 11530, 11531, 11532, 11533, 11534, 11535, 11536, 11382, 11537, 11538, 11349, 11389]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11520 (casual)
import _mod11349 from "module_11349" /* 11349 */;
import _mod11382 from "module_11382" /* 11382 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11389 */;
import _mod11521 from "module_11521" /* 11521 */;
import _mod11523 from "module_11523" /* 11523 */;
import _mod11524 from "module_11524" /* 11524 */;
import _mod11525 from "module_11525" /* 11525 */;
import _mod11526 from "module_11526" /* 11526 */;
import _mod11527 from "module_11527" /* 11527 */;
import _mod11528 from "module_11528" /* 11528 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11530 from "module_11530" /* 11530 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;
import _mod11535 from "module_11535" /* 11535 */;
import _mod11536 from "module_11536" /* 11536 */;
import _mod11537 from "module_11537" /* 11537 */;
import _mod11538 from "module_11538" /* 11538 */;

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
  items = [new module_11382.default(flag2), , , , , , , , , ];
  new module_11382.default(flag2);
  items[1] = new module_11521.default();
  new module_11521.default();
  items[2] = new module_11523.default();
  new module_11523.default();
  items[3] = new module_11524.default();
  new module_11524.default();
  items[4] = new module_11535.default();
  new module_11535.default();
  items[5] = new module_11526.default();
  new module_11526.default();
  items[6] = new module_11527.default();
  new module_11527.default();
  items[7] = new module_11528.default(flag);
  new module_11528.default(flag);
  items[8] = new module_11529.default(flag);
  new module_11529.default(flag);
  items[9] = new module_11530.default(flag);
  new module_11530.default(flag);
  items1 = [new module_11538.default(), , ];
  new module_11538.default();
  items1[1] = new module_11532.default();
  new module_11532.default();
  items1[2] = new module_11531.default();
  new module_11531.default();
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
  const _default = new module_11533.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11534.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11525.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11536.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11537.default();
  unshift5(_default4);
  return tmp;
}
const module_11521 = fn(_mod11521);
const module_11523 = fn(_mod11523);
const module_11524 = fn(_mod11524);
const module_11525 = fn(_mod11525);
const module_11526 = fn(_mod11526);
const module_11527 = fn(_mod11527);
const module_11528 = fn(_mod11528);
const module_11529 = fn(_mod11529);
const module_11530 = fn(_mod11530);
const module_11531 = fn(_mod11531);
const module_11532 = fn(_mod11532);
const module_11533 = fn(_mod11533);
const module_11534 = fn(_mod11534);
const module_11535 = fn(_mod11535);
const module_11536 = fn(_mod11536);
const module_11382 = fn(_mod11382);
const module_11537 = fn(_mod11537);
const module_11538 = fn(_mod11538);
const Chrono = _mod11349.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11533.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11534.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11525.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11536.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11537.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod11349.Chrono(createConfiguration(true, false));
const chrono2 = new _mod11349.Chrono(createConfiguration(false, true));

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
