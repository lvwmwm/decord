// Module ID: 10318
// Function ID: 10319
// Name: includeCommonConfiguration
// Dependencies: [10319, 10320, 10315, 10321, 10322, 10323, 10324]
// Exports: includeCommonConfiguration

// Module 10318 (includeCommonConfiguration)
import _mod10315 from "module_10315" /* 10315 */;
import _mod10319 from "module_10319" /* 10319 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10321 from "module_10321" /* 10321 */;
import _mod10322 from "module_10322" /* 10322 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;

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
const module_10319 = fn(_mod10319);
const module_10320 = fn(_mod10320);
const module_10315 = fn(_mod10315);
const module_10321 = fn(_mod10321);
const module_10322 = fn(_mod10322);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10323.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10324.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10320.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10315.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10319.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10315.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10321.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10322.default(flag);
  push4(_default7);
  return parsers;
}
