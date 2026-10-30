// Module ID: 10474
// Function ID: 10475
// Name: casual
// Dependencies: [10475, 10477, 10478, 10479, 10480, 10481, 10482, 10483, 10484, 10485, 10486, 10487, 10488, 10489, 10490, 10336, 10491, 10492, 10303, 10343]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10474 (casual)
import _mod10303 from "module_10303" /* 10303 */;
import _mod10336 from "module_10336" /* 10336 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10343 */;
import _mod10475 from "module_10475" /* 10475 */;
import _mod10477 from "module_10477" /* 10477 */;
import _mod10478 from "module_10478" /* 10478 */;
import _mod10479 from "module_10479" /* 10479 */;
import _mod10480 from "module_10480" /* 10480 */;
import _mod10481 from "module_10481" /* 10481 */;
import _mod10482 from "module_10482" /* 10482 */;
import _mod10483 from "module_10483" /* 10483 */;
import _mod10484 from "module_10484" /* 10484 */;
import _mod10485 from "module_10485" /* 10485 */;
import _mod10486 from "module_10486" /* 10486 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10488 from "module_10488" /* 10488 */;
import _mod10489 from "module_10489" /* 10489 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10492 from "module_10492" /* 10492 */;

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
  items = [new module_10336.default(flag2), , , , , , , , , ];
  new module_10336.default(flag2);
  items[1] = new module_10475.default();
  new module_10475.default();
  items[2] = new module_10477.default();
  new module_10477.default();
  items[3] = new module_10478.default();
  new module_10478.default();
  items[4] = new module_10489.default();
  new module_10489.default();
  items[5] = new module_10480.default();
  new module_10480.default();
  items[6] = new module_10481.default();
  new module_10481.default();
  items[7] = new module_10482.default(flag);
  new module_10482.default(flag);
  items[8] = new module_10483.default(flag);
  new module_10483.default(flag);
  items[9] = new module_10484.default(flag);
  new module_10484.default(flag);
  items1 = [new module_10492.default(), , ];
  new module_10492.default();
  items1[1] = new module_10486.default();
  new module_10486.default();
  items1[2] = new module_10485.default();
  new module_10485.default();
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
  const _default = new module_10487.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10488.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10479.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10490.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10491.default();
  unshift5(_default4);
  return tmp;
}
const module_10475 = fn(_mod10475);
const module_10477 = fn(_mod10477);
const module_10478 = fn(_mod10478);
const module_10479 = fn(_mod10479);
const module_10480 = fn(_mod10480);
const module_10481 = fn(_mod10481);
const module_10482 = fn(_mod10482);
const module_10483 = fn(_mod10483);
const module_10484 = fn(_mod10484);
const module_10485 = fn(_mod10485);
const module_10486 = fn(_mod10486);
const module_10487 = fn(_mod10487);
const module_10488 = fn(_mod10488);
const module_10489 = fn(_mod10489);
const module_10490 = fn(_mod10490);
const module_10336 = fn(_mod10336);
const module_10491 = fn(_mod10491);
const module_10492 = fn(_mod10492);
const Chrono = _mod10303.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10487.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10488.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10479.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10490.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10491.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10303.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10303.Chrono(createConfiguration(false, true));

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
