// Module ID: 10414
// Function ID: 10415
// Name: casual
// Dependencies: [10415, 10417, 10418, 10419, 10420, 10421, 10422, 10423, 10424, 10425, 10426, 10427, 10428, 10429, 10430, 10276, 10431, 10432, 10243, 10283]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10414 (casual)
import _mod10243 from "module_10243" /* 10243 */;
import _mod10276 from "module_10276" /* 10276 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10283 */;
import _mod10415 from "module_10415" /* 10415 */;
import _mod10417 from "module_10417" /* 10417 */;
import _mod10418 from "module_10418" /* 10418 */;
import _mod10419 from "module_10419" /* 10419 */;
import _mod10420 from "module_10420" /* 10420 */;
import _mod10421 from "module_10421" /* 10421 */;
import _mod10422 from "module_10422" /* 10422 */;
import _mod10423 from "module_10423" /* 10423 */;
import _mod10424 from "module_10424" /* 10424 */;
import _mod10425 from "module_10425" /* 10425 */;
import _mod10426 from "module_10426" /* 10426 */;
import _mod10427 from "module_10427" /* 10427 */;
import _mod10428 from "module_10428" /* 10428 */;
import _mod10429 from "module_10429" /* 10429 */;
import _mod10430 from "module_10430" /* 10430 */;
import _mod10431 from "module_10431" /* 10431 */;
import _mod10432 from "module_10432" /* 10432 */;

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
  items = [new module_10276.default(flag2), , , , , , , , , ];
  new module_10276.default(flag2);
  items[1] = new module_10415.default();
  new module_10415.default();
  items[2] = new module_10417.default();
  new module_10417.default();
  items[3] = new module_10418.default();
  new module_10418.default();
  items[4] = new module_10429.default();
  new module_10429.default();
  items[5] = new module_10420.default();
  new module_10420.default();
  items[6] = new module_10421.default();
  new module_10421.default();
  items[7] = new module_10422.default(flag);
  new module_10422.default(flag);
  items[8] = new module_10423.default(flag);
  new module_10423.default(flag);
  items[9] = new module_10424.default(flag);
  new module_10424.default(flag);
  items1 = [new module_10432.default(), , ];
  new module_10432.default();
  items1[1] = new module_10426.default();
  new module_10426.default();
  items1[2] = new module_10425.default();
  new module_10425.default();
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
  const _default = new module_10427.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10428.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10419.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10430.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10431.default();
  unshift5(_default4);
  return tmp;
}
const module_10415 = fn(_mod10415);
const module_10417 = fn(_mod10417);
const module_10418 = fn(_mod10418);
const module_10419 = fn(_mod10419);
const module_10420 = fn(_mod10420);
const module_10421 = fn(_mod10421);
const module_10422 = fn(_mod10422);
const module_10423 = fn(_mod10423);
const module_10424 = fn(_mod10424);
const module_10425 = fn(_mod10425);
const module_10426 = fn(_mod10426);
const module_10427 = fn(_mod10427);
const module_10428 = fn(_mod10428);
const module_10429 = fn(_mod10429);
const module_10430 = fn(_mod10430);
const module_10276 = fn(_mod10276);
const module_10431 = fn(_mod10431);
const module_10432 = fn(_mod10432);
const Chrono = _mod10243.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10427.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10428.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10419.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10430.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10431.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10243.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10243.Chrono(createConfiguration(false, true));

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
