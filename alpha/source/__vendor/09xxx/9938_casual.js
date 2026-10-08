// Module ID: 9938
// Function ID: 9939
// Name: casual
// Dependencies: [9939, 9941, 9942, 9943, 9944, 9945, 9946, 9947, 9948, 9949, 9950, 9951, 9952, 9953, 9954, 9800, 9955, 9956, 9767, 9807]
// Exports: createCasualConfiguration, parse, parseDate

// Module 9938 (casual)
import _mod9767 from "module_9767" /* 9767 */;
import _mod9800 from "module_9800" /* 9800 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 9807 */;
import _mod9939 from "module_9939" /* 9939 */;
import _mod9941 from "module_9941" /* 9941 */;
import _mod9942 from "module_9942" /* 9942 */;
import _mod9943 from "module_9943" /* 9943 */;
import _mod9944 from "module_9944" /* 9944 */;
import _mod9945 from "module_9945" /* 9945 */;
import _mod9946 from "module_9946" /* 9946 */;
import _mod9947 from "module_9947" /* 9947 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9949 from "module_9949" /* 9949 */;
import _mod9950 from "module_9950" /* 9950 */;
import _mod9951 from "module_9951" /* 9951 */;
import _mod9952 from "module_9952" /* 9952 */;
import _mod9953 from "module_9953" /* 9953 */;
import _mod9954 from "module_9954" /* 9954 */;
import _mod9955 from "module_9955" /* 9955 */;
import _mod9956 from "module_9956" /* 9956 */;

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
  items = [new module_9800.default(flag2), , , , , , , , , ];
  new module_9800.default(flag2);
  items[1] = new module_9939.default();
  new module_9939.default();
  items[2] = new module_9941.default();
  new module_9941.default();
  items[3] = new module_9942.default();
  new module_9942.default();
  items[4] = new module_9953.default();
  new module_9953.default();
  items[5] = new module_9944.default();
  new module_9944.default();
  items[6] = new module_9945.default();
  new module_9945.default();
  items[7] = new module_9946.default(flag);
  new module_9946.default(flag);
  items[8] = new module_9947.default(flag);
  new module_9947.default(flag);
  items[9] = new module_9948.default(flag);
  new module_9948.default(flag);
  items1 = [new module_9956.default(), , ];
  new module_9956.default();
  items1[1] = new module_9950.default();
  new module_9950.default();
  items1[2] = new module_9949.default();
  new module_9949.default();
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
  const _default = new module_9951.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_9952.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_9943.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_9954.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_9955.default();
  unshift5(_default4);
  return tmp;
}
const module_9939 = fn(_mod9939);
const module_9941 = fn(_mod9941);
const module_9942 = fn(_mod9942);
const module_9943 = fn(_mod9943);
const module_9944 = fn(_mod9944);
const module_9945 = fn(_mod9945);
const module_9946 = fn(_mod9946);
const module_9947 = fn(_mod9947);
const module_9948 = fn(_mod9948);
const module_9949 = fn(_mod9949);
const module_9950 = fn(_mod9950);
const module_9951 = fn(_mod9951);
const module_9952 = fn(_mod9952);
const module_9953 = fn(_mod9953);
const module_9954 = fn(_mod9954);
const module_9800 = fn(_mod9800);
const module_9955 = fn(_mod9955);
const module_9956 = fn(_mod9956);
const Chrono = _mod9767.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_9951.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_9952.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_9943.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_9954.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_9955.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod9767.Chrono(createConfiguration(true, false));
const chrono2 = new _mod9767.Chrono(createConfiguration(false, true));

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
