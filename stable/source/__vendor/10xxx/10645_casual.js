// Module ID: 10645
// Function ID: 10646
// Name: casual
// Dependencies: [10646, 10648, 10649, 10650, 10651, 10652, 10653, 10654, 10655, 10656, 10657, 10658, 10659, 10660, 10661, 10507, 10662, 10663, 10474, 10514]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10645 (casual)
import _mod10474 from "module_10474" /* 10474 */;
import _mod10507 from "module_10507" /* 10507 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10514 */;
import _mod10646 from "module_10646" /* 10646 */;
import _mod10648 from "module_10648" /* 10648 */;
import _mod10649 from "module_10649" /* 10649 */;
import _mod10650 from "module_10650" /* 10650 */;
import _mod10651 from "module_10651" /* 10651 */;
import _mod10652 from "module_10652" /* 10652 */;
import _mod10653 from "module_10653" /* 10653 */;
import _mod10654 from "module_10654" /* 10654 */;
import _mod10655 from "module_10655" /* 10655 */;
import _mod10656 from "module_10656" /* 10656 */;
import _mod10657 from "module_10657" /* 10657 */;
import _mod10658 from "module_10658" /* 10658 */;
import _mod10659 from "module_10659" /* 10659 */;
import _mod10660 from "module_10660" /* 10660 */;
import _mod10661 from "module_10661" /* 10661 */;
import _mod10662 from "module_10662" /* 10662 */;
import _mod10663 from "module_10663" /* 10663 */;

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
  items = [new module_10507.default(flag2), , , , , , , , , ];
  new module_10507.default(flag2);
  items[1] = new module_10646.default();
  new module_10646.default();
  items[2] = new module_10648.default();
  new module_10648.default();
  items[3] = new module_10649.default();
  new module_10649.default();
  items[4] = new module_10660.default();
  new module_10660.default();
  items[5] = new module_10651.default();
  new module_10651.default();
  items[6] = new module_10652.default();
  new module_10652.default();
  items[7] = new module_10653.default(flag);
  new module_10653.default(flag);
  items[8] = new module_10654.default(flag);
  new module_10654.default(flag);
  items[9] = new module_10655.default(flag);
  new module_10655.default(flag);
  items1 = [new module_10663.default(), , ];
  new module_10663.default();
  items1[1] = new module_10657.default();
  new module_10657.default();
  items1[2] = new module_10656.default();
  new module_10656.default();
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
  const _default = new module_10658.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10659.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10650.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10661.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10662.default();
  unshift5(_default4);
  return tmp;
}
const module_10646 = fn(_mod10646);
const module_10648 = fn(_mod10648);
const module_10649 = fn(_mod10649);
const module_10650 = fn(_mod10650);
const module_10651 = fn(_mod10651);
const module_10652 = fn(_mod10652);
const module_10653 = fn(_mod10653);
const module_10654 = fn(_mod10654);
const module_10655 = fn(_mod10655);
const module_10656 = fn(_mod10656);
const module_10657 = fn(_mod10657);
const module_10658 = fn(_mod10658);
const module_10659 = fn(_mod10659);
const module_10660 = fn(_mod10660);
const module_10661 = fn(_mod10661);
const module_10507 = fn(_mod10507);
const module_10662 = fn(_mod10662);
const module_10663 = fn(_mod10663);
const Chrono = _mod10474.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10658.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10659.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10650.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10661.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10662.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10474.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10474.Chrono(createConfiguration(false, true));

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
