// Module ID: 10286
// Function ID: 10287
// Name: casual
// Dependencies: [10287, 10289, 10290, 10291, 10292, 10293, 10294, 10295, 10296, 10297, 10298, 10299, 10300, 10301, 10302, 10148, 10303, 10304, 10115, 10155]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10286 (casual)
import _mod10115 from "module_10115" /* 10115 */;
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10155 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10293 from "module_10293" /* 10293 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import _mod10296 from "module_10296" /* 10296 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10298 from "module_10298" /* 10298 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10300 from "module_10300" /* 10300 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10302 from "module_10302" /* 10302 */;
import _mod10303 from "module_10303" /* 10303 */;
import _mod10304 from "module_10304" /* 10304 */;

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
  items = [new module_10148.default(flag2), , , , , , , , , ];
  new module_10148.default(flag2);
  items[1] = new module_10287.default();
  new module_10287.default();
  items[2] = new module_10289.default();
  new module_10289.default();
  items[3] = new module_10290.default();
  new module_10290.default();
  items[4] = new module_10301.default();
  new module_10301.default();
  items[5] = new module_10292.default();
  new module_10292.default();
  items[6] = new module_10293.default();
  new module_10293.default();
  items[7] = new module_10294.default(flag);
  new module_10294.default(flag);
  items[8] = new module_10295.default(flag);
  new module_10295.default(flag);
  items[9] = new module_10296.default(flag);
  new module_10296.default(flag);
  items1 = [new module_10304.default(), , ];
  new module_10304.default();
  items1[1] = new module_10298.default();
  new module_10298.default();
  items1[2] = new module_10297.default();
  new module_10297.default();
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
  const _default = new module_10299.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10300.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10291.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10302.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10303.default();
  unshift5(_default4);
  return tmp;
}
const module_10287 = fn(_mod10287);
const module_10289 = fn(_mod10289);
const module_10290 = fn(_mod10290);
const module_10291 = fn(_mod10291);
const module_10292 = fn(_mod10292);
const module_10293 = fn(_mod10293);
const module_10294 = fn(_mod10294);
const module_10295 = fn(_mod10295);
const module_10296 = fn(_mod10296);
const module_10297 = fn(_mod10297);
const module_10298 = fn(_mod10298);
const module_10299 = fn(_mod10299);
const module_10300 = fn(_mod10300);
const module_10301 = fn(_mod10301);
const module_10302 = fn(_mod10302);
const module_10148 = fn(_mod10148);
const module_10303 = fn(_mod10303);
const module_10304 = fn(_mod10304);
const Chrono = _mod10115.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10299.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10300.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10291.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10302.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10303.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10115.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10115.Chrono(createConfiguration(false, true));

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
