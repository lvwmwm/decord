// Module ID: 10221
// Function ID: 10222
// Name: casual
// Dependencies: [10222, 10224, 10225, 10226, 10227, 10228, 10229, 10230, 10231, 10232, 10233, 10234, 10235, 10236, 10237, 10083, 10238, 10239, 10050, 10090]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10221 (casual)
import _mod10050 from "module_10050" /* 10050 */;
import _mod10083 from "module_10083" /* 10083 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10090 */;
import _mod10222 from "module_10222" /* 10222 */;
import _mod10224 from "module_10224" /* 10224 */;
import _mod10225 from "module_10225" /* 10225 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10227 from "module_10227" /* 10227 */;
import _mod10228 from "module_10228" /* 10228 */;
import _mod10229 from "module_10229" /* 10229 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10231 from "module_10231" /* 10231 */;
import _mod10232 from "module_10232" /* 10232 */;
import _mod10233 from "module_10233" /* 10233 */;
import _mod10234 from "module_10234" /* 10234 */;
import _mod10235 from "module_10235" /* 10235 */;
import _mod10236 from "module_10236" /* 10236 */;
import _mod10237 from "module_10237" /* 10237 */;
import _mod10238 from "module_10238" /* 10238 */;
import _mod10239 from "module_10239" /* 10239 */;

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
  items = [new module_10083.default(flag2), , , , , , , , , ];
  new module_10083.default(flag2);
  items[1] = new module_10222.default();
  new module_10222.default();
  items[2] = new module_10224.default();
  new module_10224.default();
  items[3] = new module_10225.default();
  new module_10225.default();
  items[4] = new module_10236.default();
  new module_10236.default();
  items[5] = new module_10227.default();
  new module_10227.default();
  items[6] = new module_10228.default();
  new module_10228.default();
  items[7] = new module_10229.default(flag);
  new module_10229.default(flag);
  items[8] = new module_10230.default(flag);
  new module_10230.default(flag);
  items[9] = new module_10231.default(flag);
  new module_10231.default(flag);
  items1 = [new module_10239.default(), , ];
  new module_10239.default();
  items1[1] = new module_10233.default();
  new module_10233.default();
  items1[2] = new module_10232.default();
  new module_10232.default();
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
  const _default = new module_10234.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10235.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10226.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10237.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10238.default();
  unshift5(_default4);
  return tmp;
}
const module_10222 = fn(_mod10222);
const module_10224 = fn(_mod10224);
const module_10225 = fn(_mod10225);
const module_10226 = fn(_mod10226);
const module_10227 = fn(_mod10227);
const module_10228 = fn(_mod10228);
const module_10229 = fn(_mod10229);
const module_10230 = fn(_mod10230);
const module_10231 = fn(_mod10231);
const module_10232 = fn(_mod10232);
const module_10233 = fn(_mod10233);
const module_10234 = fn(_mod10234);
const module_10235 = fn(_mod10235);
const module_10236 = fn(_mod10236);
const module_10237 = fn(_mod10237);
const module_10083 = fn(_mod10083);
const module_10238 = fn(_mod10238);
const module_10239 = fn(_mod10239);
const Chrono = _mod10050.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10234.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10235.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10226.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10237.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10238.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10050.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10050.Chrono(createConfiguration(false, true));

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
