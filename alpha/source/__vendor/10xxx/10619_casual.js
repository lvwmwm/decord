// Module ID: 10619
// Function ID: 10620
// Name: casual
// Dependencies: [10620, 10622, 10623, 10624, 10625, 10626, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10481, 10636, 10637, 10448, 10488]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10619 (casual)
import _mod10448 from "module_10448" /* 10448 */;
import _mod10481 from "module_10481" /* 10481 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10488 */;
import _mod10620 from "module_10620" /* 10620 */;
import _mod10622 from "module_10622" /* 10622 */;
import _mod10623 from "module_10623" /* 10623 */;
import _mod10624 from "module_10624" /* 10624 */;
import _mod10625 from "module_10625" /* 10625 */;
import _mod10626 from "module_10626" /* 10626 */;
import _mod10627 from "module_10627" /* 10627 */;
import _mod10628 from "module_10628" /* 10628 */;
import _mod10629 from "module_10629" /* 10629 */;
import _mod10630 from "module_10630" /* 10630 */;
import _mod10631 from "module_10631" /* 10631 */;
import _mod10632 from "module_10632" /* 10632 */;
import _mod10633 from "module_10633" /* 10633 */;
import _mod10634 from "module_10634" /* 10634 */;
import _mod10635 from "module_10635" /* 10635 */;
import _mod10636 from "module_10636" /* 10636 */;
import _mod10637 from "module_10637" /* 10637 */;

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
  items = [new module_10481.default(flag2), , , , , , , , , ];
  new module_10481.default(flag2);
  items[1] = new module_10620.default();
  new module_10620.default();
  items[2] = new module_10622.default();
  new module_10622.default();
  items[3] = new module_10623.default();
  new module_10623.default();
  items[4] = new module_10634.default();
  new module_10634.default();
  items[5] = new module_10625.default();
  new module_10625.default();
  items[6] = new module_10626.default();
  new module_10626.default();
  items[7] = new module_10627.default(flag);
  new module_10627.default(flag);
  items[8] = new module_10628.default(flag);
  new module_10628.default(flag);
  items[9] = new module_10629.default(flag);
  new module_10629.default(flag);
  items1 = [new module_10637.default(), , ];
  new module_10637.default();
  items1[1] = new module_10631.default();
  new module_10631.default();
  items1[2] = new module_10630.default();
  new module_10630.default();
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
  const _default = new module_10632.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10633.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10624.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10635.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10636.default();
  unshift5(_default4);
  return tmp;
}
const module_10620 = fn(_mod10620);
const module_10622 = fn(_mod10622);
const module_10623 = fn(_mod10623);
const module_10624 = fn(_mod10624);
const module_10625 = fn(_mod10625);
const module_10626 = fn(_mod10626);
const module_10627 = fn(_mod10627);
const module_10628 = fn(_mod10628);
const module_10629 = fn(_mod10629);
const module_10630 = fn(_mod10630);
const module_10631 = fn(_mod10631);
const module_10632 = fn(_mod10632);
const module_10633 = fn(_mod10633);
const module_10634 = fn(_mod10634);
const module_10635 = fn(_mod10635);
const module_10481 = fn(_mod10481);
const module_10636 = fn(_mod10636);
const module_10637 = fn(_mod10637);
const Chrono = _mod10448.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10632.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10633.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10624.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10635.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10636.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10448.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10448.Chrono(createConfiguration(false, true));

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
