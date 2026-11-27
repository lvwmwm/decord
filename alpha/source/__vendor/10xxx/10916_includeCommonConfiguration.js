// Module ID: 10916
// Function ID: 10917
// Name: includeCommonConfiguration
// Dependencies: [10917, 10918, 10913, 10919, 10920, 10921, 10922]
// Exports: includeCommonConfiguration

// Module 10916 (includeCommonConfiguration)
import _mod10913 from "module_10913" /* 10913 */;
import _mod10917 from "module_10917" /* 10917 */;
import _mod10918 from "module_10918" /* 10918 */;
import _mod10919 from "module_10919" /* 10919 */;
import _mod10920 from "module_10920" /* 10920 */;
import _mod10921 from "module_10921" /* 10921 */;
import _mod10922 from "module_10922" /* 10922 */;

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
const module_10917 = fn(_mod10917);
const module_10918 = fn(_mod10918);
const module_10913 = fn(_mod10913);
const module_10919 = fn(_mod10919);
const module_10920 = fn(_mod10920);
const module_10921 = fn(_mod10921);
const module_10922 = fn(_mod10922);

export function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10921.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10922.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10918.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10913.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10917.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10913.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10919.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10920.default(flag);
  push4(_default7);
  return parsers;
}
