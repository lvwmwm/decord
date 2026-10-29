// Module ID: 10449
// Function ID: 10450
// Name: casual
// Dependencies: [10450, 10452, 10453, 10454, 10455, 10456, 10457, 10458, 10459, 10460, 10461, 10462, 10463, 10464, 10465, 10311, 10466, 10467, 10278, 10318]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10449 (casual)
import _mod10278 from "module_10278" /* 10278 */;
import _mod10311 from "module_10311" /* 10311 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10318 */;
import _mod10450 from "module_10450" /* 10450 */;
import _mod10452 from "module_10452" /* 10452 */;
import _mod10453 from "module_10453" /* 10453 */;
import _mod10454 from "module_10454" /* 10454 */;
import _mod10455 from "module_10455" /* 10455 */;
import _mod10456 from "module_10456" /* 10456 */;
import _mod10457 from "module_10457" /* 10457 */;
import _mod10458 from "module_10458" /* 10458 */;
import _mod10459 from "module_10459" /* 10459 */;
import _mod10460 from "module_10460" /* 10460 */;
import _mod10461 from "module_10461" /* 10461 */;
import _mod10462 from "module_10462" /* 10462 */;
import _mod10463 from "module_10463" /* 10463 */;
import _mod10464 from "module_10464" /* 10464 */;
import _mod10465 from "module_10465" /* 10465 */;
import _mod10466 from "module_10466" /* 10466 */;
import _mod10467 from "module_10467" /* 10467 */;

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
  items = [new module_10311.default(flag2), , , , , , , , , ];
  new module_10311.default(flag2);
  items[1] = new module_10450.default();
  new module_10450.default();
  items[2] = new module_10452.default();
  new module_10452.default();
  items[3] = new module_10453.default();
  new module_10453.default();
  items[4] = new module_10464.default();
  new module_10464.default();
  items[5] = new module_10455.default();
  new module_10455.default();
  items[6] = new module_10456.default();
  new module_10456.default();
  items[7] = new module_10457.default(flag);
  new module_10457.default(flag);
  items[8] = new module_10458.default(flag);
  new module_10458.default(flag);
  items[9] = new module_10459.default(flag);
  new module_10459.default(flag);
  items1 = [new module_10467.default(), , ];
  new module_10467.default();
  items1[1] = new module_10461.default();
  new module_10461.default();
  items1[2] = new module_10460.default();
  new module_10460.default();
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
  const _default = new module_10462.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10463.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10454.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10465.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10466.default();
  unshift5(_default4);
  return tmp;
}
const module_10450 = fn(_mod10450);
const module_10452 = fn(_mod10452);
const module_10453 = fn(_mod10453);
const module_10454 = fn(_mod10454);
const module_10455 = fn(_mod10455);
const module_10456 = fn(_mod10456);
const module_10457 = fn(_mod10457);
const module_10458 = fn(_mod10458);
const module_10459 = fn(_mod10459);
const module_10460 = fn(_mod10460);
const module_10461 = fn(_mod10461);
const module_10462 = fn(_mod10462);
const module_10463 = fn(_mod10463);
const module_10464 = fn(_mod10464);
const module_10465 = fn(_mod10465);
const module_10311 = fn(_mod10311);
const module_10466 = fn(_mod10466);
const module_10467 = fn(_mod10467);
const Chrono = _mod10278.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10462.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10463.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10454.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10465.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10466.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10278.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10278.Chrono(createConfiguration(false, true));

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
