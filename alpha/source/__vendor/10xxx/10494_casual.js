// Module ID: 10494
// Function ID: 10495
// Name: casual
// Dependencies: [10495, 10497, 10498, 10499, 10500, 10501, 10502, 10503, 10504, 10505, 10506, 10507, 10508, 10509, 10510, 10356, 10511, 10512, 10323, 10363]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10494 (casual)
import _mod10323 from "module_10323" /* 10323 */;
import _mod10356 from "module_10356" /* 10356 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10363 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10499 from "module_10499" /* 10499 */;
import _mod10500 from "module_10500" /* 10500 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10503 from "module_10503" /* 10503 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10506 from "module_10506" /* 10506 */;
import _mod10507 from "module_10507" /* 10507 */;
import _mod10508 from "module_10508" /* 10508 */;
import _mod10509 from "module_10509" /* 10509 */;
import _mod10510 from "module_10510" /* 10510 */;
import _mod10511 from "module_10511" /* 10511 */;
import _mod10512 from "module_10512" /* 10512 */;

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
  items = [new module_10356.default(flag2), , , , , , , , , ];
  new module_10356.default(flag2);
  items[1] = new module_10495.default();
  new module_10495.default();
  items[2] = new module_10497.default();
  new module_10497.default();
  items[3] = new module_10498.default();
  new module_10498.default();
  items[4] = new module_10509.default();
  new module_10509.default();
  items[5] = new module_10500.default();
  new module_10500.default();
  items[6] = new module_10501.default();
  new module_10501.default();
  items[7] = new module_10502.default(flag);
  new module_10502.default(flag);
  items[8] = new module_10503.default(flag);
  new module_10503.default(flag);
  items[9] = new module_10504.default(flag);
  new module_10504.default(flag);
  items1 = [new module_10512.default(), , ];
  new module_10512.default();
  items1[1] = new module_10506.default();
  new module_10506.default();
  items1[2] = new module_10505.default();
  new module_10505.default();
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
  const _default = new module_10507.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10508.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10499.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10510.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10511.default();
  unshift5(_default4);
  return tmp;
}
const module_10495 = fn(_mod10495);
const module_10497 = fn(_mod10497);
const module_10498 = fn(_mod10498);
const module_10499 = fn(_mod10499);
const module_10500 = fn(_mod10500);
const module_10501 = fn(_mod10501);
const module_10502 = fn(_mod10502);
const module_10503 = fn(_mod10503);
const module_10504 = fn(_mod10504);
const module_10505 = fn(_mod10505);
const module_10506 = fn(_mod10506);
const module_10507 = fn(_mod10507);
const module_10508 = fn(_mod10508);
const module_10509 = fn(_mod10509);
const module_10510 = fn(_mod10510);
const module_10356 = fn(_mod10356);
const module_10511 = fn(_mod10511);
const module_10512 = fn(_mod10512);
const Chrono = _mod10323.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10507.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10508.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10499.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10510.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10511.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10323.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10323.Chrono(createConfiguration(false, true));

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
