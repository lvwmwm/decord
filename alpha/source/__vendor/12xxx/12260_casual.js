// Module ID: 12260
// Function ID: 12261
// Name: casual
// Dependencies: [12261, 12263, 12264, 12265, 12266, 12267, 12268, 12269, 12270, 12271, 12272, 12273, 12274, 12275, 12276, 12122, 12277, 12278, 12089, 12129]
// Exports: createCasualConfiguration, parse, parseDate

// Module 12260 (casual)
import _mod12089 from "module_12089" /* 12089 */;
import _mod12122 from "module_12122" /* 12122 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 12129 */;
import _mod12261 from "module_12261" /* 12261 */;
import _mod12263 from "module_12263" /* 12263 */;
import _mod12264 from "module_12264" /* 12264 */;
import _mod12265 from "module_12265" /* 12265 */;
import _mod12266 from "module_12266" /* 12266 */;
import _mod12267 from "module_12267" /* 12267 */;
import _mod12268 from "module_12268" /* 12268 */;
import _mod12269 from "module_12269" /* 12269 */;
import _mod12270 from "module_12270" /* 12270 */;
import _mod12271 from "module_12271" /* 12271 */;
import _mod12272 from "module_12272" /* 12272 */;
import _mod12273 from "module_12273" /* 12273 */;
import _mod12274 from "module_12274" /* 12274 */;
import _mod12275 from "module_12275" /* 12275 */;
import _mod12276 from "module_12276" /* 12276 */;
import _mod12277 from "module_12277" /* 12277 */;
import _mod12278 from "module_12278" /* 12278 */;

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
  items = [new module_12122.default(flag2), , , , , , , , , ];
  new module_12122.default(flag2);
  items[1] = new module_12261.default();
  new module_12261.default();
  items[2] = new module_12263.default();
  new module_12263.default();
  items[3] = new module_12264.default();
  new module_12264.default();
  items[4] = new module_12275.default();
  new module_12275.default();
  items[5] = new module_12266.default();
  new module_12266.default();
  items[6] = new module_12267.default();
  new module_12267.default();
  items[7] = new module_12268.default(flag);
  new module_12268.default(flag);
  items[8] = new module_12269.default(flag);
  new module_12269.default(flag);
  items[9] = new module_12270.default(flag);
  new module_12270.default(flag);
  items1 = [new module_12278.default(), , ];
  new module_12278.default();
  items1[1] = new module_12272.default();
  new module_12272.default();
  items1[2] = new module_12271.default();
  new module_12271.default();
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
  const _default = new module_12273.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_12274.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_12265.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_12276.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_12277.default();
  unshift5(_default4);
  return tmp;
}
const module_12261 = fn(_mod12261);
const module_12263 = fn(_mod12263);
const module_12264 = fn(_mod12264);
const module_12265 = fn(_mod12265);
const module_12266 = fn(_mod12266);
const module_12267 = fn(_mod12267);
const module_12268 = fn(_mod12268);
const module_12269 = fn(_mod12269);
const module_12270 = fn(_mod12270);
const module_12271 = fn(_mod12271);
const module_12272 = fn(_mod12272);
const module_12273 = fn(_mod12273);
const module_12274 = fn(_mod12274);
const module_12275 = fn(_mod12275);
const module_12276 = fn(_mod12276);
const module_12122 = fn(_mod12122);
const module_12277 = fn(_mod12277);
const module_12278 = fn(_mod12278);
const Chrono = _mod12089.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_12273.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_12274.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_12265.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_12276.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_12277.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod12089.Chrono(createConfiguration(true, false));
const chrono2 = new _mod12089.Chrono(createConfiguration(false, true));

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
