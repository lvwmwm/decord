// Module ID: 10630
// Function ID: 10631
// Name: casual
// Dependencies: [10631, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 10645, 10646, 10492, 10647, 10648, 10459, 10499]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10630 (casual)
import _mod10459 from "module_10459" /* 10459 */;
import _mod10492 from "module_10492" /* 10492 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10499 */;
import _mod10631 from "module_10631" /* 10631 */;
import _mod10633 from "module_10633" /* 10633 */;
import _mod10634 from "module_10634" /* 10634 */;
import _mod10635 from "module_10635" /* 10635 */;
import _mod10636 from "module_10636" /* 10636 */;
import _mod10637 from "module_10637" /* 10637 */;
import _mod10638 from "module_10638" /* 10638 */;
import _mod10639 from "module_10639" /* 10639 */;
import _mod10640 from "module_10640" /* 10640 */;
import _mod10641 from "module_10641" /* 10641 */;
import _mod10642 from "module_10642" /* 10642 */;
import _mod10643 from "module_10643" /* 10643 */;
import _mod10644 from "module_10644" /* 10644 */;
import _mod10645 from "module_10645" /* 10645 */;
import _mod10646 from "module_10646" /* 10646 */;
import _mod10647 from "module_10647" /* 10647 */;
import _mod10648 from "module_10648" /* 10648 */;

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
  items = [new module_10492.default(flag2), , , , , , , , , ];
  new module_10492.default(flag2);
  items[1] = new module_10631.default();
  new module_10631.default();
  items[2] = new module_10633.default();
  new module_10633.default();
  items[3] = new module_10634.default();
  new module_10634.default();
  items[4] = new module_10645.default();
  new module_10645.default();
  items[5] = new module_10636.default();
  new module_10636.default();
  items[6] = new module_10637.default();
  new module_10637.default();
  items[7] = new module_10638.default(flag);
  new module_10638.default(flag);
  items[8] = new module_10639.default(flag);
  new module_10639.default(flag);
  items[9] = new module_10640.default(flag);
  new module_10640.default(flag);
  items1 = [new module_10648.default(), , ];
  new module_10648.default();
  items1[1] = new module_10642.default();
  new module_10642.default();
  items1[2] = new module_10641.default();
  new module_10641.default();
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
  const _default = new module_10643.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10644.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10635.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10646.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10647.default();
  unshift5(_default4);
  return tmp;
}
const module_10631 = fn(_mod10631);
const module_10633 = fn(_mod10633);
const module_10634 = fn(_mod10634);
const module_10635 = fn(_mod10635);
const module_10636 = fn(_mod10636);
const module_10637 = fn(_mod10637);
const module_10638 = fn(_mod10638);
const module_10639 = fn(_mod10639);
const module_10640 = fn(_mod10640);
const module_10641 = fn(_mod10641);
const module_10642 = fn(_mod10642);
const module_10643 = fn(_mod10643);
const module_10644 = fn(_mod10644);
const module_10645 = fn(_mod10645);
const module_10646 = fn(_mod10646);
const module_10492 = fn(_mod10492);
const module_10647 = fn(_mod10647);
const module_10648 = fn(_mod10648);
const Chrono = _mod10459.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10643.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10644.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10635.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10646.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10647.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10459.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10459.Chrono(createConfiguration(false, true));

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
