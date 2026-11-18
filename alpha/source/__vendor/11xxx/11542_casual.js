// Module ID: 11542
// Function ID: 11543
// Name: casual
// Dependencies: [11543, 11545, 11546, 11547, 11548, 11549, 11550, 11551, 11552, 11553, 11554, 11555, 11556, 11557, 11558, 11404, 11559, 11560, 11371, 11411]
// Exports: createCasualConfiguration, parse, parseDate

// Module 11542 (casual)
import _mod11371 from "module_11371" /* 11371 */;
import _mod11404 from "module_11404" /* 11404 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 11411 */;
import _mod11543 from "module_11543" /* 11543 */;
import _mod11545 from "module_11545" /* 11545 */;
import _mod11546 from "module_11546" /* 11546 */;
import _mod11547 from "module_11547" /* 11547 */;
import _mod11548 from "module_11548" /* 11548 */;
import _mod11549 from "module_11549" /* 11549 */;
import _mod11550 from "module_11550" /* 11550 */;
import _mod11551 from "module_11551" /* 11551 */;
import _mod11552 from "module_11552" /* 11552 */;
import _mod11553 from "module_11553" /* 11553 */;
import _mod11554 from "module_11554" /* 11554 */;
import _mod11555 from "module_11555" /* 11555 */;
import _mod11556 from "module_11556" /* 11556 */;
import _mod11557 from "module_11557" /* 11557 */;
import _mod11558 from "module_11558" /* 11558 */;
import _mod11559 from "module_11559" /* 11559 */;
import _mod11560 from "module_11560" /* 11560 */;

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
  items = [new module_11404.default(flag2), , , , , , , , , ];
  new module_11404.default(flag2);
  items[1] = new module_11543.default();
  new module_11543.default();
  items[2] = new module_11545.default();
  new module_11545.default();
  items[3] = new module_11546.default();
  new module_11546.default();
  items[4] = new module_11557.default();
  new module_11557.default();
  items[5] = new module_11548.default();
  new module_11548.default();
  items[6] = new module_11549.default();
  new module_11549.default();
  items[7] = new module_11550.default(flag);
  new module_11550.default(flag);
  items[8] = new module_11551.default(flag);
  new module_11551.default(flag);
  items[9] = new module_11552.default(flag);
  new module_11552.default(flag);
  items1 = [new module_11560.default(), , ];
  new module_11560.default();
  items1[1] = new module_11554.default();
  new module_11554.default();
  items1[2] = new module_11553.default();
  new module_11553.default();
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
  const _default = new module_11555.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_11556.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_11547.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_11558.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_11559.default();
  unshift5(_default4);
  return tmp;
}
const module_11543 = fn(_mod11543);
const module_11545 = fn(_mod11545);
const module_11546 = fn(_mod11546);
const module_11547 = fn(_mod11547);
const module_11548 = fn(_mod11548);
const module_11549 = fn(_mod11549);
const module_11550 = fn(_mod11550);
const module_11551 = fn(_mod11551);
const module_11552 = fn(_mod11552);
const module_11553 = fn(_mod11553);
const module_11554 = fn(_mod11554);
const module_11555 = fn(_mod11555);
const module_11556 = fn(_mod11556);
const module_11557 = fn(_mod11557);
const module_11558 = fn(_mod11558);
const module_11404 = fn(_mod11404);
const module_11559 = fn(_mod11559);
const module_11560 = fn(_mod11560);
const Chrono = _mod11371.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_11555.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_11556.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_11547.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_11558.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_11559.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod11371.Chrono(createConfiguration(true, false));
const chrono2 = new _mod11371.Chrono(createConfiguration(false, true));

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
