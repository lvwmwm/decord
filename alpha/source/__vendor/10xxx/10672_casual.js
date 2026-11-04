// Module ID: 10672
// Function ID: 10673
// Name: casual
// Dependencies: [10673, 10675, 10676, 10677, 10678, 10679, 10680, 10681, 10682, 10683, 10684, 10685, 10686, 10687, 10688, 10534, 10689, 10690, 10501, 10541]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10672 (casual)
import _mod10501 from "module_10501" /* 10501 */;
import _mod10534 from "module_10534" /* 10534 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10541 */;
import _mod10673 from "module_10673" /* 10673 */;
import _mod10675 from "module_10675" /* 10675 */;
import _mod10676 from "module_10676" /* 10676 */;
import _mod10677 from "module_10677" /* 10677 */;
import _mod10678 from "module_10678" /* 10678 */;
import _mod10679 from "module_10679" /* 10679 */;
import _mod10680 from "module_10680" /* 10680 */;
import _mod10681 from "module_10681" /* 10681 */;
import _mod10682 from "module_10682" /* 10682 */;
import _mod10683 from "module_10683" /* 10683 */;
import _mod10684 from "module_10684" /* 10684 */;
import _mod10685 from "module_10685" /* 10685 */;
import _mod10686 from "module_10686" /* 10686 */;
import _mod10687 from "module_10687" /* 10687 */;
import _mod10688 from "module_10688" /* 10688 */;
import _mod10689 from "module_10689" /* 10689 */;
import _mod10690 from "module_10690" /* 10690 */;

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
  items = [new module_10534.default(flag2), , , , , , , , , ];
  new module_10534.default(flag2);
  items[1] = new module_10673.default();
  new module_10673.default();
  items[2] = new module_10675.default();
  new module_10675.default();
  items[3] = new module_10676.default();
  new module_10676.default();
  items[4] = new module_10687.default();
  new module_10687.default();
  items[5] = new module_10678.default();
  new module_10678.default();
  items[6] = new module_10679.default();
  new module_10679.default();
  items[7] = new module_10680.default(flag);
  new module_10680.default(flag);
  items[8] = new module_10681.default(flag);
  new module_10681.default(flag);
  items[9] = new module_10682.default(flag);
  new module_10682.default(flag);
  items1 = [new module_10690.default(), , ];
  new module_10690.default();
  items1[1] = new module_10684.default();
  new module_10684.default();
  items1[2] = new module_10683.default();
  new module_10683.default();
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
  const _default = new module_10685.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10686.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10677.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10688.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10689.default();
  unshift5(_default4);
  return tmp;
}
const module_10673 = fn(_mod10673);
const module_10675 = fn(_mod10675);
const module_10676 = fn(_mod10676);
const module_10677 = fn(_mod10677);
const module_10678 = fn(_mod10678);
const module_10679 = fn(_mod10679);
const module_10680 = fn(_mod10680);
const module_10681 = fn(_mod10681);
const module_10682 = fn(_mod10682);
const module_10683 = fn(_mod10683);
const module_10684 = fn(_mod10684);
const module_10685 = fn(_mod10685);
const module_10686 = fn(_mod10686);
const module_10687 = fn(_mod10687);
const module_10688 = fn(_mod10688);
const module_10534 = fn(_mod10534);
const module_10689 = fn(_mod10689);
const module_10690 = fn(_mod10690);
const Chrono = _mod10501.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10685.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10686.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10677.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10688.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10689.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10501.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10501.Chrono(createConfiguration(false, true));

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
